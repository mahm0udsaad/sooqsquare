"use server";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllads(searchParams, user) {
  const ads = await prisma.Ad.findMany({
    include: {
      Adimages: true,
      user: true,
      shop: true,
      favoritedBy: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    where: {
      AND: [
        ...(searchParams
          ? Object.keys(searchParams)
              .map((key) => {
                if (
                  key === "carType" &&
                  Array.isArray(searchParams["carType"])
                ) {
                  // Modify the logic to include SUV and Hatchback car types
                  return searchParams["carType"].includes("SUV") ||
                    searchParams["carType"].includes("Hatchback")
                    ? {
                        OR: searchParams["carType"].map((type) => ({
                          carType: {
                            contains: type,
                          },
                        })),
                      }
                    : null;
                }
                if (key === "priceMax" || key === "priceMin") {
                  return {
                    AND: [
                      { price: { lte: searchParams.priceMax } },
                      { price: { gte: searchParams.priceMin } },
                    ],
                  };
                }
                if (key === "yearMax" || key === "yearMin") {
                  return {
                    AND: [
                      { year: { lte: searchParams.yearMax } },
                      { year: { gte: searchParams.yearMin } },
                    ],
                  };
                }
                return { [key]: { contains: searchParams[key] } };
              })
              .filter(Boolean)
          : []),
        { adStatus: "active" },
        {
          country: user?.country
            ? searchParams["country"]
              ? searchParams["country"]
              : user.country
            : searchParams?.country,
        },
      ],
    },
  });
  return ads;
}
export async function getAdById(adId) {
  try {
    const ad = await prisma.Ad.findUnique({
      where: {
        id: parseInt(adId, 10),
      },
      include: {
        Adimages: true,
        user: true,
        shop: true,
      },
    });

    return ad;
  } catch (error) {
    console.error("Error fetching ad by ID:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
export async function addToFavorites(userId, adId) {
  if (!userId) {
    return;
  }
  try {
    // Find the user and ad
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const ad = await prisma.ad.findUnique({ where: { id: adId } });

    if (!user || !ad) {
      console.error("User or Ad not found");
      return;
    }

    // Check if the ad is already in the user's favorites
    const isFavorite = await prisma.favoriteAd.findFirst({
      where: {
        userId: userId,
        adId: adId,
      },
    });

    if (isFavorite) {
      // If it's already a favorite, remove it
      await prisma.favoriteAd.delete({
        where: {
          id: isFavorite.id,
        },
      });

      console.log("Ad removed from favorites successfully");
    } else {
      // If it's not a favorite, add it
      await prisma.favoriteAd.create({
        data: {
          user: { connect: { id: userId } },
          ad: { connect: { id: adId } },
        },
      });
    }

    console.log("Ad added to favorites successfully");
  } catch (error) {
    console.error("Error adding ad to favorites:", error);
  } finally {
    revalidatePath("/favorites");
    revalidatePath("/vehicle");
  }
}
export async function incrementAdViews(adId) {
  try {
    const updatedAd = await prisma.ad.update({
      where: { id: adId },
      data: { views: { increment: 1 } },
    });
    console.log("incremented");
    return updatedAd.views;
  } catch (error) {
    console.error("Error incrementing ad views:", error);
    throw new Error("Error incrementing ad views");
  } finally {
    await prisma.$disconnect();
  }
}
export async function incrementAdClicks(adId) {
  try {
    const updatedAd = await prisma.ad.update({
      where: { id: adId },
      data: { clicks: { increment: 1 } },
    });

    return updatedAd.clicks;
  } catch (error) {
    console.error("Error incrementing ad clicks:", error);
    throw new Error("Error incrementing ad clicks");
  } finally {
    await prisma.$disconnect();
  }
}
export async function deleteAdsWithoutImageOrCountry() {
  try {
    // Find ads without images or country information
    const adsToDelete = await prisma.Ad.findMany({
      where: {
        OR: [
          { Adimages: { none: {} } }, // Ads without images
          { country: { equals: null } }, // Ads without country information
        ],
      },
    });

    // Delete the found ads
    const deletePromises = adsToDelete.map((ad) =>
      prisma.Ad.delete({
        where: { id: ad.id },
      })
    );

    await Promise.all(deletePromises);

    console.log(
      `${adsToDelete.length} ads without images or country information deleted.`
    );
  } catch (error) {
    console.error("Error deleting ads:", error);
    throw error; // Propagate the error
  }
}
export async function addUserFollow(formData) {
  try {
    const userId = formData.get("userId");
    const followedUserId = formData.get("followedUserId");
    const followedShopId = formData.get("followedShopId");

    if (!userId) {
      redirect("/sign-in");
    }

    let whereCondition;

    // Check if follow relationship already exists
    if (followedUserId) {
      whereCondition = {
        followerId_followedUserId: {
          followerId: parseInt(userId),
          followedUserId: parseInt(followedUserId),
        },
      };
    } else if (followedShopId) {
      whereCondition = {
        followerId_followedShopId: {
          followerId: parseInt(userId),
          followedShopId: parseInt(followedShopId),
        },
      };
    }

    const existingFollow = await prisma.follow.findUnique({
      where: whereCondition,
    });

    if (existingFollow) {
      // If follow relationship already exists, delete it (unfollow)
      await prisma.follow.delete({
        where: {
          id: existingFollow.id,
        },
      });
      console.log("unfollow");
      return null; // Return null to indicate unfollowed
    } else {
      // If follow relationship doesn't exist, create it (follow)
      const follow = await prisma.follow.create({
        data: {
          followerId: parseInt(userId),
          followedUserId: followedUserId ? parseInt(followedUserId) : undefined,
          followedShopId: followedShopId ? parseInt(followedShopId) : undefined,
        },
      });
      console.log(follow);

      return follow;
    }
  } catch (error) {
    console.error("Error adding user follow:", error);
    throw error;
  } finally {
    revalidatePath("/profile");
  }
}
export async function checkFollowStatus(
  userId,
  followedUserId,
  followedShopId
) {
  if (!userId) return;
  const follow = await prisma.follow.findFirst({
    where: {
      followerId: parseInt(userId),
      followedUserId: parseInt(followedUserId),
      followedShopId: parseInt(followedShopId),
    },
  });

  return !!follow;
}

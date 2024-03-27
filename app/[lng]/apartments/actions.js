"use server";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export async function createAd(data, userId, shopId) {
  try {
    const ad = shopId
      ? await createAdForShop(data, shopId)
      : await createAdForUser(data, userId, "active");
    return ad;
  } catch (error) {
    console.error("Error creating ad:", error.message);
  }
}
export async function createAdForShop(data, shopId, adStatus) {
  shopId = parseInt(shopId);
  const {
    description,
    country,
    city,
    title,
    category,
    type,
    payment,
    designedFor,
    floorsNum,
    buildingSize,
    landSize,
    isOwner,
    buildingAge,
    BuildingInterface,
    price,
    bedrooms,
    bathrooms,
    amenities,
    images,
  } = data;
  try {
    const shop = await prisma.shop.findUnique({
      where: {
        id: shopId,
      },
    });

    if (!shop) {
      console.error("Shop not found");
      return null;
    }

    const newAdData = {
      description,
      country,
      city,
      isOwner,
      buildingAge,
      BuildingInterface,
      title,
      category,
      type,
      designedFor,
      floorsNum: String(floorsNum),
      buildingSize,
      landSize,
      payment,
      price,
      bedrooms: String(bedrooms),
      bathrooms: String(bathrooms),
      amenities,
      images: {
        create: images.map((image) => ({ url: image })),
      },
      shop: {
        connect: {
          id: shopId,
        },
      },
    };

    const newAd = await prisma.AppartmentAd.create({
      data: newAdData,
      include: {
        shop: true,
      },
    });
    return newAd;
  } catch (error) {
    console.error("Error creating ad:", error);
    return null;
  } finally {
    revalidatePath(`/dashboard`);
  }
}
export async function createAdForUser(data, userId, adStatus) {
  userId = parseInt(userId);
  const {
    description,
    country,
    city,
    title,
    category,
    type,
    payment,
    price,
    bedrooms,
    bathrooms,
    designedFor,
    floorsNum,
    buildingSize,
    landSize,
    isOwner,
    buildingAge,
    BuildingInterface,
    amenities,
    images,
  } = data;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        shop: true,
      },
    });

    if (!user) {
      console.error("User not found");
      return null;
    }

    const newAdData = {
      description,
      country,
      city,
      title,
      category,
      designedFor,
      floorsNum: String(floorsNum),
      buildingSize,
      landSize,
      type,
      isOwner,
      buildingAge,
      BuildingInterface,
      payment,
      price,
      bedrooms: String(bedrooms),
      bathrooms: String(bathrooms),
      amenities,
      images: {
        create: images.map((image) => ({ url: image })),
      },
    };

    newAdData.user = {
      connect: {
        id: userId,
      },
    };

    const newAd = await prisma.AppartmentAd.create({
      data: newAdData,
      include: {
        user: true,
      },
    });
    console.log(newAd);
    return newAd;
  } catch (error) {
    console.error("Error creating ad:", error);
  } finally {
    revalidatePath("/myAds");
  }
}
export async function changeAdStatus(formData) {
  try {
    const adId = formData.get("adId");
    // Fetch the current ad status
    const currentAd = await prisma.AppartmentAd.findUnique({
      where: { id: parseInt(adId) },
      select: { adStatus: true },
    });

    if (!currentAd) {
      throw new Error("Ad not found");
    }

    // Determine the new ad status
    const newStatus = currentAd.adStatus === "active" ? "inActive" : "active";

    // Update the ad status to the new status
    const Ad = await prisma.AppartmentAd.update({
      where: { id: parseInt(adId) },
      data: { adStatus: newStatus },
    });

    console.log("Ad status changed successfully" + Ad.adStatus);
    return Ad;
  } catch (error) {
    console.error("Error changing ad status:", error);
    throw error;
  } finally {
    revalidatePath("/myAds");
    revalidatePath("/shopAds");
    await prisma.$disconnect();
  }
}
export async function deleteAd(formData) {
  try {
    const adId = formData.get("adId");
    // Check if the ad with the given ID exists
    const existingAd = await prisma.AppartmentAd.findUnique({
      where: {
        id: parseInt(adId),
      },
    });

    if (!existingAd) {
      console.error("Ad not found");
      return;
    }

    // Delete the ad and associated images
    await prisma.Image.deleteMany({
      where: {
        adId: parseInt(adId),
      },
    });

    await prisma.AppartmentAd.delete({
      where: {
        id: parseInt(adId),
      },
    });

    return existingAd;
  } catch (error) {
    console.error("Error deleting ad:", error);
    // Handle errors appropriately
  } finally {
    revalidatePath("/myAds");
    revalidatePath("/vehicle");
  }
}
export async function getAllads(searchParams, user) {
  const ads = await prisma.AppartmentAd.findMany({
    include: {
      images: true,
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
                if (key === "priceMax" || key === "priceMin") {
                  return {
                    AND: [
                      { price: { lte: searchParams.priceMax } },
                      { price: { gte: searchParams.priceMin } },
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
    const ad = await prisma.AppartmentAd.findUnique({
      where: {
        id: parseInt(adId, 10),
      },
      include: {
        images: true,
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

export async function incrementAdViews(adId) {
  try {
    const updatedAd = await prisma.AppartmentAd.update({
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
    const updatedAd = await prisma.AppartmentAd.update({
      where: { id: adId },
      data: { clicks: { increment: 1 } },
    });

    return updatedAd.clicks;
  } catch (error) {
    console.error("Error incrementing ad clicks:", error);
    throw new Error("Error incrementing ad clicks");
  } finally {
    revalidatePath("/dashboard/myAds");
    await prisma.$disconnect();
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
export async function updateAd(adId, updatedData) {
  try {
    const existingAd = await prisma.AppartmentAd.findUnique({
      where: {
        id: parseInt(adId),
      },
    });
    updatedData.bathrooms = String(updatedData.bathrooms);
    updatedData.bedrooms = String(updatedData.bedrooms);
    if (!existingAd) {
      console.error("Ad not found");
      // You might want to throw an error or handle this case differently

      return null;
    }

    const updatedAd = await prisma.AppartmentAd.update({
      where: {
        id: parseInt(adId),
      },
      data: updatedData,
    });

    console.log("Ad updated successfully:", updatedAd);
    return updatedAd;
  } catch (error) {
    console.error("Error updating ad:", error);
    // Handle errors appropriately
    throw error;
  } finally {
    revalidatePath("/shopAds");
    revalidatePath("/myAds");
  }
}
export async function addToFavorites(userId, adId) {
  if (!userId) {
    return;
  }
  try {
    // Check if the ad is already in the user's favorites
    const isFavorite = await prisma.favoriteAd.findFirst({
      where: {
        userId: userId,
        appartmentAdId: adId,
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
          AppartmentAd: { connect: { id: adId } },
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

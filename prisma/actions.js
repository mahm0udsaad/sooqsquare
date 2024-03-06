"use server";
import { revalidatePath } from "next/cache";
import prisma from "./client";
import { getServerSession } from "next-auth";
import upload from "@/app/[lng]/(traderDashboard)/dashboard/myShop/action";

// export async function createAd(data, userId, adStatus) {
//   const {
//     EnginCapacity,
//     paintType,
//     payment,
//     price,
//     name,
//     RegionalSpecifications,
//     adImages,
//     brand,
//     category,
//     model,
//     year,
//     carType,
//     carStatus,
//     transmission,
//     fuelType,
//     meterRange,
//     extraFeatures,
//   } = data;

//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         id: userId,
//       },
//       include: {
//         shop: true,
//       },
//     });

//     if (!user) {
//       console.error('User not found');
//       return null;
//     }

//     const newAdData = {
//       EnginCapacity,
//       paintType,
//       payment,
//       price,
//       name,
//       RegionalSpecifications,
//       brand,
//       category,
//       model,
//       year,
//       carType,
//       carStatus,
//       transmission,
//       fuelType,
//       meterRange,
//       extraFeatures,
//       adStatus,
//       Adimages: {
//         create: adImages.map((image) => ({ url: image })),
//       },
//     };

//     // If the user has a shop, associate the ad with that shop
//     if (user.shop) {
//       newAdData.shop = {
//         connect: {
//           id: user.shop.id,
//         },
//       };
//     } else {
//       // If the user doesn't have a shop, connect the ad to the user's profile
//       newAdData.user = {
//         connect: {
//           id: userId,
//         },
//       };
//     }

//     const newAd = await prisma.ad.create({
//       data: newAdData,
//       include: {
//         user: true,
//         shop: true,
//       },
//     });
//     console.log(newAd);
//     return newAd;
//   } catch (error) {
//     console.error('Error creating ad:', error);
//     return null;
//   } finally {
//     revalidatePath('/myAds');
//     revalidatePath('/shopAds');
//     revalidatePath('/vehicle');
//   }
// }
export async function createAdForUser(data, userId, adStatus) {
  userId = parseInt(userId);
  const {
    description,
    city,
    color,
    EnginCapacity,
    country,
    paintType,
    payment,
    price,
    name,
    RegionalSpecifications,
    adImages,
    brand,
    category,
    model,
    year,
    carType,
    carStatus,
    transmission,
    fuelType,
    meterRange,
    extraFeatures,
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
      color,
      description,
      city,
      EnginCapacity,
      country,
      paintType,
      payment,
      price,
      name,
      RegionalSpecifications,
      brand,
      category,
      model,
      year,
      carType,
      carStatus,
      transmission,
      fuelType,
      meterRange,
      extraFeatures,
      adStatus,
      Adimages: {
        create: adImages.map((image) => ({ url: image })),
      },
    };

    newAdData.user = {
      connect: {
        id: userId,
      },
    };

    const newAd = await prisma.ad.create({
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

export async function createAd(formData) {
  try {
    // Extracting data from formData
    const data = {};
    for (const [key, value] of formData) {
      if (key !== "profile" || key !== "adStatus" || key !== "profile")
        data[key] = value;
    }

    // Extracting adImages from formData
    const adImages = data.adImages.split(",");
    data.adImages = adImages;

    // Extracting userId and adStatus if they are part of formData
    let shop = formData.get("shop");
    let user = formData.get("user");
    const ad = user
      ? await createAdForUser(data, user, "active")
      : await createAdForShop(data, shop, "active");
    return ad;
  } catch (error) {
    console.error("Error creating ad:", error);
  }
}

export async function saveAd(formData) {
  try {
    // Extracting data from formData
    const data = {};
    for (const [key, value] of formData) {
      if (key !== "profile" || key !== "adStatus" || key !== "profile")
        data[key] = value;
    }

    // Extracting adImages from formData
    const adImages = data.adImages.split(",");
    data.adImages = adImages;

    // Extracting userId and adStatus if they are part of formData
    const shop = formData.get("shop");
    const user = formData.get("user");
    const ad = user
      ? await createAdForUser(data, user, "inActive")
      : await createAdForShop(data, shop, "inActive");
    return ad;
  } catch (error) {
    console.error("Error creating ad:", error);
  }
}
export async function createAdForShop(data, shopId, adStatus) {
  shopId = parseInt(shopId);
  const {
    color,
    description,
    city,
    country,
    EnginCapacity,
    paintType,
    payment,
    price,
    name,
    RegionalSpecifications,
    adImages,
    brand,
    category,
    model,
    year,
    carType,
    carStatus,
    transmission,
    fuelType,
    meterRange,
    extraFeatures,
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
      color,
      description,
      city,
      country,
      EnginCapacity,
      paintType,
      payment,
      price,
      name,
      RegionalSpecifications,
      brand,
      category,
      model,
      year,
      carType,
      carStatus,
      transmission,
      fuelType,
      meterRange,
      extraFeatures,
      adStatus,
      Adimages: {
        create: adImages.map((image) => ({ url: image })),
      },
      shop: {
        connect: {
          id: shopId,
        },
      },
    };

    const newAd = await prisma.ad.create({
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
export async function createUserIfNotExists(userData) {
  try {
    const { email, image, name } = userData.user;
    const newUser = await prisma.User.create({
      data: {
        email: email,
        username: name,
        image: image,
      },
    });

    console.log("New user created:", newUser);
    return newUser;
  } catch (error) {
    console.error("Error creating user if Not Exists:", error);
    return null;
  }
}
export async function getUserByUseremail(email) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        image: true,
        username: true,
        phoneNumber: true,
        shop: true,
      },
    });

    return user;
  } catch (error) {
    throw new Error(`Unable to fetch user: ${error.message}`);
  }
}
export async function updateUserPhoneNumber(newPhoneNumber, email) {
  try {
    const user = await prisma.User.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }
    const updatedUser = await prisma.User.update({
      where: {
        email: email,
      },
      data: {
        phoneNumber: newPhoneNumber,
      },
    });
    console.log("updated Phone Numbem :" + updatedUser.phoneNumber);
    return updatedUser;
  } catch (error) {
    console.error(`Failed to update user's phone number: ${error.message}`);
  }
}
export async function updateUserStatus(userId, status) {
  try {
    const update = await prisma.user.update({
      where: { id: userId },
      data: { status },
    });
    console.log("updated");
    return update;
  } catch (error) {
    console.error("Error updating user status:", error);
  } finally {
    revalidatePath("/chat");
  }
}

export async function getUserByEmail(email) {
  if (!email) return;
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        chats: {
          select: {
            id: true,
            users: true,
            shops: true,
          },
        },
        ads: {
          select: {
            id: true,
            createdAt: true,
            Adimages: true,
            description: true,
            brand: true,
            EnginCapacity: true,
            category: true,
            carType: true,
            model: true,
            year: true,
            carStatus: true,
            transmission: true,
            fuelType: true,
            meterRange: true,
            paintType: true,
            payment: true,
            price: true,
            name: true,
            RegionalSpecifications: true,
            country: true,
            city: true,
            extraFeatures: true,
            adStatus: true,
            views: true,
            clicks: true,
            favoritedBy: true,
          },
          orderBy: {
            createdAt: "desc", // Order by createdAt in descending order (newest first)
          },
        },
        shop: {
          include: {
            ads: {
              select: {
                id: true,
                createdAt: true,
                Adimages: true,
                description: true,
                brand: true,
                EnginCapacity: true,
                category: true,
                carType: true,
                model: true,
                year: true,
                carStatus: true,
                transmission: true,
                fuelType: true,
                meterRange: true,
                paintType: true,
                payment: true,
                price: true,
                name: true,
                RegionalSpecifications: true,
                country: true,
                city: true,
                extraFeatures: true,
                adStatus: true,
                views: true,
                clicks: true,
                favoritedBy: true,
              },
              orderBy: {
                createdAt: "desc", // Order by createdAt in descending order (newest first)
              },
            },
            chats: {
              select: {
                id: true,
                users: true,
                shops: true,
                messages: true,
              },
            },
          },
        },
        company: true,
        favoriteAds: true,
        subscriptions: true,
      },
    });

    return existingUser;
  } catch (error) {
    console.log("Error fetching user:", error);
  } finally {
    prisma.$disconnect();
  }
}
export async function getUserShopsByEmail() {
  try {
    const logedUser = await getServerSession();

    if (!logedUser) {
      console.error("User not logged in.");
      return null;
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email: logedUser.user.email,
      },
      include: {
        shop: true,
      },
    });

    console.log(existingUser);
    return existingUser;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
export async function getUserIdByEmail(email) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      console.error("User not found with email:", email);
      return null;
    }

    const userId = user.id;
    console.log(`User ID for email ${email}: ${userId}`);
    return userId;
  } catch (error) {
    console.error("Error getting user ID by email:", error);
  } finally {
    // Close the Prisma client connection
    await prisma.$disconnect();
  }
}
export async function updateUserCountry(userId, newCountry) {
  try {
    if (!parseInt(userId)) {
      return;
    }
    // Find the user by ID
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      // Handle user not found
      return { success: false, message: "User not found." };
    }

    // Update the user's country
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { country: newCountry },
    });
    // Return success
    return { success: true, message: "User country updated successfully." };
  } catch (error) {
    // Handle errors
    console.error("Error updating user country:", error);
    return { success: false, message: "Internal server error." };
  }
}
export async function replaceAdImage(adId, existingImageId, newImage) {
  try {
    // Upload the new image
    const formData = new FormData();
    formData.append("file", newImage);
    const result = await upload(formData);

    if (!result || !result.adImage) {
      throw new Error("Failed to upload new image");
    }

    const newImageUrl = result.adImage;

    // Update the ad with the new image URL
    const updatedAd = await updateAdImage(adId, {
      Adimages: {
        update: [
          { where: { url: existingImageUrl }, data: { url: newImageUrl } },
        ],
      },
    });

    // Handle the updated ad as needed
    console.log("Updated Ad:", updatedAd);

    return newImageUrl;
  } catch (error) {
    console.error("Error replacing ad image:", error);
    throw error;
  } finally {
    revalidatePath("/dashboard");
  }
}
export async function getUserFollowingByEmail(email) {
  if (!email) return;
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        following: {
          include: {
            followedUser: {
              select: {
                ads: {
                  select: {
                    id: true,
                    Adimages: true,
                    name: true,
                    description: true,
                    user: {
                      select: {
                        image: true,
                      },
                    },
                  },
                },
              },
            },
            followedShop: {
              select: {
                ads: {
                  select: {
                    id: true,
                    Adimages: true,
                    name: true,
                    description: true,
                    shop: {
                      select: {
                        shopImage: true,
                      },
                    },
                  },
                },
              },
            }, // Include the ads from the followed shop
          },
        },
      },
    });

    const ads = existingUser.following.flatMap((follow) => {
      if (follow.followedUser) {
        return follow.followedUser.ads;
      } else if (follow.followedShop) {
        return follow.followedShop.ads;
      } else {
        return [];
      }
    });

    return ads;
  } catch (error) {
    console.log("Error fetching user:", error);
  } finally {
    prisma.$disconnect();
  }
}
export async function addRating(ownerId, ratedById, ratingValue) {
  try {
    // Check if a rating already exists for the specified owner and ratedBy user
    const existingRating = await prisma.rating.findFirst({
      where: {
        userId: parseInt(ownerId),
        ratedUserId: parseInt(ratedById),
      },
    });

    if (existingRating) {
      // Update the existing rating
      const updatedRating = await prisma.rating.update({
        where: {
          id: existingRating.id,
        },
        data: {
          rating: ratingValue,
        },
      });

      return updatedRating;
    } else {
      // Create a new rating entry
      const newRating = await prisma.rating.create({
        data: {
          userId: parseInt(ownerId), // ID of the user being rated (owner)
          ratedUserId: parseInt(ratedById), // ID of the user who provided the rating (ratedBy)
          rating: ratingValue, // The actual rating value
        },
      });

      return newRating;
    }
  } catch (error) {
    // Handle errors
    console.error("Error adding/updating rating:", error.message);
    throw error;
  }
}
export async function getRating(ownerId, ratedById) {
  try {
    // Find the rating entry for the specified owner and ratedBy user
    const rating = await prisma.rating.findFirst({
      where: {
        userId: parseInt(ownerId),
        ratedUserId: parseInt(ratedById),
      },
    });

    return rating ? rating.rating : null; // Return the rating value or null if not found
  } catch (error) {
    // Handle errors
    console.error("Error getting rating:", error.message);
    throw error;
  }
}

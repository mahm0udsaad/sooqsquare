"use server"
import { revalidatePath } from "next/cache";
import prisma from "./client";
import { getServerSession } from "next-auth";

export async function createAd(data, userId, adStatus) {
  const {
    EnginCapacity,
    paintType,
    payment,
    price,
    name,
    RegionalSpecifications,
    location,
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
      console.error('User not found');
      return null;
    }

    const newAdData = {
      EnginCapacity,
      paintType,
      payment,
      price,
      name,
      RegionalSpecifications,
      location,
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

    // If the user has a shop, associate the ad with that shop
    if (user.shop) {
      newAdData.shop = {
        connect: {
          id: user.shop.id,
        },
      };
    } else {
      // If the user doesn't have a shop, connect the ad to the user's profile
      newAdData.user = {
        connect: {
          id: userId,
        },
      };
    }

    const newAd = await prisma.ad.create({
      data: newAdData,
      include: {
        user: true,
        shop: true,
      },
    });
    console.log(newAd);
    return newAd;
  } catch (error) {
    console.error('Error creating ad:', error);
    return null;
  } finally {
    revalidatePath('/myAds');
    revalidatePath('/shopAds');
    revalidatePath('/vehicle');
  }
}
export async function createAdForShop(data, shopId, adStatus) {
  const {
    EnginCapacity,
    paintType,
    payment,
    price,
    name,
    RegionalSpecifications,
    location,
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
      console.error('Shop not found');
      return null;
    }

    const newAdData = {
      EnginCapacity,
      paintType,
      payment,
      price,
      name,
      RegionalSpecifications,
      location,
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
    console.error('Error creating ad:', error);
    return null;
  } finally {
    revalidatePath(`/dashboard`);
  }
}
export  async function createUserIfNotExists(userData) {
  try {
      const {email , image , name} = userData.user
      const newUser = await prisma.User.create({
        data: {
          email:email,
          username:name,
          image:image,
        },
      });

      console.log('New user created:', newUser);
      return newUser;
  } catch (error) {
    console.error('Error creating user if Not Exists:', error);
    return null;
  }
}
export async function getUserByUseremail(email) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    throw new Error(`Unable to fetch user: ${error.message}`);
  }
}
export async function updateUserPhoneNumber(newPhoneNumber , email) {
  try {
    const user = await prisma.User.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }
    const updatedUser = await prisma.User.update({
      where: {
        email: email,
      },
      data: {
        phoneNumber: newPhoneNumber,
      },
    });
    console.log("updated Phone Numbem :"+ updatedUser.phoneNumber);
    return updatedUser;
  } catch (error) {
    console.error(`Failed to update user's phone number: ${error.message}`);
  }
}
export async function getUserByEmail(email) {
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
            location: true,
            extraFeatures: true,
            adStatus: true,
            views: true,
            clicks: true,
          },
          orderBy: {
            createdAt: 'desc', // Order by createdAt in descending order (newest first)
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
                location: true,
                extraFeatures: true,
                adStatus: true,
                views: true,
                clicks: true,
              },
              orderBy: {
                createdAt: 'desc', // Order by createdAt in descending order (newest first)
              },
            },
          },
        },
        favoriteAds:true,
      },
    });

    return existingUser;
  } catch (error) {
    console.log("Error fetching user:", error);
    return null;
  }finally{
    prisma.$disconnect()
  }
}
export async function getUserShopsByEmail() {
  try {
    const logedUser = await getServerSession();

    if (!logedUser) {
      console.error('User not logged in.');
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
      console.error('User not found with email:', email);
      return null;
    }

    const userId = user.id;
    console.log(`User ID for email ${email}: ${userId}`);
    return userId;
  } catch (error) {
    console.error('Error getting user ID by email:', error);
  } finally {
    // Close the Prisma client connection
    await prisma.$disconnect();
  }
}
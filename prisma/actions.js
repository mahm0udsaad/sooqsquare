"use server"

import { revalidatePath } from "next/cache";
import prisma from "./client";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export const redirectFunc = async () => {
  try {
    const loggedInUser = await getServerSession();
    const user = await getUserByEmail(loggedInUser?.user.email);

    if (!user) {
      // Assuming redirect is a function that handles redirection in your application
      redirect('/sign-in');
    } 
  } catch (error) {
    console.error('An error occurred in redirectFunc:', error);
  }finally{
    
    if (!user) {
      // Assuming redirect is a function that handles redirection in your application
      redirect('/sign-in');
    } 
  }
};


export async function createAd(data , userId) {
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
    const newAd = await prisma.Ad.create({
      data: {
        userId,
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
        Adimages: {
          create: adImages.map(image => ({ url: image })),
        },
      },
    });

    revalidatePath('/myAds');
  } catch (error) {
    return null ;
    console.error('Error creating ad:', error);
  } finally{
    revalidatePath('/myAds')
    redirect('/myAds')
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

export async function getUserByUserId(userId) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        userId,
      },
      include: {
        ads: true,
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
    const existingUser = await prisma.User.findUnique({
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
      },
    });

    return existingUser;
  } catch (error) {
    // Handle any potential errors here
    console.error("Error fetching user:", error);
    return null;
  }
}
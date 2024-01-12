"use server"

import { revalidatePath } from "next/cache";
import prisma from "./client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


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
        Adimages: {
          create: adImages.map(image => ({ url: image })),
        },
      },
    });

    revalidatePath('/myAds');
  } catch (error) {
    console.error('Error creating ad:', error);
  } finally{
    redirect('/myAds')
  }
}

export  async function createUserIfNotExists(userData) {
  try {
    if(!userData?.id){
      const {email , image , name} = userData.user
      const newUser = await prisma.User.create({
        data: {
          username:name,
          email:email,
          image:image,
        },
      });
      console.log('New user created:', newUser);
      return { success: true, message: 'New user created.' };
    }
    const existingUser = await prisma.User.findUnique({
      where: {
        id:userData.id,
      },
    });

    if (!existingUser) {
      const newUser = await prisma.User.create({
        data: {
          ...userData,
        },
      });

      console.log('New user created:', newUser);
      return { success: true, message: 'New user created.' };
    } else {
      return { success: false, message: 'User already exists.' };
    }
  } catch (error) {
    console.error('Error creating user:', error);
    return { success: false, message: 'Error creating user.' };
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
    });

    return existingUser || null;
  } catch (error) {
    // Handle any potential errors here
    console.error("Error fetching user:", error);
    return null;
  }
}
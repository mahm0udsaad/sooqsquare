"use server"

import { revalidatePath } from "next/cache";
import prisma from "./client";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export async function createAd(data, userId) {
  const user = await currentUser();
  const userData = {
    userId,
    username: user.firstName,
    email: user.emailAddresses[0].emailAddress,
  };

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
  } = data; // Destructure all variables individually

  try {
    const newUser = await createUserIfNotExists(userData);

    console.log('adImages:', adImages); // Log the adImages array

    const newAd = await prisma.Ad.create({
      data: {
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
        user: { connect: { userId } },
        adImages: { set: adImages }, // Use set to assign adImages
      },
    });

    revalidatePath('/myAds');
  } catch (error) {
    console.error('Error creating ad:', error);
  } finally {
    await prisma.$disconnect();
  }
}


  export  async function createUserIfNotExists(userData) {
    try {
      const existingUser = await prisma.User.findUnique({
        where: {
          userId:userData.userId,
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
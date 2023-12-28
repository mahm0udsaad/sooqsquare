"use server"

import { revalidatePath } from "next/cache";
import prisma from "./client";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export async function createAd(data , userId) {
  const user = await currentUser()
  const userData = {
    userId,
    username:user.firstName,
    email:user.emailAddresses[0].emailAddress
  }
  try {
      const newUser = await createUserIfNotExists(userData)
      const newAd = await prisma.Ad.create({
        data: {
          ...data, 
          user: { connect: { userId } }, 
        },
      });
      revalidatePath('/myAds')
      
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
          ads: true, // Include the user's ads if needed
        },
      });

      return user;
    } catch (error) {
      throw new Error(`Unable to fetch user: ${error.message}`);
    }
  }
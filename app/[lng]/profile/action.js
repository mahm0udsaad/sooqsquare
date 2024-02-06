"use server"
import prisma from "@/prisma/client"

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
}
export async function getUserById(userId) {
  try {
    userId = parseInt(userId)
    const user = await prisma.User.findUnique({
      where: { id: userId },
      include: {
          ads: {
            select: {
              id: true,
              Adimages: true,
              createdAt: true,
              city: true,
              brand: true,
              model: true,
              price: true,
            },
          },
          shop:  {
            include: {
            ads:{
              select: {
              id: true,
              createdAt: true,
              Adimages:true,
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
            },
          }
            }
          }
        },
    });

    if (!user) {
      throw new Error('user not found');
    }

    return user;
  } catch (error) {
    console.error(`Error fetching user by adId ${userId}:`, error);
    throw new Error('Failed to fetch user by userId');
  }
}
  

"use server"
import prisma from "../../../prisma/client";

export async function getAdsByUserId(userId) {
    try {
      const ads = await prisma.Ad.findMany({
        where: {
          userId: userId,
        },
        include: {
          Adimages: true, 
          user: true,    
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
  
      return ads;
    } catch (error) {
      console.error('Error fetching ads by user:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
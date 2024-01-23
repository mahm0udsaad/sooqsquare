"use server"
import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/client";

export async function getAdsByUserId(userId) {
  userId = parseInt(userId)
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

export async function updateAd(adId, updatedData) {
  try {
    adId = parseInt(adId)
    const existingAd = await prisma.Ad.findUnique({
      where: {
        id: adId,
      },
    });

    if (!existingAd) {
      console.error('Ad not found');
      // You might want to throw an error or handle this case differently
      return null;
    }

    const updatedAd = await prisma.Ad.update({
      where: {
        id: adId,
      },
      data: updatedData,
    });

    console.log('Ad updated successfully:', updatedAd);
    return updatedAd;
  } catch (error) {
    console.error('Error updating ad:', error);
    // Handle errors appropriately
    throw error;
  }
}
export async function deleteAd(adId) {
  adId = parseInt(adId)
  try {
    // Check if the ad with the given ID exists
    const existingAd = await prisma.Ad.findUnique({
      where: {
        id: adId,
      },
    });

    if (!existingAd) {
      console.error('Ad not found');
      // You might want to throw an error or handle this case differently
      return;
    }

    // Delete the ad and associated images
    await prisma.Image.deleteMany({
      where: {
        adId:adId,
      },
    });

    await prisma.Ad.delete({
      where: {
        id: adId,
      },
    });

    return existingAd;
  } catch (error) {
    console.error('Error deleting ad:', error);
    // Handle errors appropriately
  }finally{
    revalidatePath('/myAds')
    revalidatePath('/vehicle')
  }
}

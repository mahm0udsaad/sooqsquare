"use server"
import prisma from "@/prisma/client"
import { revalidatePath } from "next/cache";

export async function getAllads(searchParams){
    const ads = await prisma.Ad.findMany({
        include: {
          Adimages: true,
          user: true,
          shop: true,
          favoritedBy:true
        },
        orderBy: {
          createdAt: 'desc',
        },
        where: {
          AND: [
            // Existing search parameters...
            ...(searchParams
              ? Object.keys(searchParams).map((key) => {
                  if (key === "carType" && Array.isArray(searchParams["carType"])) {
                    return searchParams["carType"].map((type) => ({
                      carType: {
                        contains: type,
                      },
                    }));
                  }
                  return { [key]: { contains: searchParams[key] } };
                }).flat()
              : []),
            // Condition for active ads
            { adStatus: "active" },
          ],
        },
      });
      return ads
}
export async function getAdById(adId) {
    try {
      const ad = await prisma.Ad.findUnique({
        where: {
          id: parseInt(adId, 10),
        },
        include: {
          Adimages: true,
          user: true,
          shop: true,
        },
      });
  
      return ad;
    } catch (error) {
      console.error('Error fetching ad by ID:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
}
export async function addToFavorites(userId, adId) {
  try {
    // Find the user and ad
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const ad = await prisma.ad.findUnique({ where: { id: adId } });

    if (!user || !ad) {
      console.error('User or Ad not found');
      return;
    }

    // Check if the ad is already in the user's favorites
    const isFavorite = await prisma.favoriteAd.findFirst({
      where: {
        userId: userId,
        adId: adId,
      },
    });

    if (isFavorite) {
      // If it's already a favorite, remove it
      await prisma.favoriteAd.delete({
        where: {
          id: isFavorite.id,
        },
      });

      console.log('Ad removed from favorites successfully');
    } else {
      // If it's not a favorite, add it
      await prisma.favoriteAd.create({
        data: {
          user: { connect: { id: userId } },
          ad: { connect: { id: adId } },
        },
      });
    }

    console.log('Ad added to favorites successfully');
  } catch (error) {
    console.error('Error adding ad to favorites:', error);
  } finally {
    revalidatePath('/favorites')
    revalidatePath('/vehicle')
  }
}

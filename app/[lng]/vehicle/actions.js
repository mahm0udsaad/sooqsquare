"use server"
import prisma from "@/prisma/client"

export async function getAllads(searchParams){
    const ads = await prisma.Ad.findMany({
        include: {
          Adimages: true,
          user: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        where: {
          AND: searchParams && Object.keys(searchParams).map((key) => {
            if (key === "carType" && Array.isArray(searchParams["carType"])) {
              return searchParams["carType"].map((type) => ({
                carType: {
                  contains: type,
                },
              }));
            }
            return { [key]: { contains: searchParams[key] } };
          }).flat(),
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
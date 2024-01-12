"use server"


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
      });
  
      return ads;
    } catch (error) {
      console.error('Error fetching ads by user:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
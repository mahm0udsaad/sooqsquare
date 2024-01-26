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
      return null
      console.error('Error fetching ads by user:', error);
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
  }finally{
    revalidatePath('/shopAds')
    revalidatePath('/myAds')
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

export async function createShop(userId, shopName, location,  shopImage) {
  try {
    // Use Prisma to create a new shop in the database
    const newShop = await prisma.Shop.create({
      data: {
        user: { connect: { id: userId } }, 
        shopName,
        location,
        shopImage,
      },
    });
    
    await transferUserAdsToShop(userId)
    console.log('Shop created:', newShop);

    return newShop;
  } catch (error) {
    console.error('Error creating shop:', error);
    throw error; // Rethrow the error for handling at a higher level
  } finally {
    // Close the Prisma client connection
    await prisma.$disconnect();
  }
}
export async function deleteAllShops() {
  try {
    // Use Prisma to delete all shops in the database
    const deletedShops = await prisma.shop.deleteMany();

    // Handle the result
    console.log('Deleted Shops:', deletedShops);

    // ... other logic
  } catch (error) {
    console.error('Error deleting shops:', error);
    // Handle the error
  } finally {
    // Close the Prisma client connection when done
    await prisma.$disconnect();
  }
}
export async function addBgImageToShop(shopId, bgImage) {
  try {
    // Use Prisma to update the shop's bgImage
    const updatedShop = await prisma.shop.update({
      where: {
        id: shopId,
      },
      data: {
        bgImage: bgImage,
      },
    });

    return updatedShop;
  } catch (error) {
    // Handle any potential errors here
    console.error("Error adding bgImage to shop:", error);
    return null;
  } finally {
    // Close the Prisma client connection when done
    revalidatePath('/myShop')
    await prisma.$disconnect();
  }
}
export async function addImageToShop(shopId, shopImage) {
  try {
    // Use Prisma to update the shop's bgImage
    const updatedShop = await prisma.shop.update({
      where: {
        id: shopId,
      },
      data: {
        shopImage: shopImage,
      },
    });

    return updatedShop;
  } catch (error) {
    // Handle any potential errors here
    console.error("Error adding bgImage to shop:", error);
    return null;
  } finally {
    // Close the Prisma client connection when done
    revalidatePath('/myShop')
    await prisma.$disconnect();
  }
}

export async function transferUserAdsToShop(userId) {
  try {
    // Retrieve the user with their ads
    const userWithAds = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        ads: true,
        shop: true,
      },
    });

    if (!userWithAds) {
      console.error('User not found');
      return;
    }

    // If the user has a shop, associate the ads with the shop
    if (userWithAds.shop) {
      const adsToTransfer = userWithAds.ads;

      if (adsToTransfer.length > 0) {
        // Transfer ads to the shop
        await prisma.shop.update({
          where: { id: userWithAds.shop.id },
          data: {
            ads: {
              connect: adsToTransfer.map((ad) => ({ id: ad.id })),
            },
          },
        });

        // Remove ads from the user
        await prisma.user.update({
          where: { id: userId },
          data: {
            ads: {
              disconnect: adsToTransfer.map((ad) => ({ id: ad.id })),
            },
          },
        });

        console.log('Ads transferred successfully.');
      } else {
        console.log('No ads to transfer.');
      }
    } else {
      console.error('User does not have a shop.');
    }
  } catch (error) {
    console.error('Error transferring ads:', error);
  } finally {
    revalidatePath('/myShopView')
    revalidatePath('/vehicle')
  }
}

export async function updateShopInfo(shopId, name, description) {
  try {
    // Check if the shop exists
    const existingShop = await prisma.shop.findUnique({
      where: {
        id: shopId,
      },
    });

    if (!existingShop) {
      console.error('Shop not found');
      return null;
    }

    // Update shop information
    const updatedShop = await prisma.shop.update({
      where: {
        id: shopId,
      },
      data: {
        shopName: name,
        description: description,
      },
    });

    console.log('Shop information updated successfully:', updatedShop);

    return updatedShop;
  } catch (error) {
    console.error('Error updating shop information:', error);
    return null;
  } finally {
    // Close the Prisma connection
    revalidatePath('/myShop')
    revalidatePath('/myShopView')
    await prisma.$disconnect();
  }
}
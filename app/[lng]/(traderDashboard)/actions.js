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
export async function createShop(userId, data) {
  let newShop;
  try {
     newShop = await prisma.Shop.create({
      data: {
        user: { connect: { id: userId } }, 
          shopImage: data.shopImage,
          shopName: data.shopName,
          city: data.city,
          country: data.country,
          description: data.description,
      },
    });
    
    return newShop;
  } catch (error) {
    console.error('Error creating shop:', error);
  } finally {
    revalidatePath('/dashboard')
  }
}
export async function getAllShops() {
  try {
      const shops = await prisma.shop.findMany();
      return shops;
  } catch (error) {
      console.error('Error fetching all shops:', error);
      throw error; // Rethrow the error for handling at a higher level if needed
  }
}
export async function getShopById(shopId) {
  try {
    const parsedShopId = parseInt(shopId, 10);

    if (isNaN(parsedShopId)) {
      throw new Error('Invalid shopId');
    }

    const shop = await prisma.shop.findUnique({
      where: {
        id: parsedShopId,
      },
      include: {
        ads: {
          select: {
            id: true,
            createdAt: true,
            Adimages: true,
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
            location: true,
            extraFeatures: true,
            adStatus: true,
            views: true,
            clicks: true,
          },
          orderBy: {
            createdAt: 'desc', // Order by createdAt in descending order (newest first)
          },
        },
      },
    });

    return shop;
  } catch (error) {
    console.error('Error in getShopById:', error);
  }
}
export async function deleteShop(shopId, userId) {
  try {
    const shop = await prisma.shop.findUnique({
      where: {
        id: shopId,
      },
      include: {
        ads: {
          include: {
            Adimages: true,
          },
        },
      },
    });

    if (!shop) {
      console.error('Shop not found');
      return null;
    }

    // Delete the shop
    await prisma.shop.delete({
      where: {
        id: shopId,
      },
      include: {
        ads: {
          include: {
            Adimages: true,
          },
        },
      },
    });

    return shopId;
  } catch (error) {
    console.error('Error deleting shop:', error);
    throw new Error('Error deleting shop');
  }finally{
    revalidatePath('/dashboard');
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
export async function updateShopInfo(shopId, data) {
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

    // Update shop information using the entire data object
    const updatedShop = await prisma.shop.update({
      where: {
        id: shopId,
      },
      data: {
        shopName: data.shopName,
        city: data.city,
        country: data.country,
        description: data.description,
        facebookLink: data.facebookLink,
        twitterLink: data.twitterLink,
        instagramLink: data.instagramLink,
        tiktokLink: data.tiktokLink,
        snapchatLink: data.snapchatLink,
        phoneNumber1: data.phoneNumber1,
        phoneNumber2: data.phoneNumber2,
      },
    });

    console.log('Shop information updated successfully:', updatedShop);

    return updatedShop;
  } catch (error) {
    console.error('Error updating shop information:', error);
    return null;
  } finally {
    // Close the Prisma connection
    revalidatePath(`/myShop/${shopId}`);
    await prisma.$disconnect();
  }
}
export async function changeAdStatus(adId , adStatus) {
  try {
    const updatedAd = await prisma.ad.update({
      where: { id: adId },
      data: { adStatus: adStatus },
    });

    return updatedAd;
  } catch (error) {
    console.error(`Error deactivating ad with adId ${adId}:`, error);
    throw new Error('Failed to deactivate ad');
  }finally{
    revalidatePath('/myAds')
    revalidatePath('/vehicle')
    revalidatePath('/shopAds')
  }
}
export async function getFavoriteAdsByUserId(userId) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        favoriteAds: {
          include: {
            ad: {
              select: {
                id: true,
                createdAt: true,
                Adimages: true,
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
                location: true,
                extraFeatures: true,
                user:true,
                shop:true
              },
            },
          },
        },
      },
    });

    if (!user) {
      console.error('User not found');
      return;
    }

    const favoriteAds = user.favoriteAds.map((fav) => fav.ad);

    console.log('Favorite Ads for User ID', userId, ':', favoriteAds);
    return favoriteAds;
  } catch (error) {
    console.error('Error getting favorite ads:', error);
  } finally {
    // Close the Prisma client connection
    await prisma.$disconnect();
  }
}
export async function updateAdImage(adId, dataToUpdate) {
  try {
    const updatedAd = await prisma.ad.update({
      where: { id: adId },
      data: dataToUpdate,
    });

    return updatedAd;
  } catch (error) {
    console.error('Error updating ad:', error);
    throw error;
  }finally{
    revalidatePath('/myAds')
  }
}
export async function deleteImage(imageUrl) {
  try {
    const deletedImage = await prisma.image.delete({
      where: { id: imageUrl.id },
    });

    return deletedImage;
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
}
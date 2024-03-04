"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/prisma/client";
import webPush from "web-push"; // Import the web-push library for sending push notifications

// Function to add subscription to a user
export async function addSubscriptionToUser(userId, subscriptionData) {
  console.log(userId);
  try {
    // Use Prisma to find the user by userId
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Create a new subscription record associated with the user
    const newSubscription = await prisma.subscription.create({
      data: {
        endpoint: subscriptionData.endpoint,
        p256dh: subscriptionData.keys.p256dh,
        auth: subscriptionData.keys.auth,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    console.log("Subscription added to user:", newSubscription);
    return newSubscription;
  } catch (error) {
    console.error("Error adding subscription to user:", error);
    throw error;
  }
}
export async function createShopMessage(
  content,
  senderId,
  receiverId,
  chatId,
  isShop
) {
  try {
    const message = await prisma.message.create({
      data: {
        content,
        // Determine whether the sender is a shop or a user
        ...(isShop
          ? { senderShop: { connect: { id: senderId } } }
          : { sender: { connect: { id: senderId } } }),
        // Determine whether the receiver is a shop or a user
        ...(isShop
          ? { receiver: { connect: { id: receiverId } } }
          : { receiverShop: { connect: { id: receiverId } } }),
        chat: {
          connect: { id: chatId },
        },
      },
      include: {
        sender: true,
        senderShop: {
          select: {
            shopImage: true,
            id: true,
            userId: true,
          },
        },
        receiverShop: {
          select: {
            shopImage: true,
            id: true,
            userId: true,
          },
        },
      },
    });

    // You can add additional logic here, such as sending notifications to the receiver

    return message;
  } catch (error) {
    console.error("Error creating message:", error);
    throw error;
  } finally {
    revalidatePath(`/chat/${chatId}`); // Close the Prisma client connection
  }
}

export async function createMessage(content, senderEmail, receiver, chatId) {
  try {
    const currentReceiver = await prisma.user.findUnique({
      where: { email: receiver.email },
      include: { subscriptions: true },
    });

    const message = await prisma.message.create({
      data: {
        content,
        sender: {
          connect: { email: senderEmail },
        },
        receiver: {
          connect: { email: receiver.email },
        },
        chat: {
          connect: { id: chatId },
        },
      },
      include: {
        sender: true,
      },
    });

    // Send push notification to the receiver if they have a subscription
    if (
      currentReceiver.subscriptions &&
      currentReceiver.subscriptions.length > 0
    ) {
      const originalSubscription = {
        endpoint:
          currentReceiver.subscriptions[
            currentReceiver.subscriptions.length - 1
          ].endpoint,
        keys: {
          p256dh:
            currentReceiver.subscriptions[
              currentReceiver.subscriptions.length - 1
            ].p256dh,
          auth: currentReceiver.subscriptions[
            currentReceiver.subscriptions.length - 1
          ].auth,
        },
      };
      sendPushNotification(originalSubscription, message, receiver.email);
    }
    return message;
  } catch (error) {
    console.error("Error creating message:", error);
    throw error;
  } finally {
    revalidatePath(`/chat/${chatId}`); // Close the Prisma client connection
  }
}

const vapidKeys = {
  publicKey:
    "BK3k4umk71d0mq9x1RHS9FOGLc6zHt8fFVnPg2dKxYpZwLURqgazKGX4sx1T8INcWd3onjw1cve6cTseW7ojCXo",
  privateKey: "8bw9PpNnTxHagt6mpEAbZH4HRPDd0iPo2M3mYuc85Sc",
};

const sendPushNotification = async (subscription, message, receiverEmail) => {
  const pushPayload = {
    title: "New Message",
    body: `${message.sender.username}: ${message.content}`,
    icon: "",
    data: { chatId: message.chatId, messageId: message.id },
  };

  try {
    const notf = await webPush.sendNotification(
      subscription,
      JSON.stringify(pushPayload),
      {
        TTL: 60,
        vapidDetails: { ...vapidKeys, subject: `mailto:${receiverEmail}` },
      }
    );
    console.log(notf.statusCode);
  } catch (error) {
    console.error("Error sending push notification:", error);
  }
};

export async function getOrCreateChat(user1Id, user2Id, shopId) {
  let newChat;

  const parsedUser1Id = parseInt(user1Id);
  const parsedUser2Id = user2Id ? parseInt(user2Id) : null;
  const parsedShopId = shopId ? parseInt(shopId) : null;

  try {
    if (!parsedUser2Id && parsedShopId) {
      // If user2Id is null and shopId is provided, create a chat with the user and shop
      const existingShopChat = await prisma.chat.findFirst({
        where: {
          AND: [
            { users: { some: { id: parsedUser1Id } } },
            { shopId: parsedShopId },
          ],
        },
        include: {
          messages: {
            include: {
              sender: true,
              receiver: true,
            },
          },
          shop: {
            select: {
              id: true,
              shopImage: true,
              shopName: true,
              userId: true,
            },
          },
        },
      });

      if (existingShopChat) {
        // Chat with the shop already exists
        newChat = existingShopChat;
      } else {
        // Create a new chat with the user and shop
        newChat = await prisma.chat.create({
          data: {
            users: { connect: [{ id: parsedUser1Id }] },
            shop: { connect: { id: parsedShopId } },
          },
          include: {
            messages: {
              include: {
                sender: true,
                receiver: true,
              },
            },
            select: {
              id: true,
              shopImage: true,
              shopName: true,
              userId: true,
            },
          },
        });

        console.log("New chat created with id: " + newChat.id);
      }
    } else {
      // Find or create chat between two users
      const existingChat = await prisma.chat.findFirst({
        where: {
          AND: [
            { users: { some: { id: parsedUser1Id } } },
            { users: { some: { id: parsedUser2Id } } },
          ],
        },
        include: {
          messages: {
            include: {
              sender: true,
              receiver: true,
            },
          },
          select: {
            id: true,
            shopImage: true,
            shopName: true,
            userId: true,
          },
        },
      });

      if (existingChat) {
        // Chat already exists
        newChat = existingChat;
      } else {
        // Create a new chat with the two users
        newChat = await prisma.chat.create({
          data: {
            users: { connect: [{ id: parsedUser1Id }, { id: parsedUser2Id }] },
          },
          include: {
            messages: {
              include: {
                sender: true,
                receiver: true,
              },
            },
            select: {
              id: true,
              shopImage: true,
              shopName: true,
              userId: true,
            },
          },
        });

        console.log("New chat created with id: " + newChat.id);
      }
    }

    return newChat;
  } catch (error) {
    console.error("Error getting or creating chat:", error);
    return null;
  } finally {
    if (newChat) {
      // Assuming redirect is a function you have defined elsewhere
      redirect(`/chat/${newChat.id}?chat=${newChat.id}`);
    }
    await prisma.$disconnect();
  }
}

export const fetchMessagesFromDatabase = async (chat) => {
  try {
    const fetchedMessages = await prisma.message.findMany({
      where: { chatId: chat.id },
      include: {
        sender: true, // Include sender information in the response
      },
      orderBy: { createdAt: "asc" }, // Adjust the order as needed
    });
    return fetchedMessages;
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};
export async function getChatById(chatId) {
  try {
    // Parse chat id to an integer
    const parsedChatId = parseInt(chatId);

    // Find the chat by its id
    const chat = await prisma.chat.findUnique({
      where: { id: parsedChatId },
      include: {
        users: true,
        messages: {
          include: {
            senderShop: true,
            receiverShop: true,
            sender: {
              select: {
                email: true,
                id: true,
                username: true,
                image: true,
              },
            },
            receiver: {
              select: {
                email: true,
                id: true,
                username: true,
                image: true,
              },
            },
          },
        },
        shop: {
          select: {
            id: true,
            userId: true,
            shopImage: true,
            shopName: true,
          },
        },
      },
    });

    if (!chat) {
      throw new Error("Chat not found.");
    }

    return chat;
  } catch (error) {
    throw new Error(`Failed to get chat by ID: ${error.message}`);
  } finally {
    revalidatePath("/chat");
  }
}
export async function getShopById(shopId) {
  try {
    const parsedShopId = parseInt(shopId);

    // Query the shop by its ID
    const shop = await prisma.shop.findUnique({
      where: {
        id: parsedShopId,
      },
    });

    return shop;
  } catch (error) {
    console.error("Error getting shop by id:", error);
    return null;
  }
}
export async function deleteMessagesWithoutSender() {
  try {
    const deletedMessages = await prisma.message.deleteMany({
      where: {
        NOT: {
          senderId: {
            not: null,
          },
        },
      },
    });

    return deletedMessages;
  } catch (error) {
    console.error("Error deleting messages without sender:", error);
    throw error;
  }
}

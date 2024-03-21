"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/prisma/client";
import webPush from "web-push";

async function createNotification(userId, content) {
  try {
    // Create a new notification
    const newNotification = await prisma.notification.create({
      data: {
        content: content,
        recipient: { connect: { id: parseInt(userId) } }, // Connect the notification to the recipient user
      },
    });
    console.log("Notification created:", newNotification);
    return newNotification;
  } catch (error) {
    console.error("Error creating notification:", error);
  }
}
// Function to add subscription to a user
export async function addSubscriptionToUser(userId, subscriptionData) {
  try {
    // Use Prisma to find the user by userId
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        subscription: true, // Include the subscription relation
      },
    });

    if (!user) {
      console.log("User not found");
    }

    // Check if the user already has a subscription
    if (user.subscription) {
      return;
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
  }
}
export async function sendNotificationToUser(userId, notificationContent) {
  try {
    await createNotification(userId, notificationContent.title);
    // Retrieve the user's subscription data from the database
    const userSubscriptions = await prisma.subscription.findUnique({
      where: {
        userId: userId,
      },
    });

    // Check if the user has any subscriptions
    if (userSubscriptions.length === 0) {
      console.log("User doesn't have any subscriptions");
    }

    // Prepare the notification payload
    const payload = {
      title: notificationContent.title,
      body: notificationContent.body,
      icon: "https://cloud.sooqsquare.com/core/preview?fileId=1369&x=1366&y=768&a=true",
      data: {
        url: "http://localhost:3000/ar/chat",
      },
    };

    // Send the notification to each subscription
    if (userSubscriptions) {
      await sendNotification(userSubscriptions, payload);
    }

    console.log(`Notification sent to user ${userId}`);
  } catch (error) {
    console.error(`Error sending notification to user ${userId}:`, error);
  }
}
async function sendNotification(subscription, payload) {
  // Use web-push to send notification
  try {
    // Prepare VAPID details (replace with your generated keys)
    const vapidKeys = {
      subject: "mailto:youremail@example.com", // Replace with your email
      publicKey:
        "BK3k4umk71d0mq9x1RHS9FOGLc6zHt8fFVnPg2dKxYpZwLURqgazKGX4sx1T8INcWd3onjw1cve6cTseW7ojCXo",
      privateKey: "8bw9PpNnTxHagt6mpEAbZH4HRPDd0iPo2M3mYuc85Sc",
    };

    const pushSubscription = {
      endpoint: subscription.endpoint,
      keys: {
        auth: subscription.auth,
        p256dh: subscription.p256dh,
      },
    };

    await webPush.sendNotification(pushSubscription, JSON.stringify(payload), {
      vapidDetails: vapidKeys,
    });

    console.log("Push notification sent successfully");
  } catch (error) {
    console.error("Error sending push notification:", error);
  }
}
export async function createShopMessage(content, senderId, receiverId, chatId) {
  try {
    const message = await prisma.message.create({
      data: {
        content,
        senderShop: {
          connect: { id: senderId },
        },
        receiver: {
          connect: { id: receiverId },
        },
        chat: {
          connect: { id: chatId },
        },
      },
      include: {
        senderShop: {
          select: {
            id: true,
            shopImage: true,
            shopName: true,
          },
        },
      },
    });

    // Additional logic if needed...
    return message;
  } catch (error) {
    console.error("Error creating shop message:", error);
  } finally {
    revalidatePath(`/chat`);
  }
}
export async function createUserMessage(
  content,
  senderId,
  receiverShopId,
  chatId
) {
  try {
    const message = await prisma.message.create({
      data: {
        content,
        sender: {
          connect: { id: senderId },
        },
        receiverShop: {
          connect: { id: receiverShopId },
        },
        chat: {
          connect: { id: chatId },
        },
      },
      include: {
        sender: {
          select: {
            image: true,
            id: true,
            username: true,
          },
        },
        receiverShop: true,
      },
    });

    return message;
  } catch (error) {
    console.error("Error creating user message:", error);
  } finally {
    revalidatePath(`/chat/${chatId}`);
  }
}
export async function createMessage(content, senderEmail, receiver, chatId) {
  try {
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
    if (message) {
      sendNotificationToUser(receiver.id, {
        title: `New Message from ${receiver.username}`,
        body: message.content,
      });
    }
    console.log(message);
    return message;
  } catch (error) {
    console.error("Error creating message:", error);
  } finally {
    revalidatePath(`/chat/${chatId}`);
  }
}
export async function updateMessageReadStatus(msg, userId) {
  try {
    if (msg.receiverId !== userId && !msg.read) return;
    // Update the message read status in the database
    const updatedMessage = await prisma.message.update({
      where: { id: msg.id },
      data: { read: true },
    });
    return updatedMessage.id;
  } catch (error) {
    console.error("Error updating message read status:", error);
  }
}

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
            { shops: { some: { id: parsedShopId } } },
          ],
        },
        include: {
          messages: {
            include: {
              sender: true,
              receiver: true,
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
            shops: { connect: [{ id: parsedShopId }] },
          },
          include: {
            messages: {
              include: {
                sender: true,
                receiver: true,
              },
            },
          },
        });
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
export const fetchShopMessagesFromDatabase = async (chat) => {
  try {
    const fetchedMessages = await prisma.message.findMany({
      where: { chatId: chat.id },
      include: {
        senderShop: true,
        sender: true,
      },
      orderBy: { createdAt: "asc" },
    });
    return fetchedMessages;
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};
export const fetchMessagesFromDatabase = async (chat) => {
  try {
    const fetchedMessages = await prisma.message.findMany({
      where: { chatId: chat.id },
      include: {
        sender: true,
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
            sender: true,
            receiver: true,
          },
        },
        shops: {
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
      redirect("/chat");
    }

    return chat;
  } catch (error) {
    console.error(`Failed to get chat by ID: ${error.message}`);
  } finally {
    revalidatePath("/chat");
  }
}
export async function deleteChat(formData) {
  try {
    // Extract the chatId from the formData
    const chatId = formData.get("chatId");

    // Delete the chat using the chatId
    await prisma.chat.delete({
      where: {
        id: parseInt(chatId), // Assuming chatId is a string, parse it to an integer if needed
      },
    });
    // Revalidate the path '/chat'
  } catch (error) {
    console.error("Error deleting chat:", error);
    // Handle any errors, if needed
  } finally {
    revalidatePath("/chat");
    redirect("/chat");
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

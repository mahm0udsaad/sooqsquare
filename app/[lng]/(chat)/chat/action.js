"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/prisma/client";
import webPush from 'web-push'; // Import the web-push library for sending push notifications

// Function to add subscription to a user
export async function addSubscriptionToUser(userId, subscriptionData) {
  console.log(userId);
  try {
    // Use Prisma to find the user by userId
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    if (!user) {
      throw new Error('User not found');
    }
    
    
    // Create a new subscription record associated with the user
    const newSubscription = await prisma.subscription.create({
      data: {
        endpoint: subscriptionData.endpoint,
        p256dh: subscriptionData.keys.p256dh,
        auth: subscriptionData.keys.auth,
        user: {
          connect: {
            id: userId
          }
        }
      }
    });

    console.log('Subscription added to user:', newSubscription);
    return newSubscription;
  } catch (error) {
    console.error('Error adding subscription to user:', error);
    throw error;
  }
}


export async function createMessage(content, senderEmail, receiver, chatId) {
  try {
    const currentReceiver = await prisma.user.findUnique({ where: { email: receiver.email }, include: { subscriptions: true } });

    const message = await prisma.message.create({
      data: {
        content,
        sender: {
          connect: { email: senderEmail }
        },
        receiver: {
          connect: { email: receiver.email }
        },
        chat: {
          connect: { id: chatId }
        }
      },
      include: {
        sender: true,
      },
    });

    // Send push notification to the receiver if they have a subscription
    if (currentReceiver.subscriptions && currentReceiver.subscriptions.length > 0) {
      const originalSubscription = {
        endpoint: currentReceiver.subscriptions[currentReceiver.subscriptions.length - 1].endpoint,
        keys: {
          p256dh: currentReceiver.subscriptions[currentReceiver.subscriptions.length - 1].p256dh,
          auth: currentReceiver.subscriptions[currentReceiver.subscriptions.length - 1].auth
        }
      };
      sendPushNotification(originalSubscription, message , receiver.email);
    }
    return message;
  } catch (error) {
    console.error('Error creating message:', error);
    throw error;
  } finally {
    revalidatePath(`/chat/${chatId}`) // Close the Prisma client connection
  }
}

const vapidKeys = {
  publicKey: 'BK3k4umk71d0mq9x1RHS9FOGLc6zHt8fFVnPg2dKxYpZwLURqgazKGX4sx1T8INcWd3onjw1cve6cTseW7ojCXo',
  privateKey: '8bw9PpNnTxHagt6mpEAbZH4HRPDd0iPo2M3mYuc85Sc',
 };


const sendPushNotification = async (subscription, message , receiverEmail) => {
  const pushPayload = {
    title: 'New Message',
    body: `${message.sender.username}: ${message.content}`,
    icon: '',
    data: { chatId: message.chatId, messageId: message.id }
  };

  try {
    const notf = await webPush.sendNotification(subscription, JSON.stringify(pushPayload), { TTL: 60, vapidDetails: {...vapidKeys , subject:`mailto:${receiverEmail}`} });
    console.log(notf.statusCode);
  } catch (error) {
    console.error('Error sending push notification:', error);
  }
};


export async function getOrCreateChat(user1Id, user2Id) {
  let newChat;

  const parsedUser1Id = parseInt(user1Id);
  const parsedUser2Id = user2Id;
  console.log(user2Id);

  try {
    // Find users with the provided ids
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
      // Create a new chat with the found users
      newChat = await prisma.chat.create({
        data: {
          users: {
            connect: [
              { id: parsedUser1Id },
              { id: parsedUser2Id },
            ],
          },
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
      orderBy: { createdAt: 'asc' }, // Adjust the order as needed
    });
    return fetchedMessages
  } catch (error) {
    console.error('Error fetching messages:', error);
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
        users:true,
        messages: {
          include: {
            sender: true,
            receiver: true,
          },
        },
      },
    });

    if (!chat) {
      throw new Error('Chat not found.');
    }

    return chat;
  } catch (error) {
    throw new Error(`Failed to get chat by ID: ${error.message}`);
  }
}



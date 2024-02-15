"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/prisma/client";

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

async function storeSubscription(subscriptionData) {
  try {
    // Use Prisma to create a new subscription record in the database
    const newSubscription = await prisma.subscription.create({
      data: {
        // Assuming your subscription model has fields for endpoint, keys, and user ID
        endpoint: subscriptionData.endpoint,
        keys: JSON.stringify(subscriptionData.keys),
        userId: subscriptionData.userId // Assuming you have a field for user ID
      }
    });
    console.log('Subscription stored in the database:', newSubscription);
    return newSubscription;
  } catch (error) {
    console.error('Error storing subscription:', error);
    throw error;
  }
}


export async function createMessage(content, senderEmail, receiverEmail, chatId) {
  try {
    const sender = await prisma.user.findUnique({ where: { email: senderEmail } });

    const message = await prisma.message.create({
      data: {
        content,
        sender: {
          connect: { email: senderEmail }
        },
        receiver: {
          connect: { email: receiverEmail }
        },
        chat: {
          connect: { id: chatId }
        }
      },
      include: {
        sender: true,
      },
    });

   
    return message;
  } catch (error) {
    console.error('Error creating message:', error);
    throw error;
  } finally {
    revalidatePath(`/chat/${chatId}`) // Close the Prisma client connection
  }
}

export async function getOrCreateChat(user1Id, user2Id) {
  let newChat;

  const parsedUser1Id = parseInt(user1Id);
  const parsedUser2Id = parseInt(user2Id);

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



import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";
import prisma from "@/prisma/client";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(cors({ origin: "*" }));

// Store active users in the database
const activeUsers = new Map();

// Function to update user status in the database
const updateUserStatus = async (userId, status) => {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: { status },
    });
  } catch (error) {
    console.error("Error updating user status:", error);
  }
};

// Socket.io connection event
io.on("connection", (socket) => {
  console.log("a user connected");

  // Add user to active users map
  activeUsers.set(socket.id, "online");

  // Emit user status to all clients
  io.emit("user status", { id: socket.id, status: "online" });

  // Update user status in the database
  updateUserStatus(socket.id, "online");

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("user disconnected");
    // Remove user from active users map
    activeUsers.delete(socket.id);
    // Emit user status to all clients
    io.emit("user status", { id: socket.id, status: "offline" });
    // Update user status in the database
    updateUserStatus(socket.id, "offline");
  });

  // Handle chat messages
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  // Handle shop chat messages
  socket.on("shop chat message", (msg) => {
    io.emit("shop chat message", msg);
  });
});

server.listen(8001, "::", () => {
  console.log("Server running at :8001");
});

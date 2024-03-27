import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import axios from "axios";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(cors({ origin: "*" }));

// Store active sockets along with user IDs
const activeUsers = new Map();

io.on("connection", (socket) => {
  socket.on("login", ({ userId }) => {
    // Associate the user ID with the socket ID
    activeUsers.set(socket.id, userId);
    axios.post("https://sooqsquare.com/api/userStatus", {
      userId,
      status: "online",
    });
    console.log(`User ${userId} logged in`);
  });

  socket.on("messageRead", ({ messageId }) => {
    // Get the sender's user ID from the activeUsers map
    const senderUserId = activeUsers.get(socket.id);
    if (senderUserId) {
      // Emit the "messageReadConfirmation" event to the receiver's socket
      io.emit("messageReadConfirmation", { messageId });
    }
  });

  socket.on("disconnect", () => {
    // Get the user ID associated with the disconnected socket
    const userId = activeUsers.get(socket.id);
    if (userId) {
      // Remove the user ID association on disconnect
      activeUsers.delete(socket.id);
      console.log(`User ${userId} disconnected`);
      axios.post("http://localhost:3000/api/userStatus", {
        userId,
        status: "offline",
      });
    }
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("shop chat message", (msg) => {
    io.emit("shop chat message", msg);
  });
  // Emit an event when a new notification is created
  socket.on("newNotification", (notification) => {
    io.emit("notificationReceived", notification);
  });
});

server.listen(8001, "::", () => {
  console.log("server running at :8001");
});

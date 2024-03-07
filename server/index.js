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
    axios.post("http://localhost:3000/api/userStatus", {
      userId,
      status: "online",
    });
    console.log(`User ${userId} logged in`);
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

  // Your other event handlers...
});

server.listen(8001, "::", () => {
  console.log("server running at :8001");
});

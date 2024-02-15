import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(cors({ origin: "*" }));

// Store active sockets
const activeUsers = new Map();

io.on("connection", (socket) => {
  console.log("a user connected");

  // Add user to active users map
  activeUsers.set(socket.id, 'online');
  // Emit user status to all clients
  io.emit('user status', { id: socket.id, status: 'online' });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    // Remove user from active users map
    activeUsers.delete(socket.id);
    // Emit user status to all clients
    io.emit('user status', { id: socket.id, status: 'offline' });
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(8001, '::', () => {
  console.log("server running at :8001");
});

import { io } from "socket.io-client";

const socket = io("http://195.35.24.30:8001", {
  transports: ["websocket"],
});

export default socket;


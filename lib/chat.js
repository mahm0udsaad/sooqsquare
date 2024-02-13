import { io } from "socket.io-client";

const socket = io("https://socket.sooqsquare.com", {
  transports: ["websocket"],
});

export default socket;


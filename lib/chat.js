import { io } from "socket.io-client";

const socket = io("http://socket.sooqsquare.com", {
  transports: ["websocket"],
});

export default socket;


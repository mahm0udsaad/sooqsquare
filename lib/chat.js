import { io } from "socket.io-client";

const socket = io("https://mail.elsewedy-automation.com:8000", {
  transports: ["websocket"],
});

export default socket;


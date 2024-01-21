// Import the necessary modules
import Client , { Server } from "nextcloud-node-client";

// Set up the server configuration using environment variables
const serverConfig = {
    basicAuth: {
        password:"dbEMY-soQg6-JKq4H-4S832-MRSPN",
        username:"mahm0ud",
    },
    url: process.env.NEXTCLOUD_URL || "",
};

// Create a server object
const server = new Server(serverConfig);

// Create a client using the server object
const client = new Client(server);

export default client
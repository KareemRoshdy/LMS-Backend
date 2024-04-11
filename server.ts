import { app } from "./app";
import { initSocketServer } from "./socketServer";
import connectDB from "./utils/db";
import { v2 as cloudinary } from "cloudinary";
import http from "http";
require("dotenv").config();

const server = http.createServer(app);

// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

// Init Socket Server
initSocketServer(server);

// create server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectDB();
});

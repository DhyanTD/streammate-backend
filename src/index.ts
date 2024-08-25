import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import http from "http";
import { AppDataSource } from "./config/database";
import { UserController } from "./app/user/user.controller";
import { errorHandler } from "./common/exceptions/error-handler";
import { setupSwagger } from "./swagger";
import { initSignalingServer } from "./app/signaling/signaling.controller";

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());

// Set up routes
app.post("/signup", UserController.signup);
app.post("/login", UserController.login);

// Error handling middleware
app.use(errorHandler);

// Swagger setup
setupSwagger(app);

const PORT = process.env.PORT || 8080;

AppDataSource.initialize()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      initSignalingServer(server); // Initialize the signaling server
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization", error);
  });

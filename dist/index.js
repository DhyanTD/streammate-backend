"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
const database_1 = require("./config/database");
const user_controller_1 = require("./app/user/user.controller");
const error_handler_1 = require("./common/exceptions/error-handler");
const swagger_1 = require("./swagger");
const signaling_controller_1 = require("./app/signaling/signaling.controller");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use(body_parser_1.default.json());
// Set up routes
app.post('/signup', user_controller_1.UserController.signup);
app.post('/login', user_controller_1.UserController.login);
// Error handling middleware
app.use(error_handler_1.errorHandler);
// Swagger setup
(0, swagger_1.setupSwagger)(app);
const PORT = process.env.PORT || 8080;
database_1.AppDataSource.initialize()
    .then(() => {
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        (0, signaling_controller_1.initSignalingServer)(server); // Initialize the signaling server
    });
})
    .catch((error) => {
    console.error('Error during Data Source initialization', error);
});

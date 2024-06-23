"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const database_1 = require("../../config/database");
const user_entity_1 = require("./user.entity");
exports.UserRepository = database_1.AppDataSource.getRepository(user_entity_1.User);

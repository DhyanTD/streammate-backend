"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const credentials_1 = require("../../config/credentials");
const generateToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, credentials_1.JWT_SECRET, { expiresIn: '1h' });
};
exports.generateToken = generateToken;

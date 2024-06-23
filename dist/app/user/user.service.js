"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_dao_1 = require("./user.dao");
const credentials_1 = require("../../config/credentials");
class UserService {
    signup(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.default.hash(createUserDto.password, 10);
            const user = user_dao_1.UserRepository.create({
                userName: createUserDto.userName,
                password: hashedPassword,
                email: createUserDto.email,
                name: createUserDto.name,
                avatar: createUserDto.avatar,
                bio: createUserDto.bio
            });
            return user_dao_1.UserRepository.save(user);
        });
    }
    login(loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_dao_1.UserRepository.findOne({ where: { userName: loginUserDto.username } });
            if (!user)
                throw new Error('User not found');
            const validPassword = yield bcrypt_1.default.compare(loginUserDto.password, user.password);
            if (!validPassword)
                throw new Error('Invalid password');
            return jsonwebtoken_1.default.sign({ userId: user.id }, credentials_1.JWT_SECRET, { expiresIn: '1h' });
        });
    }
}
exports.UserService = UserService;

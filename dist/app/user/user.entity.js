"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: The unique identifier of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         userName:
 *           type: string
 *           description: The username of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         avatar:
 *           type: string
 *           description: The avatar URL of the user
 *         bio:
 *           type: string
 *           description: A brief bio of the user
 */
let User = class User {
    constructor(it) {
        if (it.id) {
            this.id = it.id;
        }
        this.name = it.name;
        this.userName = it.userName;
        this.email = it.email;
        this.password = it.password;
        this.avatar = it.avatar;
        this.bio = it.bio;
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "name", type: "varchar", nullable: true })
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "user_name", type: 'varchar', nullable: false })
], User.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "email", type: 'varchar', nullable: false })
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "password", type: 'varchar', nullable: true })
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "avatar", type: 'varchar', nullable: true })
], User.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "bio", type: 'varchar', nullable: true })
], User.prototype, "bio", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);

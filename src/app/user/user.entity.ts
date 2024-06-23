import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { IUser } from './IUser';

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

@Entity('users')
export class User implements IUser {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column({name:"name", type: "varchar", nullable:true})
    name?: string;

    @Column({name:"user_name", type: 'varchar', nullable: false })
    userName!: string;

    @Column({name:"email", type: 'varchar', nullable: false })
    email!: string;

    @Column({name:"password", type: 'varchar', nullable: true })
    password?: string;

    @Column({name:"avatar", type: 'varchar', nullable: true })
    avatar?: string;

    @Column({name:"bio", type: 'varchar', nullable: true })
    bio?: string;
    
    constructor(it: IUser) {
        if(it.id){
            this.id = it.id;
        }
        this.name = it.name;
        this.userName = it.userName;
        this.email = it.email;
        this.password = it.password;
        this.avatar = it.avatar;
        this.bio = it.bio;
    }
}

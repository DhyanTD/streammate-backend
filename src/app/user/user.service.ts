import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from './user.dao';
import { User } from './user.entity';
import { JWT_SECRET } from '../../config/credentials';
import { CreateUserDto, LoginUserDto } from './user.dto';

export class UserService {
    async signup(createUserDto: CreateUserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const user = UserRepository.create({ 
            userName: createUserDto.userName, 
            password: hashedPassword, 
            email: createUserDto.email,
            name: createUserDto.name,
            avatar: createUserDto.avatar,
            bio: createUserDto.bio
        });
        return UserRepository.save(user);
    }

    async login(loginUserDto: LoginUserDto): Promise<string> {
        const user = await UserRepository.findOne({ where: { userName: loginUserDto.username } });

        if (!user) throw new Error('User not found');

        const validPassword = await bcrypt.compare(loginUserDto.password, user.password!);

        if (!validPassword) throw new Error('Invalid password');

        return jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    }
}

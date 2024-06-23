import { Request, Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from './user.dto';

const userService = new UserService();

export class UserController {
    static async signup(req: Request, res: Response): Promise<void> {
        try {
            const createUserDto: CreateUserDto = req.body;
            const user = await userService.signup(createUserDto);
            res.status(201).json({ message: 'User created successfully', user });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: 'An unexpected error occurred' });
            }
        }
    }

    static async login(req: Request, res: Response): Promise<void> {
        try {
            const loginUserDto: LoginUserDto = req.body;
            const token = await userService.login(loginUserDto);
            res.status(200).json({ message: 'Login successful', token });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: 'An unexpected error occurred' });
            }
        }
    }
}

import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../config/credentials';

export const generateToken = (payload: object): string => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};

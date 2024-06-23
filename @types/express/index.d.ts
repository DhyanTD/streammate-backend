import { User } from '../../app/user/user.entity'; 
import { Request } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: User; 
        }
    }
}

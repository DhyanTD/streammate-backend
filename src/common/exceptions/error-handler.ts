import { Request, Response, NextFunction } from 'express';
import { HttpException } from './http-exception';

export const errorHandler = (err: HttpException, req: Request, res: Response, next: NextFunction): void => {
    const status = err.status || 500;
    const message = err.message || 'Internal server error';
    res.status(status).json({ message });
};

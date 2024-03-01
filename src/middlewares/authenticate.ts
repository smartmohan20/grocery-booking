import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AUTH_SECRET_KEY } from '../config/jwtConfig';

// Callback function to verify token
const verifyTokenCallback = (req: Request, res: Response, next: NextFunction, err: any, decoded: any): void => {
    try {
        if (err) {
            res.status(401).send('Unauthorized');
        } else {
            const objPayload = decoded;
            const intId = objPayload.id;

            // Set the user id in the request body
            req.body.userId = intId;

            // Continue with the next middleware or route handler
            next(); 
        }
    } catch (err) {
        console.error('Exception occured in "verifyTokenCallback" method of "authenticate" middleware!', err);
    }
};

// Middleware to authenticate
const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    let authToken = req.headers.authorization;
    if (authToken) {
        // Remove 'Bearer ' prefix and trim any leading/trailing spaces
        authToken = authToken.split(' ')[1].trim(); // Remove "Bearer " prefix

        jwt.verify(authToken, AUTH_SECRET_KEY, (err: jwt.VerifyErrors | null, decoded: any) => {
            verifyTokenCallback(req, res, next, err, decoded);
        });
    } else {
        res.status(401).send('Unauthorized');
    }
};

export default authenticate;

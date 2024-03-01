import { Admin } from '../../models/Models';
import jwt from 'jsonwebtoken';
import { AUTH_SECRET_KEY, TOKEN_EXPIRY } from '../../config/jwtConfig';

// Method to add grocery item
export const signup = async (email: string, password: string) : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to signup!',
            data: {},
            errors: []
        };

        const admin = await Admin.create({ email, password });
        if (admin) {
            objRes.statusCode = 201;
            objRes.message = 'Signup successful!';
            objRes.data = admin;
        }

        return objRes;
    } catch (err) {
        console.error('Exception occured in "signup" method of "adminRepository"!', err);
    }
};

// Method to login
export const login = async (email: string, password: string) : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to login!',
            data: {},
            errors: []
        };

        const admin = await Admin.findOne({ where: { email, password } });
        if (admin) {
            objRes.statusCode = 200;
            objRes.message = 'Login successful!';

            // Generate a auth token for the admin
            const authToken = jwt.sign({ id: admin.dataValues.id }, AUTH_SECRET_KEY, { expiresIn: TOKEN_EXPIRY });

            objRes.data = authToken;
        }

        return objRes;
    } catch (err) {
        console.error('Exception occured in "login" method of "adminRepository"!', err);
    }
};

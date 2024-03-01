import express, { Request, Response } from 'express';
const router = express.Router();

// Root controller
const rootController  = (req: Request, res: Response) => {
    try {
        // Send response with status code
        res.status(200).send('Success! Server is running...');
    } catch (err) {
        console.error('Exception occured in "rootController" method of "rootRoutes"!');
    }
};

// Root route
router.get('/', rootController);

export default router;

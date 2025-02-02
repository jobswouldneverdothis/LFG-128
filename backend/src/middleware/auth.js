//import admin from '../config/firebase.js';
import User from '../models/User.js';

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) throw new Error('No token provided');

        const decodedToken = await admin.auth().verifyIdToken(token);
        const user = await User.findOne({ phoneNumber: decodedToken.phone_number });

        if (!user) {
            throw new Error('User not found');
        }

        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Please authenticate' });
    }
};

export default auth;
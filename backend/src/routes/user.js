import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import OTP from '../models/otp.js';

const router = express.Router();

// Generate OTP
router.post('/generate-otp', async (req, res) => {
    try {
        const { phone } = req.body;
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        
        await OTP.create({
            phone,
            otp
        });

        // TODO: Integrate SMS service here
        // For development, return OTP in response
        res.json({ message: 'OTP sent successfully', otp });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Verify OTP and Login/Register
router.post('/verify-otp', async (req, res) => {
    try {
        const { phone, otp, name } = req.body;
        
        const otpRecord = await OTP.findOne({
            phone,
            otp,
            createdAt: { $gt: new Date(Date.now() - 300000) }
        });

        if (!otpRecord) {
            return res.status(400).json({ message: 'Invalid OTP or OTP expired' });
        }

        let user = await User.findOne({ phone });
        
        // Register new user if not exists
        if (!user && name) {
            user = await User.create({ phone, name });
        } else if (!user) {
            return res.status(400).json({ message: 'Please provide name for registration' });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        await OTP.deleteOne({ _id: otpRecord._id });
        
        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
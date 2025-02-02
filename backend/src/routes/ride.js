import express from 'express';
import Ride from '../models/Ride.js';
import auth from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { createRideSchema, searchRideSchema } from '../validations/rideSchema.js';

const router = express.Router();

router.post('/', auth, validate(createRideSchema), async (req, res) => {
    try {
        const ride = new Ride({
            driver: req.user.id,
            ...req.body
        });
        await ride.save();
        res.status(201).json(ride);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/', validate(searchRideSchema), async (req, res) => {
    try {
        const rides = await Ride.find(req.query)
            .populate('driver', '-password');
        res.json(rides);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
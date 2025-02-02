import express from 'express';
import Booking from '../models/Booking.js';
const router = express.Router();
import Ride from '../models/Ride.js';
import auth from '../middleware/auth.js';


router.post('/', auth, async (req, res) => {
    const { rideId, seats } = req.body;
    try {
        const ride = await Ride.findById(rideId);
        if (!ride) return res.status(404).json({ message: 'Ride not found' });

        if (ride.seats < seats) return res.status(400).json({ message: 'Not enough seats available' });

        const booking = new Booking({ passenger: req.user.id, ride: rideId, seats });
        await booking.save();

        ride.seats -= seats;
        await ride.save();

        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
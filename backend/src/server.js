import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


import userRoutes from './routes/user.js';
import rideRoutes from './routes/ride.js';
import bookingRoutes from './routes/booking.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5081;


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


app.use('/api/users', userRoutes); 
app.use('/api/rides', rideRoutes); 
app.use('/api/bookings', bookingRoutes); 


app.get('/', (req, res) => {
    res.send('Carpooling Backend is running!');
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
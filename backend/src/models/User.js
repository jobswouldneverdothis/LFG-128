import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isDriver: { type: Boolean, default: false },
    ratings: [{
        rating: { type: Number, required: true, min: 1, max: 5 },
        from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        rideId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ride' }
    }],
    averageRating: { type: Number, default: 0 }
}, { timestamps: true });

// Existing password hashing middleware
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Add method to update average rating
userSchema.methods.updateAverageRating = function() {
    if (this.ratings.length === 0) {
        this.averageRating = 0;
        return;
    }
    const sum = this.ratings.reduce((acc, curr) => acc + curr.rating, 0);
    this.averageRating = parseFloat((sum / this.ratings.length).toFixed(1));
};

export default mongoose.model('User', userSchema);
import React, { useState } from 'react';
import StarRating from './ui/StarRating';

const RideCard = ({ ride, onRateUser, currentUserId }) => {
  const [isRating, setIsRating] = useState(false);

  const handleRate = async (userId, rating) => {
    await onRateUser(userId, rating);
    setIsRating(false);
  };

  return (
    <div className="bg-zinc-800 p-4 rounded-xl space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white">{ride.from} → {ride.to}</p>
          <p className="text-gray-400">{new Date(ride.date).toLocaleDateString()}</p>
        </div>
        <div className="text-white">{ride.seats} seats</div>
      </div>
      
      {ride.status === 'completed' && ride.participants.map(user => (
        user.id !== currentUserId && (
          <div key={user.id} className="flex justify-between items-center pt-4 border-t border-zinc-700">
            <div className="text-white">{user.name}</div>
            <StarRating
              rating={user.rating}
              onRate={(rating) => handleRate(user.id, rating)}
              disabled={user.hasRated}
            />
          </div>
        )
      ))}
    </div>
  );
};

export default RideCard;
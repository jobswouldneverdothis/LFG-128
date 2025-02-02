import React from 'react';
import { HiStar } from 'react-icons/hi';

const StarRating = ({ rating, onRate, disabled = false }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => !disabled && onRate(star)}
          disabled={disabled}
          className={`text-2xl focus:outline-none transition-colors
            ${rating >= star ? 'text-yellow-400' : 'text-zinc-600'}
            ${!disabled && 'hover:text-yellow-400'}
          `}
        >
          <HiStar />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
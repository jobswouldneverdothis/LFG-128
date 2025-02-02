import React from 'react';

const RideCard = ({ ride }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">
        {ride.origin} to {ride.destination}
      </h2>
      <p className="text-gray-600">
        Date: {new Date(ride.date).toLocaleDateString()}
      </p>
      <p className="text-gray-600">Time: {ride.time}</p>
      <p className="text-gray-600">Seats Available: {ride.seats}</p>
      <p className="text-gray-600">Price: ${ride.price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Book Ride
      </button>
    </div>
  );
};

export default RideCard;
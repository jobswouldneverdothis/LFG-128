import React, { useState } from 'react';
import SelectInput from '../components/ui/SelectedInput';
import DateTimeInput from '../components/ui/DateTimeInput';

const locations = ["Sector-62", "Sector-128", "Botanical Garden", "Okhla"];
const seatOptions = ["1", "2","3"];

const PostRide = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [dateTime, setDateTime] = useState(null);
  const [seats, setSeats] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-black px-4 py-6">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-white mb-8">Post a Ride</h1>
        <SelectInput
          label="Pickup Location"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          options={locations}
          placeholder="Select pickup point"
        />
        <SelectInput
          label="Drop Location"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          options={locations}
          placeholder="Select drop point"
        />
        <DateTimeInput
          selectedDate={dateTime}
          onDateChange={setDateTime}
        />
        <SelectInput
          label="Available Seats"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          options={seatOptions}
          placeholder="Select seats"
        />
        <button
          type="submit"
          className="w-full p-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 active:scale-[0.98] transition-all"
        >
          Post Ride
        </button>
      </form>
    </div>
  );
};

export default PostRide;
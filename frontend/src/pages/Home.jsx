import React, { useState } from 'react';
import SelectInput from '../components/ui/SelectedInput';
import DateSelector from '../components/ui/DateSelector';

const locations = ["Sector-62", "Sector-128", "Botanical Garden", "Okhla"];

const Home = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl">
          <h1 className="text-2xl font-bold text-white mb-8">Find a Ride</h1>
          
          <div className="space-y-6">
            <SelectInput
              label="From"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              options={locations}
              placeholder="Select pickup location"
            />

            <SelectInput
              label="To"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              options={locations}
              placeholder="Select drop location"
            />

            <DateSelector
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button
              onClick={() => console.log({ origin, destination, date })}
              className="w-full p-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 active:scale-[0.98] transition-all"
            >
              Search Rides
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
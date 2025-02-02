import React from 'react';

const DateSelector = ({ value, onChange }) => {
  return (
    <div className="relative">
      <label className="absolute left-4 top-2 text-xs text-gray-400 z-10">
        Date of Journey
      </label>
      <input
        type="date"
        value={value}
        onChange={onChange}
        className="w-full pt-7 pb-3 px-4 bg-zinc-800 text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none appearance-none"
        min={new Date().toISOString().split('T')[0]}
        max={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
      />
      {!value && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Select date</span>
        </div>
      )}
    </div>
  );
};

export default DateSelector;
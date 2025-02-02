import React, { useState } from 'react';

const DateTimeInput = ({ selectedDate, onDateChange }) => {
  return (
    <div className="relative">
      <label className="absolute left-4 top-2 text-xs text-gray-400">
        Date & Time
      </label>
      <div className="flex gap-2">
        <input
          type="date"
          value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
          onChange={(e) => {
            const newDate = new Date(e.target.value);
            onDateChange(newDate);
          }}
          className="flex-1 pt-7 pb-3 px-4 bg-zinc-800 text-white rounded-xl focus:ring-2 focus:ring-green-500"
          min={new Date().toISOString().split('T')[0]}
        />
        <input
          type="time"
          value={selectedDate ? selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
          onChange={(e) => {
            const [hours, minutes] = e.target.value.split(':');
            const newDate = new Date(selectedDate || new Date());
            newDate.setHours(hours, minutes);
            onDateChange(newDate);
          }}
          className="w-32 pt-7 pb-3 px-4 bg-zinc-800 text-white rounded-xl focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>
  );
};

export default DateTimeInput;
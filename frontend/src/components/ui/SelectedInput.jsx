import React from 'react';

const SelectInput = ({ label, value, onChange, options, placeholder }) => {
  return (
    <div className="relative">
      <label className="absolute left-4 top-2 text-xs text-gray-400 z-10">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="w-full pt-7 pb-3 px-4 bg-zinc-800 text-white rounded-xl appearance-none focus:ring-2 focus:ring-green-500 focus:outline-none relative z-0"
      >
        <option value="" disabled className="bg-zinc-800">
          {placeholder}
        </option>
        {options.map(opt => (
          <option 
            key={opt} 
            value={opt} 
            className="bg-zinc-800 py-2"
          >
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <svg 
          className="h-4 w-4 text-gray-400" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

export default SelectInput;
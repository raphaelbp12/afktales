"use client";

import React from "react";

interface DropdownSelectorProps {
  id: string;
  label: string;
  value: string | number;
  options: { value: string | number; label: string }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  id,
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="flex flex-col items-center">
      <label htmlFor={id} className="mb-2 font-bold">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="border rounded p-2 bg-gray-700 border-gray-500 text-white"
      >
        <option value=""></option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelector;

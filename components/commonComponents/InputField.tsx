"use client";

import React from "react";

interface InputFieldProps {
  label: string;
  value: number | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div className="flex items-center gap-2 align-middle">
      <label htmlFor={label.toLowerCase()} className="text-lg">
        {label}: {value}
      </label>
      <input
        type={type}
        id={label.toLowerCase()}
        value={value}
        onChange={onChange}
        className="border rounded p-2 bg-gray-700 border-gray-500 text-white w-32 text-center"
      />
    </div>
  );
};

export default InputField;

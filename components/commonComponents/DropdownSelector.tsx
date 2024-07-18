"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ItemSpriteImage from "./ItemSpriteImage";

interface DropdownOption {
  value: string | number;
  label: string;
  imageUrl?: string;
  itemId?: number;
}

interface DropdownSelectorProps {
  id: string;
  label: string;
  value: string | number;
  options: DropdownOption[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  id,
  label,
  value,
  options,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [openAbove, setOpenAbove] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionClick = (optionValue: string | number) => {
    const event = {
      target: {
        value: optionValue,
      },
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange(event);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleToggleDropdown = () => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setOpenAbove(window.innerHeight - rect.bottom * 2 < rect.height);
    }
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="relative flex flex-col items-center" ref={dropdownRef}>
      <label htmlFor={id} className="mb-2 font-bold">
        {label}
      </label>
      <div
        className="border rounded p-2 bg-gray-700 border-gray-500 text-white cursor-pointer w-full flex items-center"
        onClick={handleToggleDropdown}
        onTouchEnd={handleToggleDropdown} // For mobile touch support
      >
        {selectedOption?.itemId && (
          <ItemSpriteImage itemId={selectedOption.itemId} />
        )}
        {selectedOption?.imageUrl && (
          <Image
            src={selectedOption.imageUrl}
            alt=""
            width={24}
            height={24}
            className="mr-2"
          />
        )}
        {selectedOption?.label || "Select..."}
      </div>
      {isOpen && (
        <div
          className={`absolute ${
            openAbove ? "bottom-full mb-1" : "top-full mt-1"
          } w-full border rounded bg-gray-700 border-gray-500 text-white z-10`}
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          <input
            type="text"
            className="w-full p-2 bg-gray-600 text-white"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={inputRef}
          />
          <div
            className="flex items-center p-2 hover:bg-gray-600 cursor-pointer"
            onClick={() => handleOptionClick("")}
            onTouchEnd={() => handleOptionClick("")} // For mobile touch support
          >
            None
          </div>
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="flex items-center p-2 hover:bg-gray-600 cursor-pointer"
              onClick={() => handleOptionClick(option.value)}
              onTouchEnd={() => handleOptionClick(option.value)} // For mobile touch support
            >
              {option.itemId && <ItemSpriteImage itemId={option.itemId} />}
              {option.imageUrl && (
                <Image
                  src={option.imageUrl}
                  alt=""
                  width={24}
                  height={24}
                  className="mr-2"
                />
              )}
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownSelector;

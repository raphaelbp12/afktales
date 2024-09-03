"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ItemSpriteImage from "./ItemSpriteImage";
import { ItemData } from "@/ragnarokData/ItemDB/types";

interface ItemDropdownSelectorProps {
  id: string;
  label: string;
  selectedItemId: number | null;
  items: ItemData[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ItemDropdownSelector: React.FC<ItemDropdownSelectorProps> = ({
  id,
  label,
  selectedItemId,
  items,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [openAbove, setOpenAbove] = useState(false);

  const filteredOptions = items.filter((item) =>
    item.Name.toLowerCase().includes(searchTerm.toLowerCase())
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

  const selectedOption = items.find((item) => item.nameid === selectedItemId);

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
        {selectedOption?.nameid && (
          <ItemSpriteImage itemId={selectedOption.nameid} />
        )}
        {selectedOption?.Name || "Select..."}
      </div>
      {isOpen && (
        <div
          className={`absolute ${
            openAbove ? "bottom-full mb-1" : "top-full mt-1"
          } w-full border rounded bg-gray-700 border-gray-500 text-white z-10`}
          style={{ maxHeight: "400px", overflowY: "auto" }}
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
              onClick={() => handleOptionClick(option.nameid)}
              onTouchEnd={() => handleOptionClick(option.nameid)} // For mobile touch support
            >
              {option.nameid && <ItemSpriteImage itemId={option.nameid} />}
              {option.Name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemDropdownSelector;

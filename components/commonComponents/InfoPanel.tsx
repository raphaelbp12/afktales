// components/InfoPanel.tsx
"use client";

import React, { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface InfoPanelProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  storageKey: string; // Unique key for storing the collapse state in localStorage
}

const InfoPanel: React.FC<InfoPanelProps> = ({
  icon = <FaInfoCircle size={24} />,
  title,
  description,
  storageKey,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem(storageKey);
    if (savedState) {
      setIsCollapsed(JSON.parse(savedState));
    }
  }, [storageKey]);

  const toggleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem(storageKey, JSON.stringify(newState));
  };

  return (
    <div
      className="border rounded-md p-4 mb-4 bg-blue-500 cursor-pointer"
      onClick={toggleCollapse}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon}
          <h2 className="ml-2 text-xl font-semibold">{title}</h2>
        </div>
        <div>
          {isCollapsed ? (
            <IoIosArrowDown size={24} />
          ) : (
            <IoIosArrowUp size={24} />
          )}
        </div>
      </div>
      {!isCollapsed && <p className="mt-4">{description}</p>}
    </div>
  );
};

export default InfoPanel;

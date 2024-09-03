// ViewToggle.tsx
import React from "react";
import { FaTh, FaList } from "react-icons/fa";

interface ViewToggleProps {
  isGridView: boolean;
  toggleView: () => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ isGridView, toggleView }) => {
  return (
    <button onClick={toggleView} className="text-gray-600 hover:text-gray-800">
      {isGridView ? <FaList size={24} /> : <FaTh size={24} />}
    </button>
  );
};

export default ViewToggle;

// ViewToggle.tsx
import React from "react";
import { FaTh, FaList } from "react-icons/fa";

interface ViewToggleProps {
  isGridView: boolean;
  toggleView: () => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ isGridView, toggleView }) => {
  return (
    <button
      onClick={toggleView}
      className="text-gray-400 hover:text-gray-100 min-w-12"
    >
      {isGridView ? (
        <div className="flex gap-3">
          Ver Lista <FaList size={24} />
        </div>
      ) : (
        <div className="flex gap-3">
          Ver Tabela <FaTh size={24} />
        </div>
      )}
    </button>
  );
};

export default ViewToggle;

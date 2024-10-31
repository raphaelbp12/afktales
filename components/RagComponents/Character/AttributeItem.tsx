// CharacterCard.tsx
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

interface AttributeItemProps {
  label: string;
  baseStat: number;
  bonusStat: number;
  statPointsNeededToChange: number;
  onClick: () => void;
}

const AttributeItem: React.FC<AttributeItemProps> = ({
  label,
  baseStat,
  bonusStat,
  statPointsNeededToChange,
  onClick,
}) => {
  return (
    <div className="p-4 rounded-md shadow-sm bg-gray-700 flex items-center">
      {label}{" "}
      <div className="ml-2 flex align-middle">
        <span>{baseStat}</span> <span>+{bonusStat}</span>{" "}
        <span
          className="cursor-pointer"
          onClick={() => {
            onClick();
          }}
        >
          <FaChevronRight />
        </span>
        <span>{statPointsNeededToChange}</span>
      </div>
    </div>
  );
};

export default AttributeItem;

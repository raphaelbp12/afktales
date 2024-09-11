// CharacterCard.tsx
import React from "react";
import { ItemData } from "@/ragnarokData/ItemDB/types";
import InventorySlot from "../Inventory/InventorySlot";

interface AttributeItemProps {
  label: string;
  baseStat: number;
  bonusStat: number;
}

const AttributeItem: React.FC<AttributeItemProps> = ({
  label,
  baseStat,
  bonusStat,
}) => {
  return (
    <div className="p-4 rounded-md shadow-sm bg-gray-700 flex items-center">
      {label}{" "}
      <div className="ml-2">
        <span>{baseStat}</span> <span>+{bonusStat}</span>
      </div>
    </div>
  );
};

export default AttributeItem;

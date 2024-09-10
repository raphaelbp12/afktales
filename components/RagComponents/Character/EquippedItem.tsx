// CharacterCard.tsx
import React from "react";
import { ItemData } from "@/ragnarokData/ItemDB/types";
import InventorySlot from "../Inventory/InventorySlot";

interface EquipmentListProps {
  equippedItem: ItemData | undefined;
}

const EquippedItem: React.FC<EquipmentListProps> = ({ equippedItem }) => {
  return (
    <div className="p-4 rounded-md shadow-sm bg-gray-700 flex flex-col items-center">
      {equippedItem ? <InventorySlot item={equippedItem} /> : null}
    </div>
  );
};

export default EquippedItem;

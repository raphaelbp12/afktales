// CharacterCard.tsx
import React from "react";
import EquippedItem from "./EquippedItem";
import { Inventory } from "@/ragnarokData/PlayerCharacter/Inventory";

interface EquipmentListProps {
  inventory: Inventory;
  equipedItemIndexes: number[];
}

const EquipmentList: React.FC<EquipmentListProps> = ({
  equipedItemIndexes,
  inventory,
}) => {
  const headTop = inventory.getItemInSlot(equipedItemIndexes[6]);
  const headMid = inventory.getItemInSlot(equipedItemIndexes[5]);
  const headLow = inventory.getItemInSlot(equipedItemIndexes[4]);
  const armor = inventory.getItemInSlot(equipedItemIndexes[7]);
  const rightHand = inventory.getItemInSlot(equipedItemIndexes[9]);
  const leftHand = inventory.getItemInSlot(equipedItemIndexes[8]);
  const garment = inventory.getItemInSlot(equipedItemIndexes[3]);
  const shoes = inventory.getItemInSlot(equipedItemIndexes[2]);
  const rightAcc = inventory.getItemInSlot(equipedItemIndexes[1]);
  const leftAcc = inventory.getItemInSlot(equipedItemIndexes[0]);

  return (
    <div className="p-4 rounded-md shadow-sm bg-gray-700 flex flex-col items-center">
      <h2 className="text-lg font-bold mb-2">Equipamentos</h2>
      {/* You can add more character details here if needed */}
      <div className="flex gap-2 mt-2">
        <div className="flex flex-col">
          <EquippedItem equippedItem={headTop} />
          <EquippedItem equippedItem={headLow} />
          <EquippedItem equippedItem={rightHand} />
          <EquippedItem equippedItem={garment} />
          <EquippedItem equippedItem={rightAcc} />
        </div>
        <div className="flex flex-col">
          <EquippedItem equippedItem={headMid} />
          <EquippedItem equippedItem={armor} />
          <EquippedItem equippedItem={leftHand} />
          <EquippedItem equippedItem={shoes} />
          <EquippedItem equippedItem={leftAcc} />
        </div>
      </div>
    </div>
  );
};

export default EquipmentList;

// InventorySlot.tsx
import ItemSpriteImage from "@/components/commonComponents/ItemSpriteImage";
import { equip_pos, ItemData } from "@/ragnarokData/ItemDB/types";
import React from "react";

interface InventorySlotProps {
  item?: ItemData;
  onClick?: () => void;
}

const InventorySlot: React.FC<InventorySlotProps> = ({ item, onClick }) => {
  return (
    <div
      className={`relative w-10 h-10 border border-gray-300 flex items-center justify-center ${
        item?.AegisName ? "cursor-pointer" : ""
      }
        ${
          item?.EquipPosWhenEquipped !== equip_pos.EQP_NONE ? "bg-blue-800" : ""
        }`}
      title={item ? item.getName() : "Empty Slot"}
      onClick={item?.AegisName ? onClick : () => {}}
    >
      {item ? <ItemSpriteImage itemId={item.nameid} /> : null}
      {item && item.Amount && item.Amount > 1 && (
        <div className="absolute bottom-0 right-0 text-xs text-white bg-black bg-opacity-50 px-0.5 rounded">
          {item.Amount}
        </div>
      )}
    </div>
  );
};

export default InventorySlot;

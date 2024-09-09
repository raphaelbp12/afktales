// InventoryListItem.tsx
import React from "react";
import { equip_pos, ItemData } from "@/ragnarokData/ItemDB/types";
import ItemSpriteImage from "@/components/commonComponents/ItemSpriteImage";

interface InventoryListItemProps {
  item: ItemData;
  onClick?: () => void;
}

const InventoryListItem: React.FC<InventoryListItemProps> = ({
  item,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center p-2 border border-gray-300 rounded-md ${
        item?.AegisName ? "cursor-pointer" : ""
      }
      ${
        item?.EquipPosWhenEquipped !== equip_pos.EQP_NONE ? "bg-blue-800" : ""
      }`}
      onClick={item?.AegisName ? onClick : () => {}}
    >
      <div className="flex">
        <div
          className={`relative w-10 h-10 flex items-center justify-center ${
            item?.AegisName ? "cursor-pointer" : ""
          }`}
          title={item ? item.getName() : "Empty Slot"}
        >
          {item ? <ItemSpriteImage itemId={item.nameid} /> : null}
          {item && item.Amount && item.Amount > 1 && (
            <div className="absolute bottom-0 right-0 text-xs text-white bg-black bg-opacity-50 px-0.5 rounded">
              {item.Amount}
            </div>
          )}
        </div>
        <div className="ml-4 flex flex-col justify-center">
          <h3 className="text-lg font-semibold">{item.getName()}</h3>
        </div>
      </div>
    </div>
  );
};

export default InventoryListItem;

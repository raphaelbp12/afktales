// ItemPanel.tsx
import React from "react";
import InventorySlot from "./InventorySlot";
import { ItemData } from "@/ragnarokData/ItemDB/types";

interface ItemPanelProps {
  item: ItemData;
}

const ItemPanel: React.FC<ItemPanelProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-center p-4">
      {/* Reuse InventorySlot to display the item image */}
      <InventorySlot item={item} />

      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold">{item.Name}</h2>
        <p className="text-gray-400">Amount: {item.Amount}</p>
        {/* Add more item details as needed */}
      </div>
    </div>
  );
};

export default ItemPanel;

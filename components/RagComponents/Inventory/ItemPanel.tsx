// ItemPanel.tsx
import React from "react";
import InventorySlot from "./InventorySlot";
import { ItemData } from "@/ragnarokData/ItemDB/types";
import { useItemDB } from "@/contexts/RagContexts.tsx/ItemDBContext";
import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";

interface ItemPanelProps {
  item: ItemData;
}

const ItemPanel: React.FC<ItemPanelProps> = ({ item }) => {
  const itemDB = useItemDB();
  const { addItemToStorage } = useAccountService();

  const handleAddItem = (amount: number = 1) => {
    const newItem = itemDB.getItemByNameid(item.nameid);
    if (newItem) {
      addItemToStorage(newItem, amount);
    } else {
      alert("Item not found!");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Reuse InventorySlot to display the item image */}
      <InventorySlot item={item} />

      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold">{item.Name}</h2>
        <p className="text-gray-400">Qauntidade: {item.Amount}</p>
        {/* Add more item details as needed */}
        <div className="flex gap-2">
          <button
            onClick={() => handleAddItem(1)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            +1
          </button>
          <button
            onClick={() => handleAddItem(10)}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            +10
          </button>
          <button
            onClick={() => handleAddItem(100)}
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md"
          >
            +100
          </button>
          {item.Amount && (
            <button
              onClick={() => handleAddItem(item.Amount)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
            >
              x2
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemPanel;

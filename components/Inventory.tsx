// components/Inventory.tsx
import React from "react";
import Image from "next/image";
import { useInventory } from "../contexts/inventoryContext";
import { Item } from "./item";
import Tooltip from "@mui/material/Tooltip"; // Use Tooltip from @mui/material

interface InventoryItem {
  item: Item;
  quantity: number;
}

const aggregateInventory = (inventory: { [key: string]: { item: Item, count: number } }): InventoryItem[] => {
  return Object.keys(inventory).map((itemName) => ({
    item: inventory[itemName].item,
    quantity: inventory[itemName].count,
  }));
};

const Inventory: React.FC = () => {
  const { inventory } = useInventory();
  const aggregatedInventory = aggregateInventory(inventory);

  return (
    <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 my-4">
      {aggregatedInventory.map((inventoryItem, index) => (
        <Tooltip
          key={index}
          title={`${inventoryItem.item.name} - Quantity: ${inventoryItem.quantity}`}
        >
          <div className="relative flex flex-col items-center w-12">
            <Image
              src={inventoryItem.item.src}
              alt={inventoryItem.item.name}
              width={48}
              height={48}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
              {inventoryItem.quantity}
            </span>
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default Inventory;

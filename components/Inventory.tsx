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

const aggregateInventory = (inventory: Item[]): InventoryItem[] => {
  const itemMap: { [key: string]: InventoryItem } = {};

  inventory.forEach((item) => {
    if (itemMap[item.name]) {
      itemMap[item.name].quantity += 1;
    } else {
      itemMap[item.name] = { item, quantity: 1 };
    }
  });

  return Object.values(itemMap);
};

const Inventory: React.FC = () => {
  const { inventory } = useInventory();
  const aggregatedInventory = aggregateInventory(inventory);

  return (
    <div className="grid grid-cols-12 gap-4 my-4">
      {aggregatedInventory.map((item, index) => (
        <Tooltip
          key={index}
          title={`${item.item.name} - Quantity: ${item.quantity}`}
        >
          <div className="relative flex flex-col items-center">
            <Image
              src={item.item.src}
              alt={item.item.name}
              width={50}
              height={50}
            />
            <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
              {item.quantity}
            </span>
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default Inventory;

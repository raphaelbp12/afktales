// components/Inventory.tsx

import React from "react";
import Image from "next/image";
import { Prize } from "./prizes";
import Tooltip from "@mui/material/Tooltip"; // Use Tooltip from @mui/material

interface InventoryProps {
  inventory: Prize[];
}

interface InventoryItem {
  prize: Prize;
  quantity: number;
}

const aggregateInventory = (inventory: Prize[]): InventoryItem[] => {
  const itemMap: { [key: string]: InventoryItem } = {};

  inventory.forEach(prize => {
    if (itemMap[prize.name]) {
      itemMap[prize.name].quantity += 1;
    } else {
      itemMap[prize.name] = { prize, quantity: 1 };
    }
  });

  return Object.values(itemMap);
};

const Inventory: React.FC<InventoryProps> = ({ inventory }) => {
  const aggregatedInventory = aggregateInventory(inventory);

  return (
    <div className="grid grid-cols-8 gap-2 mt-4">
      {aggregatedInventory.map((item, index) => (
        <Tooltip key={index} title={`${item.prize.name} - Quantity: ${item.quantity}`} arrow>
          <div className="relative flex flex-col items-center">
            <Image src={item.prize.src} alt={item.prize.name} width={50} height={50} />
              <span className="absolute top-0 right-0 px-1 text-xs font-bold text-white bg-red-600 rounded-full">
                {item.quantity}
              </span>
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default Inventory;

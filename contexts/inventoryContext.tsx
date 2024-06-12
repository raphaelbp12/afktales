// contexts/inventoryContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";
import { Item } from "../components/item";
import { useAlert } from "./alertContext";

interface InventoryContextProps {
  inventory: { [key: string]: { item: Item, count: number } };
  addToInventory: (items: Item[], chanceToShowAlert?: number) => void;
  clearInventory: () => void;
}

const InventoryContext = createContext<InventoryContextProps | undefined>(
  undefined
);

export const InventoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inventory, setInventory] = useState<{ [key: string]: { item: Item, count: number } }>({});
  const { addAlert, addAlertsFromItems } = useAlert();

  const addToInventory = (items: Item[], chanceToShowAlert: number = 0.1) => {
    setInventory((prevInventory) => {
      const newInventory = { ...prevInventory };
      items.forEach((item) => {
        if (newInventory[item.name]) {
          newInventory[item.name].count++;
        } else {
          newInventory[item.name] = { item, count: 1 };
        }
      });
      return newInventory;
    });

    const filteredItems = items.filter((item) => item.chance < chanceToShowAlert);
    addAlertsFromItems(filteredItems);
  };

  const clearInventory = () => {
    setInventory({});
  };

  return (
    <InventoryContext.Provider
      value={{ inventory, addToInventory, clearInventory }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = (): InventoryContextProps => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error("useInventory must be used within an InventoryProvider");
  }
  return context;
};

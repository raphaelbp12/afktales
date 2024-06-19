// contexts/inventoryContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";
import { Item } from "../components/item";
import { useAlert } from "./alertContext";

export type Inventory = { [key: string]: { item: Item; count: number } };

interface InventoryContextProps {
  inventory: Inventory;
  addToInventory: (items: Item[], chanceToShowAlert?: number) => void;
  clearInventory: () => void;
}

const InventoryContext = createContext<InventoryContextProps | undefined>(
  undefined
);

export const parseItemsToInventory = (items: Item[]): Inventory => {
  const inventory: Inventory = {};
  items.forEach((item) => {
    if (inventory[item.name]) {
      inventory[item.name].count++;
    } else {
      inventory[item.name] = { item, count: 1 };
    }
  });
  return inventory;
}

export const InventoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inventory, setInventory] = useState<Inventory>({});
  const { addAlert, addAlertsFromItems } = useAlert();

  const addToInventory = (items: Item[], chanceToShowAlert: number = 0.1) => {
    const newInventory = { ...inventory };
    items.forEach((item) => {
      if (newInventory[item.name]) {
        newInventory[item.name].count++;
      } else {
        newInventory[item.name] = { item, count: 1 };
      }
    });

    setInventory(newInventory);

    const filteredItems = items.filter(
      (item) => item.chance < chanceToShowAlert
    );
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

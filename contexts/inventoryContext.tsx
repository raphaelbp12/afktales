// contexts/inventoryContext.tsx
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Item } from "../components/item";
import { useAlert } from "./alertContext";

interface InventoryContextProps {
  inventory: Item[];
  addToInventory: (item: Item) => void;
  clearInventory: () => void;
}

const InventoryContext = createContext<InventoryContextProps | undefined>(
  undefined
);

export const InventoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inventory, setInventory] = useState<Item[]>([]);
  const { addAlert } = useAlert();

  const addToInventory = (item: Item) => {
    setInventory((prevInventory) => [...prevInventory, item]);
    if (item.chance <= 0.1) {
      addAlert(`${item.name} (${item.chance * 100}%)`, item.src);
    }
  };

  const clearInventory = () => {
    setInventory([]);
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

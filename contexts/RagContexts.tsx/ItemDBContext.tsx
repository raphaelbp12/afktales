"use client";
// ItemDBContext.tsx
import React, { createContext, ReactNode, useContext, useMemo } from "react";
import { ItemDB } from "@/ragnarokData/ItemDB/ItemDB";

interface ItemDBContextValue {
  itemDB: ItemDB;
}

const ItemDBContext = createContext<ItemDBContextValue | undefined>(undefined);

export const ItemDBProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initialize the ItemDB instance once
  const itemDB = useMemo(() => new ItemDB(), []);

  return (
    <ItemDBContext.Provider value={{ itemDB }}>
      {children}
    </ItemDBContext.Provider>
  );
};

export const useItemDB = (): ItemDB => {
  const context = useContext(ItemDBContext);
  if (!context) {
    throw new Error("useItemDB must be used within an ItemDBProvider");
  }
  return context.itemDB;
};

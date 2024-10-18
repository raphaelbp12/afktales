"use client";
// ItemDBContext.tsx
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ItemDB } from "@/ragnarokData/ItemDB/ItemDB";

interface ItemDBContextValue {
  itemDB: ItemDB | null;
  loading: boolean;
  error: string | null;
}

const ItemDBContext = createContext<ItemDBContextValue | undefined>(undefined);

export const ItemDBProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [itemDB, setItemDB] = useState<ItemDB | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // Initialize the ItemDB instance once

  useEffect(() => {
    let isMounted = true;

    async function initializeAccountService() {
      try {
        const service = await ItemDB.create();
        if (isMounted) {
          setItemDB(service);
          setLoading(false); // Loading is false after the service is initialized
        }
      } catch (err) {
        if (isMounted) {
          console.error("Failed to initialize itemDB", err);
          setError("Failed to initialize itemDB");
          setLoading(false);
        }
      }
    }

    initializeAccountService();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ItemDBContext.Provider value={{ itemDB, loading, error }}>
      {children}
    </ItemDBContext.Provider>
  );
};

export const useItemDB = (): ItemDBContextValue => {
  const context = useContext(ItemDBContext);
  if (!context) {
    throw new Error("useItemDB must be used within an ItemDBProvider");
  }
  return {
    itemDB: context.itemDB,
    loading: context.loading,
    error: context.error,
  };
};

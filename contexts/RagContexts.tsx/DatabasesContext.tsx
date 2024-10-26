"use client";
// DatabasesContext.tsx
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Databases } from "@/ragnarokData/Database/Databases";

interface DatabasesContextValue {
  databases: Databases | null;
  loading: boolean;
  error: string | null;
}

const DatabasesContext = createContext<DatabasesContextValue | undefined>(
  undefined
);

export const DatabasesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [databases, setDatabases] = useState<Databases | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function initializeDatabases() {
      try {
        console.log("DatabasesProvider: initializeDatabases");
        if (isMounted) {
          const dbs = await Databases.create();
          setDatabases(dbs);
          setLoading(false); // Loading is false after the service is initialized
        }
      } catch (err) {
        if (isMounted) {
          console.error("Failed to initialize databases", err);
          setError("Failed to initialize databases");
          setLoading(false);
        }
      }
    }

    initializeDatabases();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <DatabasesContext.Provider value={{ databases, loading, error }}>
      {children}
    </DatabasesContext.Provider>
  );
};

export const useDatabases = (): DatabasesContextValue => {
  const context = useContext(DatabasesContext);
  if (!context) {
    throw new Error("useDatabases must be used within an DatabasesProvider");
  }
  return {
    databases: context.databases,
    loading: context.loading,
    error: context.error,
  };
};

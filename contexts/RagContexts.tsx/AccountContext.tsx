"use client";
// AccountContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { PlayerAttributes } from "@/ragnarokData/PlayerCharacter/PlayerAttributes";
import { Inventory } from "@/ragnarokData/PlayerCharacter/Inventory";
import { AccountService } from "@/services/Account/AccountService";
import { ItemData } from "@/ragnarokData/ItemDB/types";

interface AccountContextValue {
  characters: PlayerAttributes[];
  storage: Inventory | null;
  loading: boolean;
  error: string | null;
  createCharacter: (name: string) => Promise<void>;
  deleteCharacter: (index: number) => Promise<void>;
  updateCharacter: (
    index: number,
    key: keyof PlayerAttributes,
    value: any
  ) => Promise<void>;
  addItemToStorage: (item: ItemData, amount?: number) => void;
  addItemToPlayerInventory: (
    playerIndex: number,
    item: ItemData,
    amount?: number
  ) => Promise<void>;
  moveItemFromStorageToPlayer: (
    slotIndex: number,
    playerIndex: number
  ) => Promise<void>;
  moveItemFromPlayerToStorage: (
    playerIndex: number,
    slotIndex: number
  ) => Promise<void>;
  equipItem: (playerIndex: number, inventorySlot: number) => Promise<void>;
  unequipItem: (playerIndex: number, inventorySlot: number) => Promise<void>;
  serializeAccount: () => string;
  deserializeAccount: (data: string) => void;
  saveAccountToLocalStorage: (saveName: string) => string;
  loadAccountFromLocalStorage: (saveName: string) => void;
  deleteSaveFromLocalStorage: (saveName: string) => void;
  nextAutoSaveInSeconds: number;
  reloadCharacters: () => Promise<void>;
  reloadStorage: () => Promise<void>;
}

const AccountContext = createContext<AccountContextValue | undefined>(
  undefined
);

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const [characters, setCharacters] = useState<PlayerAttributes[]>([]);
  const [storage, setStorage] = useState<Inventory | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [nextAutoSaveInSeconds, setNextAutoSaveInSeconds] =
    useState<number>(30); // Countdown timer

  const accountService = useMemo(() => new AccountService(), []);

  // Load characters and storage
  const loadCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedCharacters = await accountService.fetchCharacters();
      setCharacters(fetchedCharacters);
    } catch (err) {
      setError("Failed to load characters");
    } finally {
      setLoading(false);
    }
  }, [accountService]);

  const loadStorage = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedStorage = await accountService.fetchStorage();
      setStorage(fetchedStorage);
    } catch (err) {
      setError("Failed to load storage");
    } finally {
      setLoading(false);
    }
  }, [accountService]);

  const createCharacter = useCallback(
    async (name: string) => {
      setLoading(true);
      setError(null);
      try {
        await accountService.createCharacter(name);
      } catch (err) {
        setError("Failed to create character");
      } finally {
        setLoading(false);
        loadCharacters();
      }
    },
    [accountService, loadCharacters]
  );

  const deleteCharacter = useCallback(
    async (index: number) => {
      setLoading(true);
      setError(null);
      try {
        await accountService.deleteCharacter(index);
      } catch (err) {
        setError("Failed to delete character");
      } finally {
        setLoading(false);
        loadCharacters();
      }
    },
    [accountService, loadCharacters]
  );

  const updateCharacter = useCallback(
    async (index: number, key: keyof PlayerAttributes, value: any) => {
      setLoading(true);
      setError(null);
      try {
        const updatedCharacter = await accountService.updateCharacter(
          index,
          key,
          value
        );
      } catch (err) {
        setError("Failed to update character");
      } finally {
        setLoading(false);
        loadCharacters();
      }
    },
    [accountService, loadCharacters]
  );

  const addItemToStorage = useCallback(
    (item: ItemData, amount: number = 1) => {
      accountService.addItemToStorage(item, amount);
      loadStorage();
    },
    [accountService, loadStorage]
  );

  const addItemToPlayerInventory = useCallback(
    async (playerIndex: number, item: ItemData, amount: number = 1) => {
      try {
        await accountService.addItemToPlayerInventory(
          playerIndex,
          item,
          amount
        );
        loadCharacters();
      } catch (err) {
        console.error("Failed to add item to player inventory:", err);
      }
    },
    [accountService, loadCharacters]
  );

  const moveItemFromStorageToPlayer = useCallback(
    async (slotIndex: number, playerIndex: number) => {
      try {
        await accountService.moveItemFromStorageToPlayer(
          slotIndex,
          playerIndex
        );
        loadStorage();
        loadCharacters();
      } catch (err) {
        console.error("Failed to move item from storage to player:", err);
      }
    },
    [accountService, loadStorage, loadCharacters]
  );

  const moveItemFromPlayerToStorage = useCallback(
    async (playerIndex: number, slotIndex: number) => {
      try {
        await accountService.moveItemFromPlayerToStorage(
          playerIndex,
          slotIndex
        );
        loadStorage();
        loadCharacters();
      } catch (err) {
        console.error("Failed to move item from player to storage:", err);
      }
    },
    [accountService, loadStorage, loadCharacters]
  );

  const equipItem = useCallback(
    async (playerIndex: number, inventorySlot: number) => {
      try {
        await accountService.equipItemInPlayerInventory(
          playerIndex,
          inventorySlot
        );
        loadCharacters(); // Refresh characters to reflect the equipped item
      } catch (err) {
        console.error("Failed to equip item:", err);
      }
    },
    [accountService, loadCharacters]
  );

  const unequipItem = useCallback(
    async (playerIndex: number, inventorySlot: number) => {
      try {
        await accountService.unequipItemFromPlayer(playerIndex, inventorySlot);
        loadCharacters(); // Refresh characters to reflect the unequipped item
      } catch (err) {
        console.error("Failed to unequip item:", err);
      }
    },
    [accountService, loadCharacters]
  );

  const serializeAccount = useCallback(() => {
    return accountService.serializeAccount();
  }, [accountService]);

  const deserializeAccount = useCallback(
    (data: string) => {
      accountService.deserializeAccount(data);
      loadCharacters();
      loadStorage();
    },
    [accountService, loadCharacters, loadStorage]
  );

  const saveAccountToLocalStorage = useCallback(
    (saveName: string) => {
      const serializedData = accountService.serializeAccount();
      localStorage.setItem(`account_${saveName}`, serializedData);
      return serializedData;
    },
    [accountService]
  );

  const loadAccountFromLocalStorage = useCallback(
    (saveName: string) => {
      const storedData = localStorage.getItem(`account_${saveName}`);
      if (storedData) {
        deserializeAccount(storedData);
      } else {
        console.error(`No save found with name: ${saveName}`);
      }
    },
    [deserializeAccount]
  );

  const deleteSaveFromLocalStorage = useCallback((saveName: string) => {
    localStorage.removeItem(`account_${saveName}`);
  }, []);

  // Auto-save mechanism
  useEffect(() => {
    if (!firstLoad) {
      setFirstLoad(true);
      loadAccountFromLocalStorage("autosave");
    }
    const intervalId = setInterval(() => {
      setNextAutoSaveInSeconds((prev) => (prev > 0 ? prev - 1 : 30));
      if (nextAutoSaveInSeconds === 1) {
        saveAccountToLocalStorage("autosave");
      }
    }, 1000);

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [
    firstLoad,
    loadAccountFromLocalStorage,
    nextAutoSaveInSeconds,
    saveAccountToLocalStorage,
  ]);

  useEffect(() => {
    loadCharacters();
    loadStorage();
  }, [loadCharacters, loadStorage]);

  return (
    <AccountContext.Provider
      value={{
        characters,
        storage,
        loading,
        error,
        createCharacter,
        deleteCharacter,
        updateCharacter,
        addItemToStorage,
        addItemToPlayerInventory,
        moveItemFromStorageToPlayer,
        moveItemFromPlayerToStorage,
        reloadCharacters: loadCharacters,
        reloadStorage: loadStorage,
        equipItem,
        unequipItem,
        serializeAccount,
        deserializeAccount,
        saveAccountToLocalStorage,
        loadAccountFromLocalStorage,
        deleteSaveFromLocalStorage,
        nextAutoSaveInSeconds,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountService = (): AccountContextValue => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAccountService must be used within an AccountProvider");
  }
  return context;
};

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
import { ClassesEnum } from "@/ragnarokData/PlayerCharacter/ClassesEnum";
import { useItemDB } from "./ItemDBContext";

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
  setRefineLevelToItem: (
    playerIndex: number,
    guid: string,
    refineLevel: number
  ) => Promise<boolean>;
  setJobClass: (playerIndex: number, newJob: ClassesEnum) => Promise<void>;
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
  insertCardIntoEquipment: (
    playerIndex: number,
    cardInvSlot: number,
    equipInvSlot: number
  ) => Promise<void>;
}

const AccountContext = createContext<AccountContextValue | undefined>(
  undefined
);

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { itemDB, loading: loadingItemDB, error: errorItemDB } = useItemDB();
  const [accountService, setAccountService] = useState<AccountService | null>(
    null
  );
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const [characters, setCharacters] = useState<PlayerAttributes[]>([]);
  const [storage, setStorage] = useState<Inventory | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [nextAutoSaveInSeconds, setNextAutoSaveInSeconds] =
    useState<number>(30); // Countdown timer

  useEffect(() => {
    let isMounted = true;

    if (!itemDB) {
      return;
    }

    async function initializeAccountService() {
      try {
        const service = await AccountService.create(itemDB!);
        if (isMounted) {
          setAccountService(service);
          setLoading(false); // Loading is false after the service is initialized
        }
      } catch (err) {
        if (isMounted) {
          console.error("Failed to initialize account service", err);
          setError("Failed to initialize account service");
          setLoading(false);
        }
      }
    }

    initializeAccountService();

    return () => {
      isMounted = false;
    };
  }, [itemDB]);

  // Load characters and storage
  const loadCharacters = useCallback(async () => {
    if (!accountService) return;
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
    if (!accountService) return;
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
      if (!accountService) return;
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
      if (!accountService) return;
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
      if (!accountService) return;
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
      if (!accountService) return;
      accountService.addItemToStorage(item, amount);
      loadStorage();
    },
    [accountService, loadStorage]
  );

  const setRefineLevelToItem = useCallback(
    async (playerIndex: number, guid: string, refineLevel: number) => {
      if (!accountService) return false;
      try {
        const succeeded = await accountService.setRefineLevelToItem(
          playerIndex,
          guid,
          refineLevel
        );
        loadCharacters();
        return Promise.resolve(succeeded);
      } catch (err) {
        console.error("Failed to set RefineLevel to item", err);
        return Promise.reject(err);
      }
    },
    [accountService, loadCharacters]
  );

  const setJobClass = useCallback(
    async (playerIndex: number, newJob: ClassesEnum) => {
      if (!accountService) return;
      try {
        await accountService.setJobClass(playerIndex, newJob);
        loadCharacters();
        return Promise.resolve();
      } catch (err) {
        console.error("Failed to set JobClass to player", err);
        return Promise.reject(err);
      }
    },
    [accountService, loadCharacters]
  );

  const addItemToPlayerInventory = useCallback(
    async (playerIndex: number, item: ItemData, amount: number = 1) => {
      if (!accountService) return;
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
      if (!accountService) return;
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
      if (!accountService) return;
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
      if (!accountService) return;
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
      if (!accountService) return;
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
    if (!accountService) return "";
    return accountService.serializeAccount();
  }, [accountService]);

  const deserializeAccount = useCallback(
    async (data: string) => {
      if (!itemDB) return;
      if (!accountService) return;
      await accountService.deserializeAccount(itemDB, data);
      if (!firstLoad) {
        setFirstLoad(true);
      }
      loadCharacters();
      loadStorage();
    },
    [accountService, firstLoad, itemDB, loadCharacters, loadStorage]
  );

  const saveAccountToLocalStorage = useCallback(
    (saveName: string) => {
      if (!accountService) return "";
      const serializedData = accountService.serializeAccount();
      localStorage.setItem(`account_${saveName}`, serializedData);
      return serializedData;
    },
    [accountService]
  );

  const loadAccountFromLocalStorage = useCallback(
    async (saveName: string) => {
      const storedData = localStorage.getItem(`account_${saveName}`);
      if (storedData) {
        await deserializeAccount(storedData);
      } else {
        console.error(`No save found with name: ${saveName}`);
        await deserializeAccount(""); // Reset the account if no save is found
      }
    },
    [deserializeAccount]
  );

  const deleteSaveFromLocalStorage = useCallback((saveName: string) => {
    localStorage.removeItem(`account_${saveName}`);
  }, []);

  const insertCardIntoEquipment = useCallback(
    async (playerIndex: number, cardInvSlot: number, equipInvSlot: number) => {
      if (!accountService) return;
      try {
        await accountService.insertCardIntoEquipment(
          playerIndex,
          cardInvSlot,
          equipInvSlot
        );
        await loadCharacters(); // Reload characters to update the state
      } catch (err) {
        console.error("Failed to insert card into equipment:", err);
      }
    },
    [accountService, loadCharacters]
  );

  // Auto-save mechanism
  useEffect(() => {
    if (accountService && !firstLoad) {
      loadAccountFromLocalStorage("autosave");
    }
  }, [accountService, firstLoad, loadAccountFromLocalStorage]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNextAutoSaveInSeconds((prev) => (prev > 0 ? prev - 1 : 30));
      if (nextAutoSaveInSeconds === 1) {
        saveAccountToLocalStorage("autosave");
      }
    }, 1000);
    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [
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
        setRefineLevelToItem,
        setJobClass,
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
        insertCardIntoEquipment,
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

// ItemPanel.tsx
import React from "react";
import InventorySlot from "./InventorySlot";
import { ItemData } from "@/ragnarokData/ItemDB/types";
import { useItemDB } from "@/contexts/RagContexts.tsx/ItemDBContext";
import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";

interface ItemPanelProps {
  item: ItemData;
  slotIndex: number;
  characterId?: number;
  isPlayerInventory?: boolean;
}

const ItemPanel: React.FC<ItemPanelProps> = ({
  item,
  slotIndex,
  characterId,
  isPlayerInventory,
}) => {
  const itemDB = useItemDB();
  const {
    addItemToStorage,
    moveItemFromStorageToPlayer,
    moveItemFromPlayerToStorage,
    equipItem,
    unequipItem,
  } = useAccountService();

  const handleAddItem = (amount: number = 1) => {
    const newItem = itemDB.getItemByNameid(item.nameid);
    if (newItem) {
      addItemToStorage(newItem, amount);
    } else {
      alert("Item not found!");
    }
  };

  const handleTakeItem = () => {
    if (isPlayerInventory) return;
    if (!characterId) return;
    moveItemFromStorageToPlayer(slotIndex, characterId);
  };

  const handleStoreItem = () => {
    if (!isPlayerInventory) return;
    if (!characterId) return;
    moveItemFromPlayerToStorage(characterId, slotIndex);
  };

  const handleEquip = async () => {
    if (!isPlayerInventory) return;
    if (!characterId) return;
    try {
      await equipItem(characterId, slotIndex);
      console.log("Item equipped!");
    } catch (error) {
      console.error("Failed to equip item:", error);
    }
  };

  const handleUnequip = async () => {
    if (!isPlayerInventory) return;
    if (!characterId) return;
    try {
      await unequipItem(characterId, slotIndex);
      console.log("Item unequipped!");
    } catch (error) {
      console.error("Failed to unequip item:", error);
    }
  };

  if (!item) return null;

  return (
    <div className="flex flex-col items-center p-4">
      {/* Reuse InventorySlot to display the item image */}
      <InventorySlot item={item} />

      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold">{item.getName()}</h2>
        <p className="text-gray-400 text-sm">Id: {item.nameid}</p>
        <p className="text-gray-400 text-sm">
          Equiped: {item.EquipPosWhenEquipped}
        </p>
        <p className="text-gray-400">Quantidade: {item.Amount}</p>
        {/* Add more item details as needed */}
        <div className="flex gap-2">
          <button
            onClick={() => handleAddItem(1)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            +1
          </button>
          <button
            onClick={() => handleAddItem(10)}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            +10
          </button>
          <button
            onClick={() => handleAddItem(100)}
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md"
          >
            +100
          </button>
          {item.Amount && (
            <button
              onClick={() => handleAddItem(item.Amount)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
            >
              x2
            </button>
          )}
        </div>
        {characterId && (
          <>
            <div>
              <button
                onClick={() => handleTakeItem()}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md"
              >
                Pegar
              </button>
            </div>
            <div>
              <button
                onClick={() => handleStoreItem()}
                className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md"
              >
                Armazenar
              </button>
            </div>
            <div>
              <button
                onClick={() => handleEquip()}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Equipar
              </button>
            </div>
            <div>
              <button
                onClick={() => handleUnequip()}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Desequipar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemPanel;

// ItemPanel.tsx
import React, { useState, useEffect } from "react";
import InventorySlot from "./InventorySlot";
import { ItemData, equip_pos } from "@/ragnarokData/ItemDB/types";
import { useItemDB } from "@/contexts/RagContexts.tsx/ItemDBContext";
import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import ItemDropdownSelector from "@/components/commonComponents/ItemDropdownSelector";
import InventoryListItem from "./InventoryListItem";
import DropdownSelector from "@/components/commonComponents/DropdownSelector";

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
    setRefineLevelToItem,
    addItemToStorage,
    moveItemFromStorageToPlayer,
    moveItemFromPlayerToStorage,
    equipItem,
    unequipItem,
    insertCardIntoEquipment,
    characters,
  } = useAccountService();

  const [selectedItemGuid, setSelectedItemGuid] = useState<string | null>(null);

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

  const handleEquipCard = async (equipGuid: string) => {
    console.log("Equip card", equipGuid);
    if (!isPlayerInventory) return;
    if (!characterId) return;
    if (!character) return;
    try {
      const equipInvSlot = character.inventory.getSlotByGuid(equipGuid);
      await insertCardIntoEquipment(characterId, slotIndex, equipInvSlot);
      console.log("Item equipped!");
    } catch (error) {
      console.error("Failed to equip item:", error);
    }
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

  const handleSetRefineLevel = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!isPlayerInventory) return;
    if (!characterId) return;
    const value = event.target.value;
    try {
      await setRefineLevelToItem(characterId, item.guid, parseInt(value));
      console.log("Refine level set!");
    } catch (error) {
      console.error("Failed to set refine level:", error);
    }
  };

  // Access character inventory
  const character = characterId !== undefined ? characters[characterId] : null;

  // Filter inventory items based on equip position
  const filteredItems =
    character?.inventory.filterEquipsToReceiveCard(slotIndex) ?? [];

  // Handle item selection from dropdown
  const handleItemSelected = (value: ItemData[keyof ItemData] | null) => {
    const selectedGuid = value as string;
    setSelectedItemGuid(selectedGuid);
  };

  if (!item) return null;

  return (
    <div className="flex flex-col items-center p-4">
      {/* Reuse InventorySlot to display the item image */}

      <div className="flex flex-row mt-4 max-w-96 flex-wrap">
        <div className="flex-col">
          <InventorySlot item={item} />
          <h2 className="text-xl font-bold">{item.getName()}</h2>
          <p className="text-gray-400 text-sm">Id: {item.nameid}</p>
          <p className="text-gray-400 text-sm">
            Equiped: {item.EquipPosWhenEquipped}
          </p>
          <p className="text-gray-400">Quantidade: {item.Amount}</p>
          {character &&
            item.isEquip() &&
            item.Slots &&
            item.Slots > 0 &&
            character.inventory
              .getCardsInEquip(item.guid)
              .map((cardItem, index) => (
                <InventoryListItem key={index} item={cardItem} />
              ))}
          {item.isRefinable() && item.isEquip() && (
            <DropdownSelector
              id="refineLevelSelect"
              label="Refinar"
              value={item.getRefineLevel()}
              options={Array.apply(null, Array(11)).map((_, index) => ({
                value: index,
                label: `+${index.toString()}`,
              }))}
              onChange={handleSetRefineLevel}
            />
          )}
        </div>
        <div>
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
                {!isPlayerInventory && (
                  <button
                    onClick={() => handleTakeItem()}
                    className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md"
                  >
                    Pegar
                  </button>
                )}
              </div>
              {isPlayerInventory && (
                <>
                  <div>
                    <button
                      onClick={() => handleStoreItem()}
                      className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md"
                    >
                      Armazenar
                    </button>
                  </div>
                  {item.isEquip() &&
                    (item.isEquipped() ? (
                      <div>
                        <button
                          onClick={() => handleUnequip()}
                          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
                        >
                          Desequipar
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={() => handleEquip()}
                          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                        >
                          Equipar
                        </button>
                      </div>
                    ))}
                </>
              )}
            </>
          )}
        </div>

        {isPlayerInventory && item.isCard() && (
          <div className="flex gap-2 mt-4">
            <ItemDropdownSelector
              id="item-selector"
              label="Usar carta"
              selectedItemValue={selectedItemGuid}
              items={filteredItems}
              onChange={handleItemSelected}
              optionValueKey={"guid"}
            />
            <button
              disabled={!selectedItemGuid}
              onClick={() => handleEquipCard(selectedItemGuid!)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Equipar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemPanel;

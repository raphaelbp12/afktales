import React, { useState, useRef } from "react";
import InventorySlot from "./InventorySlot";
import Modal from "@/components/commonComponents/Modal";
import { Inventory } from "@/ragnarokData/PlayerCharacter/Inventory";
import { equip_pos, ItemData } from "@/ragnarokData/ItemDB/types";
import ItemPanel from "./ItemPanel";
import AddItemPanel from "./AddItemPanel";
import InventoryListItem from "./InventoryListItem";
import ViewToggle from "@/components/commonComponents/ViewToggle";
import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";

interface InventoryGridProps {
  title: string;
  characterId?: number;
  inventory: Inventory;
  columns: number;
  isPlayerInventory: boolean;
}

const InventoryGrid: React.FC<InventoryGridProps> = ({
  title,
  characterId,
  inventory,
  columns,
  isPlayerInventory,
}) => {
  const { moveItemFromStorageToPlayer, equipItem, unequipItem } =
    useAccountService();
  const [selectedSlotIndex, setSelectedSlotIndex] = useState<number | null>(
    null
  );
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null); // To store the timeout ID

  const inventoryItems = inventory.getItems(); // Assuming getItems returns an array of items

  const handleSlotClick = (slotIndex: number) => {
    console.log("Slot clicked", slotIndex);
    setSelectedSlotIndex(slotIndex);
  };

  const handleDoubleClick = (item: ItemData, slotIndex: number) => {
    console.log("Slot double-clicked", slotIndex);
    // Implement your double-click action here
    if (!isPlayerInventory && characterId) {
      moveItemFromStorageToPlayer(slotIndex, characterId);
      return;
    }

    if (!characterId) return;

    if (item.EquipPosWhenEquipped !== equip_pos.EQP_NONE) {
      unequipItem(characterId, slotIndex);
    } else {
      equipItem(characterId, slotIndex);
    }
  };

  const handleClick = (item: ItemData, slotIndex: number) => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
      handleDoubleClick(item, slotIndex);
    } else {
      clickTimeout.current = setTimeout(() => {
        handleSlotClick(slotIndex);
        clickTimeout.current = null;
      }, 250); // 250ms threshold to detect double-click
    }
  };

  const closeModal = () => {
    setSelectedSlotIndex(null);
  };

  const toggleView = () => {
    setIsGridView((prev) => !prev);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          {title}{" "}
          <span className="text-gray-400 text-sm">
            ({inventory.getCurrentLength()}/{inventory.getMaxLength()})
          </span>
        </h2>
        <ViewToggle isGridView={isGridView} toggleView={toggleView} />
      </div>

      {isGridView ? (
        <div
          className="grid gap-0"
          style={{
            gridTemplateColumns: `repeat(${columns}, 40px)`,
          }}
        >
          {inventoryItems.map((item, index) => (
            <InventorySlot
              key={`${index}-${item.nameid}-${item.EquipPosWhenEquipped}`}
              item={item}
              onClick={() => handleClick(item, index)} // Detect both single and double clicks
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {inventoryItems
            .filter((item) => item.nameid !== 0)
            .map((item, index) => (
              <InventoryListItem
                key={`${index}-${item.nameid}-${item.EquipPosWhenEquipped}`}
                item={item}
                onClick={() => handleClick(item, index)} // Detect both single and double clicks
              />
            ))}
        </div>
      )}

      <Modal isOpen={selectedSlotIndex !== null} onClose={closeModal}>
        {selectedSlotIndex !== null && (
          <ItemPanel
            item={inventory.getItemInSlot(selectedSlotIndex)!}
            slotIndex={selectedSlotIndex}
            characterId={characterId}
            isPlayerInventory={isPlayerInventory}
          />
        )}
      </Modal>
    </div>
  );
};

export default InventoryGrid;

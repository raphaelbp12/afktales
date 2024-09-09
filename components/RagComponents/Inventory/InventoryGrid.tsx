// InventoryGrid.tsx
import React, { useState } from "react";
import InventorySlot from "./InventorySlot";
import Modal from "@/components/commonComponents/Modal";
import { Inventory } from "@/ragnarokData/PlayerCharacter/Inventory";
import { ItemData } from "@/ragnarokData/ItemDB/types";
import ItemPanel from "./ItemPanel";
import AddItemPanel from "./AddItemPanel";
import InventoryListItem from "./InventoryListItem";
import ViewToggle from "@/components/commonComponents/ViewToggle";

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
  const [selectedSlotIndex, setSelectedSlotIndex] = useState<number | null>(
    null
  );
  const [isGridView, setIsGridView] = useState<boolean>(true);

  const inventoryItems = inventory.getItems(); // Assuming getItems returns an array of items

  const handleSlotClick = (slotIndex: number) => {
    console.log("Slot clicked", slotIndex);
    setSelectedSlotIndex(slotIndex);
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
              onClick={() => handleSlotClick(index)}
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
                onClick={() => handleSlotClick(index)}
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

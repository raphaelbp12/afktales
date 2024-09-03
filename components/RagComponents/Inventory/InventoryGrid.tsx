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
  inventory: Inventory;
  columns: number;
}

const InventoryGrid: React.FC<InventoryGridProps> = ({
  inventory,
  columns,
}) => {
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);
  const [isGridView, setIsGridView] = useState<boolean>(true);

  const inventoryItems = inventory.getItems(); // Assuming getItems returns an array of items

  const handleSlotClick = (item: ItemData) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const toggleView = () => {
    setIsGridView((prev) => !prev);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Inventory</h2>
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
              key={index}
              item={item}
              onClick={() => handleSlotClick(item)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {inventoryItems
            .filter((item) => item.nameid !== 0)
            .map((item, index) => (
              <InventoryListItem
                key={index}
                item={item}
                onClick={() => handleSlotClick(item)}
              />
            ))}
        </div>
      )}

      <Modal isOpen={!!selectedItem} onClose={closeModal}>
        {selectedItem && <ItemPanel item={selectedItem} />}
      </Modal>
    </div>
  );
};

export default InventoryGrid;

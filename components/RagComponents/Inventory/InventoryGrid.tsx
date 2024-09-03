// InventoryGrid.tsx
import React, { useState } from "react";
import InventorySlot from "./InventorySlot";
import Modal from "@/components/commonComponents/Modal";
import { Inventory } from "@/ragnarokData/PlayerCharacter/Inventory";
import { ItemData } from "@/ragnarokData/ItemDB/types";
import ItemPanel from "./ItemPanel";
import AddItemPanel from "./AddItemPanel";

interface InventoryGridProps {
  inventory: Inventory;
  columns: number;
}

const InventoryGrid: React.FC<InventoryGridProps> = ({
  inventory,
  columns,
}) => {
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);
  const [openAddItemModal, setOpenAddItemModal] = useState<boolean>(false);

  const inventoryItems = inventory.getItems(); // Assuming getItems returns an array of items

  const handleSlotClick = (item: ItemData) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <button
        onClick={() => setOpenAddItemModal(true)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add Item
      </button>
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

      <Modal isOpen={!!selectedItem} onClose={closeModal}>
        {selectedItem && <ItemPanel item={selectedItem} />}
      </Modal>

      <Modal
        isOpen={openAddItemModal}
        onClose={() => {
          setOpenAddItemModal(false);
        }}
      >
        <AddItemPanel />
      </Modal>
    </div>
  );
};

export default InventoryGrid;

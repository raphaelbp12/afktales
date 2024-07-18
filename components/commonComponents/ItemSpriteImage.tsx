import React from "react";
import SpriteImage from "./SpriteImage";

type ItemSpriteImageProps = {
  itemId: number;
};

const ItemSpriteImage: React.FC<ItemSpriteImageProps> = ({ itemId }) => {
  const spriteSheetPath = "/images/sprite_sheet.png"; // Update this path
  const itemSize = 24; // Size of each item in the sprite sheet
  const columns = 179; // Number of columns in the sprite sheet (update accordingly)

  return (
    <SpriteImage
      itemId={itemId}
      spriteSheet={spriteSheetPath}
      itemSize={itemSize}
      columns={columns}
    />
  );
};

export default ItemSpriteImage;

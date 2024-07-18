import React from "react";

type SpriteImageProps = {
  itemId: number;
  spriteSheet: string; // Path to the sprite sheet image
  itemSize: number; // Size of each item in the sprite sheet (e.g., 24 for 24x24)
  columns: number; // Number of columns in the sprite sheet
};

const SpriteImage: React.FC<SpriteImageProps> = ({
  itemId,
  spriteSheet,
  itemSize,
  columns,
}) => {
  const col = (itemId - 1) % columns;
  const row = Math.floor((itemId - 1) / columns);
  const x = col * itemSize;
  const y = row * itemSize;

  return (
    <div
      about={`Item ${itemId}`}
      className="bg-no-repeat"
      style={{
        backgroundImage: `url(${spriteSheet})`,
        backgroundPosition: `-${x}px -${y}px`,
        width: `${itemSize}px`,
        height: `${itemSize}px`,
      }}
    />
  );
};

export default SpriteImage;

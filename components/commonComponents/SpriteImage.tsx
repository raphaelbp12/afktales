import React from "react";

type SpriteImageProps = {
  itemId: number;
  spriteSheet: string; // Path to the sprite sheet image
  itemSize: number; // Original size of each item in the sprite sheet (e.g., 24 for 24x24)
  columns: number; // Number of columns in the sprite sheet
  width?: number; // Desired output width
  height?: number; // Desired output height
};

const SpriteImage: React.FC<SpriteImageProps> = ({
  itemId,
  spriteSheet,
  itemSize,
  columns,
  width,
  height,
}) => {
  const col = (itemId - 1) % columns;
  const row = Math.floor((itemId - 1) / columns);

  // Use provided width and height, defaulting to itemSize if not specified
  const outputWidth = width || itemSize;
  const outputHeight = height || itemSize;

  // Calculate the scaled background size
  const backgroundSize = `${columns * outputWidth}px auto`;

  // Calculate the background position to display the correct sprite
  const backgroundPosition = `-${col * outputWidth}px -${row * outputHeight}px`;

  return (
    <div
      about={`Item ${itemId}`}
      className="bg-no-repeat"
      style={{
        backgroundImage: `url(${spriteSheet})`,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        width: `${outputWidth}px`,
        height: `${outputHeight}px`,
      }}
    />
  );
};

export default SpriteImage;

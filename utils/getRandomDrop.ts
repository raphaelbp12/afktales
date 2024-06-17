// utils/getRandomDrop.ts
import { Item } from "../components/item";
import { drops } from "../components/drops";

export function getRandomDrop(enemyName: string, dropsMultiplier: number = 1.0): Item[] {
  const droppedItems: Item[] = [];
  drops.forEach((drop: Item) => {
    if (Math.random() < drop.chance * dropsMultiplier) {
      droppedItems.push({
        ...drop,
        name: `${drop.name} de ${enemyName}`,
        chance: drop.chance * dropsMultiplier,
      });
    }
  });
  return droppedItems;
}

// utils/getRandomDrop.ts
import { Item } from "../components/item";
import { drops, tierAItems, tierBItems, tierCItems, tierSItems } from "../components/drops";

export function getRandomDrop(enemyName: string, dropsMultiplier: number = 1.0, tier: string): Item[] {
  const droppedItems: Item[] = [];
  
  let tierItems: Item[] = [];
  switch (tier) {
    case "C":
      tierItems = tierCItems;
      break;
    case "B":
      tierItems = tierBItems;
      break;
    case "A":
      tierItems = tierAItems;
      break;
    case "S":
      tierItems = tierSItems;
      break;
  }

  const possibleDrops = [...drops, ...tierItems];

  possibleDrops.forEach((drop: Item) => {
    if (Math.random() < drop.chance * dropsMultiplier) {
      droppedItems.push({
        ...drop,
        name: drop.needsEnemyName ? `${drop.name} de ${enemyName}` : drop.name,
        chance: drop.chance * dropsMultiplier,
      });
    }
  });

  return droppedItems;
}

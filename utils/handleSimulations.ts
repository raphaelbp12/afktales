// utils/handleSimulations.ts
import { Enemy } from "../components/enemies";
import { Item } from "../components/item";
import { getRandomEnemy } from "./getRandomEnemy";
import { getRandomDrop } from "./getRandomDrop";

export const handleGetEnemies = (
  times: number,
  allEnemies: Enemy[],
  lab3Enemies: Enemy[],
  lab4Enemies: Enemy[],
  castleDungeonEnemies: Enemy[],
  dropMultiplier: number
): { enemies: Enemy[]; drops: Item[] } => {
  const allDrops: Item[] = [];
  const enemies: Enemy[] = [];
  for (let i = 0; i < times; i++) {
    let enemyPool = allEnemies;
    let enemy = getRandomEnemy(enemyPool);

    // Implement special logic for respawn rules
    if (enemy.mobId === -1) {
      enemyPool = lab3Enemies;
      enemy = getRandomEnemy(enemyPool);
    } else if (enemy.mobId === -2) {
      enemyPool = lab4Enemies;
      enemy = getRandomEnemy(enemyPool);
    } else if (enemy.mobId === -3) {
      enemyPool = castleDungeonEnemies;
      enemy = getRandomEnemy(enemyPool);
    }
    enemies.push(enemy);

    const drops = getRandomDrop(enemy.name, dropMultiplier, enemy.tier);
    allDrops.push(...drops);
  }
  return { enemies, drops: allDrops };
};

export const handleEnemiesAndDropsData = (
  enemies: Enemy[],
  drops: Item[],
  defeatedEnemies: Record<string, { enemy: Enemy; count: number }>,
  setDefeatedEnemies: React.Dispatch<React.SetStateAction<Record<string, { enemy: Enemy; count: number }>>>,
  setSelectedEnemy: React.Dispatch<React.SetStateAction<Enemy | null>>,
  addToInventory: (items: Item[]) => void
) => {
  let lastEnemy: Enemy | null = null;
  const newDefeatedEnemies = { ...defeatedEnemies };
  enemies.forEach((enemy) => {
    if (newDefeatedEnemies[enemy.name]) {
      newDefeatedEnemies[enemy.name].count += 1;
    } else {
      newDefeatedEnemies[enemy.name] = { enemy, count: 1 };
    }
    lastEnemy = enemy;
  });

  if (lastEnemy) setSelectedEnemy(lastEnemy);

  setDefeatedEnemies(newDefeatedEnemies);
  addToInventory(drops);
};

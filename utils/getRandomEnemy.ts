// utils/getRandomEnemy.ts
import { Enemy } from "../components/enemies";

export function getRandomEnemy(enemies: Enemy[]): Enemy {
  const weightedEnemies: Enemy[] = [];

  enemies.forEach((enemy) => {
    for (let i = 0; i < enemy.count; i++) {
      weightedEnemies.push(enemy);
    }
  });

  const randomIndex = Math.floor(Math.random() * weightedEnemies.length);
  return weightedEnemies[randomIndex];
}

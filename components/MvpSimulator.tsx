// components/MvpSimulator.tsx
"use client";

import React, { useState } from "react";
import {
  allEnemies,
  lab3Enemies,
  lab4Enemies,
  castleDungeonEnemies,
  Enemy,
} from "./enemies";
import { useInventory } from "../contexts/inventoryContext";
import { Item } from "./item";
import { drops } from "./drops";
import DefeatedEnemiesTable from "./DefeatedEnemiesTable";

function getRandomEnemy(enemies: Enemy[]): Enemy {
  const weightedEnemies: Enemy[] = [];

  enemies.forEach((enemy) => {
    for (let i = 0; i < enemy.count; i++) {
      weightedEnemies.push(enemy);
    }
  });

  const randomIndex = Math.floor(Math.random() * weightedEnemies.length);
  return weightedEnemies[randomIndex];
}

function getRandomDrop(): Item[] {
  const droppedItems: Item[] = [];
  drops.forEach((drop: Item) => {
    if (Math.random() < drop.chance) {
      droppedItems.push(drop);
    }
  });
  return droppedItems;
}

const MvpSimulator: React.FC = () => {
  const [selectedEnemy, setSelectedEnemy] = useState<Enemy | null>(null);
  const [defeatedEnemies, setDefeatedEnemies] = useState<
    Record<string, { enemy: Enemy; count: number }>
  >({});
  const { addToInventory } = useInventory();

  const handleSimulate = (): Item[] => {
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

    setSelectedEnemy(enemy);
    setDefeatedEnemies((prevDefeatedEnemies) => {
      const newDefeatedEnemies = { ...prevDefeatedEnemies };
      if (newDefeatedEnemies[enemy.name]) {
        newDefeatedEnemies[enemy.name].count += 1;
      } else {
        newDefeatedEnemies[enemy.name] = { enemy, count: 1 };
      }
      return newDefeatedEnemies;
    });

    const drops = getRandomDrop();
    drops.forEach((drop) => addToInventory(drop));
    return drops;
  };

  const handleSimulateUntilDrop = () => {
    let drops: Item[] = [];
    while (drops.length === 0) {
      drops = handleSimulate();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">MVP Simulator</h1>
      <button
        onClick={handleSimulate}
        className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
      >
        Simulate MVP
      </button>
      <button
        onClick={handleSimulateUntilDrop}
        className="px-4 py-2 bg-green-500 text-white rounded-md mb-4"
      >
        Simulate Until Drop
      </button>
      {selectedEnemy && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">{selectedEnemy.name}</h2>
          <p className="text-xl">Tier: {selectedEnemy.tier}</p>
          <img
            src={`https://static.divine-pride.net/images/mobs/png/${selectedEnemy.mobId}.png`}
            alt={selectedEnemy.name}
          />
          <a
            href={selectedEnemy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Details
          </a>
        </div>
      )}
      {Object.keys(defeatedEnemies).length > 0 && (
        <DefeatedEnemiesTable defeatedEnemies={defeatedEnemies} />
      )}
    </div>
  );
};

export default MvpSimulator;

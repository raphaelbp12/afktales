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

const MvpSimulator: React.FC = () => {
  const [selectedEnemy, setSelectedEnemy] = useState<Enemy | null>(null);

  const handleSimulate = () => {
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
      {selectedEnemy && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">{selectedEnemy.name}</h2>
          <p className="text-xl">Tier: {selectedEnemy.tier}</p>
          <img
            src={`https://static.divine-pride.net/images/mobs/png/${selectedEnemy.mobId}.png`}
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
    </div>
  );
};

export default MvpSimulator;

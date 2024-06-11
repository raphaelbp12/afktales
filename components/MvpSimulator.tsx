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
import Inventory from "./Inventory";
import PageWrapper from "./PageWrapper";

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

const tiers = ["S", "A", "B", "C"];

const MvpSimulator: React.FC = () => {
  const [selectedEnemy, setSelectedEnemy] = useState<Enemy | null>(null);
  const [defeatedEnemies, setDefeatedEnemies] = useState<
    Record<string, { enemy: Enemy; count: number }>
  >({});
  const [activeTiers, setActiveTiers] = useState<string[]>(tiers);
  const { addToInventory, clearInventory } = useInventory();

  const toggleTier = (tier: string) => {
    setActiveTiers((prevTiers) =>
      prevTiers.includes(tier)
        ? prevTiers.filter((t) => t !== tier)
        : [...prevTiers, tier]
    );
  };

  const reset = () => {
    clearInventory();
    setDefeatedEnemies({});
    setSelectedEnemy(null);
  };

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
    drops.forEach((drop) =>
      addToInventory({ ...drop, name: drop.name + " de " + enemy.name })
    );
    return drops;
  };

  const handleSimulateUntilDrop = () => {
    let drops: Item[] = [];
    while (drops.length === 0) {
      drops = handleSimulate();
    }
  };

  return (
    <PageWrapper overflowAuto={true}>
      <div className="flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Simulador de Cheffênia
        </h1>
        <h2 className="text-2xl font-semibold text-center">Inventário:</h2>
        <div className="w-full flex flex-col items-center mb-4">
          <Inventory />
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded-md mt-4"
          >
            Resetar
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-4 w-full justify-center">
          <button
            onClick={handleSimulate}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Matar 1 MVP
          </button>
          <button
            onClick={handleSimulateUntilDrop}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Matar até dropar
          </button>
        </div>
        {selectedEnemy && (
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold mb-2">
              {selectedEnemy.name}
            </h2>
            <p className="text-xl">Rank: {selectedEnemy.tier}</p>
            <img
              src={`https://static.divine-pride.net/images/mobs/png/${selectedEnemy.mobId}.png`}
              alt={selectedEnemy.name}
              className="mx-auto"
            />
            <a
              href={selectedEnemy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Ver detalhes
            </a>
          </div>
        )}
        {/* <div className="flex flex-wrap gap-2 mt-4 align-middle">
          {tiers.map((tier) => (
            <button
              key={tier}
              onClick={() => toggleTier(tier)}
              className={`px-4 py-2 rounded-md ${
                activeTiers.includes(tier)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {tier}
            </button>
          ))}
        </div> */}
        <DefeatedEnemiesTable
          defeatedEnemies={defeatedEnemies}
          activeTiers={activeTiers}
        />
      </div>
    </PageWrapper>
  );
};

export default MvpSimulator;

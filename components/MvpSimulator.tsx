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
import PageWrapper from "./commonComponents/PageWrapper";

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

function getRandomDrop(
  enemyName: string,
  dropsMultiplier: number = 1.0
): Item[] {
  const droppedItems: Item[] = [];
  drops.forEach((drop: Item) => {
    if (Math.random() < drop.chance * dropsMultiplier) {
      droppedItems.push({
        ...drop,
        name: drop.name + " de " + enemyName,
        chance: drop.chance * dropsMultiplier,
      });
    }
  });
  return droppedItems;
}

const MvpSimulator: React.FC = () => {
  const [usingGoma, setUsingGoma] = useState<boolean>(false);
  const [usingVip, setUsingVip] = useState<boolean>(false);
  const [usingTemporada, setUsingTemporada] = useState<boolean>(false);
  const [selectedEnemy, setSelectedEnemy] = useState<Enemy | null>(null);
  const [defeatedEnemies, setDefeatedEnemies] = useState<
    Record<string, { enemy: Enemy; count: number }>
  >({});
  const { addToInventory, clearInventory } = useInventory();

  const reset = () => {
    clearInventory();
    setDefeatedEnemies({});
    setSelectedEnemy(null);
  };

  const toggleGoma = () => {
    setUsingGoma(!usingGoma);
  };

  const toggleVip = () => {
    setUsingVip(!usingVip);
  };

  const toggleTemporada = () => {
    setUsingTemporada(!usingTemporada);
  };

  const getDropMultiplier = () => {
    let baseDropChanceMultiplier = 1.0;
    if (usingGoma) baseDropChanceMultiplier *= 1.5;
    if (usingVip) baseDropChanceMultiplier *= 1.35;
    if (usingTemporada) baseDropChanceMultiplier *= 1.15;
    return baseDropChanceMultiplier;
  };

  const handleGetEnemies = (
    times: number
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

      const drops = getRandomDrop(enemy.name, getDropMultiplier());
      allDrops.push(...drops);
    }
    return { enemies, drops: allDrops };
  };

  const handleEnemiesAndDropsData = (enemies: Enemy[], drops: Item[]) => {
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

  const handleSimulate = (times: number = 1) => {
    const { enemies, drops } = handleGetEnemies(times);

    handleEnemiesAndDropsData(enemies, drops);
  };

  const handleSimulateUntilDrop = () => {
    let drops: Item[] = [];
    let enemies: Enemy[] = [];
    while (drops.length === 0) {
      const simulation = handleGetEnemies(1);
      drops = [...drops, ...simulation.drops];
      enemies = [...enemies, ...simulation.enemies];
    }

    handleEnemiesAndDropsData(enemies, drops);
  };

  return (
    <PageWrapper overflowAuto={true}>
      <div className="flex flex-col items-center p-6">
        <h1 className="md:text-3xl font-bold mb-6 text-center">
          Simulador de Cheffênia (drops x{(getDropMultiplier()).toFixed(2)})
        </h1>
        <h2 className="md:text-2xl font-semibold text-center">Inventário:</h2>
        <div className="w-full flex flex-col items-center mb-4">
          <Inventory />

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button
              onClick={reset}
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Resetar
            </button>
            <button
              onClick={toggleGoma}
              className={`px-4 py-2 text-white rounded-md ${usingGoma ? 'bg-purple-700' : 'bg-purple-500'}`}
            >
              {usingGoma ? "Desativar" : "Ativar"} Goma ({usingGoma ? "-" : "+"}0.50%)
            </button>
            <button
              onClick={toggleVip}
              className={`px-4 py-2 text-white rounded-md ${usingVip ? 'bg-purple-700' : 'bg-purple-500'}`}
            >
              {usingVip ? "Desativar" : "Ativar"} Vip ({usingVip ? "-" : "+"}0.35%)
            </button>
            <button
              onClick={toggleTemporada}
              className={`px-4 py-2 text-white rounded-md ${usingTemporada ? 'bg-purple-700' : 'bg-purple-500'}`}
            >
              {usingTemporada ? "Desativar" : "Ativar"} Temporada ({usingTemporada ? "-" : "+"}0.15%)
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-4 w-full justify-center">
          <button
            onClick={() => handleSimulate(1)}
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
          {/* <button
            onClick={handleSimulateUntilDrop}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md"
          >
            Testar Goma (x10.000)
          </button> */}
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
        <DefeatedEnemiesTable defeatedEnemies={defeatedEnemies} />
      </div>
    </PageWrapper>
  );
};

export default MvpSimulator;

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
import DefeatedEnemiesTable from "./DefeatedEnemiesTable";
import Inventory from "./Inventory";
import PageWrapper from "./commonComponents/PageWrapper";
import { handleGetEnemies, handleEnemiesAndDropsData } from "../utils/handleSimulations";
import { useDropMultiplier } from "../hooks/useDropMultiplier";
import { Item } from "./item";

const MvpSimulator: React.FC = () => {
  const [selectedEnemy, setSelectedEnemy] = useState<Enemy | null>(null);
  const [defeatedEnemies, setDefeatedEnemies] = useState<
    Record<string, { enemy: Enemy; count: number }>
  >({});
  const { addToInventory, clearInventory } = useInventory();
  const {
    usingGoma,
    usingVip,
    usingTemporada,
    toggleGoma,
    toggleVip,
    toggleTemporada,
    getDropMultiplier,
  } = useDropMultiplier();

  const reset = () => {
    clearInventory();
    setDefeatedEnemies({});
    setSelectedEnemy(null);
  };

  const handleSimulate = (times: number = 1) => {
    const { enemies, drops } = handleGetEnemies(
      times,
      allEnemies,
      lab3Enemies,
      lab4Enemies,
      castleDungeonEnemies,
      getDropMultiplier
    );

    handleEnemiesAndDropsData(enemies, drops, defeatedEnemies, setDefeatedEnemies, setSelectedEnemy, addToInventory);
  };

  const handleSimulateUntilDrop = () => {
    let drops: Item[] = [];
    let enemies: Enemy[] = [];
    while (drops.length === 0) {
      const simulation = handleGetEnemies(1, allEnemies, lab3Enemies, lab4Enemies, castleDungeonEnemies, getDropMultiplier);
      drops = [...drops, ...simulation.drops];
      enemies = [...enemies, ...simulation.enemies];
    }

    handleEnemiesAndDropsData(enemies, drops, defeatedEnemies, setDefeatedEnemies, setSelectedEnemy, addToInventory);
  };

  return (
    <PageWrapper overflowAuto={true}>
      <div className="flex flex-col items-center p-6">
        <h1 className="md:text-3xl font-bold mb-6 text-center">
          Simulador de Cheffênia (drops x{getDropMultiplier().toFixed(2)})
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

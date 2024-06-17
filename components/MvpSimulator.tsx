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
import Image from "next/image";

interface DropItemProps {
  drop: Item;
}

const DropItem: React.FC<DropItemProps> = ({ drop }) => {
  const message = `${drop.name} (${(drop.chance * 100).toFixed(2).replace(/\.?0+$/, '')}%)`;
  return (
      <div className=" flex items-center space-x-2">
        <Image src={drop.src} alt="Item" width={24} height={24} />
        <span>{message}</span>
      </div>
  );
};

const MvpSimulator: React.FC = () => {
  const [selectedEnemy, setSelectedEnemy] = useState<Enemy | null>(null);
  const [defeatedEnemies, setDefeatedEnemies] = useState<
    Record<string, { enemy: Enemy; count: number }>
  >({});
  const [dropSimulationResults, setDropSimulationResults] = useState<{
    default: Item[];
    withoutGoma: Item[];
    max: Item[];
  } | null>(null);
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
    setDropSimulationResults(null);
  };

  const handleSimulate = (times: number = 1) => {
    setDropSimulationResults(null);
    const { enemies, drops } = handleGetEnemies(
      times,
      allEnemies,
      lab3Enemies,
      lab4Enemies,
      castleDungeonEnemies,
      getDropMultiplier()
    );

    handleEnemiesAndDropsData(enemies, drops, defeatedEnemies, setDefeatedEnemies, setSelectedEnemy, addToInventory);
  };

  const handleSimulateUntilDrop = () => {
    setDropSimulationResults(null);
    let drops: Item[] = [];
    let enemies: Enemy[] = [];
    while (drops.length === 0) {
      const simulation = handleGetEnemies(1, allEnemies, lab3Enemies, lab4Enemies, castleDungeonEnemies, getDropMultiplier());
      drops = [...drops, ...simulation.drops];
      enemies = [...enemies, ...simulation.enemies];
    }

    handleEnemiesAndDropsData(enemies, drops, defeatedEnemies, setDefeatedEnemies, setSelectedEnemy, addToInventory);
  };

  const handleSimulateDropScenarios = (numOfEnemies: number) => {
    reset();
    const defaultSimulation = handleGetEnemies(numOfEnemies, allEnemies, lab3Enemies, lab4Enemies, castleDungeonEnemies, 1.0);
    const withoutGoma = handleGetEnemies(numOfEnemies, allEnemies, lab3Enemies, lab4Enemies, castleDungeonEnemies, 1.55);
    const maxSimulation = handleGetEnemies(numOfEnemies, allEnemies, lab3Enemies, lab4Enemies, castleDungeonEnemies, 2.33);

    setDropSimulationResults({
      default: defaultSimulation.drops,
      withoutGoma: withoutGoma.drops,
      max: maxSimulation.drops,
    });
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
          <button
            onClick={() => handleSimulateDropScenarios(10000)}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md"
          >
            Comparar Goma (x10.000)
          </button>
          <button
            onClick={() => handleSimulateDropScenarios(30000)}
            className="px-4 py-2 bg-orange-500 text-white rounded-md"
          >
            Comparar Goma (x30.000)
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
        {dropSimulationResults && (
          <div className="w-full">
            <h2 className="text-xl font-semibold text-center mb-2">Comparação de Goma</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-1">Drop sem bônus (x1.0)</h3>
                <div className="flex flex-col">
                  {dropSimulationResults.default.map((drop, index) => (
                    <DropItem key={index} drop={drop} />
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-1">VIP + Temporada (x1.55)</h3>
                <div className="flex flex-col">
                  {dropSimulationResults.withoutGoma.map((drop, index) => (
                    <DropItem key={index} drop={drop} />
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-1">Goma + VIP + Temporada (x2.33)</h3>
                <div className="flex flex-col">
                  {dropSimulationResults.max.map((drop, index) => (
                    <DropItem key={index} drop={drop} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {!dropSimulationResults && <DefeatedEnemiesTable defeatedEnemies={defeatedEnemies} />}
      </div>
    </PageWrapper>
  );
};

export default MvpSimulator;

// components/GachaGame.tsx
"use client";

import React, { useState } from "react";
import { options, Option } from "./prizes";
import Inventory from "./Inventory";
import Image from "next/image";
import Confetti from "react-confetti";
import { useInventory } from "../contexts/inventoryContext";
import { Item } from "./item";

function drawPrize(option: Option): Item {
  const random = Math.random();
  return random < option.mainPrize.chance
    ? option.mainPrize
    : option.consolationPrize;
}

export default function RafaDaRifa() {
  const [totalCost, setTotalCost] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const { addToInventory, clearInventory } = useInventory();

  const handleDraw = (option: Option, times: number = 1) => {
    let gotRarePrize = false;
    for (let i = 0; i < times; i++) {
      const drawnPrize = drawPrize(option);
      addToInventory(drawnPrize);
      if (drawnPrize.chance <= 0.1) {
        gotRarePrize = true;
      }
    }
    setTotalCost(totalCost + option.price * times);
    if (gotRarePrize) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // show confetti for 5 seconds
    }
  };

  const handleDrawUntilRare = (option: Option) => {
    let gotRarePrize = false;
    let draws = 0;
    while (!gotRarePrize) {
      const drawnPrize = drawPrize(option);
      addToInventory(drawnPrize);
      draws++;
      if (drawnPrize.chance <= 0.1) {
        gotRarePrize = true;
      }
    }
    setTotalCost(totalCost + option.price * draws);
    if (gotRarePrize) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // show confetti for 5 seconds
    }
  };

  const formatNumber = (number: number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden relative">
      {showConfetti && (
        <div className="fixed inset-0 z-10 pointer-events-none">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}
      <div className="mt-6 z-20">
        <h2 className="text-2xl font-semibold">
          Total Gasto: {formatNumber(totalCost)}
        </h2>
      </div>
      <div className="mt-6 mb-6 z-20">
        <h2 className="text-2xl font-semibold">Inventário:</h2>
        <Inventory />
        <button
          onClick={clearInventory}
          className="px-4 py-2 bg-red-500 text-white rounded-md mt-4"
        >
          Resetar Inventário
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-6 z-20">Rafa da Rifa</h1>
      <table className="min-w-full z-20">
        <thead>
          <tr>
            <th className="py-2"></th>
            <th className="py-2">Preço</th>
            <th className="py-2">Prêmio Principal</th>
            <th className="py-2">Chance</th>
            <th className="py-2">Prêmio de Consolação</th>
            <th className="py-2">Chance</th>
            <th className="py-2">Comprar</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option) => (
            <tr key={option.id}>
              <td className="py-2">{option.id}</td>
              <td className="py-2">{formatNumber(option.price)}</td>
              <td className="py-2 flex items-center">
                <Image
                  src={option.mainPrize.src}
                  alt={option.mainPrize.name}
                  width={24}
                  height={24}
                />
                <span className="ml-2">{option.mainPrize.name}</span>
              </td>
              <td className="py-2">
                {(option.mainPrize.chance * 100).toFixed(2)}%
              </td>
              <td className="py-2 flex items-center">
                <Image
                  src={option.consolationPrize.src}
                  alt={option.consolationPrize.name}
                  width={24}
                  height={24}
                />
                <span className="ml-2">{option.consolationPrize.name}</span>
              </td>
              <td className="py-2">
                {(option.consolationPrize.chance * 100).toFixed(2)}%
              </td>
              <td className="py-2 space-y-2">
                <button
                  onClick={() => handleDraw(option)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Comprar
                </button>
                <button
                  onClick={() => handleDraw(option, 10)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Comprar x10
                </button>
                <button
                  onClick={() => handleDraw(option, 100)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Comprar x100
                </button>
                <button
                  onClick={() => handleDrawUntilRare(option)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md"
                >
                  Comprar até raro
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

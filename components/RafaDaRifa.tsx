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

  const reset = () => {
    setTotalCost(0);
    clearInventory();
  };

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
    <div className="flex flex-col items-center justify-center overflow-hidden relative">
      {showConfetti && (
        <div className="fixed inset-0 z-10 pointer-events-none">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Rafa da Rifa</h1>
      <div className={`w-full p-4 flex flex-col items-center mb-2`}>
        <h2 className="text-xl md:text-2xl font-semibold">
          Total Gasto: {formatNumber(totalCost)}
        </h2>
        <h2 className="text-xl md:text-2xl font-semibold mt-4">Inventário:</h2>
        <Inventory />
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded-md mt-4"
        >
          Resetar
        </button>
      </div>
      <div className="flex-grow w-full overflow-hidden">
        <div className="h-full overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {options.map((option) => (
            <div
              key={option.id}
              className="bg-gray-800 text-white rounded-lg p-4 flex flex-col items-center"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center mb-2">
                  <Image
                    src={option.mainPrize.src}
                    alt={option.mainPrize.name}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <span className="font-bold">{option.mainPrize.name}</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="font-semibold">
                    ({(option.mainPrize.chance * 100).toFixed(2)}%)
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <Image
                    src={option.consolationPrize.src}
                    alt={option.consolationPrize.name}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <span className="font-bold">
                    {option.consolationPrize.name}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold">
                    ({(option.consolationPrize.chance * 100).toFixed(2)}%)
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="mr-2">Preço:</span>
                  <span className="font-semibold">
                    {formatNumber(option.price)}
                  </span>
                </div>
              </div>
              <div className="flex justify-center space-x-2 mt-4">
                <button
                  onClick={() => handleDraw(option)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  x1
                </button>
                <button
                  onClick={() => handleDraw(option, 10)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  x10
                </button>
                <button
                  onClick={() => handleDraw(option, 100)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  x100
                </button>
                <button
                  onClick={() => handleDrawUntilRare(option)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md"
                >
                  até raro
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useCallback, useState } from "react";
import { Card, cards } from "./cards";
import Inventory from "./Inventory";
import { useInventory } from "../contexts/inventoryContext";
import Confetti from "react-confetti";
import { Item } from "./item";

const getRandomCard = (cards: Card[]): Card => {
  const totalWeight = cards.reduce((sum, card) => sum + card.weight, 0);
  let random = Math.random() * totalWeight;

  for (const card of cards) {
    if (random < card.weight) {
      return card;
    }
    random -= card.weight;
  }

  // Fallback in case of rounding errors
  return cards[cards.length - 1];
};

const CardRandomizer: React.FC = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const { addToInventory, clearInventory, inventory } = useInventory();
  const rareChance = 0.005;

  const handleGetCards = (times: number): Item[] => {
    const items: Item[] = [];
    for (let i = 0; i < times; i++) {
      const card = getRandomCard(cards);
      const chance = card.weight / cards.reduce((sum, c) => sum + c.weight, 0);
      const item: Item = {
        name: card.name,
        src: "/images/cardIcon.png",
        chance: chance,
      };
      items.push(item);
    }
    return items;
  };

  const handleDrawMultiple = (times: number) => {
    const items = handleGetCards(times);

    addToInventory(items);
    setTotalCost((prevCost) => prevCost + times); // Assume each draw costs 1 unit
    if (items.some(item => item.chance <= rareChance)) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Show confetti for 5 seconds
    }
  };

  const handleDrawUntilRare = () => {
    let gotRareCard = false;
    const items: Item[] = [];
    while (!gotRareCard) {
      const item = handleGetCards(1)[0];
      items.push(item);
      if (item.chance <= rareChance) {
        gotRareCard = true;
      }
    }

    addToInventory(items);
    setTotalCost((prevCost) => prevCost + items.length); // Assume each draw costs 1 unit
    if (items.some(item => item.chance <= rareChance)) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Show confetti for 5 seconds
    }
  };

  const reset = () => {
    clearInventory();
    setTotalCost(0);
  };

  const formatNumber = (number: number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  const groupedChances = () => {
    const grouped: { [key: number]: Card[] } = {};
    const totalWeight = cards.reduce((sum, card) => sum + card.weight, 0);

    cards.forEach((card) => {
      const chance = (card.weight / totalWeight) * 100;
      const roundedChance = Math.round(chance * 100) / 100; // round to 2 decimal places
      if (!grouped[roundedChance]) {
        grouped[roundedChance] = [];
      }
      grouped[roundedChance].push(card);
    });

    return grouped;
  };

  const chances = groupedChances();

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden relative">
      {showConfetti && (
        <div className="fixed inset-0 z-10 pointer-events-none">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Álbum Velho de Cartas</h1>
      <div className={`w-full p-4 flex flex-col items-center mb-2`}>
        <Inventory />
      </div>
          <div className="bg-gray-800 text-white rounded-lg p-4 flex flex-col items-center">
            <div className="flex justify-center space-x-2">
              <button
                onClick={() => handleDrawMultiple(1)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                x1
              </button>
              <button
                onClick={() => handleDrawMultiple(10)}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                x10
              </button>
              <button
                onClick={() => handleDrawMultiple(100)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                x100
              </button>
              <button
                onClick={handleDrawUntilRare}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md"
              >
                até rara
              </button>
            </div>
            <button
              onClick={reset}
              className="px-4 py-2 bg-gray-500 text-white rounded-md mt-2"
            >
              Resetar
            </button>
          </div>
      <div className="flex-grow w-full overflow-hidden">
        <div className="h-full overflow-y-auto gap-4 p-4">
            <div className="obtained-card mt-4">
              <h2 className="text-2xl font-semibold">
                Total: {totalCost}
              </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            {Object.keys(chances).map((chance) => (
              <div key={chance} className="bg-gray-800 text-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold">
                  Chance: {chance}%
                </h3>
                <ul>
                  {chances[parseFloat(chance)].map((card) => (
                    <li key={card.name}>
                      {card.name}
                      {inventory[card.name] && inventory[card.name].count > 0 ? (
                        <span className="text-green-500"> ({inventory[card.name].count})</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRandomizer;

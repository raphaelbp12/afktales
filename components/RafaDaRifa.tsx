// components/GachaGame.tsx
"use client";

import React, { useState, useEffect } from "react";
import { options, Option, Prize } from "./prizes";
import Inventory from "./Inventory";
import Image from "next/image";
import Confetti from "react-confetti";
import Alert from "./Alert";

interface AlertMessage {
  id: number;
  message: string;
  src: string;
}

function drawPrize(option: Option): Prize {
  const random = Math.random();
  return random < option.mainPrize.chance
    ? option.mainPrize
    : option.consolationPrize;
}

export default function RafaDaRifa() {
  const [totalCost, setTotalCost] = useState(0);
  const [inventory, setInventory] = useState<Prize[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [alerts, setAlerts] = useState<AlertMessage[]>([]);

  useEffect(() => {
    if (alerts.length > 0) {
      const timer = setTimeout(() => {
        setAlerts((prevAlerts) => prevAlerts.slice(1));
      }, 5000); // hide alert after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [alerts]);

  const handleDraw = (option: Option, times: number = 1) => {
    let newInventory: Prize[] = [];
    let gotRarePrize = false;
    for (let i = 0; i < times; i++) {
      const drawnPrize = drawPrize(option);
      newInventory.push(drawnPrize);
      if (drawnPrize.chance <= 0.1) {
        gotRarePrize = true;
        const newAlert: AlertMessage = {
          id: Date.now() + i, // unique id
          message: `${drawnPrize.name}`,
          src: drawnPrize.src,
        };
        setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
        setTimeout(() => {
          setAlerts((prevAlerts) =>
            prevAlerts.filter((alert) => alert.id !== newAlert.id)
          );
        }, 5000); // hide alert after 5 seconds
      }
    }
    setInventory([...inventory, ...newInventory]);
    setTotalCost(totalCost + option.price * times);
    if (gotRarePrize) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // show confetti for 5 seconds
    }
  };

  const handleDrawUntilRare = (option: Option) => {
    let newInventory: Prize[] = [];
    let gotRarePrize = false;
    let draws = 0;
    while (!gotRarePrize) {
      const drawnPrize = drawPrize(option);
      newInventory.push(drawnPrize);
      draws++;
      if (drawnPrize.chance <= 0.1) {
        gotRarePrize = true;
        const newAlert: AlertMessage = {
          id: Date.now(), // unique id
          message: `${drawnPrize.name}`,
          src: drawnPrize.src,
        };
        setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
        setTimeout(() => {
          setAlerts((prevAlerts) =>
            prevAlerts.filter((alert) => alert.id !== newAlert.id)
          );
        }, 5000); // hide alert after 5 seconds
      }
    }
    setInventory([...inventory, ...newInventory]);
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
      {alerts.length > 0 && (
        <div className="fixed top-0 left-0 right-0 flex flex-col items-center space-y-2 p-4 z-30">
          {alerts.map((alert) => (
            <Alert key={alert.id} message={alert.message} src={alert.src} />
          ))}
        </div>
      )}
      <div className="mt-6 z-20">
        <h2 className="text-2xl font-semibold">
          Total Gasto: {formatNumber(totalCost)}
        </h2>
      </div>
      <div className="mt-6 mb-6 z-20">
        <h2 className="text-2xl font-semibold">Inventário:</h2>
        <Inventory inventory={inventory} />
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

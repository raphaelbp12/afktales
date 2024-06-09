// components/DefeatedEnemiesTable.tsx
import React from "react";
import { Enemy } from "./enemies";
import Image from "next/image";

interface DefeatedEnemiesTableProps {
  defeatedEnemies: Record<string, { enemy: Enemy; count: number }>;
}

const DefeatedEnemiesTable: React.FC<DefeatedEnemiesTableProps> = ({
  defeatedEnemies,
}) => {
  const getTierCount = (tier: string) => {
    return Object.values(defeatedEnemies)
      .filter(({ enemy }) => enemy.tier === tier)
      .reduce((total, { count }) => total + count, 0);
  };

  const formatDefeatedEnemies = (tier: string) => {
    return Object.values(defeatedEnemies)
      .filter(({ enemy }) => enemy.tier === tier)
      .map(({ enemy, count }) => (
        <tr key={enemy.name}>
          <td className="flex items-center space-x-2">
            <Image
              src={`https://static.divine-pride.net/images/mobs/png/${enemy.mobId}.png`}
              alt={enemy.name}
              width={24}
              height={24}
            />
            <span>{enemy.name}</span>
          </td>
          <td>{count}</td>
        </tr>
      ));
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-2">Defeated Enemies:</h3>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">
              Tier C ({getTierCount("C")})
            </th>
            <th className="px-4 py-2 border border-gray-300">
              Tier B ({getTierCount("B")})
            </th>
            <th className="px-4 py-2 border border-gray-300">
              Tier A ({getTierCount("A")})
            </th>
            <th className="px-4 py-2 border border-gray-300">
              Tier S ({getTierCount("S")})
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              <table className="min-w-full table-auto border-collapse">
                <tbody>{formatDefeatedEnemies("C")}</tbody>
              </table>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <table className="min-w-full table-auto border-collapse">
                <tbody>{formatDefeatedEnemies("B")}</tbody>
              </table>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <table className="min-w-full table-auto border-collapse">
                <tbody>{formatDefeatedEnemies("A")}</tbody>
              </table>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <table className="min-w-full table-auto border-collapse">
                <tbody>{formatDefeatedEnemies("S")}</tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DefeatedEnemiesTable;

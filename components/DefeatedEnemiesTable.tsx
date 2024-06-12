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

  const getAllCount = () => {
    return Object.values(defeatedEnemies).reduce(
      (total, { count }) => total + count,
      0
    );
  };

  const formatDefeatedEnemies = (tier: string) => {
    return Object.values(defeatedEnemies)
      .filter(({ enemy }) => enemy.tier === tier)
      .map(({ enemy, count }) => (
        <div key={enemy.name} className="flex items-center space-x-2 mb-2">
          <Image
            src={`https://static.divine-pride.net/images/mobs/png/${enemy.mobId}.png`}
            alt={enemy.name}
            width={24}
            height={24}
          />
          <span>{enemy.name}</span>
          <span className="ml-auto">{count}</span>
        </div>
      ));
  };

  return (
    <div className="mt-6 w-full">
      <h3 className="text-xl font-bold mb-2">MVPs mortos: {getAllCount()}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {["S", "A", "B", "C"].map(
          (tier) =>
            (
              <div key={tier} className="bg-gray-800 text-white rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2">{`Rank ${tier} (${getTierCount(
                  tier
                )})`}</h4>
                <div className="flex flex-col">
                  {formatDefeatedEnemies(tier)}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default DefeatedEnemiesTable;

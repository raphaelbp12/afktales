// hooks/useDropMultiplier.ts
import { useState } from "react";

export function useDropMultiplier() {
  const [usingGoma, setUsingGoma] = useState<boolean>(false);
  const [usingVip, setUsingVip] = useState<boolean>(false);
  const [usingTemporada, setUsingTemporada] = useState<boolean>(false);

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

  return {
    usingGoma,
    usingVip,
    usingTemporada,
    toggleGoma,
    toggleVip,
    toggleTemporada,
    getDropMultiplier,
  };
}

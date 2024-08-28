import { sc_type } from "./sc_type";

export enum AutoTriggerFlag {
  SELF = 0x01,
  TARGET = 0x02,
  SHORT = 0x04,
  LONG = 0x08,
  WEAPON = 0x10,
  MAGIC = 0x20,
  MISC = 0x40,
}

export interface AddEffect {
  id: sc_type;
  rate: number;
  arrow_rate: number;
  flag: number;
  duration: number;
}

export enum Effect {
  Eff_Stone = 0,
  Eff_Freeze = 1,
  Eff_Stun = 2,
  Eff_Sleep = 3,
  Eff_Poison = 4,
  Eff_Curse = 5,
  Eff_Silence = 6,
  Eff_Confusion = 7,
  Eff_Blind = 8,
  Eff_Bleeding = 9,
  Eff_DPoison = 10,
  Eff_Fear = 11,
  Eff_Cold = 12,
  Eff_Burning = 13,
  Eff_Deepsleep = 14,
  // Add more as needed...
}

export function effectStringToEnum(effectString: string): Effect | null {
  // Check if the input is a valid string that matches a key in the Effect enum and is not a numeric string
  if (
    typeof effectString === "string" &&
    isNaN(Number(effectString)) && // Ensures that the string is not a numeric value
    effectString in Effect
  ) {
    return Effect[effectString as keyof typeof Effect];
  } else {
    return null;
  }
}

import { ElementEnum } from "@/data/Elements/ElementsEnum";
import { ELE_ALL } from "./constants";
import { Race } from "./map_race_id2mask";

export function capValue(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function parseValueWithRagEnums(value: number | string): number {
  switch (value) {
    case "Ele_All":
      return ELE_ALL;
    case "Ele_Neutral":
      return ElementEnum.Neutro;
    case "Ele_Water":
      return ElementEnum.Agua;
    case "Ele_Earth":
      return ElementEnum.Terra;
    case "Ele_Fire":
      return ElementEnum.Fogo;
    case "Ele_Wind":
      return ElementEnum.Vento;
    case "Ele_Poison":
      return ElementEnum.Veneno;
    case "Ele_Holy":
      return ElementEnum.Sagrado;
    case "Ele_Dark":
      return ElementEnum.Sombrio;
    case "Ele_Ghost":
      return ElementEnum.Fantasma;
    case "Ele_Undead":
      return ElementEnum.MortoVivo;
    case "RC_Formless":
      return Race.RC_FORMLESS;
    case "RC_Undead":
      return Race.RC_UNDEAD;
    case "RC_Brute":
      return Race.RC_BRUTE;
    case "RC_Plant":
      return Race.RC_PLANT;
    case "RC_Insect":
      return Race.RC_INSECT;
    case "RC_Fish":
      return Race.RC_FISH;
    case "RC_Demon":
      return Race.RC_DEMON;
    case "RC_DemiHuman":
      return Race.RC_DEMIHUMAN;
    case "RC_Angel":
      return Race.RC_ANGEL;
    case "RC_Dragon":
      return Race.RC_DRAGON;
    case "RC_Player":
      return Race.RC_PLAYER;
    case "RC_Boss":
      return Race.RC_BOSS;
    case "RC_NonBoss":
      return Race.RC_NONBOSS;
    case "RC_NonDemiHuman":
      return Race.RC_NONDEMIHUMAN;
    case "RC_NonPlayer":
      return Race.RC_NONPLAYER;
    case "RC_DemiPlayer":
      return Race.RC_DEMIPLAYER;
    case "RC_NonDemiPlayer":
      return Race.RC_NONDEMIPLAYER;
    case "RC_All":
      return Race.RC_ALL;
    default:
      const parsedValue = parseInt(value as string, 10);
      if (isNaN(parsedValue)) {
        console.warn(`parseValueWithRagEnums: Unknown value type: ${value}`);
        return value as number;
      }
      if (typeof parsedValue === "number") {
        return parsedValue;
      }
      console.warn(
        `parseValueWithRagEnums: Unknown value type: ${parsedValue}`
      );
      return parsedValue;
  }
}

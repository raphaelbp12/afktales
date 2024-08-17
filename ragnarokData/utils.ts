import { ElementEnum } from "@/data/Elements/ElementsEnum";

export function capValue(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function parseValueWithRagEnums(value: number | string): number {
  switch (value) {
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
    default:
      console.warn(`Unknown value type: ${value}`);
      return parseInt(value as string, 10);
  }
}

import { ElementEnum } from "@/data/Elements/ElementsEnum";
import { ELE_ALL } from "./constants";
import { Race, Race2 } from "./map_race_id2mask";
import { effectStringToEnum } from "./AutoTriggerFlag";
import { skillStringToEnum } from "./SkillsEnum";
import { parseConfig } from "./parserItemConfig";
import { item_db } from "@/ragnarokData/ItemDB/item_db";
import { classStringToEnum } from "./PlayerCharacter/ClassesEnum";

export function capValue(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

const itemsDictAegisNameKey: Record<string, number> =
  parseConfig(item_db).itemsDictAegisNameKey;

export function parseValueWithRagEnums(value: number | string): number {
  if (typeof value === "string") {
    value = value.replaceAll('"', "");
    value = value.replaceAll("'", "");
  }
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
    case "RC2_Goblin":
      return Race2.RC2_GOBLIN;
    case "RC2_Kobold":
      return Race2.RC2_KOBOLD;
    case "RC2_Orc":
      return Race2.RC2_ORC;
    case "RC2_Golem":
      return Race2.RC2_GOLEM;
    case "RC2_Guardian":
      return Race2.RC2_GUARDIAN;
    case "RC2_Ninja":
      return Race2.RC2_NINJA;
    case "RC2_Scaraba":
      return Race2.RC2_SCARABA;
    case "RC2_Turtle":
      return Race2.RC2_TURTLE;

    default:
      const classEnum = classStringToEnum(value as string);
      if (classEnum !== null) {
        return classEnum;
      }

      const effect = effectStringToEnum(value as string);
      if (effect !== null) {
        return effect;
      }

      const size = sizeStringToEnum(value as string);
      if (size !== null) {
        return size;
      }

      const skill = skillStringToEnum(value as string);
      if (skill !== null) {
        return skill;
      }

      const itemId = itemsDictAegisNameKey[value as string];
      if (itemId !== undefined) {
        return itemId;
      }

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

export function sizeStringToEnum(sizeString: string): Sizes | null {
  if (
    typeof sizeString === "string" &&
    isNaN(Number(sizeString)) && // Ensures that the string is not a numeric value
    sizeString in Sizes
  ) {
    return Sizes[sizeString as keyof typeof Sizes];
  } else {
    return null;
  }
}

export enum Sizes {
  Size_Small,
  Size_Medium,
  Size_Large,
}

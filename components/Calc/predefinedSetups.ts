import { ElementEnum } from "@/data/Elements/ElementsEnum";

export interface Setup {
  label: string;
  minMatk: number | "";
  maxMatk: number | "";
  defendingElement: ElementEnum;
  defendingElementLevel: number;
  selectedSkillName: string;
  targetMdef: number | "";
  ignoreMdefPercent: number | "";
  magicAddSize: number | "";
  magicAddRace: number | "";
  magicAddEle: number | "";
  magicAtkEle: number | "";
  magicDmgBoss: number | "";
  magicDmgNonBoss: number | "";
  addedSkillDamage: number | "";
  isTargetBoss: boolean;
  selectedItems: { [key: string]: string | number };
}

export const predefinedSetups: Setup[] = [
  {
    label: "Default Setup",
    minMatk: 100,
    maxMatk: 200,
    defendingElement: ElementEnum.Neutro,
    defendingElementLevel: 1,
    selectedSkillName: "Storm Gust",
    targetMdef: 10,
    ignoreMdefPercent: 0,
    magicAddSize: 0,
    magicAddRace: 0,
    magicAddEle: 0,
    magicAtkEle: 0,
    magicDmgBoss: 0,
    magicDmgNonBoss: "",
    addedSkillDamage: "",
    isTargetBoss: false,
    selectedItems: {}, // Empty initially
  },
  {
    label: "HW - cajado val + abissal + esc abism",
    minMatk: 744,
    maxMatk: 744,
    defendingElement: ElementEnum.Sombrio,
    defendingElementLevel: 4,
    selectedSkillName: "Storm Gust",
    targetMdef: "",
    ignoreMdefPercent: 11,
    magicAddSize: "",
    magicAddRace: 20,
    magicAddEle: 20,
    magicAtkEle: "",
    magicDmgBoss: 5,
    magicDmgNonBoss: "",
    addedSkillDamage: "",
    isTargetBoss: true,
    selectedItems: {}, // Empty initially
  },
  {
    label: "BJ - proff - sem anel de cor e sem bota",
    minMatk: 6132,
    maxMatk: 6132,
    defendingElement: 0,
    defendingElementLevel: 1,
    selectedSkillName: "Cold Bolt",
    targetMdef: 1,
    ignoreMdefPercent: 85,
    magicAddSize: 20,
    magicAddRace: 35,
    magicAddEle: "",
    magicAtkEle: 50,
    magicDmgBoss: "",
    magicDmgNonBoss: "",
    addedSkillDamage: "",
    isTargetBoss: false,
    selectedItems: {}, // Empty initially
  },
  {
    label: "BJ - proff full",
    minMatk: 6609,
    maxMatk: 6609,
    defendingElement: 0,
    defendingElementLevel: 1,
    selectedSkillName: "Cold Bolt",
    targetMdef: 1,
    ignoreMdefPercent: 100,
    magicAddSize: 20,
    magicAddRace: "",
    magicAddEle: "",
    magicAtkEle: 60,
    magicDmgBoss: "",
    magicDmgNonBoss: 70,
    addedSkillDamage: 45,
    isTargetBoss: false,
    selectedItems: {}, // Empty initially
  },
  // Add more setups here
];

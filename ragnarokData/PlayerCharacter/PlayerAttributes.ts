// PlayerAttributes.ts
import { Bonuses, BonusType, s_add_drop } from "@/ragnarokData/types";
import { WeaponData, initializeWeaponData } from "../WeaponData"; // Import the WeaponData interface and initialization function
import { ELE_MAX, MAX_INVENTORY, MAX_PC_BONUS } from "../constants";
import { weapon_type } from "../ItemDB/weapon_type";
import { StatusData } from "../StatusData";
import { AddEffect } from "../AutoTriggerFlag";
import { sc_type } from "../sc_type";
import { Race, Race2 } from "../map_race_id2mask";
import { persistent_status } from "./persistentStatus";
import { equip_pos, item_types, ItemData } from "../ItemDB/types";
import { Inventory } from "./Inventory";
import { BonusHelpers } from "../BonusHelpers";

export class PlayerAttributes {
  id: number;
  name: string;
  has_shield: boolean;
  weapontype: weapon_type;
  weapontype1: weapon_type;
  weapontype2: weapon_type;
  autospell: any[];
  autospell2: any[];
  autospell3: any[];
  autoSpellWhenHit: any[];
  state: { lr_flag: number };
  right_weapon: WeaponData; // Use WeaponData type
  left_weapon: WeaponData; // Use WeaponData type
  addeff: AddEffect[];
  addeff2: AddEffect[];
  addeff3: any[];
  addEffWhenHit: any[];
  addEffOnSkill: any[];
  bonus: {
    hp_vanish_rate: number;
    hp_vanish_per: number;
    hp_vanish_trigger: number;
    sp_vanish_rate: number;
    sp_vanish_per: number;
    sp_vanish_trigger: number;
    atk_rate: number;
    arrow_atk: number;
    arrow_ele: number;
    arrow_cri: number;
    arrow_hit: number;
    nsshealhp: number;
    nsshealsp: number;
    critical_def: number;
    double_rate: number;
    long_attack_atk_rate: number;
    near_attack_def_rate: number;
    long_attack_def_rate: number;
    magic_def_rate: number;
    misc_def_rate: number;
    ignore_mdef_ele: number;
    ignore_mdef_race: number;
    perfect_hit: number;
    perfect_hit_add: number;
    get_zeny_rate: number;
    get_zeny_num: number;
    double_add_rate: number;
    short_weapon_damage_return: number;
    long_weapon_damage_return: number;
    magic_damage_return: number;
    break_weapon_rate: number;
    break_armor_rate: number;
    crit_atk_rate: number;
    classchange: number;
    speed_rate: number;
    speed_add_rate: number;
    aspd_add: number;
    itemhealrate2: number;
    shieldmdef: number;
    setitem_hash: number;
    setitem_hash2: number;
    splash_range: number;
    splash_add_range: number;
    add_steal_rate: number;
    add_heal_rate: number;
    add_heal2_rate: number;
    sp_gain_value: number;
    hp_gain_value: number;
    magic_sp_gain_value: number;
    magic_hp_gain_value: number;
    unbreakable: number;
    unbreakable_equip: number;
    unstripable_equip: number;
    fixcastrate: number;
    varcastrate: number;
    add_fixcast: number;
    add_varcast: number;
    ematk: number;
  };
  equip_pos: equip_pos[];
  equip_index: number[];
  itemBonuses: Bonuses;
  persistent_status: persistent_status;
  inventory: Inventory;
  base_status: StatusData;
  battle_status: StatusData;
  param_bonus!: { [key: string]: number };
  param_equip: { [key: string]: number };
  subele: number[];
  subrace: number[];
  subrace2: number[];
  subsize: number[];
  reseff: number[];
  weapon_coma_ele: number[];
  weapon_coma_race: number[];
  weapon_atk: number[];
  weapon_atk_rate: number[];
  arrow_addrace: number[];
  arrow_addele: number[];
  arrow_addsize: number[];
  magic_addele: number[];
  magic_addrace: number[];
  magic_addsize: number[];
  magic_atk_ele: number[];
  critaddrace: number[];
  expaddrace: number[];
  ignore_mdef: number[];
  ignore_def: number[];
  sp_gain_race: number[];
  sp_gain_race_attack: number[];
  hp_gain_race_attack: number[];
  dropaddrace: number[];

  skillatk: { id: number; val: number }[];
  skillusesprate: { id: number; val: number }[];
  skillusesp: { id: number; val: number }[];
  skillheal: { id: number; val: number }[];
  skillheal2: { id: number; val: number }[];
  skillblown: { id: number; val: number }[];
  skillcast: { id: number; val: number }[];
  skillcooldown: { id: number; val: number }[];
  skillfixcast: { id: number; val: number }[];
  skillvarcast: { id: number; val: number }[];
  skillfixcastrate: { id: number; val: number }[];
  subskill: { id: number; val: number }[];

  hp_loss: { value: number; rate: number; tick: number };
  sp_loss: { value: number; rate: number; tick: number };
  hp_regen: { value: number; rate: number; tick: number };
  sp_regen: { value: number; rate: number; tick: number };

  add_def: { class_: number; rate: number }[];
  add_mdef: { class_: number; rate: number }[];
  add_mdmg: { class_: number; rate: number }[];
  add_drop: s_add_drop[];

  itemhealrate: { nameid: number; rate: number }[];

  subele2: { flag: number; rate: number; ele: number }[];

  def_set_race: { value: number; rate: number; tick: number }[];
  mdef_set_race: { value: number; rate: number; tick: number }[];
  no_recover_state_race: { value: number; rate: number; tick: number }[];

  sub_def_ele: { rate_mob: number; rate_pc: number }[];
  magic_sub_def_ele: { rate_mob: number; rate_pc: number }[];

  castrate: number;
  hprate: number;
  sprate: number;
  dsprate: number;
  hprecov_rate: number;
  sprecov_rate: number;
  matk_rate: number;
  critical_rate: number;
  hit_rate: number;
  flee_rate: number;
  flee2_rate: number;
  def_rate: number;
  def2_rate: number;
  mdef_rate: number;
  mdef2_rate: number;
  delayrate: number;
  weight: number;
  max_weight: number;
  special_state: {
    no_weapon_damage: number;
    no_magic_damage: number;
    no_misc_damage: number;
    restart_full_recover: boolean;
    no_castcancel: boolean;
    no_castcancel2: boolean;
    no_sizefix: boolean;
    no_gemstone: boolean;
    intravision: boolean; // Maya Purple Card effect [DracoRPG]
    perfect_hiding: boolean; // [Valaris]
    no_knockback: boolean;
    bonus_coma: boolean;
  };
  regen: {
    flag: number;
    hp: number;
    sp: number;
    tick: {
      hp: number;
      sp: number;
    };
    rate: {
      hp: number;
      sp: number;
    };
    state: {
      walk: boolean;
      overweight: number;
      block: number;
    };
    skill: {
      hp: number;
      sp: number;
      tick: {
        hp: number;
        sp: number;
      };
      rate: {
        hp: number;
        sp: number;
      };
    };
    sitting: {
      hp: number;
      sp: number;
      tick: {
        hp: number;
        sp: number;
      };
      rate: {
        hp: number;
        sp: number;
      };
    };
  };

  constructor(name?: string, id?: number, bonuses?: Bonuses) {
    this.persistent_status = new persistent_status();
    this.id = id ?? 1;
    this.name = name ?? "test";
    this.resetValues();
    this.persistent_status.id = this.id;
    this.persistent_status.name = this.name;
    // Initialize single value properties
    this.has_shield = false;
    this.weapontype = weapon_type.W_FIST;
    this.weapontype1 = weapon_type.W_FIST;
    this.weapontype2 = weapon_type.W_FIST;
    this.castrate = 0;
    this.hprate = 0;
    this.sprate = 0;
    this.dsprate = 0;
    this.hprecov_rate = 0;
    this.sprecov_rate = 0;
    this.matk_rate = 0;
    this.critical_rate = 0;
    this.hit_rate = 0;
    this.flee_rate = 0;
    this.flee2_rate = 0;
    this.def_rate = 0;
    this.def2_rate = 0;
    this.mdef_rate = 0;
    this.mdef2_rate = 0;
    this.delayrate = 0;
    this.weight = 0;
    this.max_weight = 0;
    this.autospell = [];
    this.autospell2 = [];
    this.autospell3 = [];
    this.autoSpellWhenHit = [];
    this.state = { lr_flag: 0 };
    this.right_weapon = initializeWeaponData();
    this.left_weapon = initializeWeaponData();
    this.itemBonuses = bonuses ? bonuses : {};

    this.equip_pos = initEquipPos();
    this.equip_index = Array(equip_index.EQI_MAX).fill(-1);
    this.inventory = new Inventory(MAX_INVENTORY);
    // Initialize base_status
    this.base_status = initializeStatusData();
    this.battle_status = initializeStatusData();

    // Initialize arrays with distinct objects
    this.ignore_mdef = Array(Race.RC_MAX).fill(0);
    this.ignore_def = Array(Race.RC_MAX).fill(0);
    this.subele = Array(ELE_MAX).fill(0);
    this.subrace = Array(Race.RC_MAX).fill(0);
    this.subrace2 = Array(Race2.RC2_MAX).fill(0);
    this.subsize = Array(3).fill(0);
    this.reseff = Array(sc_type.SC_COMMON_MAX - sc_type.SC_COMMON_MIN + 1).fill(
      0
    );
    this.weapon_coma_ele = Array(ELE_MAX).fill(0);
    this.weapon_coma_race = Array(Race.RC_MAX).fill(0);
    this.weapon_atk = Array(weapon_type.MAX_WEAPON_TYPE).fill(0);
    this.weapon_atk_rate = Array(weapon_type.MAX_WEAPON_TYPE).fill(0);
    this.arrow_addele = Array(ELE_MAX).fill(0);
    this.arrow_addrace = Array(Race.RC_MAX).fill(0);
    this.arrow_addsize = Array(3).fill(0);
    this.magic_addele = Array(ELE_MAX).fill(0);
    this.magic_addrace = Array(Race.RC_MAX).fill(0);
    this.magic_addsize = Array(3).fill(0);
    this.magic_atk_ele = Array(ELE_MAX).fill(0);
    this.critaddrace = Array(Race.RC_MAX).fill(0);
    this.expaddrace = Array(Race.RC_MAX).fill(0);
    this.sp_gain_race = Array(Race.RC_MAX).fill(0);
    this.sp_gain_race_attack = Array(Race.RC_MAX).fill(0);
    this.hp_gain_race_attack = Array(Race.RC_MAX).fill(0);
    this.dropaddrace = Array(Race.RC_MAX).fill(0);

    this.skillatk = Array.from({ length: MAX_PC_BONUS }, () => ({
      id: 0,
      val: 0,
    }));
    this.skillusesprate = Array.from({ length: MAX_PC_BONUS }, () => ({
      id: 0,
      val: 0,
    }));
    this.skillusesp = Array.from({ length: MAX_PC_BONUS }, () => ({
      id: 0,
      val: 0,
    }));
    this.skillheal = Array.from({ length: 5 }, () => ({ id: 0, val: 0 }));
    this.skillheal2 = Array.from({ length: 5 }, () => ({ id: 0, val: 0 }));
    this.skillblown = Array.from({ length: MAX_PC_BONUS }, () => ({
      id: 0,
      val: 0,
    }));
    this.skillcast = Array.from({ length: MAX_PC_BONUS }, () => ({
      id: 0,
      val: 0,
    }));
    this.skillcooldown = Array.from({ length: MAX_PC_BONUS }, () => ({
      id: 0,
      val: 0,
    }));
    this.skillfixcast = Array.from({ length: MAX_PC_BONUS }, () => ({
      id: 0,
      val: 0,
    }));
    this.skillvarcast = Array.from({ length: MAX_PC_BONUS }, () => ({
      id: 0,
      val: 0,
    }));
    this.skillfixcastrate = Array.from({ length: MAX_PC_BONUS }, () => ({
      id: 0,
      val: 0,
    }));
    this.subskill = Array.from({ length: MAX_PC_BONUS }, () => ({
      id: 0,
      val: 0,
    }));

    this.add_def = Array.from({ length: MAX_PC_BONUS }, () => ({
      class_: 0,
      rate: 0,
    }));
    this.add_mdef = Array.from({ length: MAX_PC_BONUS }, () => ({
      class_: 0,
      rate: 0,
    }));
    this.add_mdmg = Array.from({ length: MAX_PC_BONUS }, () => ({
      class_: 0,
      rate: 0,
    }));

    this.itemhealrate = Array.from({ length: MAX_PC_BONUS }, () => ({
      nameid: 0,
      rate: 0,
    }));
    this.subele2 = Array.from({ length: MAX_PC_BONUS }, () => ({
      flag: 0,
      rate: 0,
      ele: 0,
    }));

    this.hp_loss = { value: 0, rate: 0, tick: 0 };
    this.sp_loss = { value: 0, rate: 0, tick: 0 };
    this.hp_regen = { value: 0, rate: 0, tick: 0 };
    this.sp_regen = { value: 0, rate: 0, tick: 0 };

    this.sub_def_ele = Array.from({ length: ELE_MAX }, () => ({
      rate_mob: 0,
      rate_pc: 0,
    }));
    this.magic_sub_def_ele = Array.from({ length: ELE_MAX }, () => ({
      rate_mob: 0,
      rate_pc: 0,
    }));

    this.def_set_race = Array.from({ length: Race.RC_MAX }, () => ({
      value: 0,
      rate: 0,
      tick: 0,
    }));
    this.mdef_set_race = Array.from({ length: Race.RC_MAX }, () => ({
      value: 0,
      rate: 0,
      tick: 0,
    }));
    this.no_recover_state_race = Array.from({ length: Race.RC_MAX }, () => ({
      value: 0,
      rate: 0,
      tick: 0,
    }));

    // Initialize addeff arrays
    this.addeff = Array.from({ length: MAX_PC_BONUS }, () => ({
      id: sc_type.SC_NONE,
      rate: 0,
      arrow_rate: 0,
      flag: 0,
      duration: 0,
    }));

    this.addeff2 = Array.from({ length: MAX_PC_BONUS }, () => ({
      id: sc_type.SC_NONE,
      rate: 0,
      arrow_rate: 0,
      flag: 0,
      duration: 0,
    }));

    this.addeff3 = [];

    this.addEffWhenHit = [];
    this.addEffOnSkill = [];
    this.add_def = Array.from({ length: MAX_PC_BONUS }, () => ({
      class_: 0,
      rate: 0,
    }));
    this.add_mdef = Array.from({ length: MAX_PC_BONUS }, () => ({
      class_: 0,
      rate: 0,
    }));
    this.add_mdmg = Array.from({ length: MAX_PC_BONUS }, () => ({
      class_: 0,
      rate: 0,
    }));
    this.add_drop = Array.from({ length: MAX_PC_BONUS }, () => ({
      id: 0,
      is_group: false,
      race: 0,
      rate: 0,
    }));

    this.itemhealrate = Array.from({ length: MAX_PC_BONUS }, () => ({
      nameid: 0,
      rate: 0,
    }));

    this.bonus = {
      hp_vanish_rate: 0,
      hp_vanish_per: 0,
      hp_vanish_trigger: 0,
      sp_vanish_rate: 0,
      sp_vanish_per: 0,
      sp_vanish_trigger: 0,
      atk_rate: 0,
      arrow_atk: 0,
      arrow_ele: 0,
      arrow_cri: 0,
      arrow_hit: 0,
      nsshealhp: 0,
      nsshealsp: 0,
      critical_def: 0,
      double_rate: 0,
      long_attack_atk_rate: 0,
      near_attack_def_rate: 0,
      long_attack_def_rate: 0,
      magic_def_rate: 0,
      misc_def_rate: 0,
      ignore_mdef_ele: 0,
      ignore_mdef_race: 0,
      perfect_hit: 0,
      perfect_hit_add: 0,
      get_zeny_rate: 0,
      get_zeny_num: 0,
      double_add_rate: 0,
      short_weapon_damage_return: 0,
      long_weapon_damage_return: 0,
      magic_damage_return: 0,
      break_weapon_rate: 0,
      break_armor_rate: 0,
      crit_atk_rate: 0,
      classchange: 0,
      speed_rate: 0,
      speed_add_rate: 0,
      aspd_add: 0,
      itemhealrate2: 0,
      shieldmdef: 0,
      setitem_hash: 0,
      setitem_hash2: 0,
      splash_range: 0,
      splash_add_range: 0,
      add_steal_rate: 0,
      add_heal_rate: 0,
      add_heal2_rate: 0,
      sp_gain_value: 0,
      hp_gain_value: 0,
      magic_sp_gain_value: 0,
      magic_hp_gain_value: 0,
      unbreakable: 0,
      unbreakable_equip: 0,
      unstripable_equip: 0,
      fixcastrate: 0,
      varcastrate: 0,
      add_fixcast: 0,
      add_varcast: 0,
      ematk: 0,
    };

    this.param_equip = {
      SP_STR: 0,
      SP_AGI: 0,
      SP_VIT: 0,
      SP_INT: 0,
      SP_DEX: 0,
      SP_LUK: 0,
    };

    // Initialize special_state
    this.special_state = {
      no_weapon_damage: 0,
      no_magic_damage: 0,
      no_misc_damage: 0,
      restart_full_recover: false,
      no_castcancel: false,
      no_castcancel2: false,
      no_sizefix: false,
      no_gemstone: false,
      intravision: false, // Maya Purple Card effect [DracoRPG]
      perfect_hiding: false, // [Valaris]
      no_knockback: false,
      bonus_coma: false,
    };

    // Initialize regen
    this.regen = {
      flag: 0,
      hp: 0,
      sp: 0,
      tick: {
        hp: 0,
        sp: 0,
      },
      rate: {
        hp: 0,
        sp: 0,
      },
      state: {
        walk: false,
        overweight: 0,
        block: 0,
      },
      skill: {
        hp: 0,
        sp: 0,
        tick: {
          hp: 0,
          sp: 0,
        },
        rate: {
          hp: 0,
          sp: 0,
        },
      },
      sitting: {
        hp: 0,
        sp: 0,
        tick: {
          hp: 0,
          sp: 0,
        },
        rate: {
          hp: 0,
          sp: 0,
        },
      },
    };
  }

  private resetValues(): void {
    this.itemBonuses = {};
    this.param_bonus = {
      SP_STR: 0,
      SP_AGI: 0,
      SP_VIT: 0,
      SP_INT: 0,
      SP_DEX: 0,
      SP_LUK: 0,
    };
  }

  // Method to update the character's name
  updateName(newName: string): void {
    this.name = newName;
  }

  // Generic method to update a specific attribute by key
  updateAttribute(key: keyof this, value: any): void {
    if (key in this) {
      (this as any)[key] = value;
    } else {
      throw new Error(
        `Attribute ${key.toString()} does not exist on PlayerAttributes`
      );
    }
  }

  public getInvSlotInEquipPos(pos: equip_pos): number[] {
    const slots = [];
    for (let i = 0; i < equip_index.EQI_MAX; i++) {
      if ((this.equip_pos[i] & pos) !== 0) {
        if (this.equip_index[i] !== -1) {
          slots.push(this.equip_index[i]);
        }
      }
    }

    return slots;
  }

  public calculateItemBonuses(): void {
    this.resetValues();
    let newBonuses: Bonuses = {};
    const equippedItems: ItemData[] = [];
    const equippedCards: ItemData[] = [];

    for (let i = 0; i < equip_index.EQI_MAX; i++) {
      const item = this.inventory.getItemInSlot(this.equip_index[i]);
      if (item) {
        equippedItems.push(item);
      }
    }

    equippedItems.forEach((item) => {
      const equipCards = item.getCardItems();
      equippedCards.push(...equipCards);
    });

    equippedItems.concat(...equippedCards).forEach((item) => {
      const itemCopy = item.copy();
      if (itemCopy.Bonuses) {
        Object.keys(itemCopy.Bonuses).forEach((key) => {
          const typedKey = key as keyof Bonuses;
          if (newBonuses[typedKey]) {
            const bonusesToBeAdded: BonusType | undefined = {
              ...itemCopy.Bonuses![typedKey],
            };
            const currentBonuses: BonusType = newBonuses[typedKey];

            if (!bonusesToBeAdded) return;

            Object.keys(bonusesToBeAdded).forEach((bonusKey) => {
              const typedBonusKey = bonusKey as keyof Bonuses;
              if (currentBonuses[typedBonusKey]) {
                newBonuses[typedKey]![typedBonusKey] = [
                  ...newBonuses[typedKey]![typedBonusKey],
                  ...bonusesToBeAdded[typedBonusKey],
                ];
              } else {
                newBonuses[typedKey]![typedBonusKey] =
                  bonusesToBeAdded[typedBonusKey];
              }
            });
          } else {
            newBonuses = {
              ...newBonuses,
              [typedKey]: { ...itemCopy.Bonuses![typedKey] },
            };
          }
        });
      }
    });
    this.itemBonuses = newBonuses;
    BonusHelpers.processBonuses(newBonuses, this);
  }

  public addItem(itemData: ItemData, amount: number = 1): number {
    const itemCopy = itemData.copy();

    return this.inventory.addItem(itemCopy, amount);
  }

  // pc_equipitem
  public equipItem(
    inventorySlot: number,
    reqPos: equip_pos = equip_pos.EQP_NONE
  ): void {
    const item = this.inventory.getItemInSlot(inventorySlot);
    if (!item) return;
    if (!item.isEquip()) return;
    if (item.EquipPosWhenEquipped !== equip_pos.EQP_NONE) return;

    const itemLoc = item.getLoc();

    if (reqPos === equip_pos.EQP_NONE) {
      reqPos = itemLoc;
    }
    let pos = equip_pos.EQP_NONE;

    if (reqPos === equip_pos.EQP_ACC) {
      pos = reqPos & equip_pos.EQP_ACC;

      if (pos === equip_pos.EQP_ACC) {
        if (this.equip_index[equip_index.EQI_ACC_R] >= 0) {
          pos = equip_pos.EQP_ACC_L;
        } else {
          pos = equip_pos.EQP_ACC_R;
        }
      }
    }

    if (pos === equip_pos.EQP_NONE) {
      pos = reqPos;
    }

    for (let i = 0; i < equip_index.EQI_MAX; i++) {
      const invSlot = this.equip_index[i];
      let itemInEquipPos = null;
      if (invSlot !== -1) {
        itemInEquipPos = this.inventory.getItemInSlot(invSlot);
      }

      if (
        (pos & (itemInEquipPos?.EquipPosWhenEquipped ?? equip_pos.EQP_NONE)) !==
          0 &&
        (this.equip_pos[i] &
          (itemInEquipPos?.EquipPosWhenEquipped ?? equip_pos.EQP_NONE)) !==
          0
      ) {
        if (invSlot !== -1) {
          this.unequipItem(invSlot);
        }
      }
    }

    for (let i = 0; i < equip_index.EQI_MAX; i++) {
      if ((this.equip_pos[i] & pos) !== 0) {
        this.equip_index[i] = inventorySlot;
      }
    }

    const invItem = this.inventory.getItemInSlot(inventorySlot);
    invItem?.equip(pos);
    this.calculateItemBonuses();
  }

  public unequipItemPos(pos: equip_pos): void {
    if (pos === equip_pos.EQP_NONE) return;
    if (pos === equip_pos.EQP_HAND_R) {
      this.weapontype1 = weapon_type.W_FIST;
      this.calcWeaponType();
    }
    if (pos === equip_pos.EQP_HAND_L) {
      this.has_shield = false;
      this.weapontype2 = weapon_type.W_FIST;
      this.calcWeaponType();
    }
  }

  //pc_unequipitem
  public unequipItem(invSlotIndex: number): void {
    const item = this.inventory.getItemInSlot(invSlotIndex);
    if (!item) return;
    const itemLoc = item.EquipPosWhenEquipped;
    if (itemLoc === equip_pos.EQP_NONE || itemLoc === undefined) return;
    const equipInvSlotIndexes = this.getInvSlotInEquipPos(itemLoc);
    if (equipInvSlotIndexes.length === 0) return;

    equipInvSlotIndexes.forEach((slot) => {
      for (let i = 0; i < equip_index.EQI_MAX; i++) {
        if ((this.equip_pos[i] & itemLoc) !== 0) {
          if (this.equip_index[i] !== -1) {
            this.equip_index[i] = -1;
          }
        }
      }
    });
    this.unequipItemPos(itemLoc);
    item.unequip();
    // TODO
    // Check for combos. (MUST be done before status->calc_pc()!)
    this.calculateItemBonuses();
  }

  public calcWeaponType(): number {
    // single-hand
    if (this.weapontype2 === weapon_type.W_FIST) {
      this.weapontype = this.weapontype1;
      return 1;
    }
    if (this.weapontype1 === weapon_type.W_FIST) {
      this.weapontype = this.weapontype2;
      return 1;
    }

    // dual-wield
    this.weapontype = weapon_type.W_FIST;
    switch (this.weapontype1) {
      case weapon_type.W_DAGGER:
        switch (this.weapontype2) {
          case weapon_type.W_DAGGER:
            this.weapontype = weapon_type.W_DOUBLE_DD;
            break;
          case weapon_type.W_1HSWORD:
            this.weapontype = weapon_type.W_DOUBLE_DS;
            break;
          case weapon_type.W_1HAXE:
            this.weapontype = weapon_type.W_DOUBLE_DA;
            break;
        }
      case weapon_type.W_1HSWORD:
        switch (this.weapontype2) {
          case weapon_type.W_DAGGER:
            this.weapontype = weapon_type.W_DOUBLE_DS;
            break;
          case weapon_type.W_1HSWORD:
            this.weapontype = weapon_type.W_DOUBLE_SS;
            break;
          case weapon_type.W_1HAXE:
            this.weapontype = weapon_type.W_DOUBLE_SA;
            break;
        }
      case weapon_type.W_1HAXE:
        switch (this.weapontype2) {
          case weapon_type.W_DAGGER:
            this.weapontype = weapon_type.W_DOUBLE_DA;
            break;
          case weapon_type.W_1HSWORD:
            this.weapontype = weapon_type.W_DOUBLE_SA;
            break;
          case weapon_type.W_1HAXE:
            this.weapontype = weapon_type.W_DOUBLE_AA;
            break;
        }
    }

    if (this.weapontype === weapon_type.W_FIST) {
      this.weapontype = this.weapontype1;
    }

    return 2;
  }

  // pc_insert_card
  public insertCard(cardInvSlot: number, equipInvSlot: number): boolean {
    if (!this.inventory.canInsertCardInto(cardInvSlot, equipInvSlot))
      return false;

    const cardItem = this.inventory.getItemInSlot(cardInvSlot);
    const equipItem = this.inventory.getItemInSlot(equipInvSlot);

    if (!cardItem) return false;
    if (!equipItem) return false;
    if (!equipItem.Cards) return false;

    const nextSlot = equipItem.Cards?.findIndex((card) => card === 0);
    if (nextSlot === -1) return false;

    this.inventory.removeAmountFromItemInSlot(cardInvSlot, 1);
    equipItem.Cards[nextSlot] = cardItem.nameid;
    this.calculateItemBonuses();

    return true;
  }

  // This method constructs PlayerAttributes from a persistent_status object
  public static fromPersistentStatus(
    status: persistent_status,
    name: string,
    id: number
  ): PlayerAttributes {
    const player = new PlayerAttributes(name, id);

    // Set basic status values
    player.persistent_status = status;

    // Set inventory using persistent items from the status
    player.inventory = Inventory.deserialize(MAX_INVENTORY, status.inventory);

    const equippedItems = player.inventory.getEquippedItems();

    equippedItems.forEach((item) => {
      for (let i = 0; i < equip_index.EQI_MAX; i++) {
        if ((player.equip_pos[i] & item.pos) !== 0) {
          player.equip_index[i] = item.invSlot;
        }
      }
    });

    // Populate any other fields from persistent_status as necessary

    player.calculateItemBonuses();
    return player;
  }

  // Method to convert the PlayerAttributes back to persistent_status
  public toPersistentStatus(): persistent_status {
    const status = this.persistent_status;

    // Convert inventory items to persistent items
    status.inventory = this.inventory.prepareToSerialize();

    // Set any other status-related fields you want to persist here
    return status;
  }
}

function initializeStatusData(): StatusData {
  return {
    hp: 0,
    sp: 0,
    max_hp: 0,
    max_sp: 0,
    str: 0,
    agi: 0,
    vit: 0,
    int_: 0,
    dex: 0,
    luk: 0,
    atk_percent: 0,
    matk_percent: 0,
    def_percent: 0,
    mdef_percent: 0,
    batk: 0,
    matk_min: 0,
    matk_max: 0,
    speed: 0,
    amotion: 0,
    adelay: 0,
    dmotion: 0,
    mode: 0,
    hit: 0,
    flee: 0,
    cri: 0,
    flee2: 0,
    def2: 0,
    mdef2: 0,
    aspd_rate: 0,
    def: 0,
    mdef: 0,
    def_ele: 0,
    ele_lv: 0,
    size: 0,
    race: 0,
    rhw: { atk: 0, atk2: 0, range: 0, ele: 0 },
    lhw: { atk: 0, atk2: 0, range: 0, ele: 0 },
  };
}

enum equip_index {
  EQI_ACC_L = 0,
  EQI_ACC_R,
  EQI_SHOES,
  EQI_GARMENT,
  EQI_HEAD_LOW,
  EQI_HEAD_MID,
  EQI_HEAD_TOP,
  EQI_ARMOR,
  EQI_HAND_L,
  EQI_HAND_R,
  EQI_COSTUME_TOP,
  EQI_COSTUME_MID,
  EQI_COSTUME_LOW,
  EQI_COSTUME_GARMENT,
  EQI_AMMO,
  EQI_SHADOW_ARMOR,
  EQI_SHADOW_WEAPON,
  EQI_SHADOW_SHIELD,
  EQI_SHADOW_SHOES,
  EQI_SHADOW_ACC_R,
  EQI_SHADOW_ACC_L,
  EQI_MAX,
}

function initEquipPos(): equip_pos[] {
  return [
    equip_pos.EQP_ACC_L,
    equip_pos.EQP_ACC_R,
    equip_pos.EQP_SHOES,
    equip_pos.EQP_GARMENT,
    equip_pos.EQP_HEAD_LOW,
    equip_pos.EQP_HEAD_MID,
    equip_pos.EQP_HEAD_TOP,
    equip_pos.EQP_ARMOR,
    equip_pos.EQP_HAND_L,
    equip_pos.EQP_HAND_R,
    equip_pos.EQP_COSTUME_HEAD_TOP,
    equip_pos.EQP_COSTUME_HEAD_MID,
    equip_pos.EQP_COSTUME_HEAD_LOW,
    equip_pos.EQP_COSTUME_GARMENT,
    equip_pos.EQP_AMMO,
    equip_pos.EQP_SHADOW_ARMOR,
    equip_pos.EQP_SHADOW_WEAPON,
    equip_pos.EQP_SHADOW_SHIELD,
    equip_pos.EQP_SHADOW_SHOES,
    equip_pos.EQP_SHADOW_ACC_R,
    equip_pos.EQP_SHADOW_ACC_L,
  ];
}

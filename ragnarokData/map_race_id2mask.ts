export enum Race {
  RC_FORMLESS = 0, // Formless
  RC_UNDEAD, // Undead
  RC_BRUTE, // Beast/Brute
  RC_PLANT, // Plant
  RC_INSECT, // Insect
  RC_FISH, // Fish
  RC_DEMON, // Demon
  RC_DEMIHUMAN, // Demi-Human (not including Player)
  RC_ANGEL, // Angel
  RC_DRAGON, // Dragon
  RC_PLAYER, // Player
  // Boss
  RC_BOSS, // Boss
  RC_NONBOSS, // Non-boss

  RC_MAX, // Array size delimiter (keep before the combination races)

  // Combination Races
  RC_NONDEMIHUMAN, // Every race except Demi-Human (including Player)
  RC_NONPLAYER, // Every non-player race
  RC_DEMIPLAYER, // Demi-Human (including Player)
  RC_NONDEMIPLAYER, // Every race except Demi-Human (and except Player)
  RC_ALL = 0xff, // Every race (implemented as equivalent to RC_BOSS and RC_NONBOSS)
}

export enum RaceMask {
  RCMASK_NONE = 0,
  RCMASK_FORMLESS = 1 << Race.RC_FORMLESS,
  RCMASK_UNDEAD = 1 << Race.RC_UNDEAD,
  RCMASK_BRUTE = 1 << Race.RC_BRUTE,
  RCMASK_PLANT = 1 << Race.RC_PLANT,
  RCMASK_INSECT = 1 << Race.RC_INSECT,
  RCMASK_FISH = 1 << Race.RC_FISH,
  RCMASK_DEMON = 1 << Race.RC_DEMON,
  RCMASK_DEMIHUMAN = 1 << Race.RC_DEMIHUMAN,
  RCMASK_ANGEL = 1 << Race.RC_ANGEL,
  RCMASK_DRAGON = 1 << Race.RC_DRAGON,
  RCMASK_PLAYER = 1 << Race.RC_PLAYER,
  RCMASK_BOSS = 1 << Race.RC_BOSS,
  RCMASK_NONBOSS = 1 << Race.RC_NONBOSS,

  RCMASK_NONDEMIPLAYER = (1 << Race.RC_FORMLESS) |
    (1 << Race.RC_UNDEAD) |
    (1 << Race.RC_BRUTE) |
    (1 << Race.RC_PLANT) |
    (1 << Race.RC_INSECT) |
    (1 << Race.RC_FISH) |
    (1 << Race.RC_DEMON) |
    (1 << Race.RC_ANGEL) |
    (1 << Race.RC_DRAGON),

  RCMASK_NONDEMIHUMAN = RCMASK_NONDEMIPLAYER | (1 << Race.RC_PLAYER),

  RCMASK_NONPLAYER = RCMASK_NONDEMIPLAYER | (1 << Race.RC_DEMIHUMAN),

  RCMASK_DEMIPLAYER = (1 << Race.RC_DEMIHUMAN) | (1 << Race.RC_PLAYER),

  RCMASK_ALL = (1 << Race.RC_BOSS) | (1 << Race.RC_NONBOSS),
  RCMASK_ANY = RCMASK_NONPLAYER | RCMASK_PLAYER,
}

export function map_race_id2mask(race: Race): number {
  if (race >= Race.RC_FORMLESS && race < Race.RC_MAX) {
    return 1 << race;
  }

  if (race === Race.RC_ALL) {
    return RaceMask.RCMASK_ALL;
  }

  if (race === Race.RC_NONPLAYER) {
    return RaceMask.RCMASK_NONPLAYER;
  }

  if (race === Race.RC_NONDEMIHUMAN) {
    return RaceMask.RCMASK_NONDEMIHUMAN;
  }

  if (race === Race.RC_DEMIPLAYER) {
    return RaceMask.RCMASK_DEMIPLAYER;
  }

  if (race === Race.RC_NONDEMIPLAYER) {
    return RaceMask.RCMASK_NONDEMIPLAYER;
  }

  console.warn(`map_race_id2mask: Invalid race: ${race}`);
  return RaceMask.RCMASK_NONE;
}

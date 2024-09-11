"use client";

import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import React, { useEffect, useState } from "react";
import { PlayerAttributes } from "@/ragnarokData/PlayerCharacter/PlayerAttributes";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PageWrapper from "@/components/commonComponents/PageWrapper";
import EquipmentList from "../Character/EquipmentList";
import AttributeList from "../Character/AttributeList";
import Tabs from "@/components/commonComponents/Tabs";
import InventoryTab from "./Tabs/InventoryTab";
import AddItemTab from "./Tabs/AddItemTab";
import BattleInfoTab from "./Tabs/BattleInfoTab";

type CharacterProps = {
  characterId: number;
};

const Character: React.FC<CharacterProps> = ({ characterId }) => {
  const { reloadCharacters, characters } = useAccountService();
  const [character, setCharacter] = useState<PlayerAttributes | null>(null);

  useEffect(() => {
    console.log("Character page mounted");
    reloadCharacters();
  }, [reloadCharacters]);

  useEffect(() => {
    console.log("Characters updated", characters);
    if (characters.length <= characterId) {
      console.error("Character not found");
      return;
    }

    const character = characters[characterId];
    setCharacter(character);
  }, [characters, characterId]);

  if (!character) {
    return (
      <div>
        <Link href="/game">Voltar</Link>
      </div>
    );
  }

  return (
    <PageWrapper overflowAuto>
      <div className="flex md:flex-row gap-5 w-4/5">
        <div className="flex flex-col flex-1 gap-4">
          <Link href="/game" className="flex text-white items-center gap-2">
            <FaArrowLeft /> Voltar
          </Link>
          <div>
            Id: {characterId} Name: {character?.name}
          </div>
          <EquipmentList
            equipedItemIndexes={character.equip_index}
            inventory={character.inventory}
          />
          <AttributeList param_bonus={character.param_bonus} />
        </div>

        <div className="flex flex-1 flex-col">
          <Tabs
            tabs={[
              {
                label: "Inventário",
                content: <InventoryTab characterId={characterId} />,
              },
              {
                label: "Adicionar Item",
                content: <AddItemTab isPlayerTab characterId={characterId} />,
              },
              {
                label: "Info de Batalha",
                content: (
                  <BattleInfoTab
                    weapon_atk={character.weapon_atk}
                    weapon_atk_rate={character.weapon_atk_rate}
                    arrow_addrace={character.arrow_addrace}
                    arrow_addele={character.arrow_addele}
                    arrow_addsize={character.arrow_addsize}
                    magic_addele={character.magic_addele}
                    magic_addrace={character.magic_addrace}
                    magic_addsize={character.magic_addsize}
                    magic_atk_ele={character.magic_atk_ele}
                    critaddrace={character.critaddrace}
                    expaddrace={character.expaddrace}
                    ignore_mdef={character.ignore_mdef}
                    ignore_def={character.ignore_def}
                    subele={character.subele}
                    subrace={character.subrace}
                    subrace2={character.subrace2}
                    subsize={character.subsize}
                    reseff={character.reseff}
                  />
                ),
              },
            ]}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Character;

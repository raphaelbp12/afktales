"use client";
import React, { useState, useEffect } from "react";
import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import { PlayerAttributes } from "@/ragnarokData/PlayerCharacter/PlayerAttributes";

interface BattleInfoTabProps {
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
  subele: number[];
  subrace: number[];
  subrace2: number[];
  subsize: number[];
  reseff: number[];
}

const BattleInfoTab: React.FC<BattleInfoTabProps> = (props) => {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div>Weapon Atk: {props.weapon_atk.join(", ")}</div>
      <div>Weapon Atk Rate: {props.weapon_atk_rate.join(", ")}</div>
      <div>Arrow Addrace: {props.arrow_addrace.join(", ")}</div>
      <div>Arrow Addele: {props.arrow_addele.join(", ")}</div>
      <div>Arrow Addsize: {props.arrow_addsize.join(", ")}</div>
      <div>Magic Addele: {props.magic_addele.join(", ")}</div>
      <div>Magic Addrace: {props.magic_addrace.join(", ")}</div>
      <div>Magic Addsize: {props.magic_addsize.join(", ")}</div>
      <div>Magic Atk Ele: {props.magic_atk_ele.join(", ")}</div>
      <div>Critaddrace: {props.critaddrace.join(", ")}</div>
      <div>Expaddrace: {props.expaddrace.join(", ")}</div>
      <div>Ignore Mdef: {props.ignore_mdef.join(", ")}</div>
      <div>Ignore Def: {props.ignore_def.join(", ")}</div>
      <div>Subele: {props.subele.join(", ")}</div>
      <div>Subrace: {props.subrace.join(", ")}</div>
      <div>Subrace2: {props.subrace2.join(", ")}</div>
      <div>Subsize: {props.subsize.join(", ")}</div>
      <div>Reseff: {props.reseff.join(", ")}</div>
    </div>
  );
};

export default BattleInfoTab;

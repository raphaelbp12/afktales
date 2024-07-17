"use client";

import React from "react";
import DropdownSelector from "../commonComponents/DropdownSelector";
import Tabs from "../commonComponents/Tabs";
import EquipmentSelection from "./EquipmentSelection";
import DamageCalculation from "./DamageCalculation";
import { CalcProvider, useCalc } from "@/contexts/calcContext";
import { predefinedSetups } from "./predefinedSetups";
import PageWrapper from "../commonComponents/PageWrapper";

const CalcPage: React.FC = () => {
  const { selectedSetup, handleSetupChange, handleSaveSetup } = useCalc();

  return (
    <PageWrapper overflowAuto={true}>
      <div className="w-full flex flex-col items-center justify-center overflow-hidden relative">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Calculadora</h1>
        <DropdownSelector
          id="setupSelect"
          label="Select Setup"
          value={selectedSetup}
          options={predefinedSetups.map((setup) => ({
            value: setup.label,
            label: setup.label,
          }))}
          onChange={handleSetupChange}
        />
        <Tabs
          tabs={[
            { label: "Equipment Selection", content: <EquipmentSelection /> },
            { label: "Damage Calculation", content: <DamageCalculation /> },
          ]}
        />
        <button
          onClick={handleSaveSetup}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Copy Setup
        </button>
      </div>
    </PageWrapper>
  );
};

const CalcPageWrapper: React.FC = () => {
  return (
    <CalcProvider>
      <CalcPage />
    </CalcProvider>
  );
};

export default CalcPageWrapper;

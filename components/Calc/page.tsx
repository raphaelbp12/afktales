"use client";

import React, { useState } from "react";
import InputField from "../commonComponents/InputField";

const CalcPage: React.FC = () => {
  const [minMatk, setMinMatk] = useState<number | string>("");
  const [maxMatk, setMaxMatk] = useState<number | string>("");

  const handleMinMatkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMinMatk(value === "" ? "" : Number(value));
  };

  const handleMaxMatkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMaxMatk(value === "" ? "" : Number(value));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden relative">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Calculadora</h1>
      <InputField
        label="Min MATK"
        value={minMatk}
        onChange={handleMinMatkChange}
        type="number"
      />
      <InputField
        label="Max MATK"
        value={maxMatk}
        onChange={handleMaxMatkChange}
        type="number"
      />
      <div className="flex-grow w-full overflow-hidden"></div>
    </div>
  );
};

export default CalcPage;

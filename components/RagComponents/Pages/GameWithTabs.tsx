"use client";
import React from "react";
import Game from "./Game"; // Your Game component
import Tabs from "@/components/commonComponents/Tabs";
import SaveAndLoadTab from "./Tabs/SaveAndLoadTab";
import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";

const GameWithTabs: React.FC = () => {
  const { nextAutoSaveInSeconds } = useAccountService();
  // Define the content for each tab
  const tabs = [
    {
      label: "Game",
      content: <Game />,
    },
    {
      label: `Salvar e Carregar (${nextAutoSaveInSeconds}s)`,
      content: <SaveAndLoadTab />,
    },
  ];

  return <Tabs tabs={tabs} />;
};

export default GameWithTabs;

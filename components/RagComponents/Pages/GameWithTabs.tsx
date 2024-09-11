"use client";
import React from "react";
import Game from "./Game"; // Your Game component
import Tabs from "@/components/commonComponents/Tabs";
import SaveAndLoadTab from "./Tabs/SaveAndLoadTab";
import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import AddItemTab from "./Tabs/AddItemTab";
import PageWrapper from "@/components/commonComponents/PageWrapper";

const GameWithTabs: React.FC = () => {
  const { nextAutoSaveInSeconds } = useAccountService();
  // Define the content for each tab
  const tabs = [
    {
      label: "Game",
      content: <Game />,
    },
    {
      label: "Adicionar Item ao Armazém",
      content: <AddItemTab />,
    },
    {
      label: `Salvar e Carregar (${nextAutoSaveInSeconds}s)`,
      content: <SaveAndLoadTab />,
    },
  ];

  return (
    <PageWrapper overflowAuto>
      <Tabs tabs={tabs} />
    </PageWrapper>
  );
};

export default GameWithTabs;

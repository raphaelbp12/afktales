// components/ClientInfoPanel.tsx
"use client";

import React, { useEffect } from "react";
import InfoPanel from "@/components/InfoPanel";

const ClientInfoPanel = () => {
  useEffect(() => {
    const infoPanel = document.getElementById("infoPanel");
    const handleScroll = () => {
      if (window.scrollY > 50) {
        infoPanel?.classList.add("hidden");
      } else {
        infoPanel?.classList.remove("hidden");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="infoPanel" className="fixed top-16 w-full">
      <InfoPanel
        title="Escolha as próximas funcionalidades!"
        description="Temos uma enquete no Discord para decidir quais funcionalidades implementar a seguir. Participe!"
        storageKey="infoPanelDisclaimer"
      />
    </div>
  );
};

export default ClientInfoPanel;

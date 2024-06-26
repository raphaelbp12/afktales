"use client";
// pages/GamePage.tsx
import UnityPlayer from "@/components/commonComponents/UnityPlayer";
import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const GamePage: React.FC = () => {
  return <UnityPlayer />;
};

export default GamePage;

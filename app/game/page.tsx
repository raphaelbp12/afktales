import dynamic from "next/dynamic";

const GameWithTabs = dynamic(
  () => import("../../components/RagComponents/Pages/GameWithTabs"),
  {
    ssr: false,
  }
);

export default function GameWithTabsPage() {
  return <GameWithTabs />;
}

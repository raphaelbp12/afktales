import dynamic from "next/dynamic";

const Game = dynamic(() => import("../../components/RagComponents/Pages/Game"), {
  ssr: false,
});

export default function GamePage() {
  return <Game />;
}

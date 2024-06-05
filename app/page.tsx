// pages/index.tsx

import GachaGame from "../components/GachaGame";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GachaGame />
    </main>
  );
}

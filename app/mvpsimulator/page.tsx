import dynamic from "next/dynamic";

const MvpSimulator = dynamic(() => import("../../components/MvpSimulator"), {
  ssr: false,
});

export default function MvpSimulatorPage() {
  return <MvpSimulator />;
}

import dynamic from "next/dynamic";

const CardRandomizer = dynamic(() => import("../../components/CardRandomizer"), {
  ssr: false,
});

export default function CardRandomizerPage() {
  return <CardRandomizer />;
}

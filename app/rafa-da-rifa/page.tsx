import dynamic from "next/dynamic";

const RafaDaRifa = dynamic(() => import("../../components/RafaDaRifa"), {
  ssr: false,
});

export default function RafaDaRifaPage() {
  return <RafaDaRifa />;
}

import dynamic from "next/dynamic";

const Character = dynamic(
  () => import("../../../../components/RagComponents/Pages/Character"),
  {
    ssr: false,
  }
);

export default function CharacterPage({ params }: { params: { id: number } }) {
  return <Character characterId={params.id} />;
}

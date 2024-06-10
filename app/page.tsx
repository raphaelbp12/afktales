import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Simuladores do Ragnatales</h1>
      <div className="flex flex-wrap items-center gap-2">
        <Card
          imageSrc="/images/Rifa1.png"
          title="Rafa da Rifa"
          description="Descubra quanto você gastaria pra pegar o que deseja."
          iconSrc="/images/rafadarifaIcon.png"
          href="/rafa-da-rifa"
          backgroundColor="bg-blue-500"
        />
        <Card
          imageSrc="/images/cheff2.png"
          title="Cheffênia"
          description="Quantos MVPs você precisa matar para dropar a sua build?"
          iconSrc="/images/cheffIcon.png"
          href="/mvpsimulator"
          backgroundColor="bg-green-500"
        />
        <Card
          imageSrc="/images/bio5.png"
          title="Bio 5 - Em breve!"
          description="Quer Bio5? Então vote na enquete por essa funcionalidade!"
          iconSrc="/images/bio5Icon.png"
          href="https://discord.gg/4QWrwNw3ry"
          backgroundColor="bg-gray-500"
          newTab
        />
        <Card
          imageSrc="/images/oca.jpg"
          title="OCA de Cheffênia - Em breve!"
          description="Vote na enquete por essa funcionalidade!"
          iconSrc="/images/ocaCheffIcon.png"
          href="https://discord.gg/4QWrwNw3ry"
          backgroundColor="bg-gray-500"
          newTab
        />
      </div>
    </div>
  );
}

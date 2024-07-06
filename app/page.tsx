import Card from "@/components/commonComponents/Card";
import ChangelogList from "@/components/commonComponents/ChangelogList";
import PageWrapper from "@/components/commonComponents/PageWrapper";

export default function Home() {
  return (
    <PageWrapper overflowAuto={true}>
      <div className="flex flex-col items-center p-6">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6">Simuladores do Ragnatales</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
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
              title="OCA de Cheffênia"
              description="Teste sua sorte com a OCA de Cheffênia! O tigrinho paga?"
              iconSrc="/images/ocaCheffIcon.png"
              href="/card-randomizer"
              backgroundColor="bg-purple-500"
            />
            <Card
              imageSrc="/images/tormenta.png"
              title="Godly"
              description="Aprimore suas habilidades com o simulador! Vai ficar fácil!"
              iconSrc="/images/tormentaIcon.png"
              href="/godlys"
              backgroundColor="bg-orange-500"
            />
            <Card
              imageSrc="/images/calculator.png"
              title="Calculadora 🚧"
              description="Em construção - A calculadora está longe de estar completa"
              iconSrc="/images/calculatorIcon.png"
              href="/calc"
              backgroundColor="bg-red-500"
            />
          </div>
        </div>
        <div className="flex items-center flex-col mt-8">
          <h1 className="text-3xl font-bold mb-6">Lista de mudanças</h1>
          <ChangelogList />
        </div>
      </div>
    </PageWrapper>
  );
}

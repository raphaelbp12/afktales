import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Simuladores do Ragnatales</h1>
      <Link href="/rafa-da-rifa" passHref legacyBehavior>
        <a className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md mb-4">
          <Image
            src="/images/rafadarifaIcon.png"
            alt="Rafa da Rifa Icon"
            width={24}
            height={24}
            className="mr-2"
          />
          Rafa da Rifa
        </a>
      </Link>
      <Link href="/mvpsimulator" passHref legacyBehavior>
        <a className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md">
          <Image
            src="/images/cheffIcon.png"
            alt="Cheffenia Icon"
            width={24}
            height={24}
            className="mr-2"
          />
          Cheffênia
        </a>
      </Link>
    </div>
  );
}

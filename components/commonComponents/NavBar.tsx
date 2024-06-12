// components/NavBar.tsx

import Link from "next/link";
import { FaDiscord, FaGithub, FaHome, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link href="/" passHref legacyBehavior>
          <a className="text-white flex items-center">
            <FaHome size={18} className="mr-2" />
            <span className="inline">Home</span>
          </a>
        </Link>
        <Link href="/rafa-da-rifa" passHref legacyBehavior>
          <a className="text-white flex items-center">
            <Image
              src="/images/rafadarifaIcon.png"
              alt="Rafa da Rifa Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="hidden md:inline">Rafa da Rifa</span>
          </a>
        </Link>
        <Link href="/mvpsimulator" passHref legacyBehavior>
          <a className="text-white flex items-center">
            <Image
              src="/images/cheffIcon.png"
              alt="Cheffenia Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="hidden md:inline">Cheffênia</span>
          </a>
        </Link>
        <Link href="https://discord.gg/4QWrwNw3ry" passHref legacyBehavior>
          <a className="text-white hidden lg:flex items-center">
            <Image
              src="/images/bio5Icon.png"
              alt="Bio5 Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            <span>Vote no Discord</span>
          </a>
        </Link>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://discord.gg/4QWrwNw3ry"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
        >
          <FaDiscord size={24} className="md:mr-2" />
          <span className="hidden lg:inline">Entre no Discord</span>
          <span className="hidden lg:hidden md:inline">Discord</span>
        </a>
        <a
          href="https://www.youtube.com/watch?v=F9eQcw_ANgQ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
        >
          <FaYoutube size={24} className="md:mr-2" />
          <span className="hidden lg:inline">Assista no YouTube</span>
          <span className="hidden lg:hidden md:inline">Youtube</span>
        </a>
        <a
          href="https://github.com/raphaelbp12/afktales"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

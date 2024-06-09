// components/NavBar.tsx

import Link from "next/link";
import { FaDiscord, FaGithub, FaHome } from "react-icons/fa";
import Image from "next/image";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link href="/" passHref legacyBehavior>
          <a className="text-white flex items-center">
            <FaHome size={18} className="mr-2" />
            Home
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
            Rafa da Rifa
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
            Cheffênia
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
          <FaDiscord size={24} className="mr-2" />
          Entre no Discord
        </a>
        <a
          href="https://github.com/raphaelbp12/afktales"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
        >
          <FaGithub size={24} className="mr-2" />
          Contribua no GitHub
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

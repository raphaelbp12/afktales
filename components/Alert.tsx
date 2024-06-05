// components/Alert.tsx
import React from "react";
import Image from "next/image";

interface AlertProps {
  message: string;
  src: string;
}

const Alert: React.FC<AlertProps> = ({ message, src }) => {
  return (
    <div className="bg-green-500 text-white text-center p-2 rounded-md flex items-center space-x-2 shadow-lg">
      <Image src={src} alt="Item" width={24} height={24} />
      <span>{message}</span>
    </div>
  );
};

export default Alert;

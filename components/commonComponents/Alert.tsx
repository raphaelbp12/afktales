// components/Alert.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface AlertProps {
  message: string;
  src: string;
  duration: number; // total duration for the alert
  createdAt: number; // time when the alert was created
}

const Alert: React.FC<AlertProps> = ({ message, src, duration, createdAt }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const timeElapsed = now - createdAt;
      setTimeLeft(Math.max(duration - timeElapsed, 0));
    }, 10);

    return () => clearInterval(interval);
  }, [duration, createdAt]);

  const progress = (timeLeft / duration) * 100;

  return (
    <div className="bg-green-500 text-white text-center rounded-md relative">
      <div className=" flex items-center space-x-2 p-2">
        <Image src={src} alt="Item" width={24} height={24} />
        <span>{message}</span>
      </div>
      <div
        className="absolute bottom-0 left-0 h-1 bg-gray-700 opacity-50"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default Alert;

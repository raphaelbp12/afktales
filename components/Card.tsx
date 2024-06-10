// components/Card.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  href?: string;
  iconSrc?: string;
  backgroundColor?: string;
  textColor?: string;
  newTab?: boolean; // Added new prop for opening link in a new tab
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  href,
  iconSrc,
  backgroundColor = "bg-gray-700",
  textColor = "text-white",
  newTab = false, // Default value is false, meaning link opens in the same tab
}) => {
  const cardContent = (
    <div
      className={`${backgroundColor} rounded-lg overflow-hidden shadow-md w-64 hover:shadow-lg transition-shadow duration-300`}
    >
      <div className="relative h-48">
        {" "}
        {/* Set a fixed height for the image container */}
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 flex flex-col">
        <div className="flex items-center mb-2">
          {iconSrc && (
            <Image
              src={iconSrc}
              alt="icon"
              width={24}
              height={24}
              className="mr-2"
            />
          )}
          <h2 className={`text-xl font-bold ${textColor}`}>{title}</h2>
        </div>
        <p className={textColor}>{description}</p>
      </div>
    </div>
  );

  if (href) {
    return newTab ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    ) : (
      <Link href={href} passHref legacyBehavior>
        <a>{cardContent}</a>
      </Link>
    );
  } else {
    return cardContent;
  }
};

export default Card;

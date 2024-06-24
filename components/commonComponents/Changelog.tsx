// components/commonComponents/Changelog.tsx
import React from "react";

export interface ChangelogProps {
  date: string;
  changes: {
    subtitle?: string;
    items: string[];
  }[];
}

const Changelog: React.FC<ChangelogProps> = ({ date, changes }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-md mb-6 w-full">
      <h2 className="text-2xl font-bold mb-4">{date}</h2>
      {changes.map((change, index) => (
        <div key={index} className="mb-4 mt-6">
          <h3 className="text-xl font-semibold mb-2 mt-4 italic text-gray-300">
            {change.subtitle}
          </h3>
          <ul className="list-disc pl-5">
            {change.items.map((item, idx) => (
              <li key={idx} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Changelog;

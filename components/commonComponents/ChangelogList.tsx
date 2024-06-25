import React from "react";
import Changelog from "./Changelog";
import changelog050624 from "@/changelogs/05-06-24";
import changelog090624 from "@/changelogs/09-06-24";
import changelog110624 from "@/changelogs/11-06-24";
import changelog120624 from "@/changelogs/12-06-24";
import changelog170624 from "@/changelogs/17-06-24";
import changelog190624 from "@/changelogs/19-06-24";
import changelog230624 from "@/changelogs/23-06-24";
import changelog240624 from "@/changelogs/24-06-24";
import changelog250624 from "@/changelogs/25-06-24";

// Import all changelogs
// Import other changelogs as needed

const changelogData = [
  changelog050624,
  changelog090624,
  changelog110624,
  changelog120624,
  changelog170624,
  changelog190624,
  changelog230624,
  changelog240624,
  changelog250624,
];

const ChangelogList: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {changelogData.reverse().map((changelog, index) => (
        <Changelog
          key={index}
          date={changelog.date}
          changes={changelog.changes}
        />
      ))}
    </div>
  );
};

export default ChangelogList;

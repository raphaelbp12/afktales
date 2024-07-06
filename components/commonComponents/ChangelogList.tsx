import React from "react";
import Changelog from "./Changelog";
import changelog050624 from "@/changelogs/240605";
import changelog090624 from "@/changelogs/240609";
import changelog110624 from "@/changelogs/240611";
import changelog120624 from "@/changelogs/240612";
import changelog170624 from "@/changelogs/240617";
import changelog190624 from "@/changelogs/240619";
import changelog230624 from "@/changelogs/240623";
import changelog240624 from "@/changelogs/240624";
import changelog250624 from "@/changelogs/240625";
import changelog240705 from "@/changelogs/240705";
import changelog240706 from "@/changelogs/240706";

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
  changelog240705,
  changelog240706,
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

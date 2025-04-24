import React from "react";

const TitleHeader = ({ title, subtitle, icon }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="hero-badge">
        <p>{icon}</p>
        <p className="text-white">{subtitle}</p>
      </div>

      <div className="hero_tag text-gray-gradient capitalize">{title}</div>
    </div>
  );
};

export default TitleHeader;

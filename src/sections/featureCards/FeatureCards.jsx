import React from "react";
import { abilities } from "../../consts";

const FeatureCards = () => {
  return (
    <div className="w-full c-space my-20">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {abilities.map(({ imgPath, title, desc, themeColor }, index) => (
          <div
            className="feature-card rounded-xl"
            key={`featureCard${index}`}
            style={{
              "--theme-color": themeColor,
              "--animation-delay": `${(index + 1) * 2}s`,
            }}
          >
            <div className="card-border rounded-xl padding-8 flex flex-col gap-4">
              <div className="siz-14 flex items-center justify-center rounded-full">
                <img src={imgPath} alt="" />
              </div>
              <div className="flex flex-col gap-1 items-start self-stretch">
                <h3 className="text-white text-lg md:text-2xl">{title}</h3>
                <p className="text-white-700 text-sm md:text-lg ">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

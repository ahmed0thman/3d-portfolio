import React from "react";
import { abilities } from "../../consts";
import { useWindowSize } from "../../contexts/WindowSizeProvider";
import { motion } from "motion/react";

const FeatureCards = () => {
  const isPc = useWindowSize();
  return (
    <section className="w-full c-space my-20">
      <div
        id="features"
        className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {abilities.map(({ imgPath, title, desc, themeColor }, index) => (
          <motion.div
            initial={{ x: -100 * (index + 1), opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: (index + 1) * 0.2,
                easings: ["easeInOut"],
              },
            }}
            className="feature-card rounded-xl"
            key={`featureCard${index}`}
            style={{
              "--theme-color": themeColor,
              "--animation-delay": `${(index + 1) * 2}s`,
            }}
          >
            <div className="card-border rounded-xl !px-4 !py-3 flex flex-col gap-4">
              <div className="siz-14 flex items-center justify-center rounded-full">
                <img src={imgPath} alt="" />
              </div>
              <div className="flex flex-col gap-1 items-start self-stretch">
                <h3 className="text-white text-lg md:text-2xl">{title}</h3>
                <p className="text-white-700 text-sm md:text-lg ">{desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;

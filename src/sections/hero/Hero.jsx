import React, { lazy, useEffect, useState } from "react";

import { useMediaQuery } from "react-responsive";
import { words } from "../../consts";

import Button from "../../components/Button";
import { motion } from "motion/react";
import { useWindowSize } from "../../contexts/WindowSizeProvider";
const HeroCanvas = lazy(() => import("./HeroCanvas"));

const Hero = () => {
  const isXSmall = useMediaQuery({ maxWidth: 405 });

  const isPC = useWindowSize();
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(function (params) {
    if (!isPC) return;
    const timer = setTimeout(() => setShowCanvas(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col mt-[120px] lg:mt-0">
      <div className="w-full mx-auto flex flex-col sm:mt-[112px] mt-20 px-5 sm:px-10 sm:c-space gap-3 md:gap-6">
        <p className="sm:text-xl text-xs font-medium text-white-800 text-center font-generalsans">
          <span className="mx-1 uppercase">
            Dynamic Web Magic with React.js
          </span>
          <span className="waving-hand">👋</span>
        </p>
        <p
          className={`hero_tag hero-layout space-y-2 ${
            isXSmall ? "!text-[2rem]" : ""
          }`}
        >
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.5, easings: ["easeInOut"], delay: 0.2 },
            }}
            className="block text-gray-gradient"
          >
            <span className=" sm:ms-[-10rem]">Shaping</span>
            <span className="slide">
              <span className="wrapper">
                {words.map((word, key) => (
                  <span
                    key={`${key}-${word.text}`}
                    className="flex items-center md:gap-3 gap-1 pb-2"
                  >
                    <img
                      src={word.imgPath}
                      alt={word.text}
                      className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-gray-gradient "
                    />
                    <span className="text-gray-gradient capitalize">
                      {word.text}
                    </span>
                  </span>
                ))}
              </span>
            </span>
          </motion.span>
          <span className="sm:flex sm:justify-center sm:gap-1">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  easings: ["easeInOut"],
                  delay: 0.3,
                },
              }}
              className="block text-gray-gradient"
            >
              into Real Projects
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  easings: ["easeInOut"],
                  delay: 0.5,
                },
              }}
              className="block text-gray-gradient"
            >
              that Deliver Results
            </motion.span>
          </span>
        </p>
      </div>
      {isPC && showCanvas && <HeroCanvas />}

      {!isPC && (
        <div className="">
          <img
            src="/imgs/bg-hero.jpg"
            alt=""
            className="absolute inset-0 h-screen w-full object-cover -z-20"
          />
          <span className="hero-overlay absolute inset-0 h-screen w-full  -z-10"></span>
        </div>
      )}

      <div className="absolute bottom-16 lg:bottom-10 left-0 right-0 w-full z-10 c-space ">
        <p className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:hidden text-white-600">
          Hi, I'm Ahmed, a React.js Developer based in Egypt.
        </p>
        <a href="#about" className="w-fit">
          <Button
            name="let's work together"
            isBeam
            className="sm:w-fit w-full sm:min-w-96 hover:bg-gray-800 "
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React, { useRef, useState } from "react";
import TitleHeader from "../../components/TitleHeader";
import { expCards } from "../../consts";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useWindowSize } from "../../contexts/WindowSizeProvider";

const Experience = () => {
  const isPc = useWindowSize();
  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end center"],
  });
  // const [scaleY, setScaleY] = useState(1);
  const scaleY = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(1 - latest);
  //   // setScaleY(1 - latest);
  // });

  return (
    <section
      id="experience"
      className="w-full md:mt-20 mt-10 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 -ms-1">
        <TitleHeader
          title="professional work experinece"
          subtitle="my career overview"
          icon="💼"
        />

        <div ref={sectionRef} className="mt-32 relative flex gap-2">
          <div className="relative flex-grow h-fit z-50 xl:space-y-8 space-y-3">
            {expCards.map((card) => (
              <div key={card.title}>
                <div className="timeline-wrapper ">
                  <motion.div
                    style={{
                      transformOrigin: "bottom",
                      scaleY: scaleY,
                    }}
                    className={`timeline`}
                  ></motion.div>
                  <div className="gradient-line w-1 h-full"></div>
                </div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 0.25,
                      easings: ["easeInOut"],
                    },
                  }}
                  className="expText flex xl:gap-12 md:gap-18 gap-5 relative z-20"
                >
                  <div className="timeline-logo">
                    <img className="w-14" src={card.logoPath} alt="logo" />
                  </div>
                  <div className=" md:work-canvas p-2 sm:px-8 sm:py-5 flex-grow">
                    <h1 className="font-semibold flex gap-2 flex-wrap text-2xl text-white-800">
                      {card.title}
                      <p
                        style={{ color: card.color }}
                        className="text-lg font-semibold italic"
                      >
                        @ {card.company}
                      </p>
                    </h1>

                    <p className="my-3 text-slate-100 flex gap-2 items-center">
                      <img src="/icons/calender.svg" /> {card.date}
                    </p>
                    <p className="text-[#839cb5] italic">Resposibilities</p>
                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-2 text-white">
                      {card.responsibilities.map((item) => (
                        <li key={item} className="text-lg">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

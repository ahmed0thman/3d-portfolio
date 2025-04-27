import React from "react";
import TitleHeader from "../../components/TitleHeader";
import { techStackIcons } from "../../consts";
import { div } from "three/tsl";
import SkillModel from "./SkillModel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useWindowSize } from "../../contexts/WindowSizeProvider";

const Skills = () => {
  const isPc = useWindowSize();
  useGSAP(function () {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="mx-6 xl:mx-4 my-20">
      <TitleHeader
        title={"My Main Tech Stack"}
        subtitle="skills i bring to the table"
        icon="🔋"
      />

      <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 xl:gap-4 md:gap-4 gap-3 my-24 h-fit">
        {techStackIcons.map((icon, key) => (
          <div
            key={`skill-${key}`}
            className="tech-card card-border lg:!h-[350px] overflow-hidden xl:rounded-full rounded-lg group"
          >
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <SkillModel model={icon} />
              </div>
              <div className="mx-auto w-full">
                <p>{icon.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

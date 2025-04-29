import { motion } from "motion/react";
import React from "react";

const ProjectCard = ({ currentProject, index }) => {
  return (
    <motion.div
      initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
      whileInView={{
        x: 1,
        opacity: 1,
        transition: { duration: 1, delay: 0.5, easings: ["easeInOut"] },
      }}
      className="project-card"
      style={{
        "--theme-color-1": currentProject.logoStyle.themeColor1,
        "--theme-color-2": currentProject.logoStyle.themeColor2,
        "--theme-color-3": currentProject.logoStyle.themeColor3,
      }}
    >
      <div className="flex flex-col ga-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 ">
        <div className="absolute top-0 end-0">
          <img
            src={currentProject.spotlight}
            alt="spotlight"
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>
        <div className="sm:hover:translate-x-3 transition-all duration-200 ease-in-out z-10">
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animated-text">{currentProject.desc}</p>
            <p className="animated-text">{currentProject.subdesc}</p>

            <div className="flex items-center justify-between flex-wrap gap-5 w-ful">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div key={`tag-${index}`} className="tech-logo">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>
              <a
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
                className="flex hidden items-center gap-2 cursor-pointer text-white-600"
              >
                <p>Check Live Site</p>
                <img
                  src="/assets/arrow-up.png"
                  alt="arrow"
                  className="w-3 h-3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

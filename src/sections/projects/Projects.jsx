import React, { useState } from "react";
import TitleHeader from "../../components/TitleHeader";
import { myProjects } from "../../consts";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="work" className="c-space my-20">
      <TitleHeader
        subtitle={"My Recent Work"}
        title={"A selection of recent projects"}
        icon={"👨‍💻"}
      />

      <div className="grid lg:grid-cols-2 grid-cols-1 my-24 gap-5 w-full">
        {myProjects.map((item, index) => (
          <ProjectCard
            currentProject={item}
            key={`project-${index}`}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

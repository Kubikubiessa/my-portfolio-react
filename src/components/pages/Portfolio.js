import React from "react";
import Project from "./Project";
import projects from "./projectData"

function Portfolio() {
  

  return (
    <section className="portfolio">
      <div className="page-center">
        <h1 className="page-header">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          {projects.map((project) => {
            return (
              <li className="padding">
                <Project  key={project.name} projects={project}></Project>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;

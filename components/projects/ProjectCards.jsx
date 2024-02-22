import React from "react";
import Cards from "./Cards";

const ProjectCards = ({ projects, loading }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((projectData, index) => (
        <Cards key={index} data={projectData} />
      ))}
    </div>
  );
};

export default ProjectCards;

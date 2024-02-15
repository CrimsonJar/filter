// import "./css/main.css";
import React, { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
const Portfolio = () => {
  const [projects, setProjects] = useState(["All"]);

  const handleCategoryChange = (category) => {
    setProjects(category);
  };
  return (
    <div className='flex flex-col items-center pt-4'>
      <div>
        <Toolbar onCategoryChange={handleCategoryChange} />
      </div>
      <div className='portfolio'>
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default Portfolio;

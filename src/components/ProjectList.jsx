import React from "react";
import data from "./data";
const ProjectList = ({ projects }) => {
  let filterData = data;

  if (projects === "All") {
    filterData = data;
  } else {
    filterData = data.filter((project) => projects.includes(project.category));
  }
  return (
    <div className='flex flex-wrap justify-center'>
      {filterData.map((project, index) => (
        <div key={index} className='w-1/3 p-4'>
          <img
            src={project.img}
            alt={project.category}
            className='max-w-full'
          />
          <p className='text-center'>{project.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;

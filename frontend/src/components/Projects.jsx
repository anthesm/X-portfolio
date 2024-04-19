// Projects.js
import React from 'react';
import Card from './Card/Card'; // Import the Card component
import projectData from './Card/CardData'; // Import the project data

const Projects = () => {
  return (
<div className="container-fluid py-5 mt-5 bg-light">
  <h1 className="text-center text-dark mb-5">Projects</h1>
  <div className="row justify-content-center">
    {projectData.map((project, index) => (
      <div key={index} className="col-md-4 mb-4">
        <Card {...project} />
      </div>
    ))}
  </div>
</div>

  );
};

export default Projects;

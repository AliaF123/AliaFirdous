import React from "react";
import "../styles/projects.scss";

const projects = [
  {
    title: "My Portfolio",
    description: "A fully responsive and interactive portfolio built with React, SCSS, and JavaScript. This project showcases my skills, experiences, and design capabilities.",
    link: "https://github.com/yourusername/portfolio-project",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app built using React and the OpenWeather API. It features a clean UI and displays real-time weather conditions for any city.",
    link: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Task Manager",
    description: "A task management tool built with Node.js, Express, and MongoDB. It allows users to create, update, and delete tasks while keeping track of deadlines.",
    link: "https://github.com/yourusername/task-manager",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-gallery">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
                View Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

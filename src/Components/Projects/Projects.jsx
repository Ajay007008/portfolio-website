import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Holi-Leela Website"
          main="Designed and developed an interactive festival-themed website for Holi Leela, showcasing event details, cultural highlights, and celebrations.Integrated Framer Motion for smooth animations and transitions, enhancing the overall user experience."
        />
        <ProjectCard
          title="Swiggy Clone"
          main="Developed the frontend of a Swiggy-inspired food delivery platform using React.js, showcasing expertise in building modern, responsive, and interactive web applications.
The project features reusable components, dynamic routing with React Router, and state management with React hooks for seamless navigation and data handling."
        />
        <ProjectCard
          title="Admin Dashboard"
          main="Built a responsive and feature-rich Admin Dashboard using React.js to manage data-driven components and route navigation.
          Utilized SCSS for modular and maintainable styling, allowing advanced layout customizations and theme management.
          Implemented Context API for global state management, enabling dynamic control over UI themes, user authentication states, and sidebar toggles."
        />
      </div>
    </div>
  );
};

export default Projects;

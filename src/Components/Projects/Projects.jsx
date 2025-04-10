import React from "react";
import ProjectCard from "./ProjectCard";
import HoliBanner from "../Projects/HoliBanner.png";
import SwiggyBanner from "../Projects/swiggy-clone3.png";
import AdminDashboard from "../Projects/AdminDashBoard.png";

const Projects = () => {
  return (
    <div id="Projects" className="px-4 sm:px-6 md:px-10 lg:px-24 py-12 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Projects</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Holi-Leela Website"
          img={HoliBanner}
          points={[
            "Designed and developed an interactive festival-themed website for Holi Leela.",
            "Showcased event details, cultural highlights, and celebrations.",
            "Integrated Framer Motion for smooth animations and transitions, enhancing the overall user experience.",
          ]}
        />

        <ProjectCard
          title="Swiggy Clone"
          img={SwiggyBanner}
          points={[
            "Developed the frontend of a Swiggy-inspired food delivery platform using React.js.",
            "Built with modern, responsive, and interactive UI practices.",
            "Used reusable components, dynamic routing with React Router.",
            "Implemented state management with React hooks for seamless data handling.",
          ]}
        />

        <ProjectCard
          title="Admin Dashboard"
          img={AdminDashboard}
          points={[
            "Built a responsive and feature-rich Admin Dashboard using React.js.",
            "Utilized SCSS for modular and maintainable styling.",
            "Enabled advanced layout customizations and theme management.",
            "Used Context API for global state management — theme toggles, auth states, sidebar control.",
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;

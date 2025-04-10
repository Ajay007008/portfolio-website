import React from "react";

const ProjectCard = ({ title, img, main, points = [] }) => {
  return (
    <div className="p-4 sm:p-5 md:p-6 flex flex-col w-full max-w-sm bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl mx-auto">
      {img && (
        <img
          src={img}
          alt={title}
          className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
        />
      )}

      <h3 className="px-2 sm:px-4 text-lg sm:text-xl md:text-2xl font-bold leading-snug">
        {title}
      </h3>

      {/* Bullet points or paragraph */}
      {points.length > 0 ? (
        <ul className="px-2 sm:px-4 list-disc text-sm sm:text-base leading-snug py-2 text-gray-300 space-y-1">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className="px-2 sm:px-4 text-sm sm:text-base leading-snug py-2 text-gray-300">{main}</p>
      )}

      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 px-2 sm:px-4">
        <button className="text-white text-sm sm:text-base py-2 px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
        <button className="text-white text-sm sm:text-base py-2 px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

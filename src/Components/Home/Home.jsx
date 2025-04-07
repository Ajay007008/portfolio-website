import React from "react";
import avatarImg from "../../assets/123.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-start ml-[6rem] items-center p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <br/>
       
        <p className="text-sm md:text-2xl tracking-tight ">
        I'm Ajay Singh, a full-stack developer skilled in React, Node.js, C++, SQL.
        I'm passionate about building efficient, user-friendly web applications and constantly exploring new technologies to enhance my development skills.
        </p>
       
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
 
      <img
      className="w-[18rem] h-auto ml-[2.5rem] rounded-full object-cover "
     src={avatarImg}
     alt="avatar"
      />
      
    </div>
  );
};

export default Home;

"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
       
      </h1>
      
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 flex-wrap justify-center">
        
        <ProjectCard
          src="/coda.png"
          title="Android Application for CODA (Children of Deaf Parents)"
          description="Developed an intuitive Android application to support hearing children, primarily infants, of deaf parents using Android Studio and Java. Implemented key functionalities to enhance user experience and accessibility."
        />
        <ProjectCard
          src="/mlbot.png"
          title="Machine Learning Chat Bot"
          description="Engineered a sophisticated conversational AI using Java, leveraging advanced natural language processing techniques to optimize user interaction and service delivery. Successfully completed the project from March 2019 to September 2019."
        />
        <ProjectCard
          src="/collegepred.png"
          title="Python-based College Predictor"
          description="Designed and developed a predictive model using Python to forecast college admissions for undergraduate programs across India. Utilized historical data and various Python libraries to deliver accurate and reliable predictions."
        />
        <ProjectCard
          src="/obst.png"
          title="Obstacle Dodge Game"
          description="Created an engaging obstacle dodge game with procedurally generated maps using Unity. Focused on delivering a seamless gaming experience through dynamic map generation."
        />
        <ProjectCard
          src="/bots.png"
          title="Robotics Workshop - Making of Bots"
          description="Designed and constructed a Wired Control Manual Bot, a Bluetooth-controlled Bot, and a line tracer during a Robotics Workshop at VIT, Pune. Demonstrated expertise in robotics and hands-on application of theoretical knowledge."
        />
        <ProjectCard
          src="/sty.png"
          title="Styrofoam 3D Cutting Machine"
          description="Engineered a 3D Styrofoam cutting machine using Arduino. Applied advanced control techniques and precision engineering to achieve high accuracy in cutting operations."
        />
        <ProjectCard
          src="/pp.png"
          title="Personal Project Manager"
          description="Designed and developed a comprehensive project management tool to streamline workflow and enhance productivity using React.js, Node.js, and TypeScript. Ensured robust client-side scripting and server-side logic."
        />
        <ProjectCard
          src="/portfolio.png"
          title="Portfolio Website"
          description="Built a personal portfolio website using Next.js, React, and Tailwind CSS to showcase projects and skills. Implemented responsive design and interactive elements to enhance user engagement."
        />
        
      </div>
    </div>
  );
};

export default Projects;

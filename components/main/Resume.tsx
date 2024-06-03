"use client";
import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="flex flex-col items-center justify-center min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-white mb-8">Resume</h2>
        <p className="text-lg text-gray-300 mb-4">
          <strong>Utkarsh Gogna (He/Him)</strong><br />
          +1 (617) 821-1847 | <a href="mailto:gogna.u@northeastern.edu" className="text-blue-500">gogna.u@northeastern.edu</a> | <a href="http://www.linkedin.com/in/utkarsh-gogna" className="text-blue-500">LinkedIn</a>
        </p>
        <h3 className="text-2xl font-semibold text-white mt-6">Education</h3>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Northeastern University, Boston MA - Expected December 2025</li>
          <li>Vishwakarma Institute of Technology, Pune India - June 2021</li>
        </ul>
        <h3 className="text-2xl font-semibold text-white mt-6">Professional Experience</h3>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Infosys Pvt Ltd, Pune India - Systems Engineer (February 2022 – July 2023)</li>
          <li>Sagitec Solutions Pvt Ltd, Pune India - Application Developer Intern (February 2021 – June 2021)</li>
        </ul>
        <h3 className="text-2xl font-semibold text-white mt-6">Projects</h3>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li><a href="https://personalapp.vercel.app/app" className="text-blue-500">Personal Project Manager</a> (February 2024 – April 2024)</li>
          <li>Chat Bot using machine learning (March 2019 – September 2019)</li>
        </ul>
        <h3 className="text-2xl font-semibold text-white mt-6">Technical Skills</h3>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Languages: C, C++, C#, JavaScript, TypeScript, Python, HTML, CSS, PHP, Java, SQL</li>
          <li>Frameworks/Tools: Spring Boot, React.js, AWS, Microservices, API, Web Services, Android Studio, GitHub, Maven, Git, IntelliJ, Postman, Spring Framework, Jupyter Notebook, React</li>
          <li>Databases: MySQL, OracleXE, Couchbase</li>
          <li>Specializations: Machine Learning, Computer Vision, Natural Language Processing, Generative AI, Scene Semantic Understanding, REST APIs, Agile/Scrum methodologies, CI/CD pipelines</li>
        </ul>
        <h3 className="text-2xl font-semibold text-white mt-6">Certifications</h3>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Google Data Analytics Professional Certificate</li>
          <li>Programming Foundations with JavaScript HTML and CSS (2018) Duke University</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;

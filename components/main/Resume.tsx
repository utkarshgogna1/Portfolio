"use client";
import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="flex flex-col items-center justify-center min-h-screen py-20">
      <div className="container mx-auto px-4">
      
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 h-full"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {/* Education */}
            <div className="flex items-start">
              <div className="flex flex-col items-end w-1/2 pr-6 text-right">
                <h3 className="text-2xl font-semibold text-white">Education</h3>
                <div className="mt-4">
                  <p className="text-gray-300">
                    <strong>2023 – Present</strong> <br />
                    <strong>Northeastern University, Boston, MA</strong> <br />
                    Master of Science in Computer Science
                  </p>
                  <p className="text-gray-300">
                    Relevant Coursework: Machine Learning, NLP, Data Structures, Algorithms, Web Development
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-gray-300">
                    <strong>2017 – 2021</strong> <br />
                    <strong>Vishwakarma Institute of Technology, Pune, India</strong> <br />
                    Bachelor of Technology in Computer Engineering
                  </p>
                  <p className="text-gray-300">
                    Relevant Coursework: Data Structures, Operating Systems, Computer Systems Architecture
                  </p>
                </div>
              </div>
              <div className="w-1 relative">
                <div className="w-4 h-4 bg-purple-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="w-1/2"></div>
            </div>

            {/* Professional Experience */}
            <div className="flex items-start">
              <div className="w-1/2"></div>
              <div className="w-1 relative">
                <div className="w-4 h-4 bg-cyan-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="flex flex-col items-start w-1/2 pl-6 text-left">
                <h3 className="text-2xl font-semibold text-white">Professional Experience</h3>
                <div className="mt-4">
                  <p className="text-gray-300">
                    <strong>2024 – Present</strong> <br />
                    <strong>Northeastern University, Boston, MA</strong> <br />
                    Teaching Assistant – Machine Learning
                  </p>
                 
                </div>
                <div className="mt-6">
                  <p className="text-gray-300">
                    <strong>2022 – 2023</strong> <br />
                    <strong>Infosys Pvt Ltd, Pune, India</strong> <br />
                    Systems Engineer - Digital Data AI/ML (Amex)
                  </p>
            
                </div>
                <div className="mt-6">
                  <p className="text-gray-300">
                    <strong>2021</strong> <br />
                    <strong>Sagitec Solutions Pvt Ltd, Pune, India</strong> <br />
                    Application Developer Intern
                  </p>
                 
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex items-start">
              <div className="flex flex-col items-end w-1/2 pr-6 text-right">
                <h3 className="text-2xl font-semibold text-white">Certifications</h3>
                <div className="mt-4">
                  <p className="text-gray-300">
                    <strong>Google Data Analytics Professional Certificate</strong>
                  </p>
                  <p className="text-gray-300 mt-2">
                    <strong>Programming Foundations with JavaScript, HTML, and CSS (2018)</strong> <br />
                    Duke University
                  </p>
                </div>
              </div>
              <div className="w-1 relative">
                <div className="w-4 h-4 bg-purple-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

import React from "react";
import { FaYoutube } from "react-icons/fa";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full h-full flex flex-row items-center justify-around flex-wrap text-[20px]">
        About
      </div>
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaYoutube className="mr-[6px]" />
              <span className="text-[15px] underline">Youtube</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start cursor-pointer">
            <a
              href="https://www.linkedin.com/in/utkarsh-gogna"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo className="mr-[6px]" />
              <span className="text-[15px] underline">Linkedin</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <a
              href="https://github.com/utkarshgogna1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo className="mr-[6px]" />
              <span className="text-[15px] underline">Github</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <a
              href="mailto:gogna.u@northeastern.edu"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px] underline">gogna.u@northeastern.edu</span>
            </a>
          </div>
        </div>
        <div className="flex justify-center w-full text-gray-600 text-xs sm:text-sm items-center sm:w-auto sm:ml-auto">
            <p className="">© 2024 Utkarsh Gogna. All Rights Reserved.</p>
        </div>
     
       
      </div>
    </div>
  );
};

export default Footer;

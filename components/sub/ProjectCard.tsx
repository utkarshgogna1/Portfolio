"use client";
import Image from "next/image";
import React from "react";
import { RxGithubLogo } from "react-icons/rx";

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string; // GitHub link for the project
}

const ProjectCard = ({ src, title, description, githubLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] max-w-[300px] bg-[#1A1A2E]">
      {/* Circular GitHub Button */}
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 left-4 bg-[#6C63FF] hover:bg-[#5849c0] text-white w-10 h-10 rounded-full flex items-center justify-center z-20"
      >
        <RxGithubLogo size={20} />
      </a>

      {/* Image */}
      <div className="w-full h-[200px] relative">
        <Image
          src={src}
          alt={title}
          width={300}
          height={200}
          className="object-cover w-full h-full pointer-events-none" // Ensure image doesn't block clicks
        />
      </div>

      {/* Card Content */}
      <div className="relative p-4 z-10"> {/* Add z-index to content to avoid overlapping issues */}
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

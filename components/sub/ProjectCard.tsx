"use client";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] max-w-[300px] bg-[#1A1A2E]">
      <div className="w-full h-[200px] relative">
        <Image
          src={src}
          alt={title}
          width={300}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative p-4">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

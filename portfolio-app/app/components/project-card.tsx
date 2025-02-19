'use client';

import Image from "next/image";
import { useState } from "react";
import { Modal } from "./modal";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  longDescription?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  link, 
  technologies,
  longDescription 
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group flex gap-8 p-4 bg-neutral-100 hover:bg-neutral-200 transition-all cursor-pointer rounded-lg"
      >
        <div className="relative w-[300px] h-[200px] overflow-hidden bg-neutral-100 flex-shrink-0 rounded-md">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="300px"
          />
        </div>
        <div className="space-y-2 py-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-base text-neutral-600">{description}</p>
          <div className="flex flex-wrap gap-2 text-sm mt-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-white px-3 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-6">
          <div className="relative w-full h-[400px] bg-neutral-100 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-neutral-600 leading-relaxed">
              {longDescription || description}
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-neutral-100 px-3 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm px-4 py-2 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Link →
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
} 
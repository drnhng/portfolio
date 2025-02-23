'use client';

import Image from 'next/image';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-16">
      {/* Left side - Images */}
      <div className="space-y-8">
        <div className="relative w-full h-[600px] bg-neutral-200 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
        {/* Additional project images would go here */}
      </div>

      {/* Right side - Project Info */}
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-normal mb-2">{project.title}</h1>
          <p className="text-neutral-600">{project.description}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-normal">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-neutral-200 px-3 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm px-4 py-2 bg-neutral-200 hover:bg-neutral-300 rounded-lg transition-colors"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
} 
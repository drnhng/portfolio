'use client';

import Image from 'next/image';
import { projects } from '@/app/data/projects';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-32 py-16">
      <div className="fixed inset-0 bg-[#D0DDD0] -z-10" />
      
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold">{project.title}</h2>
        
        <div className="grid grid-cols-[2fr,1fr] gap-8">
          {/* Left side - Images */}
          <div className="space-y-8">
            {project.images.map((image, index) => (
              <div key={index} className="relative w-full h-auto bg-neutral-200 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Right side - Project Info */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-neutral-600">{project.longDescription}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-normal">Technologies</h3>
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
      </section>
    </main>
  );
}
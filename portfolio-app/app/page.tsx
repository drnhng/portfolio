'use client';

import Link from 'next/link';
import Image from 'next/image';
import { projects } from './data/projects';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-32 py-16">
      <div className="fixed inset-0 bg-[#D0DDD0] -z-10" />
      
      {/* Projects Section */}
      <section className="space-y-8"> 
        <h2 className="text-3xl font-semibold">Personal Works</h2>
        <div className="grid gap-8"> 
          {projects.map((project) => (
            <Link 
              href={`/project/${project.slug}`} 
              key={project.title}
            >
              <div className="group flex gap-8 p-4 bg-neutral-200 hover:bg-neutral-300 transition-all cursor-pointer rounded-lg">
                <div className="relative w-[300px] h-[200px] overflow-hidden bg-neutral-200 flex-shrink-0 rounded-md">
                  <Image
                    src={project.images[0]} // Use the first image as preview
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
                <div className="space-y-2 py-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-base text-neutral-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-sm mt-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-neutral-200 px-3 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

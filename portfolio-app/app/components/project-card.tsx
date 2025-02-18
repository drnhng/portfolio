import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <div className="bg-card-bg rounded-lg p-6 card-hover">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-1/3 aspect-video">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h4 className="text-xl font-semibold">{title}</h4>
          <p className="text-foreground/60">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-accent hover:underline"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
} 
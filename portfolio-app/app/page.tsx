import { ProjectCard } from "./components/project-card";
import { TechnologyGrid } from "./components/technology-grid";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "/images/projects/project1.png",
    link: "https://project1.com",
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-6">
        <h1 className="text-5xl font-bold">
        Darren <span className="text-accent">Huang</span>
        </h1>
        <h2 className="text-2xl text-foreground/80">
          Full-stack Developer
        </h2>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Hi I'm Darren, I graduated from UCLA with a Bachelor's in Computer Science, and have experience working in both startups and large corporations. I enjoy learning new tech, listening to new music, and making art!
        </p>
        <button className="bg-accent text-background px-6 py-2 rounded-full hover:bg-accent/90 transition-colors">
          Download Resume
        </button>
      </section>

      {/* Projects Section */}
      <section className="space-y-8">
        <h3 className="text-2xl font-semibold">Projects</h3>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="space-y-8">
        <h3 className="text-2xl font-semibold">Technologies</h3>
        <TechnologyGrid />
      </section>
    </div>
  );
}

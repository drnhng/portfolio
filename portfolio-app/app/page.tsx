import { ProjectCard } from "./components/project-card";
import Link from "next/link";

const projects = [
  {
    title: "Silknode: Social Curation Site MVP",
    description: "Social curation site MVP",
    longDescription: "A comprehensive social platform that allows users to curate and share content. Built with modern web technologies and focused on performance and user experience. Features include real-time updates, responsive design, and seamless content sharing.",
    image: "/images/projects/silknodeimages/silknode.png",
    link: "https://bones.silk.cx",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    title: "ArchivePDF: Progressive Web App",
    description: "Progressive web app for PDF management",
    longDescription: "A progressive web application that enables users to manage, store, and organize their PDF documents efficiently. Includes features like OCR scanning, document tagging, and cloud storage integration.",
    image: "/images/projects/archivepdfimages/archivepdf.png",
    link: "https://beta.archivepdf.net/",
    technologies: ["Next.js", "TypeScript", "Firebase", "Stripe"]
  },
  {
    title: "Spotify Pie: Viral App",
    description: "Viral music visualization app",
    longDescription: "An interactive visualization tool that transforms Spotify listening data into beautiful, shareable pie charts. The application went viral, serving thousands of users and generating unique insights into music listening habits.",
    image: "/images/projects/spotifypieimages/spotifypie.png",
    link: "https://project3.com",
    technologies: ["React", "Spotify API", "D3.js", "Vercel"]
  },
];

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
        <nav className="max-w-7xl mx-auto px-8 py-6">
          <ul className="flex gap-8 text-sm">
            <li>
              <Link href="/" className="bg-neutral-100 px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors">
                home
              </Link>
            </li>
            <li>
              <Link href="/contact" className="bg-neutral-100 px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors">
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-8 pt-32 pb-16 space-y-24">
        {/* Hero Section */}
        <section className="flex flex-col items-start gap-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-normal">
              Darren Huang
            </h1>
            <h2 className="text-2xl font-semibold text-neutral-500">
              Full-stack Developer
            </h2>
          </div>
          <p className="text-base text-neutral-600 max-w-2xl leading-relaxed">
            Hi! I'm Darren. I graduated from UCLA with a Bachelor's in Computer Science, and have experience working in both startups and large corporations. I enjoy working on new projects, listening to new music, and playing the guitar!
          </p>
          <a
            href="/resume.pdf"
            download
            className="bg-neutral-100 px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Download Resume
          </a>
        </section>

        {/* Projects Section */}
        <section className="space-y-10">
          <h3 className="text-2xl font-normal">Projects</h3>
          <div className="flex flex-col gap-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Technologies Section
        <section className="space-y-8">
          <h3 className="text-2xl font-semibold">Technologies</h3>
          <TechnologyGrid />
        </section> */}
      </main>
    </>
  );
}

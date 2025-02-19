import Link from "next/link";

export default function Contact() {
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

      <main className="max-w-7xl mx-auto px-8 pt-32 pb-16">
        <section className="flex flex-col items-start gap-8">
          <h1 className="text-4xl font-normal">Contact</h1>
          <p className="text-base text-neutral-600 max-w-2xl leading-relaxed">
            Feel free to reach out to me through any of the following channels:
          </p>
          <div className="space-y-4">
            <p className="text-base">
              <span className="text-neutral-600">Email: </span>
              <a href="mailto:your.email@example.com" className="hover:text-neutral-600 transition-colors">
                your.email@example.com
              </a>
            </p>
            <p className="text-base">
              <span className="text-neutral-600">LinkedIn: </span>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-neutral-600 transition-colors"
              >
                linkedin.com/in/yourprofile
              </a>
            </p>
            <p className="text-base">
              <span className="text-neutral-600">GitHub: </span>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-neutral-600 transition-colors"
              >
                github.com/yourusername
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
} 
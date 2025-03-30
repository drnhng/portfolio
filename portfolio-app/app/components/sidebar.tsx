'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "bg-neutral-300" : "bg-neutral-200 hover:bg-neutral-300";
  };

  return (
    <aside className="fixed left-8 top-8 flex flex-col gap-12">
      <div className="space-y-4">
        <div className="space-y-1">
          <h1 className="text-lg font-bold">Darren Huang</h1>
          <p className="text-sm text-neutral-600">
            Software Engineer <br/>
            UCLA Alum <br />
            Previously at Capital One
            </p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="block text-sm bg-neutral-200 px-4 py-2 rounded-lg hover:bg-neutral-300 transition-colors"
        >
          Download Resume
        </a>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="space-y-4 text-sm">
          <li>
            <Link 
              href="/" 
              className={`block px-4 py-2 rounded-lg transition-colors ${isActive('/')}`}
            >
              home
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`block px-4 py-2 rounded-lg transition-colors ${isActive('/contact')}`}
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
} 
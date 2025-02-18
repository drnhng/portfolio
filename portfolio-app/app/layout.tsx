import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { MenuBar } from "./components/menu-bar";
import { ThemeToggle } from "./components/theme-toggle";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darren Huang | Full Stack Developer",
  description: "Portfolio of Darren Huang, Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen">
            <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
              <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">D</div>
                <MenuBar />
                <ThemeToggle />
              </nav>
            </header>
            <main className="pt-16">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

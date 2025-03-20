import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/sidebar";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darren Huang",
  description: "Full-stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <html lang="en">
      <body>
        <div className="fixed inset-0 bg-[#D0DDD0] -z-10" />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://iskender-imanaliev.vercel.app"),
  title: {
    default: "Iskender Imanaliev | Data Scientist Portfolio",
    template: "%s | Iskender Imanaliev",
  },
  description:
    "Portfolio for a computer science student and aspiring data scientist focused on Python, machine learning, SQL, Spring Boot, Docker, and AWS.",
  keywords: [
    "data scientist",
    "computer science student",
    "machine learning",
    "Python",
    "Spring Boot",
    "SQL",
    "Docker",
    "AWS",
  ],
  authors: [{ name: "Iskender Imanaliev" }],
  openGraph: {
    title: "Iskender Imanaliev | Data Scientist Portfolio",
    description:
      "Projects, skills, and experience for internship and junior data/software roles.",
    url: "https://iskender-imanaliev.vercel.app",
    siteName: "Iskender Imanaliev Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iskender Imanaliev | Data Scientist Portfolio",
    description:
      "Computer science student building practical data science and backend projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-zinc-950 font-sans text-zinc-100 antialiased">
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

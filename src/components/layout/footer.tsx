import { Code2, Mail, Network } from "lucide-react";

import { socialLinks } from "@/lib/data";

const links = [
  { label: "GitHub", href: socialLinks.github, icon: Code2 },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: Network },
  { label: "Email", href: socialLinks.email, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 Student Name. Built with Next.js and Tailwind CSS.</p>
        <div className="flex items-center gap-2">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <span className="sr-only">{link.label}</span>
                <Icon className="size-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

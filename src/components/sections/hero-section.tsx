import {
  ArrowRight,
  Code2,
  Mail,
  Network,
  Sparkles,
} from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { profileStats, socialLinks } from "@/lib/data";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-zinc-950"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-sm font-medium text-emerald-200">
              <Sparkles className="size-4" aria-hidden="true" />
              Computer science student · data scientist
            </div>
            <h1 className="mt-7 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building practical data products with clean software foundations.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              I turn messy datasets into usable models, dashboards, and API-backed
              prototypes. My current focus is machine learning, analytics
              engineering, and Spring Boot services for real-world workflows.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href="#projects">
                  View projects
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={socialLinks.email}>
                  <Mail className="size-4" aria-hidden="true" />
                  Contact me
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 p-3 text-zinc-300 transition-colors hover:border-emerald-300/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <span className="sr-only">GitHub profile</span>
                <Code2 className="size-5" aria-hidden="true" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 p-3 text-zinc-300 transition-colors hover:border-emerald-300/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <span className="sr-only">LinkedIn profile</span>
                <Network className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grid gap-4">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber-200">
                Current focus
              </p>
              <div className="mt-6 space-y-5">
                {[
                  "Machine learning pipelines that are explainable and measurable.",
                  "SQL-backed analytics workflows for repeatable reporting.",
                  "Spring Boot APIs that connect models to usable products.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 size-2 rounded-full bg-emerald-300" />
                    <p className="leading-7 text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {profileStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-zinc-900/70 p-4"
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

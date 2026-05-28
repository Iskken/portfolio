import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 bg-zinc-950 py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work with a measurable learning goal."
            description="Each project is designed to show practical judgment: problem framing, model choice, deployment awareness, and clear communication."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal key={project.title} delay={index * 0.07}>
                <Card className="flex h-full flex-col transition-colors hover:border-emerald-300/40">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="rounded-lg bg-sky-300/10 p-3 text-sky-200">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                      >
                        <span className="sr-only">
                          Open {project.title} repository
                        </span>
                        <ArrowUpRight className="size-5" aria-hidden="true" />
                      </a>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-3 leading-7 text-zinc-400">
                        {project.description}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <p className="mb-5 rounded-lg border border-amber-300/20 bg-amber-300/10 p-3 text-sm leading-6 text-amber-100">
                      {project.impact}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

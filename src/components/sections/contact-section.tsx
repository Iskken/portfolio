import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { contactMethods, socialLinks } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-zinc-950 py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <Reveal>
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Open to internships, junior roles, and project collaboration."
              description="The best fit is a team that values curiosity, careful analysis, and clean implementation."
            />
            <Button asChild className="mt-8">
              <a href={`mailto:${socialLinks.email}`}>
                Send an email
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <a
                  key={method.href}
                  href={method.href}
                  target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    method.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-emerald-300/50 hover:bg-emerald-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="rounded-lg bg-white/[0.05] p-3 text-emerald-200">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-zinc-400">
                        {method.label}
                      </span>
                      <span className="mt-1 block font-semibold text-white">
                        {method.value}
                      </span>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

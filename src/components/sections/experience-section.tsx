import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { timeline } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 bg-zinc-900 py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Growing through coursework, labs, and independent builds."
            description="A concise timeline of the experiences shaping my technical direction and collaboration habits."
          />
        </Reveal>

        <div className="relative space-y-6">
          <div className="absolute left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-white/10 sm:block" />
          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="relative grid gap-4 rounded-lg border border-white/10 bg-zinc-950/70 p-5 sm:grid-cols-[4rem_1fr]">
                  <div className="hidden sm:flex">
                    <div className="relative z-10 flex size-10 items-center justify-center rounded-lg border border-emerald-300/30 bg-zinc-950 text-emerald-200">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-300">
                      {item.date}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-zinc-400">
                      {item.organization}
                    </p>
                    <p className="mt-4 leading-7 text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

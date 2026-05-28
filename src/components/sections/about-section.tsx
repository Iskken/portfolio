import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-zinc-950 py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Curious, analytical, and happiest close to the problem."
            description="I like work that blends statistical thinking with dependable software. The goal is not just a notebook that works once, but a workflow someone else can understand, run, and trust."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-5 text-base leading-8 text-zinc-300">
            <p>
              I am a computer science student building toward data science and
              junior software roles. My strongest work sits at the intersection
              of Python, machine learning, SQL, and product-minded communication.
            </p>
            <p>
              Recently, I have been expanding my backend foundations with Java
              and Spring Boot so data projects can move beyond analysis into
              usable services. I care about clean code, reproducible
              experiments, clear documentation, and accessible user experiences.
            </p>
            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {["Model evaluation", "Data storytelling", "API prototyping"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm font-medium text-zinc-200"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

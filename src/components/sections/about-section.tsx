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
            description="I like work that blends statistical thinking and mathematical intuition with dependable software. 
            The goal is not just a notebook that works once, but a workflow someone else can understand, run, and trust."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-5 text-base leading-8 text-zinc-300">
            <p>
              I am a Computer Science student with a strong foundation in data science
              and practical software roles. My strongest work sits at the intersection
              of Python, machine learning, backend services (Java/Spring Boot), data manipulation, SQL,
              and product-minded communication.
            </p>
            <p>
               I have developed end-to-end workflows ranging from automated credit scoring prototypes to extensive
               NLP research. Across all my projects, I focus heavily on the mechanics of the algorithms I use,
               ensuring the final predictive models are clear, deliberate, and trustworthy.
            </p>
            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {["Predictive Modeling", "Applied NLP", "Explainable ML", "Software Engineering"].map(
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

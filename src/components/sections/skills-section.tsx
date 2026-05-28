import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { skills } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 bg-zinc-900 py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A practical toolkit for data and software delivery."
            description="The stack is intentionally compact: tools that help move from raw data to validated insight, then into a clean prototype or service."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <Reveal key={skill.title} delay={index * 0.06}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-emerald-300/10 p-3 text-emerald-200">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {skill.title}
                        </h3>
                        <p className="mt-2 leading-7 text-zinc-400">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item}>{item}</Badge>
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

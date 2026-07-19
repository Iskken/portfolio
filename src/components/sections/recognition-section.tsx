import Image from "next/image";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { recognitionAwards } from "@/lib/data";

export function RecognitionSection() {
  return (
    <section id="recognition" className="scroll-mt-24 bg-zinc-900 py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Recognition"
            title="Recognized for the research behind Echoes of Longevity."
            description="Award recognition presented at two academic conferences."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {recognitionAwards.map((award, index) => (
            <Reveal key={award.title} delay={index * 0.07}>
              <Card className="overflow-hidden">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="(min-width: 768px) 480px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm leading-6 text-zinc-400">
                    {award.caption}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

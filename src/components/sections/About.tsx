import Image from "next/image";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mandala } from "@/components/ui/DecorativePattern";
import { aboutHighlights } from "@/data/highlights";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream">
      <Mandala className="pointer-events-none absolute -right-40 top-1/3 h-[30rem] w-[30rem] text-gold/10" />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border border-gold/30"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/30 shadow-card">
            <Image
              src="/images/about-artist.svg"
              alt="Henna artistry detail created by Mehndi Noor"
              fill
              unoptimized
              sizes="(max-width: 1024px) 88vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-2xl border border-gold/30 bg-ivory/95 px-6 py-4 text-center shadow-soft backdrop-blur sm:right-8">
            <p className="font-serif text-2xl text-mehndi">Handcrafted</p>
            <p className="text-[0.65rem] uppercase tracking-widest-2 text-gold">
              Design by design
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About the Artist"
            title="More Than Mehndi. A Story in Every Detail."
            description="Mehndi Noor began with a love for the quiet, deliberate craft of henna — the steady hand, the flowing line, the way a single motif can hold a memory."
          />

          <div className="mt-6 space-y-4 text-[0.97rem] leading-relaxed text-muted-foreground">
            <p>
              Every design is drawn from scratch, blending traditional Indian
              motifs with modern, breathable compositions. Nothing is copied or
              repeated — each pattern is shaped around your story, your outfit
              and the rituals that matter to you.
            </p>
            <p>
              From the first consultation to the final line, the focus stays on
              detail and calm. Natural henna, considered spacing and patient
              finishing mean your mehndi looks beautiful on the day and in
              every photograph after.
            </p>
          </div>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {aboutHighlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div key={highlight.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-ivory text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="font-serif text-lg text-brown">
                      {highlight.title}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {highlight.description}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>

          <div className="mt-10">
            <Button asChild variant="outline">
              <a href="#contact">Arrange a Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Leaf, Sparkles, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CornerFlourish,
  LeafSprig,
  Mandala,
} from "@/components/ui/DecorativePattern";

const pills = [
  { icon: Leaf, label: "Natural henna" },
  { icon: Sparkles, label: "Personalised motifs" },
  { icon: Home, label: "Home & venue service" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream pb-20 pt-28 lg:pb-28 lg:pt-32"
    >
      <Mandala className="pointer-events-none absolute -left-48 -top-48 h-[36rem] w-[36rem] text-gold/15 motion-safe:animate-spin-slow" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 pattern-henna opacity-[0.04]"
      />
      <CornerFlourish className="pointer-events-none absolute right-0 top-28 hidden h-40 w-40 text-gold/30 lg:block" />

      <div className="relative container grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <span className="eyebrow">
            Bridal · Arabic · Rajasthani · Custom
          </span>
          <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.08] text-brown sm:text-5xl lg:text-6xl">
            Where Tradition Meets{" "}
            <span className="text-gradient-gold">Timeless Art</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Elegant mehndi artistry crafted for brides, celebrations and
            unforgettable moments.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <a href="#contact">Book Your Mehndi</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#gallery">Explore Our Designs</a>
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {pills.map((pill) => {
              const Icon = pill.icon;
              return (
                <li
                  key={pill.label}
                  className="flex items-center gap-2 text-sm text-brown/80"
                >
                  <Icon className="h-4 w-4 text-gold" />
                  {pill.label}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2.5rem] border border-gold/30"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/30 shadow-card">
            <Image
              src="/images/hero-main.svg"
              alt="Bridal mehndi artistry with intricate hand and mandala motifs"
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 88vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden w-48 rounded-2xl border border-gold/30 bg-ivory/95 p-4 shadow-soft backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mehndi/10 text-mehndi">
                <Leaf className="h-5 w-5" />
              </span>
              <p className="text-xs leading-snug text-brown/80">
                Chemical-free, freshly mixed henna
              </p>
            </div>
          </div>

          <LeafSprig className="absolute -right-6 top-8 hidden h-32 w-12 text-gold/40 lg:block" />
        </div>
      </div>
    </section>
  );
}

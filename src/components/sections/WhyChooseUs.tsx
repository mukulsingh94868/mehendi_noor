import { CornerFlourish, Mandala } from "@/components/ui/DecorativePattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseFeatures } from "@/data/highlights";

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-deepgreen text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 pattern-henna opacity-[0.05]"
      />
      <Mandala className="pointer-events-none absolute -bottom-40 -left-40 h-[32rem] w-[32rem] text-gold/15" />
      <CornerFlourish className="pointer-events-none absolute right-6 top-8 hidden h-36 w-36 text-gold/25 lg:block" />

      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Considered Artistry, Calm Experience"
          titleClassName="text-cream"
          description="A blend of heritage technique and modern comfort — so the process feels as beautiful as the result."
          descriptionClassName="text-cream/70"
        />

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group flex gap-4 rounded-2xl border border-cream/10 bg-cream/[0.03] p-5 transition-colors duration-300 hover:border-gold/40 hover:bg-cream/[0.06]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-deepgreen">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-cream">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

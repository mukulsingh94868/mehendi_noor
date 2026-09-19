import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/highlights";

export function Process() {
  return (
    <section className="bg-cream">
      <div className="section-shell">
        <SectionHeading
          eyebrow="How It Works"
          title="A Simple, Beautiful Journey"
          description="Four calm steps from first idea to the moment you admire your mehndi."
        />

        <ol className="relative mt-14 grid gap-10 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-8 top-8 w-px bg-gold/25 lg:hidden"
          />
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gold/25 lg:block"
          />

          {processSteps.map((step) => (
            <li
              key={step.step}
              className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center"
            >
              <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-ivory font-serif text-xl text-mehndi shadow-soft">
                {step.step}
              </span>
              <div className="lg:mt-6">
                <h3 className="font-serif text-xl text-brown">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

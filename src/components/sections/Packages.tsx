import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { packages } from "@/data/packages";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <section id="packages" className="bg-ivory">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Packages"
          title="Thoughtful Packages, Tailored to You"
          description="Choose a starting point and we will shape the details around your date, venue and guest list. Prices shown are placeholders — a firm quote follows your consultation."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <Card
                key={pkg.id}
                className={cn(
                  "relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1",
                  pkg.featured
                    ? "border-gold/60 shadow-card lg:-mt-4 lg:mb-4"
                    : "hover:border-gold/50 hover:shadow-card"
                )}
              >
                {pkg.featured ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 bg-gold-gradient"
                    />
                    <Badge
                      variant="gold"
                      className="absolute right-4 top-4 uppercase tracking-widest-2"
                    >
                      Signature
                    </Badge>
                  </>
                ) : null}

                <CardHeader className="pt-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mehndi/10 text-mehndi">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="mt-4 text-2xl">{pkg.name}</CardTitle>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {pkg.tagline}
                  </p>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col">
                  <div className="border-y border-gold/20 py-4">
                    <p className="font-serif text-3xl text-mehndi">
                      {pkg.price}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {pkg.priceNote}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-widest-2 text-gold">
                      {pkg.duration}
                    </p>
                  </div>

                  <ul className="mt-5 flex-1 space-y-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-brown/85"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={pkg.featured ? "default" : "outline"}
                    className="mt-7 w-full"
                  >
                    <a href="#contact">Enquire</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

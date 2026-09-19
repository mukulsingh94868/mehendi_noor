import Image from "next/image";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="bg-cream">
      <div className="section-shell">
        <SectionHeading
          eyebrow="What We Offer"
          title="Mehndi for Every Celebration"
          description="From heirloom bridal work to light festival accents, each service is shaped around your occasion, outfit and comfort."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="group flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card"
              >
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <Image
                      src={service.image}
                      alt={`${service.title} design`}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-deepgreen/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <span className="absolute -bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-ivory text-mehndi shadow-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <CardHeader className="pb-2 pt-7">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="flex-1">
                    {service.description}
                  </CardDescription>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-mehndi"
                  >
                    Enquire
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

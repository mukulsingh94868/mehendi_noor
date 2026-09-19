import { Quote, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-cream">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved by Brides & Families"
          description="A few words shared by clients about the experience and the artistry."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card"
            >
              <Quote
                aria-hidden="true"
                className="absolute right-6 top-6 h-12 w-12 text-gold/15"
              />
              <CardContent className="p-7">
                <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      className={cn(
                        "h-4 w-4",
                        index < testimonial.rating
                          ? "fill-gold text-gold"
                          : "text-gold/30"
                      )}
                    />
                  ))}
                </div>
                <blockquote className="mt-5 font-serif text-xl leading-relaxed text-brown">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-gold/20 pt-4">
                  <p className="font-medium text-mehndi">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-widest-2 text-gold">
                    {testimonial.event}
                  </p>
                </figcaption>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Illustrative placeholder testimonials shown for demonstration only.
        </p>
      </div>
    </section>
  );
}

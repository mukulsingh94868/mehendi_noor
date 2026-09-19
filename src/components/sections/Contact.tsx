"use client";

import { useState } from "react";
import {
  Camera,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT, buildWhatsAppLink } from "@/lib/utils";

const eventTypes = [
  "Bridal Mehndi",
  "Arabic Mehndi",
  "Rajasthani Mehndi",
  "Engagement Mehndi",
  "Festival Mehndi",
  "Guest Mehndi",
  "Groom Mehndi",
  "Custom / Other",
];

const contactChannels = [
  { key: "phone", label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref, icon: Phone },
  { key: "whatsapp", label: "WhatsApp", value: CONTACT.phone, href: buildWhatsAppLink("Hello Mehndi Noor, I would like to enquire about a booking."), icon: MessageCircle },
  { key: "email", label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: Mail },
  { key: "instagram", label: "Instagram", value: CONTACT.instagramHandle, href: CONTACT.instagramHref, icon: Camera },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!name || !phone) return;

    const message = [
      "Hello Mehndi Noor! I would like to enquire about a booking.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Event Type: ${data.get("eventType") || "-"}`,
      `Event Date: ${data.get("eventDate") || "Not decided"}`,
      `Location: ${data.get("location") || "To be confirmed"}`,
      `Message: ${data.get("message") || "-"}`,
    ].join("\n");

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="contact" className="bg-cream">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Book Your Date"
          title="Let's Create Something Beautiful"
          description="Share a few details and we will get back to you with availability, ideas and a personalised quote."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.key}
                    href={channel.href}
                    target={channel.key === "instagram" || channel.key === "whatsapp" ? "_blank" : undefined}
                    rel={channel.key === "instagram" || channel.key === "whatsapp" ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-gold/20 bg-ivory p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mehndi/10 text-mehndi transition-colors duration-300 group-hover:bg-mehndi group-hover:text-cream">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.65rem] uppercase tracking-widest-2 text-gold">
                        {channel.label}
                      </span>
                      <span className="block truncate text-sm text-brown">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-gold/20 bg-ivory p-4 shadow-soft">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mehndi/10 text-mehndi">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[0.65rem] uppercase tracking-widest-2 text-gold">
                  Location
                </span>
                <span className="block text-sm text-brown">
                  {CONTACT.location}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {CONTACT.hours}
                </span>
              </span>
            </div>
          </div>

          <Card className="border-gold/25">
            <CardContent className="p-6 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mehndi/10 text-mehndi">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-brown">
                    Thank You
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Your enquiry is ready in WhatsApp — just press send and we
                    will take it from there.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-7"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" required placeholder="Your full name" autoComplete="name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" required placeholder="+91 ..." autoComplete="tel" />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type</Label>
                      <select
                        id="eventType"
                        name="eventType"
                        defaultValue={eventTypes[0]}
                        className="flex h-11 w-full rounded-xl border border-gold/30 bg-ivory px-4 text-sm text-brown shadow-sm transition-colors focus-visible:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/30"
                      >
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Event Date</Label>
                      <Input id="eventDate" name="eventDate" type="date" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" name="location" placeholder="City, venue or area" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your celebration, preferred styles and anything special you would like included."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4" />
                    Send via WhatsApp
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    This is a static demo form — it opens WhatsApp with your
                    details pre-filled. No data is stored or sent to a server.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

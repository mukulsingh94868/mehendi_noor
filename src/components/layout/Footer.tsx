import { Mail, MapPin, Phone, Clock } from "lucide-react";

import { Logo } from "@/components/ui/Logo";
import { Separator } from "@/components/ui/separator";
import { navLinks, siteConfig, socialLinks } from "@/data/navigation";
import { services } from "@/data/services";
import { CONTACT } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-deepgreen text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 pattern-henna opacity-[0.05]"
      />
      <div className="relative container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" markClassName="text-gold" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav
            aria-label="Quick links"
            className="lg:col-span-2 lg:col-start-6"
          >
            <h3 className="font-serif text-lg text-gold">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="lg:col-span-3">
            <h3 className="font-serif text-lg text-gold">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-cream/70 transition-colors hover:text-gold"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg text-gold">Get in Touch</h3>
            <ul className="mt-5 space-y-4 text-sm text-cream/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={CONTACT.phoneHref}
                  className="transition-colors hover:text-gold"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{CONTACT.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-cream/15" />

        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-cream/60 sm:flex-row sm:text-left">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Placeholder content and imagery — replace before publishing.
          </p>
        </div>
      </div>
    </footer>
  );
}

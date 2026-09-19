import { Camera, MessageCircle, Mail } from "lucide-react";
import type { NavLink, SocialLink } from "@/types";
import { CONTACT, buildWhatsAppLink } from "@/lib/utils";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const siteConfig = {
  name: "Mehndi Noor",
  role: "Mehndi & Henna Artistry",
  tagline:
    "Elegant bridal, Arabic, Rajasthani and customised mehndi artistry for weddings and celebrations.",
  description:
    "Elegant bridal, Arabic, Rajasthani and customised mehndi artistry for weddings and celebrations.",
  url: "https://mehndinoor.example",
} as const;

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: CONTACT.instagramHref, icon: Camera },
  {
    label: "WhatsApp",
    href: buildWhatsAppLink(
      "Hello Mehndi Noor, I would like to enquire about a booking."
    ),
    icon: MessageCircle,
  },
  { label: "Email", href: `mailto:${CONTACT.email}`, icon: Mail },
];

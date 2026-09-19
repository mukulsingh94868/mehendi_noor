import { Camera, ThumbsUp, MessageCircle, Mail } from "lucide-react";
import type { NavLink, SocialLink } from "@/types";

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
  { label: "Instagram", href: "https://www.instagram.com/", icon: Camera },
  { label: "WhatsApp", href: "https://wa.me/919000000000", icon: MessageCircle },
  { label: "Facebook", href: "https://www.facebook.com/", icon: ThumbsUp },
  { label: "Email", href: "mailto:hello@mehndinoor.example", icon: Mail },
];

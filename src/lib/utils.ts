import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Placeholder business contact details — replace with real values. */
export const CONTACT = {
  phone: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  whatsappNumber: "919000000000",
  email: "hello@mehndinoor.example",
  instagramHandle: "@mehndinoor.studio",
  instagramHref: "https://www.instagram.com/",
  location: "Jaipur, Rajasthan, India",
  hours: "Studio visits by appointment · 10:00 – 19:00",
} as const;

/**
 * Builds a wa.me deep link with a pre-filled message.
 * Kept framework-free so it can be reused from any interactive component.
 */
export function buildWhatsAppLink(message: string): string {
  const text = encodeURIComponent(message.trim());
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`;
}

/** Opens WhatsApp (new tab) with a pre-filled booking message. */
export function openWhatsApp(message: string): void {
  if (typeof window === "undefined") return;
  window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
}

/** Smooth-scrolls to a section id (e.g. "#contact"). */
export function scrollToSection(hash: string): void {
  if (typeof document === "undefined") return;
  const target = document.getElementById(hash.replace("#", ""));
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

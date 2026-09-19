import type { LucideIcon } from "lucide-react";

export type GalleryCategory =
  | "Bridal"
  | "Arabic"
  | "Rajasthani"
  | "Minimal"
  | "Festival";

export type GalleryFilterValue = GalleryCategory | "All";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  src: string;
  width: number;
  height: number;
}

export interface Package {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  duration: string;
  features: string[];
  featured?: boolean;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Highlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

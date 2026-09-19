import {
  Brush,
  Leaf,
  Eye,
  Home,
  Crown,
  SlidersHorizontal,
  BookOpen,
  PenTool,
  Sparkles,
} from "lucide-react";
import type { Highlight, ProcessStep } from "@/types";

export const whyChooseFeatures: Highlight[] = [
  {
    title: "Personalized Designs",
    description:
      "Every composition is designed around your story, outfit and the mood of your celebration.",
    icon: Brush,
  },
  {
    title: "Natural Henna",
    description:
      "Freshly mixed, chemical-free cones chosen for a rich, safe and beautifully deep stain.",
    icon: Leaf,
  },
  {
    title: "Attention to Detail",
    description:
      "Fine lines, balanced spacing and meticulous finishing across every visible inch.",
    icon: Eye,
  },
  {
    title: "Home / Venue Service",
    description:
      "We travel to your home, hotel or venue so you can stay relaxed and present.",
    icon: Home,
  },
  {
    title: "Elegant Bridal Artistry",
    description:
      "Refined bridal work that photographs beautifully through every ritual and frame.",
    icon: Crown,
  },
  {
    title: "Flexible Customization",
    description:
      "From minimal accents to full traditional coverage, the scale is entirely your choice.",
    icon: SlidersHorizontal,
  },
];

export const aboutHighlights: Highlight[] = [
  {
    title: "Traditional Craft",
    description: "Motifs rooted in generations of Indian henna artistry.",
    icon: BookOpen,
  },
  {
    title: "Personalized Designs",
    description: "Patterns built around your story, not a template.",
    icon: PenTool,
  },
  {
    title: "Natural Henna",
    description: "Chemical-free cones for a safe, rich stain.",
    icon: Leaf,
  },
  {
    title: "Attention to Detail",
    description: "Considered finishing on every line and curve.",
    icon: Sparkles,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Share Your Vision",
    description:
      "Tell us about your event, outfit, dates and the feelings you want the mehndi to carry.",
  },
  {
    step: "02",
    title: "Choose Your Design",
    description:
      "We curate a direction — bridal, Arabic, Rajasthani or custom — and refine the details together.",
  },
  {
    step: "03",
    title: "Reserve Your Date",
    description:
      "Confirm your date and location so a dedicated artist and schedule are held just for you.",
  },
  {
    step: "04",
    title: "Enjoy Your Mehndi",
    description:
      "Relax while your design is applied, then follow simple aftercare for the deepest stain.",
  },
];

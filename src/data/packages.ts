import { Crown, Sparkles, Flower2, PenTool } from "lucide-react";
import type { Package } from "@/types";

export const packages: Package[] = [
  {
    id: "classic",
    name: "Festive",
    tagline: "For celebrations, gatherings and small functions.",
    price: "₹ ____",
    priceNote: "Placeholder — final quote on consultation",
    duration: "Approx. 1 – 2 hours",
    features: [
      "Single-side hand or feet design",
      "Choice of Arabic or minimal motifs",
      "Natural henna cones",
      "Aftercare guidance",
    ],
    icon: Flower2,
  },
  {
    id: "bridal-signature",
    name: "Bridal Signature",
    tagline: "A complete bridal experience, from trial to touch-ups.",
    price: "₹ ____",
    priceNote: "Placeholder — final quote on consultation",
    duration: "Approx. 4 – 6 hours",
    features: [
      "Full hands & feet front-to-back",
      "Personalised story motifs & initials",
      "Complimentary design consultation",
      "Guest henna band for close family",
      "Touch-up support on the event day",
    ],
    featured: true,
    icon: Crown,
  },
  {
    id: "guest",
    name: "Guests & Family",
    tagline: "Beautiful designs for the people you love most.",
    price: "₹ ____",
    priceNote: "Placeholder — per-guest estimate on request",
    duration: "Flexible, per guest",
    features: [
      "Quick elegant guest designs",
      "Coordinated team of artists",
      "On-site at venue or home",
      "Mix of Arabic, minimal and festival styles",
    ],
    icon: Sparkles,
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Tell us your vision and we will design around it.",
    price: "₹ ____",
    priceNote: "Placeholder — bespoke quote on consultation",
    duration: "Scoped to your event",
    features: [
      "Original design sketched for you",
      "Theme, colour and outfit coordination",
      "Multi-day event coverage",
      "Destination and outstation bookings",
    ],
    icon: PenTool,
  },
];

import {
  Crown,
  Flower2,
  Gem,
  HeartHandshake,
  Sparkles,
  Users,
  User,
  PenTool,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "bridal",
    title: "Bridal Mehndi",
    description:
      "Intricate full-hand and full-feet artistry, composed around your outfit, jewellery and love story.",
    image: "/images/service-bridal.svg",
    icon: Crown,
  },
  {
    id: "arabic",
    title: "Arabic Mehndi",
    description:
      "Flowing vines, bold florals and open spacing for a modern, breathable look.",
    image: "/images/service-arabic.svg",
    icon: Flower2,
  },
  {
    id: "rajasthani",
    title: "Rajasthani Mehndi",
    description:
      "Heritage motifs, jaali work and fine detailing inspired by royal Rajasthani craft.",
    image: "/images/service-rajasthani.svg",
    icon: Gem,
  },
  {
    id: "engagement",
    title: "Engagement Mehndi",
    description:
      "Refined, camera-ready designs for the ring ceremony, sangeet and pre-wedding shoots.",
    image: "/images/service-engagement.svg",
    icon: HeartHandshake,
  },
  {
    id: "festival",
    title: "Festival Mehndi",
    description:
      "Celebratory patterns for Karwa Chauth, Teej, Diwali, Eid and family gatherings.",
    image: "/images/service-festival.svg",
    icon: Sparkles,
  },
  {
    id: "guest",
    title: "Guest Mehndi",
    description:
      "Coordinated team artistry so every guest leaves with a beautiful, personalised design.",
    image: "/images/service-guest.svg",
    icon: Users,
  },
  {
    id: "groom",
    title: "Groom Mehndi",
    description:
      "Subtle, masculine detailing for the groom — initials, motifs and meaningful symbols.",
    image: "/images/service-groom.svg",
    icon: User,
  },
  {
    id: "custom",
    title: "Custom Designs",
    description:
      "A design sketched from scratch around your story, theme, venue or heirloom jewellery.",
    image: "/images/service-custom.svg",
    icon: PenTool,
  },
];

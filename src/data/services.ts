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
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Bridal_mehndi_%28henna%29_is_a_central_wedding_tradition_01.jpg/1280px-Bridal_mehndi_%28henna%29_is_a_central_wedding_tradition_01.jpg",
    icon: Crown,
  },
  {
    id: "arabic",
    title: "Arabic Mehndi",
    description:
      "Flowing vines, bold florals and open spacing for a modern, breathable look.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Henna_Party_-_Moroccan_Wedding_-_Brahim_FARAJI.jpg/1280px-Henna_Party_-_Moroccan_Wedding_-_Brahim_FARAJI.jpg",
    icon: Flower2,
  },
  {
    id: "rajasthani",
    title: "Rajasthani Mehndi",
    description:
      "Heritage motifs, jaali work and fine detailing inspired by royal Rajasthani craft.",
    image: "/images/service-rajasthani.jpg",
    icon: Gem,
  },
  {
    id: "engagement",
    title: "Engagement Mehndi",
    description:
      "Refined, camera-ready designs for the ring ceremony, sangeet and pre-wedding shoots.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Hand_of_Bride_with_ring.jpg/1280px-Hand_of_Bride_with_ring.jpg",
    icon: HeartHandshake,
  },
  {
    id: "festival",
    title: "Festival Mehndi",
    description:
      "Celebratory patterns for Karwa Chauth, Teej, Diwali, Eid and family gatherings.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Wedding_Henna.jpg/1280px-Wedding_Henna.jpg",
    icon: Sparkles,
  },
  {
    id: "guest",
    title: "Guest Mehndi",
    description:
      "Coordinated team artistry so every guest leaves with a beautiful, personalised design.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Henna_ceremony_at_wedding_02.jpg",
    icon: Users,
  },
  {
    id: "groom",
    title: "Groom Mehndi",
    description:
      "Subtle, masculine detailing for the groom — initials, motifs and meaningful symbols.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/HENNA-118.jpg/1280px-HENNA-118.jpg",
    icon: User,
  },
  {
    id: "custom",
    title: "Custom Designs",
    description:
      "A design sketched from scratch around your story, theme, venue or heirloom jewellery.",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Mehndi_decoration_on_back_side_of_hands.jpg/1280px-Mehndi_decoration_on_back_side_of_hands.jpg",
    icon: PenTool,
  },
];

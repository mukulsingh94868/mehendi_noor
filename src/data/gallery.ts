import type { GalleryItem, GalleryFilterValue } from "@/types";

export const galleryFilters: GalleryFilterValue[] = [
  "All",
  "Bridal",
  "Arabic",
  "Rajasthani",
  "Minimal",
  "Festival",
];

export const galleryItems: GalleryItem[] = [
  { id: "g01", title: "Full bridal hand & feet", category: "Bridal", src: "/images/gallery-01.svg", width: 900, height: 1200 },
  { id: "g02", title: "Portrait bridal motifs", category: "Bridal", src: "/images/gallery-02.svg", width: 900, height: 900 },
  { id: "g03", title: "Arabic vine cuff", category: "Arabic", src: "/images/gallery-03.svg", width: 900, height: 1150 },
  { id: "g04", title: "Floating floral trail", category: "Arabic", src: "/images/gallery-04.svg", width: 900, height: 900 },
  { id: "g05", title: "Royal jaali detail", category: "Rajasthani", src: "/images/gallery-05.svg", width: 900, height: 1100 },
  { id: "g06", title: "Heritage arch panel", category: "Rajasthani", src: "/images/gallery-06.svg", width: 900, height: 900 },
  { id: "g07", title: "Fine minimal wrist", category: "Minimal", src: "/images/gallery-07.svg", width: 900, height: 1200 },
  { id: "g08", title: "Single motif study", category: "Minimal", src: "/images/gallery-08.svg", width: 900, height: 900 },
  { id: "g09", title: "Festive toran border", category: "Festival", src: "/images/gallery-09.svg", width: 900, height: 1150 },
  { id: "g10", title: "Diya & bloom cluster", category: "Festival", src: "/images/gallery-10.svg", width: 900, height: 900 },
  { id: "g11", title: "Bridal forearm cascade", category: "Bridal", src: "/images/gallery-11.svg", width: 900, height: 1050 },
  { id: "g12", title: "Engagement centrepiece", category: "Bridal", src: "/images/gallery-12.svg", width: 900, height: 950 },
  { id: "g13", title: "Open arabic composition", category: "Arabic", src: "/images/gallery-13.svg", width: 900, height: 1100 },
  { id: "g14", title: "Quiet botanical line", category: "Minimal", src: "/images/gallery-14.svg", width: 900, height: 900 },
];

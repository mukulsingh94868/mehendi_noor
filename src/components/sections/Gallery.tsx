"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryFilters, galleryItems } from "@/data/gallery";
import type { GalleryFilterValue, GalleryItem } from "@/types";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [filter, setFilter] = useState<GalleryFilterValue>("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const items =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="bg-ivory">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Stories Told in Henna"
          description="A selection of recent work across bridal, Arabic, Rajasthani, minimal and festive styles. Tap any piece to view it larger."
        />

        <div
          role="group"
          aria-label="Filter gallery by style"
          className="no-scrollbar mt-10 flex snap-x gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible"
        >
          {galleryFilters.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
              className={cn(
                "snap-start whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                filter === value
                  ? "border-mehndi bg-mehndi text-cream"
                  : "border-gold/30 bg-cream/60 text-brown/80 hover:border-gold hover:text-mehndi"
              )}
            >
              {value}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-gold/20 text-left shadow-soft transition-all duration-300 hover:border-gold/50 hover:shadow-card"
              aria-label={`View ${item.title}`}
            >
              <Image
                src={item.src}
                alt={`${item.title} — ${item.category} mehndi design`}
                width={item.width}
                height={item.height}
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-deepgreen/80 via-deepgreen/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[0.65rem] uppercase tracking-widest-2 text-mutedgold">
                  {item.category}
                </span>
                <p className="font-serif text-lg text-cream">{item.title}</p>
              </div>
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/90 text-mehndi opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="max-w-3xl p-3 sm:p-4">
          {selected ? (
            <>
              <DialogTitle className="sr-only">{selected.title}</DialogTitle>
              <DialogDescription className="sr-only">
                {selected.category} mehndi design — larger preview
              </DialogDescription>
              <div className="overflow-hidden rounded-xl border border-gold/20">
                <Image
                  src={selected.src}
                  alt={`${selected.title} — ${selected.category} mehndi design`}
                  width={selected.width}
                  height={selected.height}
                  unoptimized
                  sizes="90vw"
                  className="max-h-[72vh] w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-1 pb-1">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-widest-2 text-gold">
                    {selected.category}
                  </p>
                  <p className="font-serif text-lg text-brown">
                    {selected.title}
                  </p>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

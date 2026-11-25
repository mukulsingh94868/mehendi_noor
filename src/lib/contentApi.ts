import type { GalleryItem, Service, Testimonial } from "@/types";
import { galleryItems } from "@/data/gallery";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

async function getContent<T>(resource: string, fallback: T[]): Promise<T[]> {
  if (!apiBaseUrl) {
    console.warn(`NEXT_PUBLIC_API_URL is not set; using local ${resource} content.`);
    return fallback;
  }

  try {
    const response = await fetch(`${apiBaseUrl}/api/${resource}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Content API returned HTTP ${response.status}.`);
    }
    const result: { success: boolean; data: T[] } = await response.json();
    if (!result.success || !Array.isArray(result.data)) {
      throw new Error("Content API returned an invalid response.");
    }
    return result.data;
  } catch (error) {
    console.error(`Unable to load ${resource} from the content API:`, error);
    return fallback;
  }
}

export function getGalleryItems(): Promise<GalleryItem[]> {
  return getContent("gallery", galleryItems);
}

export function getServices(): Promise<Service[]> {
  return getContent("services", services);
}

export function getTestimonials(): Promise<Testimonial[]> {
  return getContent("testimonials", testimonials);
}

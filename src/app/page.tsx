import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Packages } from "@/components/sections/Packages";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { getGalleryItems, getServices, getTestimonials } from "@/lib/contentApi";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [galleryItems, services, testimonials] = await Promise.all([
    getGalleryItems(),
    getServices(),
    getTestimonials(),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services items={services} />
        <Gallery items={galleryItems} />
        <About />
        {/* <Packages /> */}
        <WhyChooseUs />
        <Process />
        <Testimonials items={testimonials} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

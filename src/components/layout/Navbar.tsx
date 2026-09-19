"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-gold/20 bg-ivory/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="container flex h-20 items-center justify-between gap-4"
      >
        <a
          href="#home"
          onClick={() => setActive("home")}
          className="shrink-0 rounded-md transition-opacity hover:opacity-90"
          aria-label="Mehndi Noor — home"
        >
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActive(id)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-mehndi"
                      : "text-brown/80 hover:text-mehndi"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px origin-center bg-gold transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="h-10 px-5">
            <a href="#contact">Book Now</a>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open navigation menu"
                className="border-gold/50 bg-ivory/70"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <SheetHeader className="border-b border-gold/20 pb-5 text-left">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <Logo />
              </SheetHeader>

              <ul className="mt-6 flex flex-col gap-1 overflow-y-auto">
                {navLinks.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = active === id;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => {
                          setActive(id);
                          setOpen(false);
                        }}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 font-serif text-lg transition-colors",
                          isActive
                            ? "bg-mehndi/10 text-mehndi"
                            : "text-brown hover:bg-cream"
                        )}
                      >
                        {link.label}
                        <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto pt-6">
                <Button asChild className="w-full" size="lg">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Book Your Mehndi
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

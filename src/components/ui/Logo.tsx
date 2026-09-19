import { cn } from "@/lib/utils";

export function Logo({
  className,
  markClassName,
  tone = "dark",
}: {
  className?: string;
  markClassName?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 44 44"
        aria-hidden="true"
        className={cn("h-9 w-9 text-gold", markClassName)}
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
          <circle cx="22" cy="22" r="20" />
          <circle cx="22" cy="22" r="14.5" strokeDasharray="1.5 4" />
          <path d="M22 6c2.6 4.2 6.4 7.2 11 8.6-4.6 1.4-8.4 4.4-11 8.6-2.6-4.2-6.4-7.2-11-8.6C15.6 13.2 19.4 10.2 22 6Z" />
          <path d="M22 24c1.7 2.8 4.2 4.8 7.3 5.7-3.1.9-5.6 2.9-7.3 5.7-1.7-2.8-4.2-4.8-7.3-5.7 3.1-.9 5.6-2.9 7.3-5.7Z" />
          <circle cx="22" cy="22" r="1.8" fill="currentColor" stroke="none" />
        </g>
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-xl font-semibold tracking-wide",
            tone === "light" ? "text-cream" : "text-brown"
          )}
        >
          Mehndi Noor
        </span>
        <span
          className={cn(
            "text-[0.6rem] uppercase tracking-widest-2",
            tone === "light" ? "text-mutedgold" : "text-gold"
          )}
        >
          Henna Artistry
        </span>
      </span>
    </span>
  );
}

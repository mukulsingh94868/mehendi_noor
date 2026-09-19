import * as React from "react";

import { cn } from "@/lib/utils";

/** Large, quiet mandala for section backgrounds. Inherits `currentColor`. */
export function Mandala({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  const ring = (count: number, r0: number, r1: number) =>
    Array.from({ length: count }).map((_, i) => {
      const a = (Math.PI * 2 * i) / count + (count === 8 ? Math.PI / 8 : 0);
      const [sx, sy] = [100 + Math.cos(a) * r0, 100 + Math.sin(a) * r0];
      const [ox, oy] = [100 + Math.cos(a) * r1, 100 + Math.sin(a) * r1];
      const pa = a + Math.PI / 2;
      const w = (r1 - r0) * 0.4;
      return (
        <path
          key={`${count}-${i}`}
          d={`M ${sx.toFixed(2)} ${sy.toFixed(2)} Q ${(
            (sx + ox) / 2 +
            Math.cos(pa) * w
          ).toFixed(2)} ${((sy + oy) / 2 + Math.sin(pa) * w).toFixed(2)} ${ox.toFixed(
            2
          )} ${oy.toFixed(2)} Q ${((sx + ox) / 2 - Math.cos(pa) * w).toFixed(2)} ${(
            (sy + oy) / 2 -
            Math.sin(pa) * w
          ).toFixed(2)} ${sx.toFixed(2)} ${sy.toFixed(2)} Z`}
        />
      );
    });

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <g stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
        <circle cx="100" cy="100" r="96" />
        <circle cx="100" cy="100" r="82" strokeDasharray="2 6" />
        <circle cx="100" cy="100" r="62" />
        <circle cx="100" cy="100" r="40" strokeDasharray="2 6" />
        <circle cx="100" cy="100" r="5" fill="currentColor" />
        {ring(16, 44, 94)}
        {ring(8, 20, 40)}
      </g>
    </svg>
  );
}

/** Small centred floral rule used between headings and content. */
export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center justify-center gap-3", className)}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-gold/40 sm:w-16" />
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold" fill="none">
        <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
          <path d="M12 3c2 3 5 5 8 5-3 1-6 3-8 6-2-3-5-5-8-6 3 0 6-2 8-5Z" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
        </g>
      </svg>
      <span className="h-px w-10 bg-gold/40 sm:w-16" />
    </div>
  );
}

/** Corner botanical flourish. Position it absolutely inside a relative parent. */
export function CornerFlourish({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden="true"
      className={cn(className, flip && "-scale-x-100")}
    >
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M8 8c34 4 62 22 80 52" />
        <path d="M26 10c6 18 3 34-8 46 15-8 31-7 44 2" />
        <path d="M52 24c4 14 1 26-8 35 12-5 25-3 35 5" />
        <path d="M78 46c3 10 1 19-6 26 9-4 19-2 26 4" />
        <circle cx="30" cy="30" r="2.4" fill="currentColor" stroke="none" />
        <circle cx="60" cy="58" r="2" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

/** Slim leafy sprig for accents near headings or cards. */
export function LeafSprig({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 160"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M30 156C34 110 26 62 30 8" />
        <path d="M30 116c16-4 26-15 30-30-16 2-27 12-30 30Z" />
        <path d="M30 82c-16-4-26-15-30-30 16 2 27 12 30 30Z" />
        <path d="M30 50c14-4 24-14 27-28-14 2-24 11-27 28Z" />
        <circle cx="30" cy="12" r="3" />
      </g>
    </svg>
  );
}

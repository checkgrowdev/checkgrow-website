/* The platform's BrandLoader, ported for the site: a 4×4 dot grid whose
   staggered wave periodically settles into the Checkgrow check (dots
   7 · 8 · 10 · 13), then dissolves back. Pure CSS (see globals.css);
   delays mirror the product's ((i*317)%16)*0.15s pattern. */

const DELAYS = Array.from({ length: 16 }, (_, i) => ((i * 317) % 16) * 0.15);
const CHECK = new Set([7, 8, 10, 13]);

export function CheckLoader({
  className = "",
  dotColor = "#FFFFFF",
}: {
  className?: string;
  dotColor?: string;
}) {
  return (
    <span className={`relative block size-10 ${className}`} aria-hidden>
      {/* wave layer */}
      <span className="ck-wave absolute inset-0 grid grid-cols-4 grid-rows-4 place-items-center">
        {DELAYS.map((d, i) => (
          <span
            key={i}
            className="ck-dot size-[6px] rounded-full"
            style={{ backgroundColor: dotColor, animationDelay: `-${d}s` }}
          />
        ))}
      </span>
      {/* check layer */}
      <span className="ck-chk absolute inset-0 grid grid-cols-4 grid-rows-4 place-items-center">
        {DELAYS.map((_, i) => (
          <span
            key={i}
            className="size-[6px] rounded-full"
            style={{ backgroundColor: dotColor, opacity: CHECK.has(i) ? 1 : 0.14 }}
          />
        ))}
      </span>
    </span>
  );
}

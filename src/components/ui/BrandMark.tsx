export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-bold tracking-tighter ${className}`}>
      <svg viewBox="25 44 180 180" className="w-[0.95em] h-[0.95em] shrink-0" aria-hidden="true">
        <polygon points="120,210 68,112 152,96 108,150" fill="#00e5a8" opacity="0.35" />
        <polygon points="120,210 94,82 162,118 114,142" fill="#00e5a8" opacity="0.65" />
        <polygon points="120,210 112,58 150,128" fill="#00e5a8" />
      </svg>
      Forge Digital<span className="text-accent">.</span>
    </span>
  );
}

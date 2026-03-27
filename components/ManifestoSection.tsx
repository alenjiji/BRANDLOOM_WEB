import Image from "next/image";

export default function ManifestoSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#f5f5f5] overflow-hidden flex items-center justify-center">

      {/* Top-left — Logo + decorative icon */}
      <div className="absolute top-8 left-8 md:top-12 md:left-16 flex flex-col gap-4">
        <Image src="/hero/logo.svg" alt="Brandloom" width={120} height={28} className="h-6 w-auto" />
        {/* Decorative icon */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-30">
          <circle cx="10" cy="10" r="9" stroke="#171717" strokeWidth="1" />
          <line x1="10" y1="1" x2="10" y2="19" stroke="#171717" strokeWidth="1" />
          <line x1="1" y1="10" x2="19" y2="10" stroke="#171717" strokeWidth="1" />
        </svg>
      </div>

      {/* Center — Manifesto text */}
      <div className="max-w-3xl px-8 text-center">
        <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.5] tracking-tight text-[#171717]">
          We believe a brand is not a logo, a palette, or a typeface.
          It is the <em className="not-italic italic">feeling</em> that lingers
          after the screen goes dark — the quiet confidence of a name
          spoken in the right room, at the right moment.
          We build that feeling, deliberately.
        </p>
      </div>

      {/* Bottom-right — Arrow */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="opacity-40">
          <line x1="4" y1="28" x2="28" y2="4" stroke="#171717" strokeWidth="1.5" />
          <polyline points="14,4 28,4 28,18" stroke="#171717" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

    </section>
  );
}

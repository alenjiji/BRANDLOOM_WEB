import Image from "next/image";

export default function ManifestoSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#f5f5f5] overflow-hidden">

      {/* Halftone texture overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/textures/halftone.webp" alt="" fill className="object-cover opacity-[0.04]" />
      </div>

      {/* Top-left — Logo */}
      <div className="absolute top-12 left-16">
        <Image src="/hero/logo.svg" alt="Brandloom" width={120} height={28} className="h-6 w-auto" />
      </div>

      {/* Wand icon — just below logo */}
      <div className="absolute top-24 left-16 lg:left-20">
        <Image src="/manifest_section/SVG/wand.svg" alt="" width={20} height={20} className="w-16 lg:w-24 h-auto opacity-[0.84]" />
      </div>

      {/* Paragraph — horizontally centered, slightly above vertical center */}
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl lg:max-w-4xl px-8 text-center">
        <p className="font-serif text-xl lg:text-2xl font-light leading-[2.1] tracking-[0.02em] text-[#171717]">
          At Brandloom, we believe great brands aren't built on marketing alone — they're built on clarity, consistency, and meaningful experiences. Working across industries and audiences has taught us that growth isn't about doing more, it's about doing the <em className="not-italic italic">right things</em> in the right order. When strategy, design, and communication come together with purpose, brands don't just compete — they become memorable.
        </p>
      </div>

      {/* Paper plane — bottom-right, pulled in closer to text */}
      <div className="absolute bottom-[18%] right-[12%] lg:right-[16%]">
        <Image src="/manifest_section/SVG/paper_plane.svg" alt="" width={28} height={28} className="w-24 lg:w-36 h-auto opacity-[0.96]" />
      </div>

    </section>
  );
}

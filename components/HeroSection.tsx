import CircularBadge from "@/components/CircularBadge";
import AsciiBackground from "@/components/AsciiBackground";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100svh] bg-[#f5f5f5] overflow-hidden flex flex-col items-center justify-center">

      <AsciiBackground image="/ascii/closeup.png" />

      {/* Top Right — Circular Badge */}
      <div className="absolute top-4 right-4 md:top-10 md:right-12 scale-75 md:scale-100 origin-top-right">
        <CircularBadge />
      </div>

      {/* Hero text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center text-[#171717]" style={{ lineHeight: 0.9 }}>

        <h1 className="hero-serif whitespace-nowrap text-[clamp(2rem,8vw,6rem)]">
          Crafting
          <span className="inline-block align-baseline mx-[1vw]">
            <img src="/hero/loom.svg" className="w-[clamp(1.5rem,6vw,4.5rem)] inline-block animate-float" />
          </span>
          bold
        </h1>

        <h1 className="whitespace-nowrap text-[clamp(2rem,8vw,6rem)]">
          <span className="hero-serif">design </span><span className="hero-script text-[clamp(2.25rem,9vw,6.75rem)]">experiences</span>
        </h1>

      </div>

      {/* Bottom Center Logo */}
      <div className="absolute bottom-16 md:bottom-28 left-1/2 -translate-x-1/2 opacity-90">
        <img src="/hero/logo.svg" alt="Brandloom logo" className="w-32 md:w-56" />
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-6 md:bottom-8 left-6 md:left-10 text-[9px] md:text-[10px] tracking-[0.3em] text-gray-500">
        SOCIALS
      </div>

      {/* Bottom Center */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] tracking-[0.3em] text-gray-500">
        CLIENTS
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-6 md:bottom-8 right-6 md:right-10 text-[9px] md:text-[10px] tracking-[0.3em] text-gray-500">
        EMAIL
      </div>

    </section>
  );
}

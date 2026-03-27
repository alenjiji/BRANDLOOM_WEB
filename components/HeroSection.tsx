import CircularBadge from "@/components/CircularBadge";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100svh] bg-[#f5f5f5] overflow-hidden flex flex-col items-center justify-center">

      {/* Top Right — Circular Badge */}
      <div className="absolute top-4 right-4 md:top-10 md:right-12 scale-75 md:scale-100 origin-top-right">
        <CircularBadge />
      </div>

      {/* Hero text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center leading-[1.05] text-[#171717] w-full px-6">

        <h1 className="text-[clamp(2rem,9vw,110px)] font-serif font-light">
          Crafting
          <span className="inline-block mx-[0.15em] align-middle -translate-y-1 md:-translate-y-6">
            <img src="/hero/loom.svg" className="w-[clamp(2rem,8vw,10rem)] inline-block animate-float" />
          </span>
          bold
        </h1>

        <h1 className="text-[clamp(2.25rem,10vw,120px)] italic font-serif font-light mt-1 md:mt-2">
          design experiences
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

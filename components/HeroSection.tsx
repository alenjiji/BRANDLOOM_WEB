import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-[#f5f5f5] overflow-hidden flex flex-col items-center justify-center">

      {/* Top right — badge placeholder */}
      <div className="absolute top-6 right-6 w-20 h-20 rounded-full border border-[#171717]/30 flex items-center justify-center">
        <span className="text-[10px] tracking-widest text-[#171717]/50 uppercase">Badge</span>
      </div>

      {/* Hero text */}
      <div className="text-center leading-none select-none">
        {/* Line 1: Crafting + loom.svg + bold */}
        <div className="flex items-center justify-center gap-4">
          <span className="font-serif text-[clamp(3rem,8vw,8rem)] font-light tracking-tight text-[#171717]">
            Crafting
          </span>
          <Image
            src="/hero/loom.svg"
            alt="loom"
            width={64}
            height={64}
            className="w-[clamp(2rem,4vw,4rem)] h-auto"
          />
          <span className="font-serif text-[clamp(3rem,8vw,8rem)] font-light tracking-tight text-[#171717]">
            bold
          </span>
        </div>

        {/* Line 2: design */}
        <div>
          <span className="font-serif text-[clamp(3rem,8vw,8rem)] font-light tracking-tight text-[#171717]">
            design
          </span>
        </div>

        {/* Line 3: experiences — italic, slightly larger */}
        <div>
          <span className="font-serif italic text-[clamp(3.5rem,9vw,9.5rem)] font-light tracking-tight text-[#171717]">
            experiences
          </span>
        </div>
      </div>

      {/* Bottom center — logo */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Image src="/hero/logo.svg" alt="Brandloom" width={140} height={32} className="h-8 w-auto" />
      </div>

      {/* Bottom left — socials */}
      <span className="absolute bottom-8 left-8 text-[11px] tracking-[0.2em] uppercase text-[#171717]/50">
        socials
      </span>

      {/* Bottom center-ish — clients (offset left of logo) */}
      <span className="absolute bottom-8 left-1/2 -translate-x-1/2 mt-10 text-[11px] tracking-[0.2em] uppercase text-[#171717]/50 translate-y-6">
        clients
      </span>

      {/* Bottom right — email */}
      <span className="absolute bottom-8 right-8 text-[11px] tracking-[0.2em] uppercase text-[#171717]/50">
        email
      </span>

    </section>
  );
}

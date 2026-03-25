import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full min-h-screen bg-[#1a1a1a] grid grid-cols-1 md:grid-cols-2">

      {/* Left column */}
      <div className="flex flex-col justify-between px-12 py-16 md:px-16 md:py-20">

        {/* Top: logo + loom icon */}
        <div className="flex flex-col gap-6">
          <Image src="/hero/logo.svg" alt="Brandloom" width={120} height={28} className="h-7 w-auto invert" />
          <Image src="/hero/loom.svg" alt="loom" width={32} height={32} className="h-8 w-8 invert opacity-60" />
        </div>

        {/* Main heading */}
        <p className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.15] tracking-tight text-white max-w-lg">
          We craft{" "}
          <em className="not-italic italic">custom</em>{" "}
          business solutions that help you drive change.
        </p>

        {/* Bottom spacer on mobile */}
        <div className="hidden md:block" />
      </div>

      {/* Right column */}
      <div className="flex flex-col justify-between px-12 py-16 md:px-16 md:py-20">

        {/* Image — fills most of the column */}
        <div className="relative w-full flex-1 min-h-[400px] md:min-h-0 bg-[#2a2a2a] overflow-hidden">
          <Image
            src="/hero/pc.svg"
            alt="placeholder"
            fill
            className="object-cover opacity-40"
          />
        </div>

        {/* Bottom paragraph */}
        <p className="mt-8 text-[13px] leading-relaxed tracking-wide text-white/40 max-w-sm">
          Everything we create is built in close collaboration with our clients
          and agency partners, working together to bring ideas to life with
          clarity and intention.
        </p>
      </div>

    </section>
  );
}

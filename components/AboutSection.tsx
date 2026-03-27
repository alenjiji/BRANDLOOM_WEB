import Image from "next/image";
import ParallaxImage from "@/components/ParallaxImage";

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#1a1a1a]">

      {/* Logo — absolute top left */}
      <div className="absolute top-6 left-6 md:top-12 md:left-16">
        <Image src="/hero/logo.svg" alt="Brandloom" width={120} height={28} className="h-5 md:h-7 w-auto invert" />
      </div>

      {/* Centered grid container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16 pt-24 pb-16 md:pt-0 md:pb-0">

        {/* Left — text block */}
        <div className="max-w-full md:max-w-xl space-y-6 md:space-y-8 text-center md:text-left pt-16 md:pt-0">
          <Image src="/hero/loom.svg" alt="loom" width={32} height={32} className="h-7 w-7 md:h-8 md:w-8 invert opacity-60 mx-auto md:mx-0" />

          <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.2] md:leading-[1.3] tracking-tight text-white max-w-sm mx-auto md:mx-0 md:max-w-xl">
            We craft{" "}
            <em className="not-italic italic">custom</em>{" "}
            business solutions that help you drive change.
          </p>
        </div>

        {/* Right — image + caption */}
        <div className="flex flex-col items-center md:items-start justify-center mt-8 md:mt-0">
          <div className="relative w-full md:w-[380px] lg:w-[480px] h-[320px] md:h-[460px] lg:h-[560px] overflow-hidden mb-5 px-4 md:px-0">
            <ParallaxImage />
          </div>

          <p className="text-xs md:text-sm text-gray-400 w-full md:w-[380px] lg:w-[480px] leading-relaxed tracking-wide text-center md:text-left px-4 md:px-0">
            Everything we create is built in close collaboration with our clients
            and agency partners, working together to bring ideas to life with
            clarity and intention.
          </p>
        </div>

      </div>

    </section>
  );
}

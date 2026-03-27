"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParallaxImage() {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.parentElement!.getBoundingClientRect();
        const offset = (window.innerHeight / 2 - rect.top) * 0.08;
        ref.current.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={ref} className="w-full h-full will-change-transform">
      <Image
        src="/section_2/1x/image_section_2.webp"
        alt="About BrandLoom"
        fill
        className="object-cover"
      />
    </div>
  );
}

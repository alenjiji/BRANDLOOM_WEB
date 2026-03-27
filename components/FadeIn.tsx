"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => setVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) show(); },
      { threshold: 0 }
    );

    if (ref.current) observer.observe(ref.current);

    // Fallback: ensure visibility even if IntersectionObserver doesn't fire
    const timer = setTimeout(show, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
    >
      {children}
    </div>
  );
}

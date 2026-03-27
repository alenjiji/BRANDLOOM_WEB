"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.display = "block";
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const hide = () => { cursor.style.opacity = "0"; };
    const show = () => { cursor.style.opacity = "1"; };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
    };
  }, []);

  return (
    <img
      id="custom-cursor"
      src="/cursor/mouse pointer-8.png"
      alt=""
      aria-hidden="true"
      width={16}
      height={19}
      style={{ width: 16, height: 19, display: 'none' }}
    />
  );
}

"use client";

import { useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const GRID = 8;

interface Letter {
  char: string;
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  opacity: number;
  flickerSpeed: number;
  driftX: number;
  driftY: number;
  scale: number;
  brightness: number;
}

interface Props {
  image: string;
}

export default function AsciiBackground({ image }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let letters: Letter[] = [];
    let time = 0;

    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = image;
    img.onload = () => {
      const cols = Math.floor(W / GRID);
      const rows = Math.floor(H / GRID);

      const offscreen = document.createElement("canvas");
      offscreen.width = cols;
      offscreen.height = rows;
      const offCtx = offscreen.getContext("2d")!;
      offCtx.drawImage(img, 0, 0, cols, rows);
      const { data } = offCtx.getImageData(0, 0, cols, rows);

      letters = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const i = (row * cols + col) * 4;
          const r = data[i], g = data[i + 1], b = data[i + 2];
          let brightness = r * 0.299 + g * 0.587 + b * 0.114;
          brightness = (brightness - 128) * 1.8 + 128;
          brightness = Math.max(0, Math.min(255, brightness));
          brightness = Math.pow(brightness / 255, 1.3) * 255;
          const normalized = brightness / 255;
          const weighted = Math.pow(normalized, 1.6);
          let char: string;
          if (normalized < 0.15) char = " ";
          else if (normalized < 0.25) char = ".";
          else if (normalized < 0.35) char = ":";
          else if (normalized < 0.45) char = "o";
          else if (normalized < 0.55) char = "O";
          else if (normalized < 0.65) char = "0";
          else if (normalized < 0.75) char = "Q";
          else if (normalized < 0.85) char = "8";
          else char = "9";
          const bx = col * GRID + GRID / 2;
          const by = row * GRID + GRID / 2;
          letters.push({
            char,
            baseX: bx,
            baseY: by,
            x: bx,
            y: by,
            opacity: 0.25 + (brightness / 255) * 0.5,
            flickerSpeed: 0.3 + Math.random() * 0.7,
            driftX: (Math.random() - 0.5) * 0.08,
            driftY: (Math.random() - 0.5) * 0.08,
            scale: 0.5 + Math.pow(brightness / 255, 1.6) * 1.4,
            brightness,
          });
        }
      }

      const draw = () => {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, W, H);
        time += 0.01;

        const mx = (mouse.current.x / W - 0.5) * 12;
        const my = (mouse.current.y / H - 0.5) * 12;

        for (const l of letters) {
          // Flicker
          const baseOpacity = 0.25 + (l.brightness / 255) * 0.5;
          l.opacity = baseOpacity + Math.sin(time * l.flickerSpeed) * 0.015;

          // Drift + bounce back
          l.x += l.driftX;
          l.y += l.driftY;
          l.x += (l.baseX - l.x) * 0.002;
          l.y += (l.baseY - l.y) * 0.002;

          // Random char swap
          if (Math.random() < 0.0003) {
            const n = Math.random();
            l.char = n < 0.15 ? " " : n < 0.25 ? "." : n < 0.35 ? ":" : n < 0.45 ? "o" : n < 0.55 ? "O" : n < 0.65 ? "0" : n < 0.75 ? "Q" : n < 0.85 ? "8" : "9";
          }

          const drawX = l.x + mx;
          const drawY = l.y + my;

          // Center focus light
          const dx = l.baseX - W / 2;
          const dy = l.baseY - H / 2;
          const focus = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 600);

          // Color and alpha
          const alpha = Math.min(1, l.opacity + focus * 0.2);
          const color = l.brightness > 220 ? "#d1fae5" : l.brightness > 180 ? "#6ee7b7" : l.brightness > 140 ? "#34d399" : l.brightness > 100 ? "#10b981" : l.brightness > 60 ? "#065f46" : "#022c22";

          ctx.globalAlpha = alpha;
          ctx.fillStyle = color;
          ctx.setTransform(l.scale, 0, 0, l.scale, drawX, drawY);
          ctx.font = "9px monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(l.char, 0, 0);
          ctx.setTransform(1, 0, 0, 1, 0, 0);
        }

        animId = requestAnimationFrame(draw);
      };

      draw();
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [image]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

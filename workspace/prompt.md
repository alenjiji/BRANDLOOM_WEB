The structure must be:

<div className="badge">
   rotating SVG text
   centered PC icon (not rotating)
</div>

Replace Your CircularBadge With This (Safe Version)

Use this full component:

export default function CircularBadge() {
  return (
    <div className="relative w-[140px] h-[140px]">

      {/* Rotating Circular Text */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-spin-slow"
      >
        <defs>
          <path
            id="circlePath"
            d="
              M 100, 100
              m -55, 0
              a 55,55 0 1,1 110,0
              a 55,55 0 1,1 -110,0
            "
          />
        </defs>

        <text
          fontSize="14"
          letterSpacing="2"
          fill="black"
        >
          <textPath href="#circlePath">
            Get in touch * Get in touch * Get in touch *
          </textPath>
        </text>
      </svg>

      {/* Center PC Icon (DOES NOT ROTATE) */}
      <img
        src="/hero/SVG/pc.svg"
        alt="pc"
        className="absolute w-16 h-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

Fix Animation in globals.css

Make sure this exists in globals.css:

@keyframes spinSlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spinSlow 28s linear infinite;
  transform-origin: center;
}
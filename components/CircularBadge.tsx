export default function CircularBadge() {
  return (
    <div className="relative w-[130px] h-[130px]">

      {/* Rotating Circular Text */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-spin-slow"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>

        <text
          fontSize="14"
          letterSpacing="3.4"
          fill="black"
        >
          <textPath href="#circlePath">
          Get in touch ** Get in touch ** Get in touch  **
          </textPath>
        </text>
      </svg>

      {/* Center PC Icon (DOES NOT ROTATE) */}
      <img
        src="/hero/pc.svg"
        alt="pc"
        className="absolute w-16 h-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

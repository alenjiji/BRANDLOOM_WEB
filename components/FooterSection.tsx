export default function FooterSection() {
  return (
    <section className="bg-[#f5f5f5] w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-32 relative">

        {/* Logo */}
        <img src="/hero/logo.svg" alt="Brandloom" className="h-7 w-auto mb-16" />

        {/* Center Content */}
        <div className="text-center mb-16 md:mb-24">
          <img src="/footer/SVG/chat bubble.svg" alt="chat" className="mb-6 w-16 md:w-20 opacity-70 mx-auto -translate-x-16 md:-translate-x-32" />

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#171717] inline-flex items-center gap-4 md:gap-6 flex-wrap justify-center">
            Let&apos;s work together
            <img src="/footer/SVG/arrow footer.svg" alt="arrow" className="w-8 md:w-12 opacity-80" />
          </h2>

          <img src="/footer/SVG/line_footer.svg" alt="" className="mx-auto mt-6 w-full max-w-[860px] opacity-30" />
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0 text-[10px] md:text-sm tracking-[0.3em] text-gray-500">
          <p>EMAIL</p>
          <p>KALAMASSERY, KOCHI</p>
          <div className="flex items-center gap-4">
            <span>SOCIALS</span>
            <img src="/footer/SVG/linkedin.svg" alt="LinkedIn" className="w-4 opacity-50" />
            <img src="/footer/SVG/instagram.svg" alt="Instagram" className="w-4 opacity-50" />
          </div>
        </div>

      </div>
    </section>
  );
}

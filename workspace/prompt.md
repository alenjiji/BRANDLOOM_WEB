Refactor FooterSection layout height and spacing.

The footer should NOT be full screen height.

Layout rules:
- Remove min-h-screen
- Use large vertical padding instead (py-32 or py-40)
- The footer should look like a short editorial footer, not a full page
- The heading should still be large and prominent
- Maintain lots of whitespace but reduce empty vertical space
- Keep logo at top-left
- Keep heading centered
- Keep bottom row aligned to page margins

Use a container:
- max-w-7xl
- mx-auto
- px-16
- py-32


CORRECT FOOTER STRUCTURE: 
<section className="bg-[#f5f5f5] w-full">
  <div className="max-w-7xl mx-auto px-16 py-32 relative">

    {/* Logo */}
    <img src="/hero/logo.svg" className="mb-16" />

    {/* Center Content */}
    <div className="text-center mb-24">
      <img src="/footer/SVG/chat bubble.svg" className="mx-auto mb-6 w-10" />

      <h2 className="text-7xl font-serif inline-flex items-center gap-6">
        Let’s work together
        <img src="/footer/SVG/arrow footer.svg" className="w-12" />
      </h2>

      <img src="/footer/SVG/line_footer.svg" className="mx-auto mt-6" />
    </div>

    {/* Bottom Row */}
    <div className="flex justify-between text-sm tracking-[0.3em] text-gray-600">
      <p>LOREM IPSUM</p>
      <p>KALAMASSERY, KOCHI</p>
      <div className="flex items-center gap-4">
        <span>SOCIALS</span>
        <img src="/footer/SVG/linkedin.svg" className="w-4" />
        <img src="/footer/SVG/instagram.svg" className="w-4" />
      </div>
    </div>

  </div>
</section>
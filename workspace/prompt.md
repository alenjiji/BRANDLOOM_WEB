Update ManifestoSection layout for better desktop proportions.

Changes required:

1. Increase text container width on desktop only
   - Mobile: keep current width
   - Desktop: make text wider like editorial layout
   - Use:
     max-w-2xl on mobile
     lg:max-w-4xl on desktop

2. Increase font size slightly on desktop
   - Mobile: text-xl
   - Desktop: lg:text-2xl

3. Increase wand and paper plane SVG sizes on desktop
   - Wand:
     mobile: w-10
     desktop: lg:w-16
   - Paper plane:
     mobile: w-16
     desktop: lg:w-24

4. Adjust positions slightly for larger desktop layout:
   - Wand: move slightly more inward from left
   - Paper plane: move slightly more inward from right

5. Keep everything centered and maintain lots of whitespace.
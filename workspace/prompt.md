Update the AsciiBackground visual style to use darker green shades and smaller letters for more detail and a subtle editorial look.

Make the following changes:

1. Reduce font size:
   ctx.font = "7px monospace"

2. Reduce grid size slightly for more detail:
   GRID = 7

3. Use darker green color palette based on brightness:

   brightness > 220 → "#a7f3d0"
   brightness > 180 → "#34d399"
   brightness > 140 → "#059669"
   brightness > 100 → "#047857"
   brightness > 70  → "#065f46"
   brightness > 40  → "#064e3b"
   else → "#001a14"

4. Adjust opacity for light background:
   opacity = 0.35 + Math.pow(brightness / 255, 1.5) * 0.45

Goal:
The image should be formed using very small dark green letters on a light background, creating a subtle but clearly visible image when viewed from a distance.
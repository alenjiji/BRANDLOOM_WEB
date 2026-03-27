import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ManifestoSection from "@/components/ManifestoSection";
import FooterSection from "@/components/FooterSection";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <FadeIn><HeroSection /></FadeIn>
      <FadeIn><AboutSection /></FadeIn>
      <FadeIn><ManifestoSection /></FadeIn>
      <FadeIn><FooterSection /></FadeIn>
    </>
  );
}

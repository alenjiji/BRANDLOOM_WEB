import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <FadeIn><HeroSection /></FadeIn>
      <FadeIn><AboutSection /></FadeIn>
      <FadeIn><FooterSection /></FadeIn>
    </>
  );
}

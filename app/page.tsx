import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import Identity from "@/components/sections/Identity";
import Systems from "@/components/sections/Systems";
import Projects from "@/components/sections/Projects";
import Philosophy from "@/components/sections/Philosophy";
import TechStack from "@/components/sections/TechStack";
import Vision from "@/components/sections/Vision";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Navigation />
      <main id="main-container">
        <Hero />
        <Identity />
        <Systems />
        <Projects />
        <Philosophy />
        <TechStack />
        <Vision />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

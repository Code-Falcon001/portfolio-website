import dynamic from "next/dynamic";
const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), { ssr: false });
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative w-full">
      <ParticleBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Certifications />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm relative z-10 border-t border-white/5 bg-black/50 backdrop-blur-md">
        <p>&copy; {new Date().getFullYear()} Pranit Patil. All rights reserved.</p>
      </footer>
    </main>
  );
}

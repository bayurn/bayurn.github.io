import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AboutContact from "@/components/AboutContact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0f1115]">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <AboutContact />
    </main>
  );
}

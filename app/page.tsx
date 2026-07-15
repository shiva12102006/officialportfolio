import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Services />

      <Testimonials />

      <Blog />

      <ContactCTA />

      <Footer />

    </main>
  );
}
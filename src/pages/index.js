import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-primary">
      <Header />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

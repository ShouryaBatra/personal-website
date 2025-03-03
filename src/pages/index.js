import aimTrainer from "../assets/aim.png";
import culturify from "../assets/culturify.png";
import fireworks from "../assets/fireworks.png";
import luminaris from "../assets/last.png";
import colorSwitcher from "../assets/color-switcher.png";
import website from "../../public/favicon.ico";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  const skills = [
    "React",
    "React Native",
    "Firebase",
    "Supabase",
    "Tailwind CSS",
    "Java",
    "Python",
  ];

  const projects = [
    {
      title: "Luminaris",
      description:
        "AI study plan maker web app made with React, shadcn ui, and Supabase.",
      link: "https://github.com/ShouryaBatra/luminaris-version-two",
      image: luminaris,
    },
    {
      title: "Aim Trainer",
      description: "Fun game made with p5.js to train your mouse aim control.",
      link: "https://github.com/ShouryaBatra/aim-trainer",
      image: aimTrainer,
    },
    {
      title: "shadcn Color Theme Switcher",
      description:
        "Web app for easy implementation of colored and light/dark mode themes with shadcn ui.",
      link: "https://github.com/ShouryaBatra/shadcn-color-theme-switcher",
      image: colorSwitcher,
    },
    {
      title: "Fireworks",
      description: "Web animation made with JavaScript and CSS.",
      link: "https://github.com/ShouryaBatra/fireworks",
      image: fireworks,
    },
    {
      title: "Culturify",
      description:
        "Mobile app for learning about various cultures made with React Native.",
      link: "https://github.com/NotAPokemon/Milpitas-Hacks",
      image: culturify,
    },
    {
      title: "Personal Website",
      description:
        "Site made with Next, React, TailwindCSS, and Aceternity ui (this website)",
      link: "https://github.com/ShouryaBatra/personal-website/",
      image: website,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header />

      {/* Projects */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Some Projects</h2>
        <HoverEffect items={projects} />
      </section>

      {/* Skills */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <ScrollAnimation key={skill} delay={index * 0.1}>
              <motion.div
                key={skill}
                className="bg-gray-800 px-6 py-3 rounded-full text-lg font-medium shadow-lg cursor-pointer relative overflow-hidden"
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 20px 5px rgba(79, 70, 229, 0.6)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                initial={{
                  y: 0,
                  boxShadow: "0 0 0px 0px rgba(79, 70, 229, 0)",
                }}
              >
                {skill}
                {/* Glow overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 rounded-full"
                  whileHover={{ opacity: 0.2, transition: { duration: 0.3 } }}
                />
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </section>
      {/* Contact */}
      <Contact />

      {/* Footer */}

      <Footer />
    </div>
  );
}

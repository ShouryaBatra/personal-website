import Image from "next/image";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import me from "../assets/me.jpg";
import aimTrainer from "../assets/aim.png";
import culturify from "../assets/culturify.png";
import fireworks from "../assets/fireworks.png";
import luminaris from "../assets/last.png";
import colorSwitcher from "../assets/color-switcher.png";
import { HoverEffect } from "../components/ui/card-hover-effect";

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
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="text-center py-20">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-700">
          <Image
            src={me}
            alt="Shourya Batra"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <h1 className="text-5xl font-bold mt-6">Shourya Batra</h1>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          Freshman at Homestead High School passionate about Computer Science,
          Volleyball, and Music. I love building projects that solve real-world
          problems and exploring new technologies.
        </p>
        {/* Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/ShouryaBatra/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/shourya-batra-b22920344/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://www.youtube.com/@ShoBartHehe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaYoutube size={28} />
          </a>
        </div>
      </header>

      {/* Projects */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Some Projects</h2>
        <HoverEffect items={projects} />
      </section>

      {/* Skills */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

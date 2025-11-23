"use client";

import { HoverEffect } from "./ui/card-hover-effect";
import aimTrainer from "../assets/aim.png";
import culturify from "../assets/culturify.png";
import fireworks from "../assets/fireworks.png";
import luminaris from "../assets/last.png";
import SALT from "../assets/SALT.png";
import colorSwitcher from "../assets/color-switcher.png";
import website from "../../public/favicon.ico";

function Projects() {
  const projects = [
    {
      title: "SALT",
      description:
        "Privacy preservation in LLMs using activation steering, accepted to NeurIPS ResponsibleFM 2025.",
      link: "https://github.com/ShouryaBatra/SALT",
      image: SALT,
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
        "Easy implementation of colored and light/dark mode themes with shadcn ui.",
      link: "https://github.com/ShouryaBatra/shadcn-color-theme-switcher-next",
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
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        Some Projects
      </h2>
      <HoverEffect items={projects} />
    </section>
  );
}

export default Projects;

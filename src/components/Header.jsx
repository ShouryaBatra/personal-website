import { motion } from "framer-motion";
import me from "../assets/me.jpg";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import Image from "next/image";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

function Header() {
  const [randomDirection, setRandomDirection] = useState(1);

  // 1 or -1 to multiply to 540
  const generateRandomDirection = () => {
    return Math.random() > 0.5 ? 1 : -1;
  };

  const profileVariants = {
    initial: { rotate: 0, y: 0 },
    hover: {
      rotate: 540 * randomDirection,
      transition: {
        type: "spring",
        damping: 20,
        duration: 0.5,
      },
    },
    tap: {
      rotate: 540 * randomDirection,
      transition: {
        type: "spring",
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <header className="text-center py-20">
      <motion.div
        className="w-48 h-48 mx-auto rounded-full overflow-hidden relative flex items-center justify-center"
        whileHover="hover"
        whileTap="tap"
        initial="initial"
        variants={profileVariants}
        onHoverStart={() => setRandomDirection(generateRandomDirection())}
        onTapStart={() => setRandomDirection(generateRandomDirection())}
      >
        {/* Circle background */}
        <motion.div className="absolute inset-0 rounded-full " />
        {/* Image */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-8 border-primary">
          <Image
            src={me}
            alt="Shourya Batra"
            width={480}
            height={516}
            className="object-cover w-full h-full"
            style={{ objectPosition: "center" }}
          />
        </div>
      </motion.div>
      <h1 className="text-5xl font-bold mt-6 text-primary">Shourya Batra</h1>
      {/* Subheading */}
      <p className="text-xl text-secondary mt-2">
        I am a
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            " Researcher",
            1000,
            " Fullstack Developer",
            1000,
            " Musician",
            1000,
            " Programmer",
            1000,
            "n Athlete",
            1000,
            " Mobile Developer",
            1000,
            " Designer",
            1000,
            " Boy Scout",
            1000,
            " High Schooler",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </p>
      <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">
        Shourya is a sophomore at Homestead High School passionate about
        Computer Science, Volleyball, and Music. He loves conducting LLM
        research, building web and mobile apps, and exploring new technologies.
      </p>
      {/* Icons */}
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://github.com/ShouryaBatra/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-primary transition-colors"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/shourya-batra-b22920344/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-primary transition-colors"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://www.youtube.com/@ShoBartHehe/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-primary transition-colors"
        >
          <FaYoutube size={28} />
        </a>
        <a
          href="https://shouryabatra.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-primary transition-colors"
        >
          <SiSubstack size={26} />
        </a>
      </div>
    </header>
  );
}

export default Header;

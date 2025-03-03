import { motion } from "framer-motion";
import me from "../assets/me.jpg";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
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

  const texts = [
    "Fullstack Developer",
    "Musician",
    "Programmer",
    "Mobile Developer",
    "Designer",
    "Boy Scout",
    "High Schooler",
  ];

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
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-8 border-gray-700">
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
      <h1 className="text-5xl font-bold mt-6">Shourya Batra</h1>
      {/* Subheading */}
      <p className="text-xl text-gray-400 mt-2">
        I am a{" "}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "Fullstack Developer",
            1000,
            "Musician",
            1000,
            "Programmer",
            1000,
            "Mobile Developer",
            1000,
            "Designer",
            1000,
            "Boy Scout",
            1000,
            "High Schooler",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </p>
      <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
        Shourya is a freshman at Homestead High School passionate about Computer
        Science, Volleyball, and Music. He loves building web and mobile apps
        and is currently exploring new technologies.
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
  );
}

export default Header;

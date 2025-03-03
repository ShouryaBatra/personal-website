import { motion } from "framer-motion";
import me from "../assets/me.jpg";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const profileVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0 0 20px 10px rgba(79, 70, 229, 0.6)",
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

function Header() {
  return (
    <header className="text-center py-20">
      <motion.div
        className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-700 relative"
        whileHover="hover"
        variants={profileVariants}
      >
        <Image
          src={me}
          alt="Shourya Batra"
          width={128}
          height={128}
          className="object-cover"
        />
      </motion.div>
      <h1 className="text-5xl font-bold mt-6">Shourya Batra</h1>
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

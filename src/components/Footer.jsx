import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

const Footer = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleEasterEgg = () => {
    setClickCount((prev) => prev + 1);
    if (clickCount === 2) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
      setClickCount(0);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-16 relative overflow-hidden">
      {/* Copyright */}
      <p className="text-lg cursor-pointer" onClick={handleEasterEgg}>
        © {new Date().getFullYear()} Shourya Batra. All rights reserved.
      </p>

      {/* Icons */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://github.com/ShouryaBatra/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/shourya-batra-b22920344/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.youtube.com/@ShoBartHehe/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaYoutube size={24} />
        </a>
        <a
          href="https://shouryabatra.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <SiSubstack size={22} />
        </a>
      </div>

      {/* Easter egg */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-gray-900/90 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Animation */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full absolute"
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: 1,
                  opacity: 0,
                  x: Math.cos((i * 12 * Math.PI) / 180) * 100,
                  y: Math.sin((i * 12 * Math.PI) / 180) * 100,
                  transition: {
                    duration: 1.5,
                    ease: "easeOut",
                    delay: i * 0.02,
                  },
                }}
                exit={{ opacity: 0 }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;

"use client";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

const cardVariants = {
  hover: {
    rotateX: -10,
    rotateY: 10,
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95 },
};

const gradientVariants = {
  initial: { backgroundPosition: "0% 50%" },
  animate: {
    backgroundPosition: "100% 50%",
    transition: { duration: 10, repeat: Infinity, repeatType: "mirror" },
  },
};

function Contact() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
      <ScrollAnimation>
        <motion.div
          className="max-w-2xl mx-auto p-10 rounded-lg shadow-lg relative z-20"
          style={{
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
          whileHover="hover"
          whileTap="tap"
          variants={cardVariants}
        >
          <form className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2 text-lg"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-5 py-3 text-lg rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2 text-lg"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-5 py-3 text-lg rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2 text-lg"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full px-5 py-3 text-lg rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gray-800 text-white font-semibold py-3 text-lg rounded-lg transition-all duration-300 ease-in-out transform active:scale-95 hover:bg-gray-700/80 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
          <p className="text-center text-gray-400 mt-6 text-lg">
            Don't want to use the form? Email me at{" "}
            <a
              href="mailto:shourya.batra@gmail.com"
              className="text-blue-400 hover:underline"
            >
              shourya.batra at gmail.com
            </a>
          </p>
        </motion.div>
      </ScrollAnimation>
    </section>
  );
}

export default Contact;

import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

function Skills() {
  const [randomDirection, setRandomDirection] = useState(1);

  const generateRandomDirection = () => {
    return Math.random() > 0.5 ? 1 : -1;
  };

  const skills = [
    "React",
    "React Native",
    "Firebase",
    "Supabase",
    "Tailwind CSS",
    "Java",
    "Python",
  ];

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <ScrollAnimation key={skill} delay={index * 0.1}>
            <motion.div
              key={skill}
              className="bg-gray-800 px-6 py-3 rounded-full text-lg font-medium shadow-lg cursor-pointer relative overflow-hidden"
              whileHover={{
                y: -5 * randomDirection,
                boxShadow: "0 0 20px 5px rgba(79, 70, 229, 0.6)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{
                y: -5 * randomDirection,
                boxShadow: "0 0 20px 5px rgba(79, 70, 229, 0.6)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              initial={{
                y: 0,
                boxShadow: "0 0 0px 0px rgba(79, 70, 229, 0)",
              }}
              onHoverStart={() => setRandomDirection(generateRandomDirection())}
              onTapStart={() => setRandomDirection(generateRandomDirection())}
            >
              {skill}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 rounded-full"
                whileHover={{ opacity: 0.2, transition: { duration: 0.3 } }}
                whileTap={{ opacity: 0.2, transition: { duration: 0.3 } }}
              />
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}

export default Skills;

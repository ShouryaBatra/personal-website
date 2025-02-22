import Image from "next/image";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"; // Import icons
import me from "../assets/me.jpg";
import aimTrainer from "../assets/aimTrainer.png";
import culturify from "../assets/culturify.png";
import fireworks from "../assets/fireworks.png";
import luminaris from "../assets/luminaris.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
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
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Luminaris */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-full h-48 relative overflow-hidden rounded-lg mb-4">
              <Image
                src={luminaris}
                alt="Luminaris"
                fill // Use fill to make the image cover the container
                className="object-cover" // Ensures the image covers the container without stretching
              />
            </div>
            <h3 className="text-2xl font-bold">Luminaris</h3>
            <p className="text-gray-400 mt-2">
              AI study plan maker web app made with React, shadcn ui, and
              Supabase.
            </p>
            <a
              href="https://github.com/ShouryaBatra/luminaris-version-two"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              View on GitHub
            </a>
          </div>

          {/* Aim Trainer */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-full h-48 relative overflow-hidden rounded-lg mb-4">
              <Image
                src={aimTrainer}
                alt="Aim Trainer"
                fill // Use fill to make the image cover the container
                className="object-cover" // Ensures the image covers the container without stretching
              />
            </div>
            <h3 className="text-2xl font-bold">Aim Trainer</h3>
            <p className="text-gray-400 mt-2">
              Fun game made with p5.js to train your mouse aim control.
            </p>
            <a
              href="https://github.com/your-repo-link" // Replace with your repo link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              View on GitHub
            </a>
          </div>

          {/* shadcn Color Theme Switcher */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-full h-48 relative overflow-hidden rounded-lg mb-4">
              <Image
                src="/path-to-shadcn-theme-image.jpg" // Replace with your image path
                alt="shadcn Color Theme Switcher"
                fill // Use fill to make the image cover the container
                className="object-cover" // Ensures the image covers the container without stretching
              />
            </div>
            <h3 className="text-2xl font-bold">shadcn Color Theme Switcher</h3>
            <p className="text-gray-400 mt-2">
              Web app for easy implementation of colored and light/dark mode
              themes with shadcn ui.
            </p>
            <a
              href="https://github.com/your-repo-link" // Replace with your repo link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              View on GitHub
            </a>
          </div>

          {/* Fireworks */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-full h-48 relative overflow-hidden rounded-lg mb-4">
              <Image
                src={fireworks} // Replace with your image path
                alt="Fireworks"
                fill // Use fill to make the image cover the container
                className="object-cover" // Ensures the image covers the container without stretching
              />
            </div>
            <h3 className="text-2xl font-bold">Fireworks</h3>
            <p className="text-gray-400 mt-2">
              Web animation made with JavaScript and CSS.
            </p>
            <a
              href="https://github.com/your-repo-link" // Replace with your repo link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              View on GitHub
            </a>
          </div>

          {/* Culturify */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-full h-48 relative overflow-hidden rounded-lg mb-4">
              <Image
                src={culturify} // Replace with your image path
                alt="Culturify"
                fill // Use fill to make the image cover the container
                className="object-cover" // Ensures the image covers the container without stretching
              />
            </div>
            <h3 className="text-2xl font-bold">Culturify</h3>
            <p className="text-gray-400 mt-2">
              Mobile app for learning about various cultures made with React
              Native.
            </p>
            <a
              href="https://github.com/your-repo-link" // Replace with your repo link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {[
            "React",
            "React Native",
            "Firebase",
            "Supabase",
            "Tailwind CSS",
            "Java",
            "Python",
          ].map((skill) => (
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

'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-[#0f0c29]' : 'bg-white'} relative min-h-screen overflow-hidden`}>
      {/* Simple Particle Background with CSS */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>

      {/* Toggle Button */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={handleToggle}
          className="bg-gray-800 dark:bg-white p-3 rounded-full shadow-lg"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
      </div>

      {/* Hero Section Content */}
      <section
        className={`relative z-10 w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 text-${darkMode ? 'white' : 'black'}`}
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I&rsquo;m <span className="text-[#00FFFF]"> Muhammad Tahir Hasni </span>
          </h1>

          <h2 className="text-xl md:text-2xl">
            <Typewriter
              words={['Frontend Developer', 'Sanity', 'Next.js Specialist', 'TypeScript Expert']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className={`max-w-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A Frontend Developer crafting modern, high-performance web experiences.

            Specialized in building dynamic and scalable applications with **Next.js**, **TypeScript**, and **Sanity CMS**.  
            I focus on clean code, performance, and exceptional user experience.

            🚀 Let&rsquo;s build something amazing together.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/Resume_Muhammad_Tahir_Hasni.pdf"
              download="Resume_Muhammad_Tahir_Hasni.pdf"
              className="bg-[#00FFFF] text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className={`border px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors ${darkMode ? 'border-white text-white' : 'border-black text-black'}`}
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/muhammad-tahir-hasni-021a562ba" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} className="hover:text-[#00FFFF] transition-colors" />
            </a>
            <a href="https://github.com/tahirbaba" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} className="hover:text-[#00FFFF] transition-colors" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadtahirhasni@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={28} className="hover:text-[#00FFFF] transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 mt-12 md:mt-0 flex justify-center"
        >
          <img
            src="/Profile_Image.png"
            alt="Developer"
            className="w-72 h-72 md:w-[350px] md:h-[350px] object-cover rounded-full shadow-2xl border-4 border-[#00FFFF]"
          />
        </motion.div>
      </section>

      <style jsx>{`
        .particle {
          position: absolute;
          width: 15px;
          height: 15px;
          background: ${darkMode ? '#00FFFF' : '#007BFF'};
          border-radius: 50%;
          animation: moveParticle 10s linear infinite;
          opacity: 0.7;
        }
        .particle:nth-child(1) {
          top: 20%;
          left: 15%;
          animation-delay: 0s;
        }
        .particle:nth-child(2) {
          top: 40%;
          left: 70%;
          animation-delay: 3s;
        }
        .particle:nth-child(3) {
          top: 60%;
          left: 40%;
          animation-delay: 6s;
        }
        .particle:nth-child(4) {
          top: 80%;
          left: 80%;
          animation-delay: 9s;
        }
        .particle:nth-child(5) {
          top: 50%;
          left: 20%;
          animation-delay: 12s;
        }
        @keyframes moveParticle {
          0% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  );
};

export default Hero;

// src/components/Projects.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Mandi To Home",
    images: [
      "/mth_1.png", "/mth_2.png", "/mth_3.png",
      "/mth_4.png", "/mth_5.png", "/mth_6.png",
      "/mth_7.png", "/mth_8.png", "/mth_9.png",
      "/mth_10.png", "/mth_11.png"
    ],
    description:
      "An online (Q-Commerce Website) mandi ordering platform with modern UI using Next.js, TypeScript & Tailwind CSS.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "HTML"],
    liveLink: "https://q-com-mth.vercel.app/",
    githubLink: "https://github.com/tahirbaba/q-com-mth.git",
  },
  {
    title: "tahirbaba-portfolio",
    images: [
      "/port_1.png", "/port_2.png","/port_3.png", "/port_4.png","/port_5.png" 
    ],
    description:
      "I'm a frontend developer skilled in HTML, CSS, JavaScript, and TypeScript. I build clean, responsive websites using modern tools like React and Next.js.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "HTML"],
    liveLink: "https://tahirbaba-portfolio.vercel.app/",
    githubLink: "https://github.com/tahirbaba/tahirbaba-portfolio.git",
  },
  {
    title: "Resume Builder",
    images: [
      "/resume_1.png", "/resume_2.png"
    ],
    description:
      "Create a professional resume in minutes with our easy-to-use Resume Builder. Enter your details and download your CV instantly as a PDF.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "HTML"],
    liveLink: "https://milestone-5-one-gold.vercel.app//",
    githubLink: "https://github.com/tahirbaba/milestone-5.git",
  },
  {
    title: "Body Mass Index",
    images: [
      "/bmi_calculator.png"
    ],
    description:
      "Easily calculate your Body Mass Index (BMI) to check if you're underweight, normal, overweight, or obese based on your height and weight.",
    techStack: ["Streamlit", "Python", "Tailwind CSS", "HTML"],
    liveLink: "https://bmi-calculator-tahir.streamlit.app/",
    githubLink: "https://github.com/tahirbaba/bmi-calculator.git",
  },
  {
    title: "Growth Mindset Challenge",
    images: [
      "/mindset_1.png", "/mindset_2.png", "/mindset_3.png","/mindset_4.png", "/mindset_5.png"
    ],
    description:
      "Boost your mindset with daily challenges that inspire learning, resilience, and personal growth. Unlock your full potential one step at a time!",
    techStack: ["Streamlit", "Python", "Tailwind CSS", "HTML"],
    liveLink: "https://checking-growth-mindset-app.streamlit.app/",
    githubLink: "https://github.com/tahirbaba/checking-growth.git",
  },
  {
    title: "My Streamlit Portfolio Web",
    images: [
   "/portweb_1.png", "/portweb_2.png", "/portweb_3.png","/portweb_4.png", "/portweb_5.png","/portweb_6.png"
    ],
    description:
      "A sleek and interactive portfolio built with Streamlit, showcasing my projects, skills, and data-driven work in a clean, user-friendly interface.",
    techStack: ["Streamlit", "Python", "Tailwind CSS", "HTML"],
    liveLink: "https://my-website-tahir.streamlit.app/",
    githubLink: "https://github.com/tahirbaba/my-web.git",
  },
  {
    title: "Password Strength Generator",
    images: [
      "/pass_1.png", "/pass_2.png"
    ],
    description:
      "Generate strong, secure passwords instantly to protect your accounts with our easy-to-use Password Strength Generator.",
    techStack: ["Streamlit", "Python", "Tailwind CSS", "HTML"],
    liveLink: "https://password-strength-generator-tahirbaba.streamlit.app//",
    githubLink: "https://github.com/tahirbaba/password-strength-generator.git",
  },
  {
    title: "Personal Library Management",
    images: [
      "/personal_library_1.png", "/personal_library_2.png", "/personal_library_3.png",
      "/personal_library_4.png", "/personal_library_5.png", "/personal_library_6.png",
    ],
    description:
      "Easily manage your book collection — add, track, and organize your personal library in one convenient place.",
    techStack: ["Streamlit", "Python", "Tailwind CSS", "HTML"],
    liveLink: "https://personal-library-manager-tahirbaba.streamlit.app/",
    githubLink: "https://github.com/tahirbaba/tahir-baba-library-manager.git",
  },
  {
    title: "Unit Converter",
    images: [
      "/unit_1.png", "/unit_2.png", "/unit_3.png",
    ],
    description:
      "Quickly convert units of length, weight, temperature, and more with this easy-to-use Unit Converter.",
    techStack: ["Streamlit", "Python", "Tailwind CSS", "HTML"],
    liveLink: "https://unit-converter-tahirbaba.streamlit.app/",
    githubLink: "https://github.com/tahirbaba/unit-converter.git",
  },
  {
    title: "Secure Data Encryption System",
    images: [
      "/secure_data_1.png", "/secure_data_2.png", "/secure_data_3.png",
      "/secure_data_4.png", "/secure_data_5.png", "/secure_data_6.png",
    ],
    description:
      "Protect your sensitive information with our Secure Data Encryption System — ensuring privacy through advanced encryption techniques.",
    techStack: ["Streamlit", "Python", "Tailwind CSS", "HTML"],
    liveLink: "https://secure-data-tahir.streamlit.app/",
    githubLink: "https://github.com/tahirbaba/secure-data.git",
  },
];

const Projects = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleFlip = (index: number) => {
    if (flippedIndex === index) {
      setFlippedIndex(null);
      setCurrentSlide(0);
    } else {
      setFlippedIndex(index);
    }
  };

  const handlePrev = (images: string[]) => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (images: string[]) => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
<section
  id="projects"
  className="bg-[#0f172a] text-white py-20 px-4 md:px-20"
>
  <h2 className="text-4xl font-bold text-center text-indigo-400 mb-16">
    Projects I’ve Built
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        onClick={() => handleFlip(index)}
        className="relative w-full h-[540px] cursor-pointer group [perspective:1000px] flex-shrink-0"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            flippedIndex === index ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#1e293b] rounded-xl overflow-hidden border border-gray-700 shadow-lg">
            <Image
              src={project.images[0]}
              alt={project.title}
              width={800}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-700 text-white text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Click to flip and view images
              </p>
              <div className="flex justify-between items-center px-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 text-sm flex items-center gap-1 hover:text-indigo-500"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm flex items-center gap-1 hover:text-white"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#1e293b] rounded-xl border border-gray-700 shadow-lg flex flex-col justify-between p-4">
            <div className="relative h-64">
              <Image
                src={project.images[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                width={800}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-1/2 w-full flex justify-between px-4 transform -translate-y-1/2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev(project.images);
                  }}
                  className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
                >
                  <FaChevronLeft size={18} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext(project.images);
                  }}
                  className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
                >
                  <FaChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold text-indigo-300 mb-3">
                {project.title}
              </h3>
              <p className="text-xs text-gray-400 mt-2">
                Image {currentSlide + 1} of {project.images.length}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

  );
};

export default Projects;

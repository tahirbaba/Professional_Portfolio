// src/components/Skills.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiFramer, SiSanity, SiClerk } from "react-icons/si";


const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 text-3xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300 text-3xl" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400 text-3xl" /> },
  { name: "Sanity", icon: <SiSanity className="text-red-400 text-3xl" /> },
  { name: "Clerk", icon: <SiClerk className="text-purple-400 text-3xl" /> }, // SiClerk icon custom define ya fallback icon
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0f172a] text-white py-16 px-4 md:px-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-400"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills I Mastered
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-[#1e293b] rounded-xl p-6 w-full max-w-[140px] shadow-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="mb-3">{skill.icon}</div>
            <p className="text-sm font-medium text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

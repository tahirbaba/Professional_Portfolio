'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-gradient-to-r from-[#0f0c29] to-[#302b63] text-white py-20 px-6 md:px-20" id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12"
      >
{/* Left Section */}
<div className="w-full md:w-1/2 space-y-6">
  <h2 className="text-4xl font-extrabold text-gradient mb-4">About Me</h2>
  
  <p className="text-lg leading-relaxed mb-4">
    Hello, I'm <span className="text-cyan-500 font-semibold">Tahir Baba</span>, a passionate <span className="text-cyan-400">Frontend Developer</span> with a strong foundation in modern web technologies. 
    I started my tech journey in <span className="text-cyan-400">2023</span> through the GIAIC program and continue to grow every day.
  </p>

  <p className="text-lg leading-relaxed mb-6">
    I specialize in <span className="text-cyan-400">Next.js</span>, <span className="text-cyan-400">TypeScript</span>, <span className="text-cyan-400">Tailwind CSS</span>, and <span className="text-cyan-400">Sanity CMS</span>. 
    Currently, I'm exploring <span className="text-cyan-400">Python</span> and preparing to dive into <span className="text-cyan-400">Agentic AI</span>.
  </p>

  {/* Qualifications */}
  <div className="bg-[#1f1b2f] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
    <h3 className="text-2xl font-semibold mb-4">Qualifications</h3>
    <ul className="list-disc pl-6 space-y-2 text-base">
      <li><strong>Frontend Developer Training</strong> - GIAIC Program (2023 - Present)</li>
      <li><strong>Sanity, Clerk, API Integration</strong> - Completed with Exams</li>
      <li><strong>Master’s in Islamic Studies & Arabic</strong> - University Graduate</li>
      <li><strong>Dars-e-Nizami (Alim Course)</strong> - Completed</li>
    </ul>
  </div>
</div>

{/* Right Section */}
<div className="w-full md:w-1/2 space-y-6">
  {/* Languages */}
  <div className="bg-[#1f1b2f] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
    <h3 className="text-2xl font-semibold mb-4">Languages</h3>
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold">Urdu</h4>
        <div className="h-2 bg-cyan-500 rounded-full">
          <div className="h-2 bg-cyan-300 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>
      <div>
        <h4 className="font-semibold">Arabic</h4>
        <div className="h-2 bg-cyan-500 rounded-full">
          <div className="h-2 bg-cyan-300 rounded-full" style={{ width: '90%' }}></div>
        </div>
      </div>
      <div>
        <h4 className="font-semibold">English</h4>
        <div className="h-2 bg-cyan-500 rounded-full">
          <div className="h-2 bg-cyan-300 rounded-full" style={{ width: '80%' }}></div>
        </div>
      </div>
      <div>
        <h4 className="font-semibold">Farsi</h4>
        <div className="h-2 bg-cyan-500 rounded-full">
          <div className="h-2 bg-cyan-300 rounded-full" style={{ width: '50%' }}></div>
        </div>
      </div>
    </div>
  </div>

  {/* Achievements */}
  <div className="bg-[#1f1b2f] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
    <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
    <ul className="list-disc pl-6 space-y-2 text-base">
      <li>Successfully completed GIAIC’s intensive training program (HTML to Next.js).</li>
      <li>Passed all technical exams including API integrations, Clerk auth, and CMS setup.</li>
      <li>Built multiple frontend projects with modern stacks like Sanity, Next.js, and TypeScript.</li>
      <li>Completed Alim course (Dars-e-Nizami) alongside tech learning journey.</li>
    </ul>
  </div>

  {/* Current Focus */}
  <div className="bg-[#1f1b2f] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
    <h3 className="text-2xl font-semibold mb-4">Current Focus</h3>
    <ul className="list-disc pl-6 space-y-2 text-base">
      <li>Learning Python in GIAIC’s 3rd Quarter curriculum.</li>
      <li>Preparing for the upcoming Agentic AI module.</li>
      <li>Improving skills through real projects and collaborative learning.</li>
    </ul>
  </div>
</div>

      </motion.div>
    </section>
  );
};

export default About;

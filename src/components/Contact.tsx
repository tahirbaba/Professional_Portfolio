// src/components/Contact.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0f172a] text-white py-16 px-4 md:px-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-400"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Connect
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto bg-[#1e293b] p-8 rounded-xl shadow-xl border border-gray-700"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-gray-600 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-gray-600 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="bg-transparent border border-gray-600 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
          ></textarea>
          <motion.button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white py-2 rounded-md font-semibold"
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>

<div className="flex justify-center gap-6 mt-8">
  {/* Gmail Icon */}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadtahirhasni@gmail.com"
    className="text-gray-300 hover:text-indigo-400 transition text-xl"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaEnvelope />
  </a>

  {/* LinkedIn Icon */}
  <a
    href="https://www.linkedin.com/in/muhammad-tahir-hasni-021a562ba"
    className="text-gray-300 hover:text-indigo-400 transition text-xl"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

  {/* GitHub Icon */}
  <a
    href="https://github.com/tahirbaba"
    className="text-gray-300 hover:text-indigo-400 transition text-xl"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>
</div>

      </motion.div>
    </section>
  );
};

export default Contact;

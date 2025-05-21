// src/components/Footer.tsx
"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-10 px-4 md:px-20 border-t border-gray-700">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Muhammad Tahir Hasni. All rights reserved.
        </p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://wa.me/message/WQJIKUBTECFEG1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-tahir-hasni-021a562ba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadtahirhasni@gmail.com"
               target="_blank"
               rel="noopener noreferrer"
               >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/tahirbaba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

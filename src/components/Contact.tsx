// src/components/Contact.tsx
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l1wk01i", // 🔁 Replace with your EmailJS Service ID
        "template_qj8ef34", // 🔁 Replace with your Template ID
        form.current!,
        "OVrx6hHQmADHZeK8k"   // 🔁 Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully! ✅");
          form.current?.reset(); // Clear form after success
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message ❌");
        }
      );
  };

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
        <form ref={form} onSubmit={sendEmail} className="grid gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-transparent border border-gray-600 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-transparent border border-gray-600 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
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
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadtahirhasni@gmail.com"
            className="text-gray-300 hover:text-indigo-400 transition text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-tahir-hasni-021a562ba"
            className="text-gray-300 hover:text-indigo-400 transition text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

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

"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#0f172a] shadow-md border-b border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Goat Image Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/markher-icon.png"
            alt="Markhor Logo"
            className="w-9 h-9 object-contain"
          />
          <span className="text-2xl font-bold text-indigo-400">Baba Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-indigo-400 font-medium transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-indigo-400"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#0f172a] border-t border-gray-700">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-gray-300 hover:text-indigo-400 font-medium transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

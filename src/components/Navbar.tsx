"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.about, href: "#about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0f1115]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className={clsx("container mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-300", isScrolled ? "h-16" : "h-24")}>
        <Link href="/" className="text-xl font-bold tracking-tighter text-white relative z-50">
          Bayu<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <LanguageSwitcher />
          <a
            href="mailto:bayurizkynurseto19@gmail.com"
            className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-colors"
          >
            {t.nav.hireMe}
          </a>
        </nav>

        {/* Mobile Nav Actions */}
        <div className="flex md:hidden items-center gap-2 relative z-50">
          <LanguageSwitcher compact />
          <button
            type="button"
            aria-label="Toggle Menu"
            className="text-slate-300 hover:text-white p-2 -mr-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full md:hidden bg-[#0f1115] border-b border-white/10 shadow-xl"
          >
            <div className="flex flex-col px-6 pb-6 pt-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-white py-3 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="mailto:bayurizkynurseto19@gmail.com"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center mt-4 px-5 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-colors block"
              >
                {t.nav.hireMe}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

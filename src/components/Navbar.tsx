"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AuthModal } from "./AuthModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Courses", href: "#courses" },
    { name: "Programs", href: "#programs" },
    { name: "Success Stories", href: "#success-stories" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-lg border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      {/* Subtle glow on scroll */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none"></div>
      )}

      <div className="container mx-auto px-6 flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow duration-300">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="font-bold text-xl text-white group-hover:text-indigo-300 transition-colors">
            Accredian
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white font-medium transition-colors text-sm relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="text-slate-300 hover:text-white font-medium text-sm transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="btn-gradient text-sm py-2.5 px-5"
          >
            <span>Get Started</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-12 h-12 glass rounded-xl border border-white/20 relative z-50 hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bg-slate-900/98 backdrop-blur-md border-t border-white/20 shadow-2xl z-40">
          <div className="flex flex-col p-6 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-indigo-400 font-medium text-base py-3 px-4 rounded-xl hover:bg-white/10 transition-all"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsAuthModalOpen(true);
              }}
              className="text-white hover:text-indigo-400 font-medium text-base py-3 px-4 text-left"
            >
              Login
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsAuthModalOpen(true);
              }}
              className="btn-gradient text-base py-3 px-5 text-center mt-2 w-full"
            >
              <span>Get Started</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

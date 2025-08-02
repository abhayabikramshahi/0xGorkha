  'use client';

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function HaxorNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Missions', path: '/missions' },
    { name: 'Breaches', path: '/breaches' },
    { name: 'Agents', path: '/agents' },
    { name: 'Dark Log', path: '/darklog' },
    { name: 'About', path: '/about' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Sticky shadow on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-black backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-none'
      } font-mono border-b border-[#00ff9f33]`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-widest neon-glow uppercase text-[#00FF9F] hover:text-white transition duration-300"
        >
          0xGorkha
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map(({ name, path }, idx) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={idx}
                to={path}
                className={`relative group px-2 py-1 hover:text-white transition duration-300 ${
                  isActive ? 'text-white font-semibold' : 'text-[#00FF9F]'
                }`}
              >
                {name}
                {/* Neon underline on hover/active */}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-[2px] bg-[#00FF9F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                    isActive ? 'scale-x-100' : ''
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            className="text-[#00FF9F] hover:text-white transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - sliding down */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-[#0a0a0a] border-t border-[#00ff9f33] ${
          isOpen ? 'max-h-60 py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="flex flex-col gap-4 px-6">
          {navItems.map(({ name, path }, idx) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={idx}
                to={path}
                className={`block text-lg px-3 py-2 rounded hover:bg-[#00FF9F22] transition-colors duration-200 ${
                  isActive ? 'text-white font-semibold' : 'text-[#00FF9F]'
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

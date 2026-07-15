
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CountdownOverlay, CountdownNavbar } from "./LaunchCountdown";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Menu", href: "/#menu" },
  { label: "Services", href: "/#services" },
  { label: "Contact Us", href: "/#contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const overlayClosed = sessionStorage.getItem("delito_launch_overlay_closed");
    if (!overlayClosed) {
      setIsOverlayOpen(true);
    }
  }, []);

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    sessionStorage.setItem("delito_launch_overlay_closed", "true");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-[100] bg-green-dark backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" id="navbar-logo" className="flex items-center gap-2 shrink-0">
              <Image
                src="/images/delito.png"
                alt="Delito Logo"
                width={150}
                height={150}
                className="w-20 h-20 md:w-25 md:h-25 object-contain"
              />
            </a>

            {/* Countdown inside Navbar (shown when overlay is closed) */}
            {hasMounted && !isOverlayOpen && <CountdownNavbar />}

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8 ml-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white/80 hover:text-yellow text-sm font-medium transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="navbar-mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 ml-2 shrink-0"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-green-dark/95 backdrop-blur-lg border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="block text-white/80 hover:text-yellow text-base font-medium transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* App Launch Overlay */}
      {hasMounted && (
        <CountdownOverlay isOpen={isOverlayOpen} onClose={handleCloseOverlay} />
      )}
    </>
  );
}


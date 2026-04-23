"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AppLaunchModal from "./AppLaunchModal";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Menu", href: "/#menu" },
  { label: "Contact", href: "/about#contact" },
];
const resourceLinks = [
  { label: "Refund Policy", href: "#" },
  { label: "FAQ", href: "#" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-white border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="space-y-5 sm:col-span-2 lg:col-span-1">
              <a href="/" className="inline-flex items-center gap-2">
                <Image
                  src="/images/delito.png"
                  alt="Delito Logo"
                  width={150}
                  height={150}
                  className="w-30 h-30 object-contain"
                />

              </a>
              <p className="text-sm text-text-muted leading-relaxed">
                Experience the joy of delicious, chef-crafted meals delivered
                right to your home with Delito. We plant a tree with every order
                — good food, better planet. 🌱
              </p>

              {/* Play Store Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2.5 bg-yellow text-green-dark font-bold text-sm rounded-full hover:bg-yellow-dark transition-all duration-300 shadow-md cursor-pointer"
              >
                📲 Download App
              </motion.button>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-base font-bold text-text-main mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-green-mid transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-base font-bold text-text-main mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-green-mid transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info Under Resources */}
              <div className="mt-6 space-y-3">
                <h4 className="text-base font-bold text-text-main">
                  Contact Us
                </h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  0, Verma Colony, Gali No. 1,<br />
                  Hathras, Uttar Pradesh 204101
                </p>
                <a
                  href="mailto:Delitosupportt@gmail.com"
                  className="text-sm text-green-mid hover:text-green-dark transition-colors duration-200 font-medium block"
                >
                  Delitosupportt@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-base font-bold text-text-main mb-4">
                Follow Us
              </h4>
              <div className="flex items-center gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-green-pale rounded-xl flex items-center justify-center text-green-mid hover:bg-green-mid hover:text-white transition-all duration-300 shadow-sm"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Eco Badge */}
              <div className="mt-6 bg-green-pale rounded-2xl p-4 border border-green-light/50">
                <p className="text-xs font-semibold text-green-mid leading-snug">
                  🌳 We plant a tree with every order. Join the movement for a greener planet!
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <Image
                src="/images/delito.png"
                alt="Delito"
                width={20}
                height={20}
                className="w-5 h-5 object-contain opacity-60"
              />
              <span>Street ka Swaad. Restaurant ki Shaan.</span>
            </div>
            <p>© Copyright Delito 2026</p>
          </div>
        </div>
      </footer>

      {/* App Launch Modal */}
      <AppLaunchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

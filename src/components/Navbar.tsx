"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const whatsapp = "https://wa.me/6287863622189";

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#f9fbfa]/95 backdrop-blur-sm border-b border-[#ebefed] dark:bg-background-dark/95 dark:border-[#2d3b32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#121714] text-white">
              <span className="material-symbols-outlined">gavel</span>
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold tracking-tight text-primary dark:text-white leading-none">
                CV. Fahmi
              </h1>
              <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold">
                Konstruksi
              </span>
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-sm font-semibold text-[#121714] hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Beranda
            </a>
            <a
              href="#product"
              className="text-sm font-semibold text-[#121714] hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Product
            </a>
            <a
              href="#about"
              className="text-sm font-semibold text-[#121714] hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Tentang Kami
            </a>
            <a
              href="/#profile"
              className="text-sm font-semibold text-[#121714] hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Profile
            </a>
          </div>
          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 bg-[#162e20] text-[#f9fbfa] text-sm font-bold rounded-lg hover:bg-[#162e20] transition-all shadow-md hover:shadow-lg"
            >
              <span className="material-symbols-outlined text-[18px]">
                call
              </span>
              <span>Hubungi Sekarang</span>
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className="text-[#121714] dark:text-white hover:text-primary p-2"
            >
              <span className="material-symbols-outlined text-3xl">{open ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-60 md:hidden bg-[#f9fbfa]/95 dark:bg-background-dark/95 backdrop-blur-sm flex flex-col items-center justify-start gap-6 pt-6">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="text-2xl font-semibold text-[#a4cab3]  hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Beranda
          </a>
          <a
            href="#product"
            onClick={() => setOpen(false)}
            className="text-2xl font-semibold text-[#a4cab3]   hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Product
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="text-2xl font-semibold text-[#a4cab3]  hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Tentang Kami
          </a>
          <a
            href="#profile"
            onClick={() => setOpen(false)}
            className="text-2xl font-semibold text-[#a4cab3]  hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Profile
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 group flex items-center gap-2 px-6 py-3 bg-[#162e20] text-[#f9fbfa] text-base font-bold rounded-lg hover:opacity-95 transition-all shadow-md"
          >
            <span className="material-symbols-outlined">call</span>
            <span>Hubungi Sekarang</span>
          </a>
        </div>
      )}
    </nav>
  );
}

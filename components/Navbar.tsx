"use client";

import { useState } from "react";
import Link from "next/link";
import { TeleiosMark } from "./TeleiosMark";

const NAV_LINKS = [
  { name: "Obras", href: "#obras" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-[#FAFAFA]/85 backdrop-blur-md border-b border-amber-900/10 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logotipo & Isotipo */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-85"
            aria-label="Teleios Studio"
          >
            <div className="text-amber-700/80 group-hover:text-amber-600 transition-colors">
              <TeleiosMark className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.28em] text-lg font-bold text-zinc-900 uppercase">
                TELEIOS
              </span>
              <span className="text-[9px] tracking-[0.35em] text-zinc-400 uppercase -mt-1 font-sans">
                Studio
              </span>
            </div>
          </Link>

          {/* Enlaces de escritorio */}
          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.22em] text-zinc-600 hover:text-amber-800 transition-colors font-medium relative py-1 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-amber-600/50 hover:after:w-full after:transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Escritorio */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contacto"
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-900 transition-all duration-300 rounded-full border border-amber-800/20 bg-white/80 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 shadow-sm hover:shadow-md"
            >
              <span className="relative z-10 flex items-center gap-2">
                Iniciar Proyecto
                <span className="text-amber-700 group-hover:text-amber-300 transition-colors">
                  ✦
                </span>
              </span>
            </Link>
          </div>

          {/* Botón Móvil */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-700 hover:text-zinc-950 focus:outline-none"
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú desplegable móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pt-2 pb-6 border-t border-amber-900/10 bg-[#FAFAFA]/95 backdrop-blur-md space-y-4">
            <nav className="flex flex-col space-y-3 pt-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.2em] text-zinc-700 hover:text-amber-800 py-1"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="pt-2">
              <Link
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-900 rounded-full border border-amber-800/20 bg-white shadow-sm"
              >
                Iniciar Proyecto ✦
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

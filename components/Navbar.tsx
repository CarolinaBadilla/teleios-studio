"use client";

import { useState } from "react";
import Link from "next/link";
import { TeleiosMark } from "./TeleiosMark";

const NAV_LINKS = [
  { name: "Principios", href: "#principios" },
  { name: "Obras", href: "#obras" },
  { name: "Demostración", href: "#demostracion" },
  { name: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-[#FAFAFA]/90 backdrop-blur-md border-b border-stone-200/60 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Logotipo & Isotipo */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-85 min-h-[44px] px-1"
            aria-label="Teleios Studio"
          >
            <div className="text-amber-700/80 group-hover:text-amber-600 transition-colors">
              <TeleiosMark className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.28em] text-lg font-bold text-zinc-900 uppercase">
                TELEIOS
              </span>
              <span className="text-[9px] tracking-[0.35em] text-stone-400 uppercase -mt-1 font-sans">
                Studio
              </span>
            </div>
          </Link>

          {/* Enlaces de escritorio */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.22em] text-zinc-600 hover:text-amber-800 transition-colors font-medium relative py-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-amber-600/50 hover:after:w-full after:transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Escritorio */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contacto"
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-900 transition-all duration-300 rounded-full border border-stone-300/60 bg-white hover:bg-zinc-950 hover:text-white hover:border-zinc-950 shadow-xs"
            >
              <span className="relative z-10 flex items-center gap-2">
                Iniciar Proyecto
                <span className="text-amber-700 group-hover:text-amber-300 transition-colors">
                  ✦
                </span>
              </span>
            </Link>
          </div>

          {/* Botón Menú Móvil con área táctil accesible >= 44x44px */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl p-2.5 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80 active:bg-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
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

        {/* Panel Desplegable Móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pt-3 pb-6 border-t border-stone-200/60 bg-[#FAFAFA]/98 backdrop-blur-lg animate-fade-in space-y-4 shadow-lg">
            <nav className="flex flex-col space-y-1 pt-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[44px] flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700 hover:text-amber-800 hover:bg-zinc-100/60 rounded-lg px-3 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="pt-2 border-t border-zinc-200/60">
              <Link
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[44px] inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white bg-zinc-950 rounded-full shadow-sm hover:bg-zinc-800 transition-colors"
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

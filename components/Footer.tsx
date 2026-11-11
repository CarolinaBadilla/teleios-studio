import Link from "next/link";
import { TeleiosMark } from "./TeleiosMark";

export function Footer() {
  return (
    <footer className="relative z-10 py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Separador etéreo superior */}
        <div 
          className="bg-gradient-to-r from-transparent via-amber-500/20 to-transparent h-px w-3/4 max-w-5xl mx-auto mb-10 sm:mb-14" 
          aria-hidden="true" 
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-10">
          {/* Marca e Isotipo */}
          <div className="flex items-center gap-3">
            <div className="text-amber-700/80">
              <TeleiosMark className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.25em] text-base font-bold text-zinc-900 uppercase">
                TELEIOS
              </span>
              <span className="text-[8px] tracking-[0.35em] text-stone-400 uppercase -mt-0.5 font-sans">
                Studio
              </span>
            </div>
          </div>

          {/* Navegación al pie */}
          <nav className="flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-[0.18em] text-zinc-600">
            <Link href="#principios" className="hover:text-amber-800 transition-colors">
              Principios
            </Link>
            <Link href="#obras" className="hover:text-amber-800 transition-colors">
              Obras
            </Link>
            <Link href="#demostracion" className="hover:text-amber-800 transition-colors">
              Demostración
            </Link>
            <Link href="#contacto" className="hover:text-amber-800 transition-colors">
              Contacto
            </Link>
            <a
              href="mailto:contacto@teleios.studio"
              className="hover:text-amber-800 transition-colors"
            >
              contacto@teleios.studio
            </a>
          </nav>
        </div>

        {/* Frase & Copyright */}
        <div className="pt-6 border-t border-stone-200/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-stone-500 font-light tracking-wide">
            Teleios Studio — Excelencia en Software.
          </p>

          <p className="text-[11px] font-serif italic text-stone-400">
            &ldquo;Sistemas concebidos con orden, claridad y propósito imperecedero.&rdquo;
          </p>
        </div>

      </div>
    </footer>
  );
}

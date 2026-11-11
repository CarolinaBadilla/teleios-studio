import Link from "next/link";
import { TeleiosMark } from "./TeleiosMark";

export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-amber-900/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-200/60">
          {/* Marca e Isotipo */}
          <div className="flex items-center gap-3">
            <div className="text-amber-700/80">
              <TeleiosMark className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.25em] text-base font-bold text-zinc-900 uppercase">
                TELEIOS
              </span>
              <span className="text-[8px] tracking-[0.35em] text-zinc-400 uppercase -mt-0.5 font-sans">
                Studio
              </span>
            </div>
          </div>

          {/* Navegación al pie */}
          <nav className="flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-[0.18em] text-zinc-600">
            <Link href="#obras" className="hover:text-amber-800 transition-colors">
              Obras
            </Link>
            <Link href="#servicios" className="hover:text-amber-800 transition-colors">
              Servicios
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-zinc-500 font-light tracking-wide">
            Teleios Studio — Excelencia en Software.
          </p>

          <p className="text-[11px] font-serif italic text-zinc-400">
            &ldquo;Sistemas concebidos con orden, claridad y propósito imperecedero.&rdquo;
          </p>
        </div>

      </div>
    </footer>
  );
}

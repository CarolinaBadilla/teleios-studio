import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] pt-28 pb-16 sm:pt-36 sm:pb-28 md:py-36 flex items-center justify-center overflow-hidden">
      
      {/* 1. Resplandor radial áureo superior (luz cenital) */}
      <div 
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] sm:h-[650px] bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.08),_rgba(250,250,250,0)_70%)]" 
        aria-hidden="true" 
      />

      {/* 2. Cuadrícula (Grid) sutil de fondo con máscara radial */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px] sm:[background-size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
        aria-hidden="true" 
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center z-10 w-full">
        
        {/* Banner superior sutil (eyebrow pill) */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full border border-amber-600/20 bg-amber-500/[0.04] backdrop-blur-sm mb-6 sm:mb-8 animate-fade-in shadow-xs max-w-full">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600/80 animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.16em] sm:tracking-[0.22em] uppercase text-amber-900/85 truncate">
            Desarrollo Web &middot; IA Práctica &middot; Ciberseguridad
          </span>
        </div>

        {/* Titular Principal optimizado para móviles */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-zinc-950 leading-[1.18] sm:leading-[1.14] max-w-4xl mx-auto text-balance">
          Sistemas digitales{" "}
          <span className="italic font-light text-zinc-900 border-b border-amber-600/30">
            seguros
          </span>
          ,{" "}
          <span className="italic font-light text-zinc-900 border-b border-amber-600/30">
            inteligentes
          </span>{" "}
          y construidos con{" "}
          <span className="italic font-light text-zinc-900 border-b border-amber-600/30">
            propósito
          </span>.
        </h1>

        {/* Subtítulo enfocado en comercios y profesionales */}
        <p className="mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed px-2">
          Ayudamos a comercios, firmas y profesionales a incorporar herramientas modernas 
          e inteligencia artificial accesible, resguardando en todo momento la integridad, 
          estabilidad y privacidad absoluta de sus datos.
        </p>

        {/* CTAs de Alto Contraste en columna para móvil y fila para desktop */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5 w-full max-w-md sm:max-w-none mx-auto">
          <Link
            href="#contacto"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase rounded-full bg-zinc-950 text-white hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-lg border border-zinc-900"
          >
            Iniciar Proyecto
          </Link>

          <Link
            href="#obras"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase rounded-full bg-white text-zinc-800 hover:text-amber-900 hover:bg-zinc-50 active:scale-[0.98] transition-all duration-200 border border-zinc-200/90 shadow-xs hover:shadow-sm"
          >
            Explorar Obras
          </Link>
        </div>

        {/* Pilares de orden técnico en grilla adaptativa */}
        <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-amber-500/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto text-left">
          <div className="space-y-0.5 sm:space-y-1">
            <span className="block text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">Fundamento</span>
            <span className="font-serif text-xs sm:text-sm font-semibold text-zinc-800">Privacidad por Diseño</span>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <span className="block text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">Inteligencia</span>
            <span className="font-serif text-xs sm:text-sm font-semibold text-zinc-800">IA de Alto Retorno</span>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <span className="block text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">Rendimiento</span>
            <span className="font-serif text-xs sm:text-sm font-semibold text-zinc-800">Velocidad Extrema</span>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <span className="block text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">Enfoque</span>
            <span className="font-serif text-xs sm:text-sm font-semibold text-zinc-800">Comercios & Firmas</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export { Hero as HeroSection };

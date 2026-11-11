import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-36 pb-24 flex items-center justify-center overflow-hidden">
      
      {/* 1. Resplandor radial áureo superior (luz cenital) */}
      <div 
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[650px] bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.08),_rgba(250,250,250,0)_70%)]" 
        aria-hidden="true" 
      />
      
      {/* 2. Retícula técnica sutil que evoca orden y compás */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:64px_64px]"
        aria-hidden="true" 
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        
        {/* Banner superior sutil (eyebrow pill) */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-600/20 bg-amber-500/[0.04] backdrop-blur-sm mb-8 animate-fade-in shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600/80 animate-pulse" />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-amber-900/85">
            Desarrollo Web &middot; IA Práctica &middot; Ciberseguridad Robusta
          </span>
        </div>

        {/* Titular Principal */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-zinc-950 leading-[1.14] max-w-4xl mx-auto">
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
        <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
          Ayudamos a comercios, firmas y profesionales a incorporar herramientas modernas 
          e inteligencia artificial accesible, resguardando en todo momento la integridad, 
          estabilidad y privacidad absoluta de sus datos.
        </p>

        {/* CTAs de Alto Contraste */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          {/* Botón Primario: Alto contraste oscuro y pulcro */}
          <Link
            href="#contacto"
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase rounded-full bg-zinc-950 text-white hover:bg-zinc-800 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 border border-zinc-900"
          >
            Iniciar Proyecto
          </Link>

          {/* Botón Secundario: Alabastro con fino ribete áureo */}
          <Link
            href="#obras"
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase rounded-full bg-white text-zinc-800 hover:text-amber-900 hover:bg-[#F4F4F5] transition-all duration-300 border border-amber-900/20 shadow-sm hover:shadow"
          >
            Explorar Obras
          </Link>
        </div>

        {/* Pilares de orden técnico */}
        <div className="mt-20 pt-10 border-t border-amber-900/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-left">
          <div className="space-y-1">
            <span className="block text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">Fundamento</span>
            <span className="font-serif text-sm font-semibold text-zinc-800">Privacidad por Diseño</span>
          </div>
          <div className="space-y-1">
            <span className="block text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">Inteligencia</span>
            <span className="font-serif text-sm font-semibold text-zinc-800">IA de Alto Retorno</span>
          </div>
          <div className="space-y-1">
            <span className="block text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">Rendimiento</span>
            <span className="font-serif text-sm font-semibold text-zinc-800">Velocidad Extrema</span>
          </div>
          <div className="space-y-1">
            <span className="block text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium">Enfoque</span>
            <span className="font-serif text-sm font-semibold text-zinc-800">Comercios & Firmas</span>
          </div>
        </div>

      </div>
    </section>
  );
}

// Re-export compatible por si se importa como HeroSection
export { Hero as HeroSection };

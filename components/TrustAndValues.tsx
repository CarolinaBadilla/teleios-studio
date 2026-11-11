import { SpotlightCard } from "./SpotlightCard";

export function TrustAndValues() {
  const values = [
    {
      title: "Ciberseguridad & Privacidad por Diseño",
      category: "Seguridad & Gobierno",
      description:
        "La protección de datos no es un añadido posterior sino la piedra angular de cada solución. Implementamos control estricto de roles (RBAC), segregación absoluta de la información sensible de clientes y blindaje riguroso contra vectores de vulnerabilidad comunes.",
      bulletPoints: [
        "Control granular de permisos por usuario y sucursal.",
        "Segregación y cifrado de datos comerciales sensibles.",
        "Arquitectura defensiva basada en estándares OWASP.",
      ],
      icon: (
        <svg
          className="w-5 h-5 text-amber-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Inteligencia Artificial Práctica y Accesible",
      category: "Automatización & Retorno",
      description:
        "Implementamos modelos de IA orientados al retorno medible de inversión: extracción inteligente de facturas, análisis documental de alta precisión y asistentes de datos comerciales. Sin costos prohibitivos de infraestructura ni capas innecesarias de complejidad.",
      bulletPoints: [
        "Modelos de lenguaje aplicados a extracción de comprobantes.",
        "Automatización de tareas repetitivas de alta demanda cognitiva.",
        "Costos operativos optimizados y control presupuestario.",
      ],
      icon: (
        <svg
          className="w-5 h-5 text-amber-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
          <path d="M3 5h4" />
          <path d="M17 19h4" />
        </svg>
      ),
    },
    {
      title: "Arquitectura Operativa & Conectividad",
      category: "Experiencia & Entorno Real",
      description:
        "Sistemas rápidos y adaptados a la dinámica real del negocio: rendimiento impecable desde dispositivos móviles, soporte sin latencia para lectores de códigos de barra, visualización en mapas interactivos y sincronización fluida con APIs oficiales.",
      bulletPoints: [
        "Interfaces móviles ultrarrápidas para operadores en movimiento.",
        "Compatibilidad con escáneres e impresoras de punto de venta.",
        "Mapeo geoespacial interactivo y conexión con servicios tributarios.",
      ],
      icon: (
        <svg
          className="w-5 h-5 text-amber-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
  ];

  return (
    <section id="principios" className="relative py-20 sm:py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        
        {/* Cabecera Asimétrica Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-12 border-b border-zinc-200/60 mb-10 sm:mb-16">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber-800/80 font-medium">
              01 &middot; Principios Técnicos
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-zinc-950 tracking-tight">
              Sistemas concebidos con rigor técnico
            </h2>
            <div className="w-16 sm:w-20 h-px bg-amber-600/40" />
          </div>

          <p className="max-w-md text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
            Planteamos estándares inquebrantables de ciberseguridad, inteligencia artificial práctica 
            y conectividad operativa para blindar la continuidad de cada comercio.
          </p>
        </div>

        {/* Grilla con Spotlight Magnético en cada tarjeta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((item, index) => (
            <SpotlightCard
              key={index}
              className="p-6 sm:p-9 flex flex-col justify-between"
            >
              <div className="relative z-10">
                {/* Header de la tarjeta */}
                <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                  <div className="p-2.5 rounded-xl bg-amber-500/[0.06] border border-amber-600/15">
                    {item.icon}
                  </div>

                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                    Estándar #{index + 1}
                  </span>
                </div>

                {/* Categoría y Título */}
                <div className="mt-6">
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-400 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-zinc-900 leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Contenido principal */}
                <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Puntos de valor */}
                <div className="mt-6 pt-6 border-t border-zinc-100">
                  <ul className="space-y-2.5">
                    {item.bulletPoints.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2 text-xs text-zinc-700 leading-relaxed"
                      >
                        <span className="text-amber-700/80 text-[10px] mt-0.5 select-none">
                          ✦
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pie de tarjeta */}
              <div className="relative z-10 mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.18em] uppercase text-zinc-400 font-medium">
                  Garantía de Arquitectura
                </span>
                <span className="text-amber-700/70 text-xs">✦</span>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}

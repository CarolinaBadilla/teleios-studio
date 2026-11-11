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
      // Lucide ShieldCheck
      icon: (
        <svg
          className="w-6 h-6 text-amber-700"
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
      // Lucide Sparkles
      icon: (
        <svg
          className="w-6 h-6 text-amber-700"
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
      // Lucide Layers
      icon: (
        <svg
          className="w-6 h-6 text-amber-700"
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
    <section className="relative py-24 bg-[#FAFAFA] overflow-hidden border-t border-amber-900/10">
      
      {/* Resplandor cenital aureo suave */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.06),_rgba(250,250,250,0)_70%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-600/20 bg-amber-500/[0.04] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-amber-900/80">
              Confianza & Rigor Técnico
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-zinc-950 leading-tight">
            Ingeniería edificada sobre{" "}
            <span className="italic font-light text-zinc-900 border-b border-amber-600/30">
              fundamentos sólidos
            </span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Nuestros principios no son promesas abstractas: son estándares de código
            diseñados para proteger el patrimonio digital y la continuidad de cada comercio.
          </p>
        </div>

        {/* Grilla de 3 Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between bg-white rounded-2xl p-8 sm:p-9 border border-amber-900/10 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-amber-600/30 hover:shadow-[0_16px_36px_rgba(180,83,9,0.06)] hover:-translate-y-1"
            >
              {/* Micro-glow superior al hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-amber-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Header de la tarjeta */}
                <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                  <div className="p-3 rounded-xl bg-amber-500/[0.06] border border-amber-600/15">
                    {item.icon}
                  </div>

                  {/* Micro-badge */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-amber-500/[0.08] text-amber-900 border border-amber-600/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600/90" />
                    Estándar Teleios
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

              {/* Pie de tarjeta sutil */}
              <div className="relative z-10 mt-8 pt-4 border-t border-zinc-100/60 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.18em] uppercase text-zinc-400 font-medium">
                  Garantía Arquitectónica
                </span>
                <span className="text-amber-700/70 text-xs">✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

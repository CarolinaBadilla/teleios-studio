export function ServicesSection() {
  const services = [
    {
      numeral: "I",
      title: "Arquitectura de Privacidad y Roles",
      subtitle: "Seguridad impenetrable y gobierno de datos",
      description:
        "Diseñamos jerarquías de permisos rigurosas (RBAC) para resguardar la información confidencial de clientes, ventas y balances. Cada colaborador accede estrictamente a lo que requiere su función.",
      details: [
        "Aislamiento estricto de bases de datos y roles de acceso multinivel.",
        "Blindaje de datos sensibles de clientes y registros de facturación.",
        "Auditoría inmutable de accesos, modificaciones y transacciones.",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-amber-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.25"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      numeral: "II",
      title: "Flujos Operativos en Tiempo Real",
      subtitle: "Velocidad de respuesta e interacción sin latencia",
      description:
        "Sistemas optimizados para el dinamismo comercial en el punto de atención: compatibilidad con lectores de código de barras, consolas móviles ergonómicas y cartografía interactiva de alta fidelidad.",
      details: [
        "Vistas móviles ultraligeras para operadores en campo o en salón.",
        "Lectura e indexación instantánea de escáneres y periféricos de stock.",
        "Sincronización bidireccional inmediata mediante WebSockets y eventos reactivos.",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-amber-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.25"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      numeral: "III",
      title: "Integraciones y Automatización",
      subtitle: "Inteligencia artificial y soberanía fiscal",
      description:
        "Unificamos tu ecosistema tecnológico integrando modelos de IA generativa para extracción documental, puentes seguros con APIs de entidades recaudadoras (AFIP) y sincronizaciones financieras.",
      details: [
        "Procesamiento cognitivo y extracción de comprobantes con IA/OCR.",
        "Interconexión certificada y automática con facturación electrónica AFIP.",
        "Automatización de conciliaciones bancarias y libros impositivos.",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-amber-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.25"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicios" className="relative py-28 bg-[#F4F4F5]/60 border-t border-b border-amber-900/10 overflow-hidden">
      
      {/* Resplandor decorativo central */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.06),_rgba(244,244,245,0)_70%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-600/20 bg-amber-500/[0.04] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-amber-900/80">
              Pilares de Ingeniería
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-zinc-950 leading-tight">
            Fundamentos de un sistema{" "}
            <span className="italic font-light text-zinc-900 border-b border-amber-600/30">
              inquebrantable
            </span>.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            No desarrollamos plantillas genéricas. Cada proyecto se edifica sobre tres
            principios arquitectónicos orientados a blindar la operación comercial.
          </p>
        </div>

        {/* 3 Columnas de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.numeral}
              className="group relative flex flex-col justify-between bg-white rounded-2xl p-8 sm:p-9 border border-amber-900/10 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-amber-600/30 hover:shadow-[0_14px_30px_rgba(180,83,9,0.06)] hover:-translate-y-1"
            >
              {/* Resplandor áureo al hover */}
              <div 
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-amber-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                aria-hidden="true" 
              />

              <div className="relative z-10">
                {/* Cabecera del Pilar */}
                <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                  <div className="p-2.5 rounded-xl bg-amber-500/[0.07] border border-amber-600/15">
                    {service.icon}
                  </div>
                  <span className="font-serif text-sm font-semibold tracking-widest text-amber-800/60 uppercase">
                    Pilar {service.numeral}
                  </span>
                </div>

                {/* Títulos */}
                <h3 className="mt-6 font-serif text-xl sm:text-2xl font-semibold text-zinc-900 leading-snug">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-xs uppercase tracking-[0.15em] text-amber-800/80 font-medium">
                  {service.subtitle}
                </p>

                {/* Descripción */}
                <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Lista de detalles */}
                <div className="mt-6 pt-6 border-t border-zinc-100">
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 leading-relaxed">
                        <span className="text-amber-700/80 text-[10px] mt-0.5 select-none">
                          ✦
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pie del pilar */}
              <div className="relative z-10 mt-8 pt-4 border-t border-zinc-100/60 flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
                  Estándar Teleios
                </span>
                <span className="text-amber-700/60 text-xs font-serif font-bold">
                  {service.numeral} / III
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

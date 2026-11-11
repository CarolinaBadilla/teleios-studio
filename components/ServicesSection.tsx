"use client";

import { SpotlightCard } from "./SpotlightCard";

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
          className="w-5 h-5 text-amber-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
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
          className="w-5 h-5 text-amber-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
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
          className="w-5 h-5 text-amber-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicios" className="relative py-28 bg-white overflow-hidden border-t border-b border-zinc-200/60">
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Cabecera Asimétrica Editorial sin badges amarillos */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-200/60 mb-16">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber-800/80 font-medium">
              04 &middot; Pilares de Ingeniería
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-zinc-950 tracking-tight">
              Fundamentos de un sistema inquebrantable
            </h2>
            <div className="w-20 h-px bg-amber-600/40" />
          </div>

          <p className="max-w-md text-sm text-zinc-600 font-light leading-relaxed">
            No desarrollamos plantillas genéricas. Cada proyecto se edifica sobre tres
            principios arquitectónicos orientados a blindar la operación comercial.
          </p>
        </div>

        {/* 3 Columnas con Spotlight Magnético */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <SpotlightCard
              key={service.numeral}
              className="p-8 sm:p-9 flex flex-col justify-between"
            >
              <div className="relative z-10">
                {/* Cabecera del Pilar */}
                <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                  <div className="p-2.5 rounded-xl bg-amber-500/[0.06] border border-amber-600/15">
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
              <div className="relative z-10 mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
                  Estándar Teleios
                </span>
                <span className="text-amber-700/60 text-xs font-serif font-bold">
                  {service.numeral} / III
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}

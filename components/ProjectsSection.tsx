import Link from "next/link";

interface Project {
  id: string;
  name: string;
  tagline: string;
  systemType: string;
  focusBadge: string;
  status: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  demoUrl?: string;
  archUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: "kleuren",
    name: "Kleuren",
    tagline: "Gestión Estética & Turnos",
    systemType: "SaaS de Gestión Operativa",
    focusBadge: "Privacidad & Control de Roles",
    status: "En Producción",
    description:
      "Plataforma integral diseñada para salones de estética y centros de belleza, concebida con un estricto resguardo de la privacidad de los clientes, control de acceso por roles y gestión de turnos sin fricciones.",
    keyFeatures: [
      "Privacidad estricta de datos y roles diferenciados entre recepción y manicuristas.",
      "Vista móvil ultra-rápida y ergonómica para colaboradoras en cabina de trabajo.",
      "Módulo analítico de reportes, liquidación de comisiones y métricas de facturación.",
      "Agenda dinámica en tiempo real con recordatorios automatizados de reservas.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "React Query"],
    demoUrl: "#",
    archUrl: "#",
  },
  {
    id: "oikonomias",
    name: "Oikonomias",
    tagline: "Automatización Contable & IA",
    systemType: "Fintech & RegTech Engine",
    focusBadge: "Automatización con IA",
    status: "En Producción",
    description:
      "Solución de inteligencia aplicada para firmas contables y despachos de auditoría que incorpora modelos de IA eficientes para la extracción y validación automática de datos contables y facturas, reduciendo horas manuales sin sobrecostos de infraestructura.",
    keyFeatures: [
      "Procesamiento inteligente de facturas y recibos mediante visión por computadora y LLMs.",
      "Motor automatizado de conciliaciones bancarias multidivisa con detección de anomalías.",
      "Conexión certificada con web services de AFIP para facturación y control fiscal.",
      "Liquidaciones automatizadas de IVA y libros digitales listos para presentación.",
    ],
    techStack: ["FastAPI", "Python", "Next.js", "OpenAI API", "PostgreSQL"],
    demoUrl: "#",
    archUrl: "#",
  },
  {
    id: "scribo",
    name: "Scribo",
    tagline: "Inventario Multi-Sucursal",
    systemType: "ERP Comercial & Stock",
    focusBadge: "Control de Stock & Trazabilidad",
    status: "En Producción",
    description:
      "Sistema de punto de venta y administración logística para comercios minoristas y mayoristas con múltiples centros de distribución y trazabilidad de inventario.",
    keyFeatures: [
      "Gestión centralizada de stock y ventas con soporte nativo para lectores de código de barras.",
      "Algoritmo preventivo de alertas de stock bajo y umbrales de reposición automática.",
      "Soporte y balance de transferencias entre sucursales en tiempo real.",
      "Módulo integral de auditoría y exportación avanzada a planillas Excel.",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Prisma ORM", "WebSockets"],
    demoUrl: "#",
    archUrl: "#",
  },
  {
    id: "biopyme",
    name: "BioPyme",
    tagline: "Geolocalización & Plantas",
    systemType: "Plataforma SIG & Gestión Ambiental",
    focusBadge: "Geolocalización & Gobernanza",
    status: "En Producción",
    description:
      "Infraestructura geoespacial para la industria de biocombustibles, trazabilidad comunitaria y gobernanza ambiental de plantas de producción y acopio.",
    keyFeatures: [
      "Cartografía SIG interactiva de alta resolución con capas de plantas y puntos de acopio.",
      "Sistema de atención, trazabilidad y resolución de peticiones vecinales y ambientales.",
      "Dashboards analíticos de rendimiento de transformación y balance de masa energético.",
      "Registro inmutable de control normativo y reportes de huella de carbono.",
    ],
    techStack: ["Mapbox GL", "PostGIS", "Next.js", "TypeScript", "Recharts"],
    demoUrl: "#",
    archUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="obras" className="relative py-28 bg-[#FAFAFA] overflow-hidden">
      
      {/* Resplandor áureo sutil de fondo */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[radial-gradient(circle,_rgba(245,158,11,0.04),_rgba(250,250,250,0)_70%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-600/20 bg-amber-500/[0.04] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-amber-900/80">
              Obras & Proyectos Selectos
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-zinc-950 leading-tight">
            Sistemas concebidos con{" "}
            <span className="italic font-light text-zinc-900 border-b border-amber-600/30">
              rigor técnico
            </span>{" "}
            y alta exigencia.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Cada solución responde a una arquitectura meticulosa, combinando privacidad
            por diseño, automatización con IA y control operativo en tiempo real.
          </p>
        </div>

        {/* Grilla de 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between bg-white rounded-2xl border border-amber-900/10 p-8 sm:p-10 transition-all duration-300 hover:border-amber-600/30 hover:shadow-[0_16px_36px_rgba(180,83,9,0.06)] hover:-translate-y-1"
            >
              {/* Micro-glow interno superior al hover */}
              <div 
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-amber-500/[0.025] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                aria-hidden="true" 
              />

              <div className="relative z-10">
                {/* Header de la Tarjeta: Enfoque principal, Badge de tipo y estado */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-zinc-100">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Badge de enfoque principal solicitado */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-amber-500/[0.08] text-amber-900 border border-amber-600/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                      {project.focusBadge}
                    </span>

                    <span className="hidden sm:inline-block text-[11px] font-medium tracking-[0.16em] uppercase text-zinc-400">
                      &middot; {project.systemType}
                    </span>
                  </div>

                  {/* Estado */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-emerald-500/[0.08] text-emerald-800 border border-emerald-600/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    {project.status}
                  </span>
                </div>

                {/* Título y Subtítulo */}
                <div className="mt-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tight flex items-baseline gap-2">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm uppercase tracking-[0.16em] text-amber-800/80 font-medium">
                    {project.tagline}
                  </p>
                </div>

                {/* Descripción concisa */}
                <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Lista de Features Técnicas y de Negocio */}
                <div className="mt-6 pt-6 border-t border-zinc-100/80">
                  <span className="block text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-semibold mb-3">
                    Propiedades Arquitectónicas
                  </span>
                  <ul className="space-y-2.5">
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 leading-relaxed">
                        <span className="text-amber-700/80 text-[10px] mt-0.5 select-none">
                          ✦
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer de la tarjeta: Tags de tecnología y Botones de acción */}
              <div className="relative z-10 mt-8 pt-6 border-t border-zinc-100">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-medium tracking-wider text-zinc-600 bg-[#F4F4F5] rounded-md border border-zinc-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones de Acción */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href={project.demoUrl || "#"}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold tracking-[0.14em] uppercase bg-zinc-950 text-white hover:bg-zinc-800 transition-colors duration-200 shadow-sm"
                  >
                    <span>Visitar sitio</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>

                  <Link
                    href={project.archUrl || "#"}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold tracking-[0.14em] uppercase bg-white text-zinc-800 border border-amber-900/20 hover:bg-[#F4F4F5] hover:text-amber-900 transition-colors duration-200"
                  >
                    <span>Detalles de arquitectura</span>
                    <span className="text-amber-700">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Cierre / Llamado sutil al pie de la sección */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
            Cada solución es concebida como una obra irrepetible &middot; Código propio &middot; Sin dependencias frágiles
          </p>
        </div>

      </div>
    </section>
  );
}

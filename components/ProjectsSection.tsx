"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { SpotlightCard } from "./SpotlightCard";
import type { ProjectArchitectureDetails } from "./ArchitectureModal";

const ArchitectureModal = dynamic(
  () => import("./ArchitectureModal").then((mod) => mod.ArchitectureModal),
  { ssr: false }
);

interface Project extends ProjectArchitectureDetails {
  focusBadge: string;
  status: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
}

const PROJECTS: Project[] = [
  {
    id: "kleuren",
    name: "Kleuren",
    tagline: "Gestión Estética & Turnos",
    systemType: "SaaS de Gestión Operativa",
    focusBadge: "Privacidad & Control de Roles",
    status: "En Producción",
    liveUrl: "https://kleuren.vercel.app",
    description:
      "Plataforma integral diseñada para salones de estética y centros de belleza, concebida con un estricto resguardo de la privacidad de los clientes, control de acceso por roles y gestión de turnos sin fricciones.",
    keyFeatures: [
      "Privacidad estricta de datos y roles diferenciados entre recepción y manicuristas.",
      "Vista móvil ultra-rápida y ergonómica para colaboradoras en cabina de trabajo.",
      "Módulo analítico de reportes, liquidación de comisiones y métricas de facturación.",
      "Agenda dinámica en tiempo real con recordatorios automatizados de reservas.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "React Query"],
    businessChallenge:
      "Los centros de estética sufrían filtraciones de números personales de clientas por parte de colaboradoras temporales, derivando en fugas comerciales. Además, los turnos se solapaban por falta de sincronización en tiempo real entre recepción y cabinas.",
    technicalSolution: {
      overview:
        "Se diseñó una arquitectura reactiva con aislamiento de datos a nivel de fila (Row Level Security). La colaboradora visualiza en su teléfono únicamente el nombre de pila y el tratamiento, manteniendo el teléfono, DNI y montos facturados bajo cifrado y acceso exclusivo de administración.",
      flowSteps: [
        {
          step: "01",
          title: "Reserva de Turno",
          desc: "El cliente agenda en línea; el sistema valida disponibilidad y bloquea el horario.",
        },
        {
          step: "02",
          title: "Segmentación RBAC",
          desc: "La base de datos entrega una vista anonimizada a la cabina de atención.",
        },
        {
          step: "03",
          title: "Cierre & Liquidación",
          desc: "La recepcionista confirma el cobro; se calcula la comisión sin exponer balances generales.",
        },
      ],
    },
    stackAndInfra: [
      {
        category: "Frontend & Estado",
        technologies: ["Next.js 14 (App Router)", "TypeScript", "Tailwind CSS", "React Query"],
      },
      {
        category: "Backend & Base de Datos",
        technologies: ["Supabase (PostgreSQL)", "Row Level Security (RLS)", "Edge Functions"],
      },
      {
        category: "Infraestructura & Despliegue",
        technologies: ["Vercel Edge Network", "Cloudflare DNS", "Caché global CDN"],
      },
    ],
    securityMeasures: [
      "Políticas RLS en PostgreSQL: cada consulta SQL está restringida al rol del usuario autenticado.",
      "Anonimización dinámica de datos PII (Personally Identifiable Information) para roles operativos.",
      "Tokens de sesión JWT criptográficamente firmados con rotación periódica de claves.",
      "Protección estricta contra ataques CSRF, XSS y Rate Limiting en endpoints públicos de reserva.",
    ],
  },
  {
    id: "oikonomias",
    name: "Oikonomias",
    tagline: "Automatización Contable & IA",
    systemType: "Fintech & RegTech Engine",
    focusBadge: "Automatización con IA",
    status: "En Producción",
    liveUrl: "https://oikonomias.com.ar",
    description:
      "Solución de inteligencia aplicada para firmas contables y despachos de auditoría que incorpora modelos de IA eficientes para la extracción y validación automática de datos contables y facturas, reduciendo horas manuales sin sobrecostos de infraestructura.",
    keyFeatures: [
      "Procesamiento inteligente de facturas y recibos mediante visión por computadora y LLMs.",
      "Motor automatizado de conciliaciones bancarias multidivisa con detección de anomalías.",
      "Conexión certificada con web services de AFIP para facturación y control fiscal.",
      "Liquidaciones automatizadas de IVA y libros digitales listos para presentación.",
    ],
    techStack: ["FastAPI", "Python", "Next.js", "OpenAI API", "PostgreSQL"],
    businessChallenge:
      "Los despachos contables dedicaban hasta 6 horas diarias a la carga manual de comprobantes fiscales, con alta tasa de error humano en alícuotas de IVA y retrasos recurrentes en vencimientos impositivos.",
    technicalSolution: {
      overview:
        "Se construyó un pipeline asíncrono con modelos de visión y lenguaje que ingieren PDFs e imágenes de facturas, extraen CUIT, CAE y desglose impositivo en 400ms, y validan la autenticidad fiscal en AFIP de forma desatendida.",
      flowSteps: [
        {
          step: "01",
          title: "Ingesta del Archivo",
          desc: "El usuario sube lote de facturas (PDF/PNG); se genera hash SHA-256 para prevenir duplicados.",
        },
        {
          step: "02",
          title: "Inferencia Cognitiva",
          desc: "Modelo multimodal extrae montos gravados, exentos, percepciones y código de autorización.",
        },
        {
          step: "03",
          title: "Validación & Asiento",
          desc: "Se consulta web service de AFIP y se genera la partida doble en el libro diario.",
        },
      ],
    },
    stackAndInfra: [
      {
        category: "Procesamiento IA & Backend",
        technologies: ["Python 3.11", "FastAPI", "OpenAI API (GPT-4o Vision)", "Celery Task Queue"],
      },
      {
        category: "Frontend & Métricas",
        technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Recharts"],
      },
      {
        category: "Bases de Datos & Caché",
        technologies: ["PostgreSQL 16", "Redis (Broker de mensajes)", "AWS S3 Cifrado"],
      },
    ],
    securityMeasures: [
      "Cifrado simétrico AES-256-GCM para documentos y comprobantes almacenados en reposo.",
      "Aislamiento de bases de datos por CUIT para garantizar secreto profesional y privacidad tributaria.",
      "Conexiones mTLS con certificados digitales fiscales para la interconexión con AFIP.",
      "Sanitización profunda de entradas para neutralizar inyecciones de prompts en los extractores de IA.",
    ],
  },
  {
    id: "scribo",
    name: "Scribo",
    tagline: "Inventario Multi-Sucursal",
    systemType: "ERP Comercial & Stock",
    focusBadge: "Control de Stock & Trazabilidad",
    status: "En Producción",
    liveUrl: "https://scribo-app.com",
    description:
      "Sistema de punto de venta y administración logística para comercios minoristas y mayoristas con múltiples centros de distribución y trazabilidad de inventario.",
    keyFeatures: [
      "Gestión centralizada de stock y ventas con soporte nativo para lectores de código de barras.",
      "Algoritmo preventivo de alertas de stock bajo y umbrales de reposición automática.",
      "Soporte y balance de transferencias entre sucursales en tiempo real.",
      "Módulo integral de auditoría y exportación avanzada a planillas Excel.",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Prisma ORM", "WebSockets"],
    businessChallenge:
      "Comercios con varias sucursales sufrían roturas de stock imprevistas y desfasajes entre el stock físico y el sistema central debido a sincronizaciones tardías o interfaces complejas para los cajeros.",
    technicalSolution: {
      overview:
        "Se desarrolló un sistema de inventario reactivo con WebSockets y soporte inmediato para periféricos de punto de venta (escáneres ópticos y pistolas láser), que descuenta existencias en milisegundos y recalcula alertas de reposición.",
      flowSteps: [
        {
          step: "01",
          title: "Lectura por Escáner",
          desc: "El código de barras ingresa por evento serial o teclado sin foco previo obligatorio.",
        },
        {
          step: "02",
          title: "Descuento en Tiempo Real",
          desc: "Un lock optimista en base de datos descuenta el ítem e informa a las demás sucursales vía WebSocket.",
        },
        {
          step: "03",
          title: "Auditoría Logística",
          desc: "Si el stock perfora el umbral mínimo, se despacha orden de compra automática al depósito central.",
        },
      ],
    },
    stackAndInfra: [
      {
        category: "Aplicación & WebSockets",
        technologies: ["React", "Next.js", "Node.js", "Socket.io", "Tailwind CSS"],
      },
      {
        category: "Datos & ORM",
        technologies: ["PostgreSQL", "Prisma ORM", "Redis Caching Layer"],
      },
      {
        category: "Compatibilidad Periféricos",
        technologies: ["Lectores HID USB", "Bluetooth Barcode Scanners", "Impresoras Térmicas ESC/POS"],
      },
    ],
    securityMeasures: [
      "Logs inmutables de auditoría: cada lectura de código de barras registra usuario, IP y timestamp.",
      "Control de concurrencia optimista para evitar ventas duplicadas del último producto en stock.",
      "Separación estricta de roles entre cajero (operación diaria) y administrador (precios y costos).",
      "Backups automáticos horarios con replicación geográfica para asegurar continuidad operativa.",
    ],
  },
  {
    id: "biopyme",
    name: "BioPyme",
    tagline: "Geolocalización & Plantas",
    systemType: "Plataforma SIG & Gestión Ambiental",
    focusBadge: "Geolocalización & Gobernanza",
    status: "En Producción",
    liveUrl: "https://biopyme.org",
    description:
      "Infraestructura geoespacial para la industria de biocombustibles, trazabilidad comunitaria y gobernanza ambiental de plantas de producción y acopio.",
    keyFeatures: [
      "Cartografía SIG interactiva de alta resolución con capas de plantas y puntos de acopio.",
      "Sistema de atención, trazabilidad y resolución de peticiones vecinales y ambientales.",
      "Dashboards analíticos de rendimiento de transformación y balance de masa energético.",
      "Registro inmutable de control normativo y reportes de huella de carbono.",
    ],
    techStack: ["Mapbox GL", "PostGIS", "Next.js", "TypeScript", "Recharts"],
    businessChallenge:
      "La producción y acopio de biocombustibles exigía demostrar cumplimiento riguroso de normativas ecológicas y atender peticiones vecinales con total trazabilidad geográfica para evitar sanciones y conflictos sociales.",
    technicalSolution: {
      overview:
        "Se implementó un SIG integral con PostGIS y Mapbox GL para georreferenciar cada punto de acopio y planta de procesamiento, integrando fórmulas de balance de masa termodinámico y un portal público de denuncias ambientales.",
      flowSteps: [
        {
          step: "01",
          title: "Georreferenciación",
          desc: "Cada planta y estación se registra con coordenadas satelitales y radio de impacto ambiental.",
        },
        {
          step: "02",
          title: "Telemetría de Capacidad",
          desc: "Se cargan volúmenes de aceite y biodiésel calculando la tasa de eficiencia en tiempo real.",
        },
        {
          step: "03",
          title: "Gobernanza Comunitaria",
          desc: "Las consultas o alertas vecinales se geolocalizan y se resuelven con seguimiento público.",
        },
      ],
    },
    stackAndInfra: [
      {
        category: "SIG & Visualización",
        technologies: ["Mapbox GL JS", "Turf.js (Análisis Espacial)", "PostGIS", "GeoJSON"],
      },
      {
        category: "Desarrollo Web & Dashboards",
        technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Recharts"],
      },
      {
        category: "Base de Datos Espacial",
        technologies: ["PostgreSQL con extensión PostGIS", "Prisma Client", "Supabase Storage"],
      },
    ],
    securityMeasures: [
      "Validación de polígonos geoespaciales contra zonas de reserva natural no autorizadas.",
      "Sanitización rigurosa de testimonios comunitarios para impedir ataques de Cross-Site Scripting (XSS).",
      "Auditoría inmutable de balances de masa para prevenir adulteraciones en reportes de huella de carbono.",
      "Acceso autenticado por clave gubernamental para inspectores ambientales autorizados.",
    ],
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="obras" className="relative py-20 sm:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        
        {/* Cabecera Asimétrica Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-12 border-b border-zinc-200/60 mb-10 sm:mb-16">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber-800/80 font-medium">
              02 &middot; Obras & Portafolio
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-zinc-950 tracking-tight">
              Plataformas y software en producción
            </h2>
            <div className="w-16 sm:w-20 h-px bg-amber-600/40" />
          </div>

          <p className="max-w-md text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
            Cada solución responde a una arquitectura meticulosa, combinando privacidad
            por diseño, automatización con IA y control operativo en tiempo real.
          </p>
        </div>

        {/* Grilla con 1 columna en móvil y 2 en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS.map((project) => (
            <SpotlightCard
              key={project.id}
              className="p-6 sm:p-10 flex flex-col justify-between"
            >
              <div className="relative z-10">
                {/* Header de la Tarjeta */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-zinc-100">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-amber-500/[0.08] text-amber-900 border border-amber-600/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                      {project.focusBadge}
                    </span>

                    <span className="hidden sm:inline-block text-[11px] font-medium tracking-[0.16em] uppercase text-zinc-400">
                      &middot; {project.systemType}
                    </span>
                  </div>

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

                {/* Lista de Features Técnicas */}
                <div className="mt-6 pt-6 border-t border-zinc-100">
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

              {/* Footer de la tarjeta con Botones de Acción */}
              <div className="relative z-10 mt-8 pt-6 border-t border-zinc-100">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-medium tracking-wider text-zinc-600 bg-zinc-100/70 rounded-md border border-zinc-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones de Acción */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Botón 1: Visitar Sitio en vivo (Enlace funcional con target="_blank") */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold tracking-[0.14em] uppercase bg-zinc-950 text-white hover:bg-zinc-800 active:scale-[0.98] transition-colors duration-200 shadow-sm min-h-[44px]"
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
                  </a>

                  {/* Botón 2: Detalles de Arquitectura (Abre el Modal) */}
                  <button
                    type="button"
                    onClick={() => handleOpenModal(project)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold tracking-[0.14em] uppercase bg-white text-zinc-800 border border-zinc-200/90 hover:bg-zinc-50 hover:border-amber-400/40 hover:text-amber-900 active:scale-[0.98] transition-all duration-200 min-h-[44px]"
                  >
                    <span>Detalles de arquitectura</span>
                    <span className="text-amber-700">→</span>
                  </button>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Cierre editorial sutil */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-light">
            Cada solución es concebida como una obra irrepetible &middot; Código propio &middot; Sin dependencias frágiles
          </p>
        </div>

      </div>

      {/* Modal de Arquitectura */}
      <ArchitectureModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}

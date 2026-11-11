"use client";

import { useEffect } from "react";
import { TeleiosMark } from "./TeleiosMark";

export interface ProjectArchitectureDetails {
  id: string;
  name: string;
  tagline: string;
  systemType: string;
  liveUrl: string;
  businessChallenge: string;
  technicalSolution: {
    overview: string;
    flowSteps: { step: string; title: string; desc: string }[];
  };
  stackAndInfra: {
    category: string;
    technologies: string[];
  }[];
  securityMeasures: string[];
}

interface ArchitectureModalProps {
  project: ProjectArchitectureDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArchitectureModal({
  project,
  isOpen,
  onClose,
}: ArchitectureModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop con blur */}
      <div
        className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Contenedor del Modal (Adaptado a móviles w-[95vw] y max-h-[85vh]) */}
      <div className="relative w-[95vw] sm:w-full max-w-2xl bg-white rounded-3xl border border-zinc-200/90 shadow-[0_25px_70px_rgba(0,0,0,0.15)] overflow-hidden z-10 max-h-[85vh] flex flex-col my-auto">
        
        {/* Header del Modal con botón de cierre accesible >= 44x44px */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-5 sm:px-8 py-4 sm:py-5 border-b border-zinc-100 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="text-amber-700 shrink-0">
              <TeleiosMark className="w-5 h-5" />
            </div>
            <div className="truncate">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-amber-800 font-semibold block">
                Ficha de Arquitectura &middot; Teleios
              </span>
              <h3 className="font-serif text-base sm:text-xl font-bold text-zinc-950 leading-tight truncate">
                {project.name} &mdash; {project.tagline}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-500 hover:text-zinc-950 rounded-full hover:bg-zinc-100 active:bg-zinc-200 transition-colors shrink-0 ml-2"
            aria-label="Cerrar modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cuerpo con Scroll vertical interno suave */}
        <div className="p-5 sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto">
          
          {/* 1. Desafío del Negocio */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                1. El Desafío del Negocio
              </h4>
            </div>
            <p className="text-sm text-zinc-700 leading-relaxed font-light pl-3.5 border-l-2 border-amber-600/30">
              {project.businessChallenge}
            </p>
          </section>

          {/* 2. Solución Técnica Implementada y Flujo */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                2. Solución Técnica & Diagrama de Flujo
              </h4>
            </div>
            <p className="text-sm text-zinc-600 font-light leading-relaxed">
              {project.technicalSolution.overview}
            </p>

            {/* Pasos / Flujo Arquitectónico */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {project.technicalSolution.flowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-1 relative"
                >
                  <span className="font-mono text-[10px] text-amber-800 font-bold">
                    Paso {step.step}
                  </span>
                  <h5 className="font-serif text-xs font-semibold text-zinc-900">
                    {step.title}
                  </h5>
                  <p className="text-[11px] text-zinc-500 leading-normal">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Stack de Tecnologías e Infraestructura */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                3. Stack de Tecnologías e Infraestructura
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.stackAndInfra.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-zinc-200 space-y-2">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                    {item.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-100 text-zinc-800 border border-zinc-200/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Medidas de Ciberseguridad y Protección de Datos */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                4. Ciberseguridad & Protección de Datos Aplicadas
              </h4>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-600/20 space-y-2">
              <ul className="space-y-2">
                {project.securityMeasures.map((measure, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 leading-relaxed">
                    <span className="text-amber-700 text-[10px] mt-0.5 select-none">
                      ✦
                    </span>
                    <span>{measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>

        {/* Footer del Modal con Acción de Visitar Sitio */}
        <div className="sticky bottom-0 bg-zinc-50/95 backdrop-blur-md px-5 sm:px-8 py-3.5 sm:py-4 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-[11px] sm:text-xs text-zinc-500 font-mono text-center sm:text-left">
            Estado de Arquitectura: <strong className="text-emerald-700">En Producción</strong>
          </span>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none min-h-[44px] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              Cerrar
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-950 text-white hover:bg-zinc-800 transition-colors shadow-xs"
            >
              <span>Visitar sitio</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessSector: "",
    projectType: "ia-automatizacion",
    reduceCosts: "Sí",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const PROJECT_TYPES = [
    {
      value: "ia-automatizacion",
      label: "Automatización o integración con Inteligencia Artificial",
    },
    {
      value: "gestion-roles-privacidad",
      label: "Sistema de gestión interna con control de roles y privacidad",
    },
    {
      value: "stock-facturacion",
      label: "Tienda / Control de stock y facturación",
    },
    {
      value: "web-a-medida",
      label: "Desarrollo web a medida",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedTypeObj = PROJECT_TYPES.find(
      (p) => p.value === formData.projectType
    );
    const projectTypeLabel = selectedTypeObj ? selectedTypeObj.label : formData.projectType;

    // Asunto y cuerpo estructurado para envío de correo
    const subject = encodeURIComponent(
      `[Teleios Studio] Consulta de Proyecto - ${formData.fullName} (${formData.businessSector})`
    );

    const body = encodeURIComponent(
      `Nombre Completo: ${formData.fullName}\n` +
      `Email de Contacto: ${formData.email}\n` +
      `Rubro / Emprendimiento: ${formData.businessSector}\n` +
      `Tipo de Proyecto: ${projectTypeLabel}\n` +
      `Interés en reducir costos con automatización: ${formData.reduceCosts || "No especificado"}\n\n` +
      `Mensaje / Detalles:\n${formData.message}\n\n` +
      `---\nEnviado desde Teleios Studio (Plataforma Web)`
    );

    // Micro-retraso visual y apertura del cliente de correo
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = `mailto:contacto@teleios.studio?subject=${subject}&body=${body}`;
    }, 500);
  };

  return (
    <section id="contacto" className="relative py-28 bg-[#FAFAFA] overflow-hidden">
      
      {/* Resplandor cenital aureo suave */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.06),_rgba(250,250,250,0)_70%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        
        {/* Cabecera */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-600/20 bg-amber-500/[0.04] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-amber-900/80">
              Iniciación de Obra
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-zinc-950 leading-tight">
            Comencemos a edificar con{" "}
            <span className="italic font-light text-zinc-900 border-b border-amber-600/30">
              propósito
            </span>.
          </h2>

          <p className="mt-4 text-base text-zinc-600 font-light leading-relaxed">
            Comentanos sobre tu comercio, firma o desafío técnico. 
            Te responderemos con un diagnóstico de arquitectura claro, sin intermediarios.
          </p>
        </div>

        {/* Tarjeta Centrada del Formulario */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-amber-900/15 shadow-[0_20px_50px_rgba(180,83,9,0.05)]">
          
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-fade-in">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center text-xl font-serif">
                ✦
              </div>
              <h3 className="font-serif text-2xl text-zinc-900 font-semibold">
                Petición Recibida con Éxito
              </h3>
              <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                Se ha generado el borrador estructurado en tu gestor de correo electrónico. 
                Si prefieres escribirnos directamente, puedes hacerlo a{" "}
                <a
                  href="mailto:contacto@teleios.studio"
                  className="font-medium text-amber-900 underline underline-offset-4"
                >
                  contacto@teleios.studio
                </a>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Fila 1: Nombre y Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold tracking-[0.14em] uppercase text-zinc-700"
                  >
                    Nombre Completo <span className="text-amber-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Ej. Carolina Montes"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-zinc-200/90 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-amber-600/40 focus:ring-2 focus:ring-amber-500/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold tracking-[0.14em] uppercase text-zinc-700"
                  >
                    Email de Contacto <span className="text-amber-700">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="correo@empresa.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-zinc-200/90 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-amber-600/40 focus:ring-2 focus:ring-amber-500/10 transition-all"
                  />
                </div>
              </div>

              {/* Fila 2: Rubro y Tipo de Proyecto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="businessSector"
                    className="block text-xs font-semibold tracking-[0.14em] uppercase text-zinc-700"
                  >
                    Rubro / Emprendimiento <span className="text-amber-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessSector"
                    required
                    value={formData.businessSector}
                    onChange={(e) =>
                      setFormData({ ...formData, businessSector: e.target.value })
                    }
                    placeholder="Ej. Centro de Estética, Distribuidora, Consultora"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-zinc-200/90 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-amber-600/40 focus:ring-2 focus:ring-amber-500/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="projectType"
                    className="block text-xs font-semibold tracking-[0.14em] uppercase text-zinc-700"
                  >
                    Tipo de Proyecto <span className="text-amber-700">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full appearance-none px-4 py-3 rounded-xl bg-[#FAFAFA] border border-zinc-200/90 text-sm text-zinc-900 focus:outline-none focus:border-amber-600/40 focus:ring-2 focus:ring-amber-500/10 transition-all pr-10"
                    >
                      {PROJECT_TYPES.map((pt) => (
                        <option key={pt.value} value={pt.value}>
                          {pt.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-zinc-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mensaje / Detalles */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold tracking-[0.14em] uppercase text-zinc-700"
                >
                  Mensaje / Alcance del Desafío <span className="text-amber-700">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe la problemática actual, requerimientos del equipo o el objetivo prioritario del software..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-zinc-200/90 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-amber-600/40 focus:ring-2 focus:ring-amber-500/10 transition-all resize-y"
                />
              </div>

              {/* Botón de Envío */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-zinc-400 tracking-wide font-light order-2 sm:order-1 text-center sm:text-left">
                  Respuesta técnica garantizada en menos de 24 horas hábiles.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto order-1 sm:order-2 inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-zinc-950 text-white hover:bg-zinc-800 transition-all duration-300 shadow-sm hover:shadow-lg disabled:opacity-50"
                >
                  <span>{isSubmitting ? "Procesando..." : "Enviar Petición"}</span>
                  <span className="text-amber-400">✦</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}

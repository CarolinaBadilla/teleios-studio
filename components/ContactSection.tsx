"use client";

import { useState } from "react";

// Funciones de sanitización y defensa en profundidad
function sanitizeSingleLine(input: string, maxLen = 100): string {
  return input
    .replace(/[\r\n\t\0]/g, " ")
    .trim()
    .slice(0, maxLen);
}

function sanitizeMultiline(input: string, maxLen = 2000): string {
  return input
    .replace(/[\0]/g, "")
    .trim()
    .slice(0, maxLen);
}

function isValidEmail(email: string): boolean {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email) && email.length <= 100;
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessSector: "",
    projectType: "Gestión de turnos y privacidad",
    message: "",
    // Campo Honeypot para neutralizar bots y crawlers automatizados
    company_fax: "",
  });

  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const PROJECT_TYPES = [
    "Gestión de turnos y privacidad",
    "Gestión de stock y gráficos",
    "Automatización contable con IA",
    "Geolocalizaciones",
    "Proyecto a medida",
    "Auditoría de ciberseguridad",
    "Automatizaciones con IA",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // 1. Detección Honeypot: si el campo señuelo fue completado por un bot, se descarta silenciosamente
    if (formData.company_fax.trim() !== "") {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 350);
      return;
    }

    // 2. Sanitización estricta de entradas
    const cleanName = sanitizeSingleLine(formData.fullName, 80);
    const cleanEmail = sanitizeSingleLine(formData.email, 100);
    const cleanSector = sanitizeSingleLine(formData.businessSector, 100);
    const cleanMessage = sanitizeMultiline(formData.message, 2000);

    // 3. Validación de integridad
    if (!isValidEmail(cleanEmail)) {
      setFormError("Por favor, ingresa una dirección de correo electrónico válida.");
      return;
    }

    if (cleanName.length < 2) {
      setFormError("Por favor, ingresa un nombre válido.");
      return;
    }

    if (cleanMessage.length < 10) {
      setFormError("Por favor, ingresa un mensaje descriptivo de al menos 10 caracteres.");
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(
      `[Teleios Studio] Consulta de Proyecto - ${cleanName} (${cleanSector})`
    );

    const body = encodeURIComponent(
      `Nombre Completo: ${cleanName}\n` +
      `Email de Contacto: ${cleanEmail}\n` +
      `Rubro / Emprendimiento: ${cleanSector}\n` +
      `Tipo de Proyecto: ${formData.projectType}\n\n` +
      `Mensaje / Detalles:\n${cleanMessage}\n\n` +
      `---\nEnviado desde Teleios Studio (Plataforma Web Cifrada)`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = `mailto:contacto@teleios.studio?subject=${subject}&body=${body}`;
    }, 400);
  };

  return (
    <section id="contacto" className="relative py-20 sm:py-24 bg-[#FAFAFA] overflow-hidden">
      
      {/* Halo de luz cenital suave */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.06),_rgba(250,250,250,0)_70%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        
        {/* Cabecera Asimétrica Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-12 border-b border-zinc-200/60 mb-10 sm:mb-16">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber-800/80 font-medium">
              04 &middot; Iniciación de Obra
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-zinc-950 tracking-tight">
              Comencemos a edificar con propósito
            </h2>
            <div className="w-16 sm:w-20 h-px bg-amber-600/40" />
          </div>

          <p className="max-w-md text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
            Platícanos sobre tu comercio, firma o desafío técnico. 
            Te responderemos con un diagnóstico de arquitectura claro, sin intermediarios.
          </p>
        </div>

        {/* Tarjeta Centrada del Formulario adaptada a móvil */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-12 border border-zinc-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
          
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-fade-in">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center text-xl font-serif">
                ✦
              </div>
              <h3 className="font-serif text-2xl text-zinc-900 font-semibold">
                Petición Recibida con Éxito
              </h3>
              <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed font-light">
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
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    businessSector: "",
                    projectType: "Gestión de turnos y privacidad",
                    message: "",
                    company_fax: "",
                  });
                }}
                className="mt-6 inline-flex px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* Alerta de Error de Validación */}
              {formError && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2 animate-fade-in">
                  <span className="font-bold">Error:</span>
                  <span>{formError}</span>
                </div>
              )}

              {/* ─── TRAMPA HONEYPOT PARA BOTS (Invisible para usuarios humanos) ─── */}
              <div
                aria-hidden="true"
                className="opacity-0 absolute -left-[9999px] top-0 pointer-events-none w-0 h-0 overflow-hidden"
              >
                <label htmlFor="company_fax">Company Fax</label>
                <input
                  type="text"
                  id="company_fax"
                  name="company_fax"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company_fax}
                  onChange={(e) =>
                    setFormData({ ...formData, company_fax: e.target.value })
                  }
                />
              </div>

              {/* Fila 1: Nombre y Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
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
                    maxLength={80}
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Ej. Carolina Montes"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50/70 border border-zinc-200/90 text-base sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:border-amber-600/40 focus:ring-2 focus:ring-amber-500/10 transition-all"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
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
                    maxLength={100}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="correo@empresa.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50/70 border border-zinc-200/90 text-base sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:border-amber-600/40 focus:ring-2 focus:ring-amber-500/10 transition-all"
                  />
                </div>
              </div>

              {/* Fila 2: Rubro y Tipo de Proyecto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
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
                    maxLength={100}
                    value={formData.businessSector}
                    onChange={(e) =>
                      setFormData({ ...formData, businessSector: e.target.value })
                    }
                    placeholder="Ej. Centro de Estética, Distribuidora, Consultora"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50/70 border border-zinc-200/90 text-base sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:border-amber-600/40 focus:ring-2 focus:ring-amber-500/10 transition-all"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
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
                      className="w-full appearance-none px-4 py-3 rounded-xl bg-zinc-50/70 border border-zinc-200/90 text-base sm:text-sm text-zinc-900 focus:bg-white focus:outline-none focus:border-amber-600/40 focus:ring-2 focus:ring-amber-500/10 transition-all pr-10"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
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
              <div className="space-y-1.5 sm:space-y-2">
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
                  maxLength={2000}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe la problemática actual, requerimientos del equipo o el objetivo prioritario del software..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50/70 border border-zinc-200/90 text-base sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:border-amber-600/40 focus:ring-2 focus:ring-amber-500/10 transition-all resize-y"
                />
              </div>

              {/* Botón de Envío */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-zinc-400 tracking-wide font-light order-2 sm:order-1 text-center sm:text-left">
                  Respuesta técnica garantizada en menos de 24 horas hábiles.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-h-[44px] order-1 sm:order-2 inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-zinc-950 text-white hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-lg disabled:opacity-50"
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

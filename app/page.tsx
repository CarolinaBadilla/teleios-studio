import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustAndValues } from "@/components/TrustAndValues";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ArchitectureDemo } from "@/components/ArchitectureDemo";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#FAFAFA] text-zinc-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* Navegación Fija */}
      <Navbar />

      {/* Flujo Narrativo Secuencial Solicitado */}
      <main className="relative flex flex-col w-full overflow-x-hidden">
        {/* 1. Hero principal con cuadrícula sutil de fondo */}
        <HeroSection />

        {/* 2. Sistemas concebidos con rigor técnico (Ciberseguridad, IA práctica, Operatividad) */}
        <TrustAndValues />

        {/* 3. Obras & Portfolio (Kleuren, Scribo, Oikonomias, BioPyme con enlaces y modal) */}
        <ProjectsSection />

        {/* 4. Visor de Arquitectura, Roles & IA (Demostración interactiva segmented control) */}
        <ArchitectureDemo />

        {/* 5. Iniciación de Obra (Formulario de contacto con las 7 opciones de proyecto) */}
        <ContactSection />
      </main>

      {/* Pie de Página */}
      <Footer />
    </div>
  );
}

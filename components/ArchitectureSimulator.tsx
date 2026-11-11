"use client";

import { useState } from "react";

type TabId = "ai_accounting" | "appointments_privacy" | "geospatial" | "inventory_metrics";

interface GeoNode {
  id: string;
  name: string;
  type: "planta" | "estacion";
  status: "Verificada" | "Pendiente de aprobación";
  coordinates: string;
  capacity: string;
  massBalance: string;
  communityRequests: number;
}

const GEO_NODES: GeoNode[] = [
  {
    id: "rosario-central",
    name: "Planta Central Rosario",
    type: "planta",
    status: "Verificada",
    coordinates: "32°57'S 60°39'W",
    capacity: "25.000 L / mes",
    massBalance: "99.2%",
    communityRequests: 0,
  },
  {
    id: "san-lorenzo",
    name: "Refinería San Lorenzo",
    type: "planta",
    status: "Pendiente de aprobación",
    coordinates: "32°45'S 60°44'W",
    capacity: "18.500 L / mes",
    massBalance: "96.4%",
    communityRequests: 2,
  },
  {
    id: "zarate-acopio",
    name: "Estación de Acopio Zárate",
    type: "estacion",
    status: "Verificada",
    coordinates: "34°06'S 59°01'W",
    capacity: "8.400 L / mes",
    massBalance: "98.1%",
    communityRequests: 0,
  },
  {
    id: "campana-acopio",
    name: "Estación Logística Campana",
    type: "estacion",
    status: "Verificada",
    coordinates: "34°10'S 58°57'W",
    capacity: "6.200 L / mes",
    massBalance: "97.8%",
    communityRequests: 1,
  },
];

export function ArchitectureSimulator() {
  const [activeTab, setActiveTab] = useState<TabId>("ai_accounting");

  // Estados para Inteligencia Territorial (Pestaña 3)
  const [geoFilter, setGeoFilter] = useState<"all" | "planta" | "estacion">("all");
  const [selectedNode, setSelectedNode] = useState<GeoNode>(GEO_NODES[0]);

  // Estados para Inventario & Métricas en Tiempo Real (Pestaña 4)
  const [stockCount, setStockCount] = useState<number>(38);
  const maxCapacity = 50;
  const [salesData, setSalesData] = useState<number[]>([12, 18, 24, 31, 28, 42]);
  const [lastScanLog, setLastScanLog] = useState<string | null>(
    "Escáner óptico USB/Bluetooth conectado y listo para lecturas en Sucursal Centro."
  );
  const [scanPulse, setScanPulse] = useState(false);

  const handleSimulateScan = () => {
    if (stockCount <= 0) return;
    const newStock = stockCount - 1;
    setStockCount(newStock);

    setScanPulse(true);
    setTimeout(() => setScanPulse(false), 300);

    setSalesData((prev) => {
      const copy = [...prev];
      copy[copy.length - 1] = copy[copy.length - 1] + 1;
      return copy;
    });

    const now = new Date().toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    setLastScanLog(
      `[${now}] SKU #779123891 escaneado con éxito. -1 unidad transferida a caja. Stock restante: ${newStock} un.`
    );
  };

  const handleResetStock = () => {
    setStockCount(38);
    setLastScanLog("Inventario restablecido para demostración interactiva.");
  };

  const filteredNodes = GEO_NODES.filter(
    (n) => geoFilter === "all" || n.type === geoFilter
  );

  const TABS = [
    {
      id: "ai_accounting" as TabId,
      name: "Contabilidad con IA",
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15h6" />
        </svg>
      ),
    },
    {
      id: "appointments_privacy" as TabId,
      name: "Turnos & Privacidad",
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: "geospatial" as TabId,
      name: "Inteligencia Territorial",
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20" />
        </svg>
      ),
    },
    {
      id: "inventory_metrics" as TabId,
      name: "Control de Stock",
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 17V9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 17V5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 17v-3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="demostracion" className="relative py-20 sm:py-24 bg-[#FAFAFA] border-t border-b border-zinc-200/60 overflow-hidden">
      
      {/* Halo de luz cenital suave */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[250px] sm:h-[350px] bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.06),_rgba(250,250,250,0)_70%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        
        {/* Cabecera Asimétrica Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-12 border-b border-zinc-200/60 mb-8 sm:mb-14">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber-800/80 font-medium">
              03 &middot; Demostración Interactiva en Vivo
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-zinc-950 tracking-tight">
              Visor de Arquitectura, Roles & IA
            </h2>
            <div className="w-16 sm:w-20 h-px bg-amber-600/40" />
          </div>

          <p className="max-w-md text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
            Experimenta en tiempo real las cuatro capacidades arquitectónicas centrales 
            que diseñamos para comercios, industrias y firmas profesionales.
          </p>
        </div>

        {/* ─── BARRA DE SELECCIÓN EN FORMATO 2x2 EN MÓVIL Y 4 COLUMNAS EN DESKTOP ─── */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="bg-stone-200/50 backdrop-blur-md p-1.5 rounded-2xl border border-stone-300/60 shadow-xs">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative min-h-[44px] flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 py-2.5 sm:px-3 sm:py-3 rounded-xl text-[11px] sm:text-xs transition-all duration-200 select-none ${
                      isActive
                        ? "bg-white text-stone-950 font-medium shadow-sm border border-amber-500/20"
                        : "text-stone-600 hover:text-stone-950 hover:bg-white/40 active:bg-white/60"
                    }`}
                  >
                    {/* Icono */}
                    <span
                      className={`shrink-0 transition-colors duration-200 ${
                        isActive
                          ? "text-amber-700"
                          : "text-stone-400 group-hover:text-stone-700"
                      }`}
                    >
                      {tab.icon}
                    </span>

                    {/* Texto del Botón */}
                    <span className="truncate tracking-tight sm:tracking-wide">
                      {tab.name}
                    </span>

                    {/* Punto indicador de estado activo */}
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 hidden sm:inline-block animate-fade-in"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Consola Interactiva */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-zinc-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.03)] overflow-hidden">
          
          {/* Barra de Estado de Consola */}
          <div className="bg-zinc-50/80 border-b border-zinc-200/80 px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-zinc-500 font-medium truncate">
                Teleios Engine v2.5 &middot; En Vivo
              </span>
            </div>

            <span className="hidden sm:inline-block font-mono text-[10px] text-zinc-400 uppercase tracking-widest shrink-0">
              Ambiente Seguro Sandbox
            </span>
          </div>

          {/* Área de Visualización Adaptada a Pantallas Pequeñas */}
          <div className="p-4 sm:p-8 md:p-10">

            {/* PESTAÑA 1: Contabilidad con IA */}
            {activeTab === "ai_accounting" && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-100">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-zinc-900">
                      Extracción Documental Asistida por IA &middot; Motor Oikonomias
                    </h3>
                    <p className="text-xs text-zinc-500 font-light">
                      Procesando factura digital &middot; Formato: <span className="font-mono text-zinc-700">PDF / Factura A</span> &middot; Tiempo de inferencia: <span className="text-amber-800 font-mono">420ms</span>
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-amber-500/10 text-amber-800 border border-amber-600/20">
                    Escaneo Óptico Activo
                  </span>
                </div>

                {/* Split Documento vs JSON Estructurado */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                  
                  {/* Documento con láser de escaneo animado */}
                  <div className="relative rounded-xl border border-zinc-200/90 bg-zinc-50/50 p-6 font-mono text-[11px] text-zinc-600 space-y-3 overflow-hidden select-none">
                    <div 
                      className="pointer-events-none absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_12px_rgba(245,158,11,0.8)] animate-laser-scan z-10" 
                      aria-hidden="true" 
                    />

                    <div className="flex justify-between border-b border-zinc-200 pb-2">
                      <span className="font-bold text-zinc-900">FACTURA &ldquo;A&rdquo; Nº 0004-00019283</span>
                      <span className="text-zinc-400">FECHA: 12/11/2026</span>
                    </div>
                    <div>
                      <span className="block text-zinc-400 text-[10px]">EMISOR:</span>
                      <span className="text-zinc-800 font-semibold">DISTRIBUIDORA SUR S.R.L. &middot; CUIT 30-71449812-9</span>
                    </div>
                    <div>
                      <span className="block text-zinc-400 text-[10px]">RECEPTOR:</span>
                      <span className="text-zinc-800">TELEIOS CLIENTE S.A. &middot; CUIT 30-79881203-4</span>
                    </div>
                    <div className="pt-2 border-t border-zinc-200 flex justify-between font-bold text-zinc-900">
                      <span>TOTAL NETO GRAVADO (IVA 21%):</span>
                      <span>$420.000,00 ARS</span>
                    </div>
                    <div className="flex justify-between text-amber-800 font-bold">
                      <span>CAE AFIP:</span>
                      <span>74129083192031</span>
                    </div>
                  </div>

                  {/* Salida JSON procesada */}
                  <div className="rounded-xl border border-zinc-200/90 bg-zinc-950 p-5 font-mono text-[11px] text-zinc-300 space-y-2 overflow-x-auto shadow-inner">
                    <div className="flex items-center justify-between text-[10px] text-zinc-400 pb-2 border-b border-zinc-800">
                      <span>output_structured.json</span>
                      <span className="text-emerald-400">✓ VALIDADO AFIP</span>
                    </div>
                    <pre className="text-emerald-400 leading-relaxed">
{`{
  "comprobante": "FACTURA_A",
  "cuit_emisor": "30714498129",
  "cae_valido": true,
  "neto_gravado": 420000.00,
  "iva_liquidado": 88200.00,
  "total": 508200.00,
  "imputacion_automatica": "COMPRAS_STOCK_ALICUOTA_21"
}`}
                    </pre>
                  </div>

                </div>

                <div className="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-600/15 flex items-start gap-3">
                  <span className="text-amber-700 text-sm mt-0.5">✦</span>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    <strong className="font-semibold text-zinc-900">Cero Carga Manual:</strong> Las facturas de proveedores se cargan en segundos vía imagen o PDF, extrayendo datos con modelos de visión de bajo consumo y conciliando automáticamente con libros contables.
                  </p>
                </div>
              </div>
            )}

            {/* PESTAÑA 2: Turnos & Privacidad */}
            {activeTab === "appointments_privacy" && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-100">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-zinc-900">
                      Terminal de Colaboradora &middot; Sucursal Palermo (Motor Kleuren)
                    </h3>
                    <p className="text-xs text-zinc-500 font-light">
                      Rol: <span className="font-medium text-zinc-700">Técnica en Cabina</span> &middot; Nivel de Privilegio: <span className="text-amber-800 font-mono">NIVEL 1 (Acceso Estricto)</span>
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-amber-500/10 text-amber-800 border border-amber-600/20">
                    Datos Sensibles Anonimizados
                  </span>
                </div>

                {/* Tabla simulada de turnos con datos censurados */}
                <div className="overflow-x-auto rounded-xl border border-zinc-200/70">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-zinc-50/75 border-b border-zinc-200/70 font-mono text-zinc-500 uppercase tracking-wider">
                      <tr>
                        <th className="py-3 px-4">Horario</th>
                        <th className="py-3 px-4">Cliente</th>
                        <th className="py-3 px-4">Contacto</th>
                        <th className="py-3 px-4">Servicio</th>
                        <th className="py-3 px-4">Facturación / Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 bg-white">
                      <tr className="hover:bg-zinc-50/50 transition-colors">
                        <td className="py-3 px-4 font-mono font-medium text-zinc-900">14:00</td>
                        <td className="py-3 px-4 font-medium text-zinc-900">Valentina R.</td>
                        <td className="py-3 px-4 font-mono text-zinc-400 select-none">
                          <span className="bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                            +54 9 11 ••••-5921
                          </span>
                        </td>
                        <td className="py-3 px-4 text-zinc-600">Esculpidas Gel &middot; Cabina 2</td>
                        <td className="py-3 px-4 font-mono text-zinc-400">
                          <span className="inline-flex items-center gap-1 text-[10px] text-amber-800 bg-amber-500/[0.08] px-2 py-0.5 rounded border border-amber-600/20">
                            🔒 Restringido a Administración
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-zinc-50/50 transition-colors">
                        <td className="py-3 px-4 font-mono font-medium text-zinc-900">15:30</td>
                        <td className="py-3 px-4 font-medium text-zinc-900">Mariana S.</td>
                        <td className="py-3 px-4 font-mono text-zinc-400 select-none">
                          <span className="bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                            +54 9 11 ••••-3301
                          </span>
                        </td>
                        <td className="py-3 px-4 text-zinc-600">Lifting &middot; Cabina 1</td>
                        <td className="py-3 px-4 font-mono text-zinc-400">
                          <span className="inline-flex items-center gap-1 text-[10px] text-amber-800 bg-amber-500/[0.08] px-2 py-0.5 rounded border border-amber-600/20">
                            🔒 Restringido a Administración
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-600/15 flex items-start gap-3">
                  <span className="text-amber-700 text-sm mt-0.5">✦</span>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    <strong className="font-semibold text-zinc-900">Principio de Menor Privilegio:</strong> La colaboradora puede ver el nombre de su cliente para la atención, pero el número telefónico, DNI y montos facturados permanecen encriptados en base de datos para impedir fugas de clientela o indiscreción tarifaria.
                  </p>
                </div>
              </div>
            )}

            {/* PESTAÑA 3: Inteligencia Territorial */}
            {activeTab === "geospatial" && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-100">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-zinc-900">
                      Consola SIG & Trazabilidad Territorial &middot; Motor BioPyme
                    </h3>
                    <p className="text-xs text-zinc-500 font-light">
                      Monitoreo satelital de plantas de biodiésel, capacidad productiva y resolución de peticiones comunitarias.
                    </p>
                  </div>

                  {/* Filtro por Tipo */}
                  <div className="inline-flex rounded-lg p-1 bg-zinc-100 border border-zinc-200 text-xs">
                    <button
                      type="button"
                      onClick={() => setGeoFilter("all")}
                      className={`px-3 py-1 rounded-md transition-all ${
                        geoFilter === "all"
                          ? "bg-white text-zinc-950 font-semibold shadow-xs"
                          : "text-zinc-600 hover:text-zinc-950"
                      }`}
                    >
                      Todas ({GEO_NODES.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setGeoFilter("planta")}
                      className={`px-3 py-1 rounded-md transition-all ${
                        geoFilter === "planta"
                          ? "bg-white text-zinc-950 font-semibold shadow-xs"
                          : "text-zinc-600 hover:text-zinc-950"
                      }`}
                    >
                      Plantas
                    </button>
                    <button
                      type="button"
                      onClick={() => setGeoFilter("estacion")}
                      className={`px-3 py-1 rounded-md transition-all ${
                        geoFilter === "estacion"
                          ? "bg-white text-zinc-950 font-semibold shadow-xs"
                          : "text-zinc-600 hover:text-zinc-950"
                      }`}
                    >
                      Estaciones
                    </button>
                  </div>
                </div>

                {/* Visualizador de Mapa Interactivo Simulado y Panel de Telemetría */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Canvas de Mapa Simulado */}
                  <div className="lg:col-span-2 relative min-h-[300px] rounded-2xl bg-zinc-900 border border-zinc-800 p-4 sm:p-6 overflow-hidden flex flex-col justify-between">
                    <div 
                      className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] [background-size:32px_32px] sm:[background-size:40px_40px]" 
                      aria-hidden="true" 
                    />

                    <div className="relative z-10 flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] font-mono text-zinc-400 gap-2">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        CAPA SATELITAL: EN VIVO &middot; EPSG:4326
                      </span>
                      <span>ZOOM: 1:50.000</span>
                    </div>

                    <div className="relative z-10 my-6 sm:my-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {filteredNodes.map((node) => {
                        const isSelected = selectedNode.id === node.id;
                        return (
                          <button
                            key={node.id}
                            type="button"
                            onClick={() => setSelectedNode(node)}
                            className={`p-3.5 rounded-xl text-left border transition-all ${
                              isSelected
                                ? "bg-zinc-800/90 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                                : "bg-zinc-950/80 border-zinc-800 hover:border-zinc-700"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="font-mono text-[10px] text-zinc-400">
                                {node.coordinates}
                              </span>
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  node.status === "Verificada"
                                    ? "bg-emerald-400"
                                    : "bg-amber-400 animate-pulse"
                                }`}
                              />
                            </div>
                            <span className="block text-xs font-semibold text-white">
                              {node.name}
                            </span>
                            <span className="text-[11px] text-zinc-400">
                              {node.capacity}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="relative z-10 text-[10px] font-mono text-zinc-500">
                      Haz clic en cualquier nodo para inspeccionar balance de masa y gobernanza.
                    </div>
                  </div>

                  {/* Panel Lateral de Métricas */}
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-200">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                          {selectedNode.type === "planta" ? "Planta de Biodiésel" : "Estación de Acopio"}
                        </span>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                            selectedNode.status === "Verificada"
                              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                              : "bg-amber-50 text-amber-800 border-amber-200"
                          }`}
                        >
                          {selectedNode.status}
                        </span>
                      </div>

                      <h4 className="mt-4 font-serif text-lg font-bold text-zinc-900">
                        {selectedNode.name}
                      </h4>
                      <p className="font-mono text-xs text-zinc-500 mt-0.5">
                        Coordenadas: {selectedNode.coordinates}
                      </p>

                      <div className="mt-6 space-y-3">
                        <div className="p-3 rounded-lg bg-white border border-zinc-200/80">
                          <span className="block text-[10px] uppercase font-mono text-zinc-400">
                            Capacidad de Procesamiento
                          </span>
                          <span className="text-sm font-bold text-zinc-900">
                            {selectedNode.capacity}
                          </span>
                        </div>

                        <div className="p-3 rounded-lg bg-white border border-zinc-200/80">
                          <span className="block text-[10px] uppercase font-mono text-zinc-400">
                            Eficiencia / Balance de Masa
                          </span>
                          <span className="text-sm font-bold text-emerald-700">
                            {selectedNode.massBalance}
                          </span>
                        </div>

                        <div className="p-3 rounded-lg bg-white border border-zinc-200/80">
                          <span className="block text-[10px] uppercase font-mono text-zinc-400">
                            Peticiones Comunitarias Activas
                          </span>
                          <span className="text-sm font-bold text-zinc-900">
                            {selectedNode.communityRequests === 0
                              ? "0 (Sin incidentes)"
                              : `${selectedNode.communityRequests} en mediación`}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-200 text-[11px] text-zinc-500">
                      Trazabilidad auditable mediante mapas de calor y reportes descargables.
                    </div>
                  </div>

                </div>

                <div className="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-600/15 flex items-start gap-3">
                  <span className="text-amber-700 text-sm mt-0.5">✦</span>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    <strong className="font-semibold text-zinc-900">Soberanía de Datos Geográficos:</strong> El sistema conecta coordenadas en terreno con peticiones comunitarias y normativas de medio ambiente, reduciendo conflictos territoriales con transparencia pública.
                  </p>
                </div>
              </div>
            )}

            {/* PESTAÑA 4: Control de Stock */}
            {activeTab === "inventory_metrics" && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-100">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-zinc-900">
                      Punto de Venta & Inventario Multi-Sucursal &middot; Motor Scribo
                    </h3>
                    <p className="text-xs text-zinc-500 font-light">
                      Sincronización instantánea de stock, ventas con código de barras y transferencias sin discrepancias.
                    </p>
                  </div>

                  {/* Botón Interactivo de Escaneo */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSimulateScan}
                      disabled={stockCount <= 0}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm ${
                        scanPulse
                          ? "bg-amber-600 text-white scale-95"
                          : "bg-zinc-950 text-white hover:bg-zinc-800"
                      } disabled:opacity-50`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                      </svg>
                      <span>Simular escaneo de código de barras</span>
                    </button>

                    {stockCount < maxCapacity && (
                      <button
                        type="button"
                        onClick={handleResetStock}
                        className="p-2.5 text-zinc-500 hover:text-zinc-900 rounded-full hover:bg-zinc-100 transition-colors"
                        title="Restablecer stock"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Dashboard Interactivo de Stock */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Tarjeta del Producto */}
                  <div className="lg:col-span-2 rounded-2xl border border-zinc-200 p-6 bg-white space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                          SKU #779123891 &middot; Rubro Insumos Técnicos
                        </span>
                        <h4 className="font-serif text-xl font-bold text-zinc-900 mt-0.5">
                          Lector Óptico Láser Pro &middot; Inalámbrico
                        </h4>
                      </div>

                      <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 text-zinc-800">
                        Precio: $84.500 ARS
                      </span>
                    </div>

                    {/* Barra de progreso de stock en vivo */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium text-zinc-700">
                          Stock Disponible en Sucursal Centro:
                        </span>
                        <span className="font-mono font-bold text-zinc-900">
                          {stockCount} / {maxCapacity} unidades
                        </span>
                      </div>

                      <div className="h-3 w-full bg-zinc-100 rounded-full overflow-hidden p-0.5 border border-zinc-200">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            stockCount > 25
                              ? "bg-emerald-500"
                              : stockCount > 10
                              ? "bg-amber-500"
                              : "bg-rose-500 animate-pulse"
                          }`}
                          style={{
                            width: `${Math.max(5, (stockCount / maxCapacity) * 100)}%`,
                          }}
                        />
                      </div>

                      <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                        <span>Umbral crítico: 10 un.</span>
                        <span>
                          Estado:{" "}
                          <strong
                            className={
                              stockCount > 25
                                ? "text-emerald-700"
                                : stockCount > 10
                                ? "text-amber-700"
                                : "text-rose-700"
                            }
                          >
                            {stockCount > 25
                              ? "Stock Saludable"
                              : stockCount > 10
                              ? "Reposición Sugerida"
                              : "¡Stock Crítico!"}
                          </strong>
                        </span>
                      </div>
                    </div>

                    {/* Log de Escaneo en Vivo */}
                    <div className="p-3.5 rounded-xl bg-zinc-950 font-mono text-xs text-zinc-300 flex items-center gap-3">
                      <span className="text-amber-400">▶</span>
                      <span className="truncate">{lastScanLog}</span>
                    </div>
                  </div>

                  {/* Gráfico Minimalista de Ventas */}
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                        Métricas de Despacho &middot; Hoy
                      </span>
                      <h5 className="font-serif text-lg font-bold text-zinc-900 mt-1">
                        Curva de Ventas por Hora
                      </h5>

                      <div className="mt-8 flex items-end justify-between gap-2 h-32 pt-4">
                        {salesData.map((val, idx) => {
                          const heightPct = Math.min(100, (val / 55) * 100);
                          const isLast = idx === salesData.length - 1;
                          return (
                            <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                              <span className="text-[10px] font-mono text-zinc-500 font-semibold">
                                {val}
                              </span>
                              <div
                                className={`w-full rounded-t transition-all duration-300 ${
                                  isLast
                                    ? "bg-amber-600 shadow-[0_0_10px_rgba(245,158,11,0.4)]"
                                    : "bg-zinc-300"
                                }`}
                                style={{ height: `${heightPct}%` }}
                              />
                              <span className="text-[9px] font-mono text-zinc-400">
                                {10 + idx * 2}h
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-200 text-[11px] text-zinc-500 flex justify-between items-center">
                      <span>Total Turno Tarde:</span>
                      <span className="font-mono font-bold text-zinc-900">
                        {salesData.reduce((a, b) => a + b, 0)} artículos
                      </span>
                    </div>
                  </div>

                </div>

                <div className="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-600/15 flex items-start gap-3">
                  <span className="text-amber-700 text-sm mt-0.5">✦</span>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    <strong className="font-semibold text-zinc-900">Compatibilidad con Hardware Existente:</strong> El software no exige cambiar escáneres ni terminales; se adapta nativamente mediante emulación de teclado o web sockets para registrar ventas en tiempo real sin desfase contable.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export { ArchitectureSimulator as ArchitectureDemo };

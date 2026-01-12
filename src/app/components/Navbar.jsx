"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si bajamos más de 10px, activamos el estado
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full">
      {/* 1. UTILITY BAR (La barra superior estilo "Referencia") */}
      {/* Lógica: Se oculta (h-0) al hacer scroll para ahorrar espacio */}
      <div
        className={`bg-slate-950 text-slate-300 transition-all duration-500 ease-in-out overflow-hidden ${
          isScrolled ? "h-0" : "h-10"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 text-xs font-medium sm:px-6 lg:px-8">
          {/* IZQUIERDA: Contacto Directo */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <span className="text-base">🇲🇽</span> {/* Emoji Bandera México */}
              <span>+52 (55) 1234-5678</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Mail className="h-3.5 w-3.5" />
              <span>contacto@altavozlegal.com</span>
            </div>
          </div>

          {/* DERECHA: Ubicación / Redes */}
          <div className="flex items-center gap-4">
            <Link
              href="#contacto"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <MapPin className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Ciudad de México, CDMX</span>
              <span className="sm:hidden">CDMX</span>
            </Link>

            {/* Divisor vertical */}
            <div className="h-3 w-[1px] bg-slate-700" />

            {/* LinkedIn Icon (Pequeño) */}
            <Link href="#" className="hover:text-white transition-colors">
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR PRINCIPAL */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200 bg-white/90 backdrop-blur-md py-3 shadow-sm" // Scroll: Fondo blanco, texto oscuro
            : "border-b border-white/10 bg-transparent py-5" // Top: Transparente, texto blanco
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <Scale
              className={`h-7 w-7 transition-colors ${
                isScrolled ? "text-emerald-600" : "text-emerald-400"
              }`}
            />
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg font-bold tracking-wide leading-none transition-colors ${
                  isScrolled ? "text-slate-900" : "text-white"
                }`}
              >
                ALTAVOZ LEGAL
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${
                  isScrolled ? "text-slate-500" : "text-slate-300"
                }`}
              >
                ABOGADOS
              </span>
            </div>
          </Link>

          {/* MENÚ ESCRITORIO */}
          <div className="hidden md:flex items-center gap-8">
            {["Áreas de Práctica", "El Bufete", "Casos de Éxito"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-slate-600 hover:text-emerald-600"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              )
            )}
          </div>

          {/* CTA BUTTON */}
          <div className="flex items-center gap-4">
            <Link
              href="#contacto"
              className={`rounded-full px-6 py-2 text-sm font-bold transition-all shadow-lg hover:scale-105 ${
                isScrolled
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "bg-white text-slate-900 hover:bg-emerald-50"
              }`}
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

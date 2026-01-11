"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Scale } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200 bg-slate-50/80 backdrop-blur-md py-2" // Fondo Claro
          : "border-b border-transparent bg-transparent py-4" // Fondo Transparente
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Scale
            className={`h-6 w-6 transition-colors ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
          />
          <span
            className={`font-serif text-xl font-bold tracking-wide transition-colors ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
          >
            Abogado{" "}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Áreas de Práctica", "El Bufete", "Casos de Éxito"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-slate-600 hover:text-slate-900" // Scroll: Gris oscuro
                  : "text-slate-200 hover:text-white" // Top: Blanco suave
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#contacto"
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all shadow-md hover:shadow-lg ${
              isScrolled
                ? "bg-slate-900 text-white hover:bg-slate-800" // Scroll: Botón negro
                : "bg-white text-slate-900 hover:bg-slate-100" // Top: Botón blanco (resalta más en oscuro)
            }`}
          >
            Agendar Consulta
          </Link>
        </div>
      </div>
    </nav>
  );
}

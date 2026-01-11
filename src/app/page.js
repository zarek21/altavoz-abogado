import Image from "next/image";
import { ChevronRight, ShieldCheck } from "lucide-react";
import ContactSection from "@/app/components/ContactSection";
import ServicesSection from "@/app/components/ServicesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {}
      <section className="relative flex min-h-screen items-center justify-center px-4 pt-20">
        {}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1074&auto=format&fit=crop"
            alt="Fondo Legal Familia"
            fill
            className="object-cover"
            priority
          />
          {}
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        {}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {}
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-50">
              Derecho de Familia & Custodia
            </span>
          </div>

          {}
          <h1 className="font-serif text-5xl font-bold tracking-tight text-white md:text-7xl drop-shadow-lg">
            Defendemos su Futuro <br />
            <span className="text-slate-300">y el de su Familia.</span>
          </h1>

          {}
          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-200 leading-relaxed font-light">
            Entendemos que detrás de cada caso hay una vida. Brindamos la
            estrategia legal firme y la discreción absoluta que su situación
            requiere.
          </p>

          {}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 transition-all hover:bg-slate-200 hover:scale-105 active:scale-95 shadow-xl">
              Agendar Consulta Privada
              <ChevronRight className="h-4 w-4" />
            </button>
            <button className="rounded-full px-8 py-4 text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-all">
              Conocer el Proceso
            </button>
          </div>
        </div>
      </section>

      {}
      <ServicesSection />

      {}
      <ContactSection />
    </main>
  );
}

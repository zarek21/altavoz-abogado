import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="nosotros" className="relative w-full bg-white">
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12">
        <div className="relative h-full w-full bg-slate-200 lg:col-span-7">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Reunión de estrategia legal"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/10" />
        </div>
        <div className="hidden h-full w-full bg-emerald-700 lg:col-span-5 lg:block relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-800" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="flex justify-end">
          {" "}
          <div className="w-full bg-white p-10 shadow-2xl md:p-12 lg:w-[480px]">
            <span className="block mb-4 text-xs font-bold uppercase tracking-widest text-emerald-600">
              Nuestra Filosofía
            </span>

            <h2 className="mb-6 font-serif text-3xl font-bold text-slate-900">
              Capacitación constante y estrategia humana.
            </h2>

            <p className="mb-8 text-slate-600 leading-relaxed">
              No somos solo gestores de trámites. Desarrollamos estrategias
              legales personalizadas pensando en satisfacer las necesidades
              reales de su familia, combinando la frialdad de la ley con la
              empatía que su caso requiere.
            </p>

            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-900 hover:text-emerald-600 transition-colors"
            >
              Conozca al equipo
              <span className="block h-[1px] w-full max-w-[0px] bg-emerald-600 transition-all group-hover:max-w-[100%]" />
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

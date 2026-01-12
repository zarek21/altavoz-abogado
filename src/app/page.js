import Image from "next/image";
import { ChevronRight, ShieldCheck } from "lucide-react";
import ContactSection from "@/app/components/ContactSection";
import ServicesSection from "@/app/components/ServicesSection";
import AboutSection from "@/app/components/AboutSection";
import TeamSection from "@/app/components/TeamSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import MapSection from "@/app/components/MapSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Firma Legal"
            fill
            className="object-cover"
            priority
          />
          {}
          <div className="absolute inset-0 bg-slate-900/20" />
        </div>

        {}
        {}
        <div className="relative z-10 w-full bg-slate-900/75 py-20 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            {}
            <h2 className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Abogados Especialistas en Familia
            </h2>

            {}
            <h1 className="font-serif text-5xl font-bold text-white md:text-7xl">
              Defendemos su Futuro <br className="hidden md:block" />y su
              Patrimonio.
            </h1>

            {}
            <div className="mt-8 flex justify-center gap-6">
              <a
                href="#contacto"
                className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors border-b border-emerald-400 pb-1"
              >
                Agendar Consulta
              </a>
              <a
                href="#servicios"
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
              >
                Conocer Áreas
              </a>
            </div>
          </div>
        </div>
      </section>

      {}
      <ServicesSection />

      {}
      <AboutSection />

      <TeamSection />

      <TestimonialsSection />

      {}
      <ContactSection />

      <MapSection />
    </main>
  );
}

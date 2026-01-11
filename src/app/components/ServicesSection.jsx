import Image from "next/image";
import { ArrowRight, Gavel } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Divorcios y Separaciones",
      desc: "Gestionamos la disolución del vínculo matrimonial protegiendo su patrimonio y reduciendo el conflicto.",
      image:
        "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Custodia de Menores",
      desc: "Priorizamos el bienestar de sus hijos para lograr acuerdos de convivencia justos y estables.",
      image:
        "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=1925&auto=format&fit=crop",
    },
    {
      title: "Pensiones Alimenticias",
      desc: "Cálculo, exigencia y ajuste de pensiones para garantizar la seguridad económica de los dependientes.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Testamentos y Sucesiones",
      desc: "Asegure el futuro de sus bienes. Asesoría en redacción de testamentos y juicios sucesorios.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Protección Familiar",
      desc: "Actuación inmediata ante situaciones de riesgo. Órdenes de restricción y medidas cautelares.",
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2012&auto=format&fit=crop",
    },
    {
      title: "Adopciones",
      desc: "Acompañamiento legal completo para integrar nuevos miembros a la familia con seguridad jurídica.",
      image:
        "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section id="servicios" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-5xl">
            Nuestras soluciones para ti
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Estrategias legales diseñadas para brindar certeza jurídica en cada
            etapa de su vida familiar.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-3 font-serif text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mb-6 flex-1 text-slate-600 leading-relaxed text-sm">
                  {service.desc}
                </p>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-600 transition-colors group-hover:text-emerald-700"
                >
                  Ver más
                  <span className="h-[1px] w-4 bg-emerald-600 transition-all group-hover:w-8" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-slate-200 pt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900">15+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-2">
                Años de Experiencia
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600">98%</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-2">
                Casos Favorables
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900">500+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-2">
                Familias Protegidas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

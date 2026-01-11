import {
  HeartHandshake,
  Users,
  Scale,
  FileSignature,
  Gavel,
  Shield,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Divorcio Contencioso & Mutuo Acuerdo",
      desc: "Protegemos su patrimonio y agilizamos el proceso para minimizar el desgaste emocional.",
      icon: <FileSignature className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Custodia y Patria Potestad",
      desc: "Luchamos por el bienestar de sus hijos, garantizando acuerdos justos de convivencia y manutención.",
      icon: <Users className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Pensiones Alimenticias",
      desc: "Cálculo justo y exigencia legal para asegurar el futuro económico de los dependientes.",
      icon: <Scale className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Herencias y Sucesiones",
      desc: "Asesoría testamentaria y defensa de sus derechos hereditarios ante conflictos familiares.",
      icon: <ScrollIcon />,
    },
    {
      title: "Violencia Intrafamiliar",
      desc: "Medidas de protección inmediatas y órdenes de restricción. Su seguridad es prioridad.",
      icon: <Shield className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: "Adopciones",
      desc: "Guía legal paso a paso para integrar nuevos miembros a la familia con total seguridad jurídica.",
      icon: <HeartHandshake className="h-6 w-6 text-emerald-600" />,
    },
  ];

  return (
    <section id="servicios" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Nuestras Áreas de Práctica
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 md:text-4xl">
            Soluciones legales para momentos difíciles
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            No abordamos casos genéricos. Nos especializamos exclusivamente en
            derecho familiar para brindarle la estrategia más precisa.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-white"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-900/5 group-hover:bg-emerald-50">
                {service.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-3xl bg-slate-900 px-6 py-16 sm:px-12 md:py-20 shadow-2xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-serif text-3xl font-bold text-white md:text-4xl">
                ¿Por qué elegir a Altavoz Legal?
              </h3>
              <p className="mt-6 text-lg text-slate-300">
                Sabemos que el sistema legal puede ser intimidante. Nosotros
                somos su escudo y su espada.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Disponibilidad 24/7 para emergencias legales.",
                  "Transparencia total en honorarios (sin sorpresas).",
                  "Estrategias de negociación agresiva para evitar juicios largos.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-200"
                  >
                    <Gavel className="h-5 w-5 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-slate-800 p-6 text-center">
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-sm text-slate-400">
                  Años de Experiencia
                </div>
              </div>
              <div className="rounded-2xl bg-slate-800 p-6 text-center">
                <div className="text-4xl font-bold text-emerald-400">98%</div>
                <div className="text-sm text-slate-400">Casos Favorables</div>
              </div>
              <div className="col-span-2 rounded-2xl bg-slate-800 p-6 text-center">
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-400">
                  Familias Protegidas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-emerald-600"
    >
      <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2Z" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M8 2v2" />
      <path d="M8 20v2" />
      <path d="M3 10h18" />
      <path d="M3 14h18" />
    </svg>
  );
}

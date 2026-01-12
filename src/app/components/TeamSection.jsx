import Image from "next/image";

export default function TeamSection() {
  const team = [
    {
      name: "Lic. Rafael Castellanos",
      role: "Socio Fundador & Litigante",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Lic. Ofelia Jaimes",
      role: "Especialista en Custodia",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    },
    {
      name: "Lic. José Rameño",
      role: "Mediador Familiar Certificado",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            Conoce a Nuestro Equipo
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Detrás de cada caso exitoso hay un equipo de expertos comprometidos
            con su tranquilidad.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-slate-800 transition-all duration-300 group-hover:border-emerald-500 group-hover:scale-105 shadow-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-slate-500">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

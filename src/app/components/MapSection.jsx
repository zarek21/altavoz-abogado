export default function MapSection() {
  return (
    <section className="relative w-full h-[400px] lg:h-[500px] bg-slate-200">
      {/* CONTENEDOR DEL MAPA CON TINTE */}
      <div className="absolute inset-0 w-full h-full">
        {/* 1. EL MAPA (Base en Grises) */}
        <iframe
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "grayscale(100%) contrast(1.2) brightness(0.9)", // Base grisácea
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Altavoz Legal"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5323275753966!2d-99.1654366850933!3d19.43260768688463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8cac6da1789%3A0x6734135515d9703d!2sAv.%20P.%C2%BA%20de%20la%20Reforma%20222%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1705600000000!5m2!1ses!2smx"
        ></iframe>

        {/* 2. LA CAPA DE COLOR (El Tinte Esmeralda) */}
        {/* mix-blend-multiply: Mezcla el color verde con los grises del mapa */}
        <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply pointer-events-none" />
      </div>

      {/* TARJETA FLOTANTE DE UBICACIÓN */}
      <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 bg-white p-8 shadow-2xl rounded-sm max-w-sm border-l-4 border-emerald-600 hidden md:block">
        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
          Oficinas Centrales
        </h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          Paseo de la Reforma 222, Piso 18
          <br />
          Col. Juárez, Cuauhtémoc
          <br />
          06600 Ciudad de México, CDMX
        </p>
        <a
          href="https://goo.gl/maps/tuLinkReal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-800 transition-colors"
        >
          Cómo llegar
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

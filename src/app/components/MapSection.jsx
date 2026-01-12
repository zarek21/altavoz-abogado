export default function MapSection() {
  return (
    <section className="relative w-full h-[400px] lg:h-[500px] bg-slate-200">
      <iframe
        width="100%"
        height="100%"
        style={{
          border: 0,
          filter: "grayscale(100%) contrast(1.2) opacity(0.8)",
        }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Altavoz Legal"
        src="https://maps.google.com/maps?q=Av.%20Reforma%20222%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX&t=&z=15&ie=UTF8&iwloc=&output=embed"
      ></iframe>

      <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 bg-white p-6 shadow-2xl rounded-sm max-w-xs border-l-4 border-emerald-600 hidden md:block">
        <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
          Oficinas Centrales
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Paseo de la Reforma 222, Piso 18
          <br />
          Col. Juárez, Ciudad de México.
        </p>
        <a
          href="https://maps.google.com/maps?q=Av.+Reforma+222,+Ciudad+de+México"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-800 transition-colors"
        >
          Cómo llegar &rarr;
        </a>
      </div>
    </section>
  );
}

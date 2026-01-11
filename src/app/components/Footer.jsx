import Link from "next/link";
import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4 lg:gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-4">
              <Scale className="h-6 w-6" />
              <span className="font-serif text-xl font-bold uppercase tracking-wide">
                ALTAVOZ LEGAL ABOGADOS
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed">
              Defendemos los intereses de su familia con estrategia, ética y
              confidencialidad absoluta. Más de 15 años de experiencia en
              tribunales familiares.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Áreas de Práctica
                </Link>
              </li>
              <li>
                <Link
                  href="#nosotros"
                  className="hover:text-white transition-colors"
                >
                  El Bufete
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Mapa del Sitio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} ALTAVOZ LEGAL ABOGADOS. Todos los
            derechos reservados.
          </p>

          <div className="flex gap-4">
            <Link
              href="https://tiktok.com"
              target="_blank"
              className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <span className="text-sm font-medium group-hover:text-white">
                Síguenos en TikTok
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.9 6.24-1.72 1.36-3.92 1.71-6.06 1.25-1.92-.38-3.66-1.57-4.71-3.23-1.1-1.63-1.32-3.77-.73-5.65.65-2.18 2.37-3.9 4.62-4.39.29-.05.58-.12.87-.13v4.07c-.63.07-1.28.31-1.78.75-.82.72-1.1 1.93-.65 2.94.4.92 1.38 1.55 2.39 1.53 1.32-.01 2.44-.94 2.63-2.22.09-.6.04-1.22.04-1.83v-13.9c-.01 0-.01 0-.02-.02z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

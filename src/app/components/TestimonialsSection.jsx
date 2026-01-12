"use client";

import { useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      id: 1,
      name: "Daniela Martino",
      date: "hace 1 año",
      text: "Muchas gracias por ayudarme con mi caso, super recomendados. Excelente el apoyo brindado estoy sumamente agradecida! 🙏",
      initial: "D",
      color: "bg-orange-600",
      url: "#",
    },
    {
      id: 2,
      name: "Carlos Velázquez",
      date: "hace 3 meses",
      text: "La atención del Lic. Rafael fue impecable. Lograron resolver mi tema de custodia mucho más rápido de lo que esperaba. Totalmente profesionales.",
      initial: "C",
      color: "bg-emerald-600",
      url: "#",
    },
    {
      id: 3,
      name: "Mariana S.",
      date: "hace 6 meses",
      text: "Tenía mucho miedo de iniciar el proceso de divorcio, pero el equipo me dio la seguridad que necesitaba. Gracias por proteger a mis hijos.",
      initial: "M",
      color: "bg-blue-600",
      url: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
            Lo que nuestros clientes dicen de nosotros.
          </h2>
          <p className="mt-2 font-bold text-slate-900">
            Clientes Reales. Historias Reales.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-xl bg-slate-50 p-8 text-center md:p-12 transition-all shadow-sm border border-slate-100">
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="mb-8 text-lg leading-relaxed text-slate-700 md:text-xl font-light italic">
              "{reviews[currentIndex].text}"
            </p>

            <div className="flex flex-col items-center justify-center gap-2">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg ${reviews[currentIndex].color}`}
              >
                {reviews[currentIndex].initial}
              </div>

              <div className="flex items-center gap-1">
                <span className="font-bold text-slate-900">
                  {reviews[currentIndex].name}
                </span>
                <BadgeCheck className="h-4 w-4 text-blue-500 fill-blue-100" />
              </div>

              <span className="text-xs text-slate-400">
                {reviews[currentIndex].date}
              </span>

              <a
                href={reviews[currentIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md group"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Ver reseña
                <ExternalLink className="h-3 w-3 text-slate-400 transition-colors group-hover:text-slate-600" />
              </a>
            </div>
          </div>

          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 transform rounded-full bg-white p-3 shadow-lg hover:bg-slate-50 md:-left-12 text-slate-400 hover:text-slate-900 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 transform rounded-full bg-white p-3 shadow-lg hover:bg-slate-50 md:-right-12 text-slate-400 hover:text-slate-900 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? "bg-slate-900 w-4" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

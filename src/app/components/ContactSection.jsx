"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  }

  return (
    <section id="contacto" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
            Hablemos de su caso
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            La primera consulta es crucial. Cuéntenos su situación bajo estricta
            confidencialidad.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
              <h3 className="mb-6 font-serif text-xl font-bold text-slate-900">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">
                      Teléfono de Emergencia
                    </p>
                    <p className="text-slate-600">+52 (55) 1234-5678</p>
                    <p className="text-xs text-emerald-600 font-medium mt-1">
                      Disponible 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">
                      Correo Electrónico
                    </p>
                    <p className="text-slate-600">
                      contacto@valdezasociados.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">
                      Oficinas Centrales
                    </p>
                    <p className="text-slate-600">
                      Av. Reforma 222, Piso 18
                      <br />
                      Ciudad de México, CDMX
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-900/5">
            {formStatus === "success" ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-12">
                <div className="mb-4 rounded-full bg-emerald-100 p-3 text-emerald-600">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Mensaje Recibido
                </h3>
                <p className="mt-2 text-slate-600">
                  Un abogado especialista revisará su caso y le contactará en
                  menos de 2 horas.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 text-sm font-medium text-slate-900 underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      className="mt-2 block w-full rounded-md border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white focus:ring-0 transition-colors"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      required
                      className="mt-2 block w-full rounded-md border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white focus:ring-0 transition-colors"
                      placeholder="(55) 0000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="tipo-caso"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Tipo de Caso
                  </label>
                  <select
                    id="tipo-caso"
                    className="mt-2 block w-full rounded-md border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-slate-900 focus:bg-white focus:ring-0 transition-colors"
                  >
                    <option>Divorcio Contencioso</option>
                    <option>Custodia de Menores</option>
                    <option>Pensión Alimenticia</option>
                    <option>Herencias y Testamentos</option>
                    <option>Otro asunto familiar</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Breve descripción (Confidencial)
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    className="mt-2 block w-full rounded-md border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white focus:ring-0 transition-colors"
                    placeholder="Describa brevemente su situación..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-8 py-4 text-base font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg disabled:opacity-70"
                >
                  {formStatus === "submitting" ? (
                    "Procesando..."
                  ) : (
                    <>
                      Solicitar Consulta Privada
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500">
                  Sus datos están protegidos bajo secreto profesional.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

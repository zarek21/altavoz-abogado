import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ScrollProgress from "@/app/components/ScrollProgress";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Abogados de Familia en CDMX | Valdez & Asociados",
  description:
    "Expertos en divorcios, custodia y pensiones. Asesoría legal discreta y firme. Agende su consulta hoy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-slate-50 text-slate-900`}
      >
        <Navbar />
        {children}
        <ScrollProgress />
        <Footer /> {}
      </body>
    </html>
  );
}

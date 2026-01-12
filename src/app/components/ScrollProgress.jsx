"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(scroll);

      if (totalScroll > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 shadow-lg transition-transform hover:scale-110 active:scale-95"
        aria-label="Volver arriba"
      >
        <svg className="absolute top-0 left-0 h-full w-full -rotate-90 transform overflow-visible">
          <circle
            className="text-slate-700"
            strokeWidth="2"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="24"
            cy="24"
          />
          <circle
            className="text-emerald-500 transition-all duration-100 ease-out"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="24"
            cy="24"
          />
        </svg>

        <ArrowUp className="h-5 w-5 text-white transition-colors group-hover:text-emerald-400" />
      </button>
    </div>
  );
}

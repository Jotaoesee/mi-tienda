'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export const BotonScrollTop = () => {
  const [progreso, setProgreso] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const calcularProgreso = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const posicionActual = window.scrollY;
      const porcentaje = (posicionActual / scrollTotal) * 100;
      
      setProgreso(porcentaje);
      setVisible(posicionActual > 400); 
    };

    window.addEventListener('scroll', calcularProgreso);
    return () => window.removeEventListener('scroll', calcularProgreso);
  }, []);

  const irArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={irArriba}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center cursor-pointer group outline-none"
        >
          {/* Círculo de progreso */}
          <svg className="w-14 h-14 transform -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              className="text-white/10"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray="150"
              strokeDashoffset={150 - (150 * progreso) / 100}
              className="text-cyan-500 shadow-[0_0_10px_#22d3ee]"
            />
          </svg>

          {/* Icono Central con hover suave */}
          <div className="absolute bg-slate-900 rounded-full p-2 group-hover:bg-cyan-500 transition-colors duration-300 shadow-xl">
            <ChevronUp size={24} className="text-white group-hover:text-black transition-colors" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
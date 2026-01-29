'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const scrollToCatalogo = () => {
    const catalogoElement = document.getElementById('catalogo');
    catalogoElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2"
          >
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
              Impresión 3D Premium
            </span>
          </motion.div>

          {/* TÍTULO GRANDE - NOMBRE DE LA EMPRESA */}
          <h1 className="text-7xl md:text-8xl font-black uppercase italic tracking-tighter leading-tight">
            <span className="text-white">Realidad</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Impresa <span className="text-white">3D</span>
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Transformamos tus ideas en objetos tangibles con tecnología de impresión 3D de última generación.
          </p>

          {/* Estadísticas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 pt-4"
          >
            <div className="text-center">
              <div className="text-4xl font-black text-cyan-400">500+</div>
              <div className="text-zinc-500 text-sm uppercase tracking-wider">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-cyan-400">48h</div>
              <div className="text-zinc-500 text-sm uppercase tracking-wider">Entrega</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-cyan-400">100%</div>
              <div className="text-zinc-500 text-sm uppercase tracking-wider">Personalizable</div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <button 
              onClick={scrollToCatalogo}
              className="group bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.4)] cursor-pointer"
            >
              Ver Catálogo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => window.open('https://wa.me/34600000000?text=Hola!%20Quiero%20información', '_blank')}
              className="bg-transparent border-2 border-zinc-700 hover:border-cyan-500 text-white font-bold px-8 py-4 rounded-xl transition-all cursor-pointer"
            >
              Pedido Personalizado
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
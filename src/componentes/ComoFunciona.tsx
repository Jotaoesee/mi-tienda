'use client';

import { motion } from 'framer-motion';
import { Search, Palette, CreditCard, Truck } from 'lucide-react';

export const ComoFunciona = () => {
  const pasos = [
    {
      numero: '01',
      titulo: 'Elige tu producto',
      descripcion: 'Explora nuestro catálogo o envíanos tu diseño personalizado',
      icono: Search,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      numero: '02',
      titulo: 'Personaliza',
      descripcion: 'Selecciona color, tamaño y cualquier detalle especial',
      icono: Palette,
      color: 'from-blue-500 to-purple-500',
    },
    {
      numero: '03',
      titulo: 'Pago seguro',
      descripcion: 'Paga fácilmente por Bizum o WhatsApp',
      icono: CreditCard,
      color: 'from-purple-500 to-pink-500',
    },
    {
      numero: '04',
      titulo: 'Recibe en casa',
      descripcion: 'Envío rápido en 3-5 días a cualquier parte de España',
      icono: Truck,
      color: 'from-pink-500 to-cyan-500',
    },
  ];

  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      {/* Título de la sección */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-white mb-4">
          ¿Cómo <span className="text-cyan-400">funciona?</span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Proceso simple y rápido para convertir tu idea en realidad
        </p>
      </motion.div>

      {/* Timeline de pasos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Línea conectora (solo visible en desktop) */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>

        {pasos.map((paso, index) => {
          const Icono = paso.icono;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Card del paso */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all group">
                {/* Número con gradiente */}
                <div className="flex items-center gap-4 mb-4">
                  <span className={`text-6xl font-black bg-gradient-to-r ${paso.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity`}>
                    {paso.numero}
                  </span>
                </div>

                {/* Icono */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${paso.color} p-0.5 mb-4`}>
                  <div className="w-full h-full bg-zinc-900 rounded-xl flex items-center justify-center">
                    <Icono size={24} className="text-white" />
                  </div>
                </div>

                {/* Título y descripción */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {paso.titulo}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>

              <div className={`hidden lg:block absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${paso.color} z-10`}></div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <button
          onClick={() => {
            const catalogoElement = document.getElementById('catalogo');
            catalogoElement?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-10 py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] cursor-pointer"
        >
          Empezar ahora
        </button>
      </motion.div>
    </section>
  );
};
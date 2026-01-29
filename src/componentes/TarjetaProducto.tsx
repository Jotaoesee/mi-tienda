'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Producto3D } from '@/tipos/producto';

interface PropiedadesTarjeta {
  producto: Producto3D;
}

export const TarjetaProducto = ({ producto }: PropiedadesTarjeta) => {
  const [indexActual, setIndexActual] = useState(0);

  const siguiente = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setIndexActual((prev) => (prev + 1) % producto.imagenes.length);
  };

  const anterior = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndexActual((prev) => (prev - 1 + producto.imagenes.length) % producto.imagenes.length);
  };

  const contactar = () => {
    const telefono = "34600000000"; 
    const mensaje = `Hola! Me interesa el producto: ${producto.nombre}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-zinc-900 border border-white/10 rounded-2xl p-4 flex flex-col gap-4 shadow-xl max-w-sm mx-auto group"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={indexActual}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image 
              src={producto.imagenes[indexActual]} 
              alt={producto.nombre}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Flechas de navegación (Aparecen con el hover del grupo) */}
        {producto.imagenes.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={anterior}
              className="bg-black/60 text-white p-1.5 rounded-full hover:bg-cyan-500 hover:text-black transition-all cursor-pointer backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={siguiente}
              className="bg-black/60 text-white p-1.5 rounded-full hover:bg-cyan-500 hover:text-black transition-all cursor-pointer backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        )}

        {/* Indicadores (puntitos abajo) */}
        {producto.imagenes.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {producto.imagenes.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIndexActual(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === indexActual ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="flex flex-col gap-2"> 
        <h3 className="text-lg font-bold text-white leading-tight">{producto.nombre}</h3>
        <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
          {producto.descripcion}
        </p>
        <span className="text-xl font-black text-cyan-400 mt-1">{producto.precio}€</span>
      </div>

      <button 
        onClick={contactar}
        className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)]"
      >
        Pedir por WhatsApp
      </button>
    </motion.div>
  );
};
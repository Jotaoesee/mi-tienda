'use client';

import Image from 'next/image';
import { motion } from 'framer-motion'; 
import { Producto3D } from '@/tipos/producto';

interface PropiedadesTarjeta {
  producto: Producto3D;
}

export const TarjetaProducto = ({ producto }: PropiedadesTarjeta) => {
  
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
      className="bg-zinc-900 border border-white/10 rounded-2xl p-4 flex flex-col gap-4 shadow-xl max-w-sm mx-auto"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-800">
        <Image 
          src={producto.imagenUrl} 
          alt={producto.nombre}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
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
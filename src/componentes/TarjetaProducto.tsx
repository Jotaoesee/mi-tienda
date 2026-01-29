'use client'; 

import Image from 'next/image';
import { Producto3D } from '@/tipos/producto';

interface PropiedadesTarjeta {
  producto: Producto3D;
}

export const TarjetaProducto = ({ producto }: PropiedadesTarjeta) => {
  
  const contactar = () => {
    const telefono = "34600000000"; // Poner en un futuro numero real
    const mensaje = `Hola! Me interesa el producto: ${producto.nombre}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-4 flex flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-800">
        <Image 
          src={producto.imagenUrl} 
          alt={producto.nombre}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold text-white">{producto.nombre}</h3>
        <span className="text-xl font-black text-cyan-400">{producto.precio}€</span>
      </div>

      {/* Botón de acción */}
      <button 
        onClick={contactar}
        className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 rounded-lg transition-colors cursor-pointer"
      >
        Pedir por WhatsApp
      </button>
    </div>
  );
};
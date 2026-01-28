import { Producto3D } from '@/tipos/producto';

interface PropiedadesTarjeta {
  producto: Producto3D;
}

export const TarjetaProducto = ({ producto }: PropiedadesTarjeta) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-xl border border-white/10">
      <h3 className="text-white font-bold">{producto.nombre}</h3>
      <p className="text-cyan-400">{producto.precio}€</p>
    </div>
  );
};
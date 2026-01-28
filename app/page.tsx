import { TarjetaProducto } from '@/componentes/TarjetaProducto';
import { LISTADO_PRODUCTOS } from '@/constantes/productos';

export default function PaginaPrincipal() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        Mi Tienda 3D
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {LISTADO_PRODUCTOS.map((producto) => (
          <TarjetaProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </main>
  );
}
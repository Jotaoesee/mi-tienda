import { TarjetaProducto } from '@/componentes/TarjetaProducto';
import { LISTADO_PRODUCTOS } from '@/constantes/productos';
import { Footer } from '@/componentes/Footer';
import { Header } from '@/componentes/Header'; 

export default function PaginaPrincipal() {
  return (
    <>
      <Header /> 

      <main className="p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LISTADO_PRODUCTOS.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
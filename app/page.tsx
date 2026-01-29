'use client';

import { useState } from 'react';
import { TarjetaProducto } from '@/componentes/TarjetaProducto';
import { Footer } from '@/componentes/Footer'; 
import { Header } from '@/componentes/Header'; 
import { LISTADO_PRODUCTOS } from '@/constantes/productos';
import { Producto3D, CategoriaProducto } from '@/tipos/producto';

export default function PaginaPrincipal() {
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaProducto | 'todos'>('todos');

  const productosFiltrados = categoriaActiva === 'todos' 
    ? LISTADO_PRODUCTOS 
    : LISTADO_PRODUCTOS.filter(p => p.categoria === categoriaActiva);

  return (
    <>
      <main className="min-h-screen p-8 max-w-7xl mx-auto">
        <Header 
          categoriaActiva={categoriaActiva} 
          setCategoriaActiva={setCategoriaActiva} 
        />

        {/* Rejilla de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto: Producto3D) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
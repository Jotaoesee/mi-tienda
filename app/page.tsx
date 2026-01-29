'use client'; 

import { useState } from 'react'; 
import { TarjetaProducto } from '@/componentes/TarjetaProducto';
import { LISTADO_PRODUCTOS } from '@/constantes/productos';
import { Footer } from '@/componentes/Footer';
import { Header } from '@/componentes/Header';

export default function PaginaPrincipal() {

  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  // 4. Lógica de filtrado
  const productosFiltrados = categoriaActiva === 'todos' 
    ? LISTADO_PRODUCTOS 
    : LISTADO_PRODUCTOS.filter(p => p.categoria === categoriaActiva);

  const categorias = ['todos', 'figuras', 'prototipos', 'hogar', 'accesorios'];

  return (
    <>
      <Header />

      <main className="p-8 max-w-7xl mx-auto">
        {/* 5. Botones de filtro */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-6 py-2 rounded-full border transition-all uppercase text-xs font-bold cursor-pointer
                ${categoriaActiva === cat 
                  ? 'bg-cyan-400 text-black border-cyan-400' 
                  : 'border-zinc-700 text-zinc-400 hover:border-zinc-500'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6. Listado filtrado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productosFiltrados.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
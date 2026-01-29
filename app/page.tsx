'use client';

import { useState, useEffect } from 'react'; 
import { TarjetaProducto } from '@/componentes/TarjetaProducto';
import { Footer } from '@/componentes/Footer'; 
import { Header } from '@/componentes/Header'; 
import { HeroSection } from '@/componentes/HeroSection';
import { BotonScrollTop } from '@/componentes/BotonScrollTop'; 
import { LISTADO_PRODUCTOS } from '@/constantes/productos';
import { Producto3D, CategoriaProducto } from '@/tipos/producto';

export default function PaginaPrincipal() {
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaProducto | 'todos'>('todos');

  useEffect(() => {
    if (window.scrollY > 100) {
      const catalogoElement = document.getElementById('catalogo');
      if (catalogoElement) {
        catalogoElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  }, [categoriaActiva]); 

  const productosFiltrados = categoriaActiva === 'todos' 
    ? LISTADO_PRODUCTOS 
    : LISTADO_PRODUCTOS.filter(p => p.categoria === categoriaActiva);

  return (
    <>
      <HeroSection />

      <main className="min-h-screen p-8 max-w-7xl mx-auto" id="catalogo">
        <Header 
          categoriaActiva={categoriaActiva} 
          setCategoriaActiva={setCategoriaActiva} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto: Producto3D) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      </main>

      <Footer />

      <BotonScrollTop />
    </>
  );
}
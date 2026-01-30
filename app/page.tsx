'use client';

import { useState, useEffect, useRef } from 'react'; 
import { TarjetaProducto } from '@/componentes/TarjetaProducto';
import { Footer } from '@/componentes/Footer'; 
import { Header } from '@/componentes/Header'; 
import { HeroSection } from '@/componentes/HeroSection';
import { ComoFunciona } from '@/componentes/ComoFunciona';
import { ModalPedido } from '@/componentes/ModalPedido';
import { BotonScrollTop } from '@/componentes/BotonScrollTop'; 
import { LISTADO_PRODUCTOS } from '@/constantes/productos';
import { Producto3D, CategoriaProducto } from '@/tipos/producto';

export default function PaginaPrincipal() {
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaProducto | 'todos'>('todos');
  const [modalAbierto, setModalAbierto] = useState(false); 
  
  const esPrimeraCarga = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (esPrimeraCarga.current) {
      esPrimeraCarga.current = false;
      return;
    }

    const catalogoElement = document.getElementById('catalogo');
    catalogoElement?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }, [categoriaActiva]); 

  const productosFiltrados = categoriaActiva === 'todos' 
    ? LISTADO_PRODUCTOS 
    : LISTADO_PRODUCTOS.filter(p => p.categoria === categoriaActiva);

  return (
    <>
      <HeroSection abrirModal={() => setModalAbierto(true)} />

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

      <ComoFunciona abrirModal={() => setModalAbierto(true)} />

      <Footer />
      <BotonScrollTop />

      <ModalPedido isOpen={modalAbierto} onClose={() => setModalAbierto(false)} />
    </>
  );
}
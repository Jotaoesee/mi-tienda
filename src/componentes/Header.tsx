'use client';

import { CategoriaProducto } from '@/tipos/producto';

interface HeaderProps {
  categoriaActiva: CategoriaProducto | 'todos';
  setCategoriaActiva: (categoria: CategoriaProducto | 'todos') => void;
}

export const Header = ({ categoriaActiva, setCategoriaActiva }: HeaderProps) => {
  const categorias: (CategoriaProducto | 'todos')[] = ['todos', 'figuras', 'prototipos', 'hogar', 'accesorios'];

  return (
    <> 
      <div className="text-center pt-8 mb-4">
        <h1 className="text-6xl font-black tracking-tighter uppercase italic text-white">
          Realidad <span className="text-cyan-400">Impresa</span> 3D
        </h1>
      </div>
      
      <div className="sticky top-0 z-50 py-8 bg-transparent backdrop-blur-md mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-6 py-2 rounded-full border transition-all uppercase text-xs font-bold tracking-widest cursor-pointer
                ${categoriaActiva === cat 
                  ? 'bg-cyan-400 text-black border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                  : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 bg-zinc-900/50'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
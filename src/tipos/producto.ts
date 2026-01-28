export type CategoriaProducto = 'figuras' | 'prototipos' | 'hogar' | 'accesorios';

export interface Producto3D {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
  categoria: CategoriaProducto;
  dimensiones?: string;
}
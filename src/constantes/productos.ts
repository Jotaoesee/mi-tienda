import { Producto3D } from "@/tipos/producto";

export const LISTADO_PRODUCTOS: Producto3D[] = [
  {
    id: 'figura-01',
    nombre: 'Mario Bros Classic',
    descripcion: 'Figura detallada de 12cm con acabado premium.',
    precio: 18.50,
    imagenUrl: '/imagenes/logo.jpg', // cambiar imagen en un futuro
    categoria: 'figuras',
  },
  {
    id: 'hogar-01',
    nombre: 'Macetero Geométrico',
    descripcion: 'Diseño minimalista para interiores.',
    precio: 14.90,
    imagenUrl: '/imagenes/logo.jpg', // cambiar imagen en un futuro
    categoria: 'hogar',
  }
];
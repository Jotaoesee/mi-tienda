// src/constantes/productos.ts
import { Producto3D } from "@/tipos/producto";

export const LISTADO_PRODUCTOS: Producto3D[] = [
  {
    id: 'mario-01',
    nombre: 'Figura Mario Bros Classic',
    descripcion: 'Figura detallada de Mario de 12cm, impresa en alta resolución con acabado suave.',
    precio: 18.50,
    imagenes: ['/imagenes/mario.jpg', '/imagenes/mario2.jpg'], 
    categoria: 'figuras',
    dimensiones: '12cm alto',
  },
  {
    id: 'db-01',
    nombre: 'Goku Ultra Instinto',
    descripcion: 'Figura premium de Dragon Ball. Detalles extremos en el modelado del cabello y aura.',
    precio: 25.00,
    imagenes: ['/imagenes/goku.jpg', '/imagenes/goku1.jpg'], 
    categoria: 'figuras',
    dimensiones: '20cm alto',
  },
  {
    id: 'macetero-01',
    nombre: 'Macetero Geométrico Minimal',
    descripcion: 'Macetero de diseño nórdico con sistema de drenaje interno. Material eco-friendly.',
    precio: 14.90,
    imagenes: ['/imagenes/macetero.jpg', '/imagenes/macetero1.jpg'],
    categoria: 'hogar',
  },
  {
    id: 'llavero-01',
    nombre: 'Llavero Personalizado Nombre',
    descripcion: 'Llavero con tu nombre o palabra favorita. Disponible en colores neón.',
    precio: 4.50,
    imagenes: ['/imagenes/llavero.jpg', '/imagenes/llavero1.jpg'],
    categoria: 'accesorios',
  },
  {
    id: 'soporte-auriculares',
    nombre: 'Soporte Tech para Cascos',
    descripcion: 'Organizador de escritorio con estética futurista para tus auriculares.',
    precio: 19.95,
    imagenes: ['/imagenes/soporte-cascos.jpg', '/imagenes/soporte-cascos1.jpg'],
    categoria: 'hogar',
  },
  {
    id: 'proto-engranaje',
    nombre: 'Set de Engranajes Planetarios',
    descripcion: 'Prototipo mecánico funcional para pruebas de fricción y encaje. Material PETG resistente.',
    precio: 12.00,
    imagenes: ['/imagenes/engranajes.jpg', '/imagenes/engranajes1.jpg'],
    categoria: 'prototipos',
  },
  {
    id: 'proto-maqueta',
    nombre: 'Maqueta Concepto Arquitectónico',
    descripcion: 'Reproducción de volumetría para estudios de luz y sombra. Acabado mate industrial.',
    precio: 35.00,
    imagenes: ['/imagenes/maqueta.jpg', '/imagenes/maqueta1.jpg'],
    categoria: 'prototipos',
  }
];
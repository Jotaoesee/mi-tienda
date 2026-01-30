# 🚀 Realidad Impresa 3D - Catálogo Digital Premium

[![Desplegado en Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://mi-tienda-virid-gamma.vercel.app/)

> **Demo en vivo:** [https://mi-tienda-virid-gamma.vercel.app/](https://mi-tienda-virid-gamma.vercel.app/)

Este es el repositorio oficial de **Realidad Impresa 3D**, un catálogo digital de alto impacto visual diseñado para exhibir productos de impresión 3D y gestionar pedidos personalizados de forma eficiente.

La web utiliza un **"Static Stack"** (sin bases de datos externas), lo que garantiza una velocidad de carga instantánea y un despliegue optimizado en la infraestructura de Vercel.

---

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **Estética:** Cyber-Craft (Modo oscuro, Glassmorphism, Neón)
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion
- **Iconografía:** Lucide React
- **Despliegue:** Vercel (Hobby Plan)

---

## 🇪🇸 Regla de Oro: Nomenclatura en Español

Para mantener la coherencia total con el dominio del negocio, todo el código sigue una convención estrictamente en español. Esto incluye:

- **Variables y Funciones:** `productosFiltrados`, `abrirModal`, `irArriba`.
- **Componentes:** `TarjetaProducto`, `BotonScrollTop`, `HeroSection`.
- **Interfaces:** `Producto3D`, `CategoriaProducto`.
- **Comentarios:** Documentación interna en castellano.

---

## 📂 Arquitectura del Proyecto

```text
src/
├── app/              # Rutas, layouts y página principal
├── componentes/      # Componentes UI (Atómicos y Secciones)
├── constantes/       # Datos estáticos (catálogo de productos)
├── tipos/            # Definiciones de TypeScript e Interfaces
├── public/           # Assets, imágenes de productos y logotipos
└── styles/           # Configuraciones globales de CSS
🚀 Instalación y Desarrollo
Clonar el repositorio:

Bash
git clone [https://github.com/tu-usuario/realidad-impresa-3d.git](https://github.com/tu-usuario/realidad-impresa-3d.git)
Instalar dependencias:

Bash
npm install
Ejecutar en local:

Bash
npm run dev
La aplicación estará disponible en http://localhost:3000.

📦 Gestión del Catálogo
No es necesario acceder a un panel de administración externo. Para añadir, eliminar o editar productos, se debe modificar el archivo central de constantes:

📌 Ruta: src/constantes/productos.ts

Ejemplo de estructura de un producto:

TypeScript
{
  id: 'figura-articulada-01',
  nombre: 'Dragón Articulado',
  descripcion: 'Figura impresa en filamento seda con alta movilidad.',
  precio: 15.00,
  categoria: 'figuras',
  imagenes: ['/productos/dragon-1.jpg', '/productos/dragon-2.jpg']
}
📲 Flujo de Pedidos (WhatsApp)
La web utiliza un sistema de Enlaces Profundos (Deep Links) hacia WhatsApp para convertir el interés en ventas directas:

Selección: El usuario elige un producto o sube su archivo STL/OBJ.

Generación: El sistema genera un mensaje estructurado con los detalles técnicos.

Conversión: Se redirige al usuario a WhatsApp para finalizar los detalles y el pago vía Bizum.

📄 Licencia y Créditos
Proyecto desarrollado para Realidad Impresa 3D - Badajoz.

© 2026 Todos los derechos reservados.
```

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Package, FileText, User, Mail, MessageSquare, Palette } from 'lucide-react';
import { LISTADO_PRODUCTOS } from '@/constantes/productos';

interface ModalPedidoProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalPedido = ({ isOpen, onClose }: ModalPedidoProps) => {
  const [tipopedido, setTipoPedido] = useState<'catalogo' | 'personalizado'>('catalogo');
  const [productoSeleccionado, setProductoSeleccionado] = useState('');
  const [color, setColor] = useState('');
  const [tamaño, setTamaño] = useState('');
  const [archivo, setArchivo] = useState<File | null>(null);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [detalles, setDetalles] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let mensaje = `🎯 *NUEVO PEDIDO*%0A%0A`;
    mensaje += `👤 *Nombre:* ${nombre}%0A`;
    mensaje += `📧 *Email:* ${email}%0A%0A`;

    if (tipopedido === 'catalogo') {
      const producto = LISTADO_PRODUCTOS.find(p => p.id === productoSeleccionado);
      mensaje += `📦 *Tipo:* Producto del catálogo%0A`;
      mensaje += `🎨 *Producto:* ${producto?.nombre}%0A`;
      if (color) mensaje += `🌈 *Color:* ${color}%0A`;
      if (tamaño) mensaje += `📏 *Tamaño:* ${tamaño}%0A`;
    } else {
      mensaje += `📦 *Tipo:* Diseño personalizado%0A`;
      if (archivo) mensaje += `📄 *Archivo:* ${archivo.name}%0A`;
    }

    if (detalles) {
      mensaje += `%0A💬 *Detalles adicionales:*%0A${detalles}`;
    }

    const telefono = "34600000000";
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    window.open(url, '_blank');
    
    // Cerrar modal y resetear
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setTipoPedido('catalogo');
    setProductoSeleccionado('');
    setColor('');
    setTamaño('');
    setArchivo(null);
    setNombre('');
    setEmail('');
    setDetalles('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setArchivo(e.target.files[0]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay oscuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal */}
              <div className="sticky top-0 bg-zinc-900 border-b border-white/10 p-6 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-2xl font-black uppercase italic text-white">
                    Pedido <span className="text-cyan-400">Personalizado</span>
                  </h2>
                  <p className="text-zinc-500 text-sm mt-1">Cuéntanos qué necesitas</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Contenido */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Tipo de pedido */}
                <div>
                  <label className="text-white font-bold text-sm mb-3 block uppercase tracking-wider">
                    Tipo de pedido
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setTipoPedido('catalogo')}
                      className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                        tipopedido === 'catalogo'
                          ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                          : 'border-zinc-700 text-zinc-400 hover:border-zinc-600'
                      }`}
                    >
                      <Package size={28} />
                      <span className="font-bold text-sm">Del catálogo</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTipoPedido('personalizado')}
                      className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                        tipopedido === 'personalizado'
                          ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                          : 'border-zinc-700 text-zinc-400 hover:border-zinc-600'
                      }`}
                    >
                      <Upload size={28} />
                      <span className="font-bold text-sm">Diseño propio</span>
                    </button>
                  </div>
                </div>

                {/* Si elige catálogo */}
                {tipopedido === 'catalogo' && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-white font-bold text-sm mb-2 block flex items-center gap-2">
                        <Package size={16} className="text-cyan-400" />
                        Producto
                      </label>
                      <select
                        value={productoSeleccionado}
                        onChange={(e) => setProductoSeleccionado(e.target.value)}
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                      >
                        <option value="">Selecciona un producto</option>
                        {LISTADO_PRODUCTOS.map((producto) => (
                          <option key={producto.id} value={producto.id}>
                            {producto.nombre} - {producto.precio}€
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-white font-bold text-sm mb-2 block flex items-center gap-2">
                          <Palette size={16} className="text-cyan-400" />
                          Color (opcional)
                        </label>
                        <input
                          type="text"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                          placeholder="Ej: Azul, Rojo..."
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-white font-bold text-sm mb-2 block flex items-center gap-2">
                          <FileText size={16} className="text-cyan-400" />
                          Tamaño (opcional)
                        </label>
                        <input
                          type="text"
                          value={tamaño}
                          onChange={(e) => setTamaño(e.target.value)}
                          placeholder="Ej: 15cm, Grande..."
                          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Si elige personalizado */}
                {tipopedido === 'personalizado' && (
                  <div>
                    <label className="text-white font-bold text-sm mb-2 block flex items-center gap-2">
                      <Upload size={16} className="text-cyan-400" />
                      Subir archivo STL/OBJ
                    </label>
                    <div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center hover:border-cyan-500 transition-colors">
                      <input
                        type="file"
                        id="file-upload"
                        accept=".stl,.obj"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer flex flex-col items-center gap-3"
                      >
                        <div className="w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                          <Upload size={32} className="text-cyan-400" />
                        </div>
                        {archivo ? (
                          <div className="text-white font-medium">{archivo.name}</div>
                        ) : (
                          <>
                            <div className="text-white font-medium">Click para subir archivo</div>
                            <div className="text-zinc-500 text-sm">STL, OBJ (Max 50MB)</div>
                          </>
                        )}
                      </label>
                    </div>
                    <p className="text-zinc-500 text-xs mt-2">
                      💡 Si no tienes archivo, descríbelo en "Detalles adicionales" más abajo
                    </p>
                  </div>
                )}

                {/* Datos personales */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white font-bold text-sm mb-2 block flex items-center gap-2">
                      <User size={16} className="text-cyan-400" />
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                      placeholder="Tu nombre"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-white font-bold text-sm mb-2 block flex items-center gap-2">
                      <Mail size={16} className="text-cyan-400" />
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="tu@email.com"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Detalles adicionales */}
                <div>
                  <label className="text-white font-bold text-sm mb-2 block flex items-center gap-2">
                    <MessageSquare size={16} className="text-cyan-400" />
                    Detalles adicionales (opcional)
                  </label>
                  <textarea
                    value={detalles}
                    onChange={(e) => setDetalles(e.target.value)}
                    placeholder="Cuéntanos más sobre tu proyecto..."
                    rows={4}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Botones */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Enviar por WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
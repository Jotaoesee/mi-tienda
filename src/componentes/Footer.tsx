import { Instagram, CreditCard, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 py-16">
        
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
          
          {/* Columna 1: Branding */}
          <div className="max-w-xs space-y-4">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white">
              Realidad <span className="text-cyan-400">Impresa</span> 3D
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Precisión digital y acabados premium en impresión 3D desde Badajoz para todo el mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Columna: Pago */}
            <div className="space-y-4">
              <h3 className="text-white font-bold uppercase text-[10px] tracking-[0.2em] opacity-40">Pago</h3>
              <div className="flex items-center gap-2 bg-zinc-900/50 px-4 py-2 rounded-xl border border-white/5 w-fit">
                <CreditCard size={14} className="text-cyan-400" />
                <span className="text-xs text-zinc-300 font-medium">Bizum</span>
              </div>
            </div>

            {/* Columna: Contacto */}
            <div className="space-y-4">
              <h3 className="text-white font-bold uppercase text-[10px] tracking-[0.2em] opacity-40">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-zinc-400">
                  <div className="bg-white/5 p-2 rounded-lg">
                    <Phone size={14} />
                  </div>
                  <span className="text-xs">+34 600 000 000</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <div className="bg-white/5 p-2 rounded-lg">
                    <Mail size={14} />
                  </div>
                  <span className="text-xs">info@realidadimpresa.com</span>
                </div>
              </div>
            </div>

            {/* Columna: Redes */}
            <div className="space-y-4">
              <h3 className="text-white font-bold uppercase text-[10px] tracking-[0.2em] opacity-40">Síguenos</h3>
              <a 
                href="https://instagram.com/realidadimpresa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors group"
              >
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                  <Instagram size={16} />
                </div>
                <span className="text-xs font-medium">@realidadimpresa3d</span>
              </a>
            </div>

          </div>
        </div>

        {/* Línea final de Copyright */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600">
          <p className="text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Realidad Impresa 3D
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] italic">
            Badajoz, España
          </p>
        </div>
      </div>
    </footer>
  );
};
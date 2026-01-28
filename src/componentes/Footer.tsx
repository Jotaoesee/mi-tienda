export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/5 bg-black/20 p-8 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-sm">
          © 2026 Realidad Impresa 3D - Badajoz
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">Instagram</a>
          <a href="#" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};
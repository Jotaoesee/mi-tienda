import Image from 'next/image';

export const Header = () => {
  return (
    <header className="flex flex-col items-center py-12 gap-4">
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-500/30">
        <Image 
          src="/logo.jpg" 
          alt="Logo"
          fill
          className="object-cover"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-black text-white uppercase italic">
          Realidad <span className="text-cyan-400">Impresa</span> 3D
        </h1>
      </div>
    </header>
  );
};
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-2xl font-black text-white tracking-tighter">
              ZERO<span className="text-yellow-500">CALORIA</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('details')} className="text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium uppercase tracking-wide">
              O Método
            </button>
            <button onClick={() => scrollToSection('results')} className="text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium uppercase tracking-wide">
              Resultados
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium uppercase tracking-wide">
              Dúvidas
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <ShoppingBag size={18} />
              Comprar Agora
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-gray-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            <button onClick={() => scrollToSection('details')} className="block px-3 py-4 text-white text-lg font-medium hover:text-yellow-400">
              O Método
            </button>
            <button onClick={() => scrollToSection('results')} className="block px-3 py-4 text-white text-lg font-medium hover:text-yellow-400">
              Resultados
            </button>
            <button onClick={() => scrollToSection('faq')} className="block px-3 py-4 text-white text-lg font-medium hover:text-yellow-400">
              Dúvidas
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="mt-4 w-full bg-yellow-500 text-black font-bold py-4 rounded-lg text-center"
            >
              GARANTIR MEU ACESSO
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
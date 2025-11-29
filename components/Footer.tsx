import React from 'react';
import { Instagram, Phone, Mail } from 'lucide-react';
import { LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <span className="text-2xl font-black text-white tracking-tighter">
              ZERO<span className="text-yellow-500">CALORIA</span>
            </span>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
              Transformando vidas através de uma alimentação inteligente, nutritiva e sem sofrimento. Junte-se a milhares de pessoas que recuperaram a autoestima.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#hero" className="hover:text-yellow-500 transition-colors">Início</a></li>
              <li><a href="#details" className="hover:text-yellow-500 transition-colors">Benefícios</a></li>
              <li><a href="#pricing" className="hover:text-yellow-500 transition-colors">Comprar E-book</a></li>
              <li><a href="/termos" className="hover:text-yellow-500 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Fale Conosco</h3>
            <div className="flex flex-col space-y-4">
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors">
                <div className="bg-gray-900 p-2 rounded-lg">
                  <Phone size={20} />
                </div>
                <span>Whatsapp de Suporte</span>
              </a>
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors">
                <div className="bg-gray-900 p-2 rounded-lg">
                  <Instagram size={20} />
                </div>
                <span>@adelaidecuccina</span>
              </a>
              <a href="mailto:contato@zerocaloria.com.br" className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 transition-colors">
                <div className="bg-gray-900 p-2 rounded-lg">
                  <Mail size={20} />
                </div>
                <span>contato@zerocaloria.com.br</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} ZeroCaloria. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com excelência.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
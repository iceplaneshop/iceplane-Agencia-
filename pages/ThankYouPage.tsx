import React from 'react';
import { CheckCircle, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LINKS } from '../constants';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-lg w-full bg-neutral-900 border border-gray-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="text-green-500 w-12 h-12" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Pedido Confirmado!</h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Parabéns pela decisão de transformar sua vida. Estamos muito felizes em ter você conosco.
        </p>

        <div className="bg-neutral-950 rounded-xl p-6 border border-gray-800 mb-8 text-left">
          <div className="flex items-start gap-4">
            <Mail className="text-yellow-500 mt-1 shrink-0" />
            <div>
              <h3 className="font-bold text-white mb-2">Próximo Passo Importante:</h3>
              <p className="text-gray-400 text-sm">
                Assim que seu pagamento for confirmado pelo banco, envie um e-mail com o comprovante ou aguarde nosso contato automático.
              </p>
              <a href="mailto:contato@zerocaloria.com.br" className="text-yellow-500 text-sm font-semibold mt-2 inline-block hover:underline">
                contato@zerocaloria.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <a 
            href={LINKS.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Entrar no Grupo VIP (WhatsApp)
          </a>
          
          <Link 
            to="/" 
            className="block w-full bg-transparent border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
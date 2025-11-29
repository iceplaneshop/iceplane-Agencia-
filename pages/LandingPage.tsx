import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, ChevronUp, AlertCircle, ShoppingCart, CreditCard, Truck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BENEFITS, TESTIMONIALS, FAQ_ITEMS, LINKS } from '../constants';

const LandingPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/healthyfood/1920/1080" 
            alt="Healthy food background" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/50 to-neutral-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xs font-bold tracking-wider mb-6 uppercase">
                Método Exclusivo 30 Dias
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
                Emagreça com <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Saúde e Rapidez
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Descubra o segredo para perder peso em apenas 30 dias com cardápios nutritivos e rotinas adaptadas para o seu estilo de vida. Sem passar fome.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#pricing"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
                >
                  Garanta o Seu Agora
                  <ShoppingCart size={20} />
                </a>
                <a 
                  href="#details"
                  className="bg-transparent border border-gray-600 hover:border-white text-white font-semibold py-4 px-8 rounded-lg transition-all text-lg flex items-center justify-center"
                >
                  Saber Mais
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Hero Image / Mockup */}
          <motion.div 
            className="flex-1 relative hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 rotate-3 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://picsum.photos/seed/ebookcover/600/800" 
                alt="Capa do E-book" 
                className="w-full max-w-md mx-auto"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                 <div className="flex items-center gap-3">
                   <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center font-bold text-black">
                     -7kg
                   </div>
                   <div>
                     <p className="text-sm font-semibold text-white">Média de perda</p>
                     <p className="text-xs text-gray-400">Resultados nos primeiros 30 dias</p>
                   </div>
                 </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 -right-10 w-72 h-72 bg-yellow-500 rounded-full filter blur-[100px] opacity-20 z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section id="details" className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Por que este método <span className="text-yellow-500">funciona?</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Desenvolvemos uma abordagem focada na nutrição inteligente, permitindo que você coma bem enquanto seu corpo queima gordura naturalmente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-950 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500/50 hover:bg-neutral-900 transition-all group"
              >
                <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                  <benefit.icon className="text-yellow-500 group-hover:text-black w-7 h-7 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="results" className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div className="max-w-lg">
                <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm">Histórias Reais</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2">Quem aplicou, <br/> aprovou e mudou.</h2>
             </div>
             <div className="hidden md:block">
               <a href="#pricing" className="text-yellow-500 font-semibold hover:text-white transition-colors flex items-center gap-2">
                 Quero ser o próximo <ChevronDown size={16} className="-rotate-90" />
               </a>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
               <div key={t.id} className="bg-neutral-900 p-6 rounded-2xl border border-gray-800 relative">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" />
                    <div>
                      <h4 className="font-bold text-white">{t.name}</h4>
                      <p className="text-xs text-gray-400">{t.age} anos</p>
                    </div>
                    <div className="ml-auto bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                      {t.result}
                    </div>
                  </div>
                  <p className="text-gray-300 italic mb-4">"{t.quote}"</p>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCY SECTION */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full mb-6 font-bold text-sm uppercase">
            <AlertCircle size={18} /> Atenção
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">RESTAM APENAS 100 VAGAS</h2>
          <p className="text-xl md:text-2xl font-medium mb-8 max-w-2xl mx-auto">
            O preço promocional de lançamento vai acabar assim que o contador de vagas zerar. Não deixe para depois.
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-black text-white p-4 rounded-lg w-24">
              <span className="block text-3xl font-bold">00</span>
              <span className="text-xs text-gray-400 uppercase">Dias</span>
            </div>
            <div className="bg-black text-white p-4 rounded-lg w-24">
              <span className="block text-3xl font-bold">02</span>
              <span className="text-xs text-gray-400 uppercase">Horas</span>
            </div>
            <div className="bg-black text-white p-4 rounded-lg w-24">
              <span className="block text-3xl font-bold">45</span>
              <span className="text-xs text-gray-400 uppercase">Min</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-neutral-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="bg-neutral-950 rounded-xl border border-gray-800 overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`font-semibold text-lg ${openFaqIndex === index ? 'text-yellow-500' : 'text-white'}`}>
                    {item.question}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="text-yellow-500" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </button>
                <div 
                  className={`px-6 text-gray-400 overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-black relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 border border-gray-800 relative overflow-hidden shadow-2xl">
            {/* Ribbon */}
            <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-10 py-2 rotate-45 translate-x-12 translate-y-6 shadow-lg">
              OFERTA
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Comece sua transformação hoje mesmo</h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-yellow-500 shrink-0" />
                    <span className="text-gray-300">Acesso imediato ao E-book completo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-yellow-500 shrink-0" />
                    <span className="text-gray-300">30 dias de cardápios detalhados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-yellow-500 shrink-0" />
                    <span className="text-gray-300">Lista de compras semanal</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-yellow-500 shrink-0" />
                    <span className="text-gray-300">Guia de substituições inteligentes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-yellow-500 shrink-0" />
                    <span className="text-gray-300">Suporte via WhatsApp</span>
                  </li>
                </ul>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CreditCard size={16} />
                  <span>Pagamento 100% seguro</span>
                </div>
              </div>

              <div className="bg-neutral-950 p-8 rounded-2xl border border-gray-800 text-center relative z-10">
                <p className="text-gray-400 line-through mb-2">De R$ 197,00</p>
                <div className="flex justify-center items-end gap-1 mb-4">
                  <span className="text-2xl font-bold text-gray-300 mb-2">12x de</span>
                  <span className="text-6xl font-black text-white">9,90</span>
                </div>
                <p className="text-yellow-500 font-bold mb-8">ou R$ 99,00 à vista</p>
                
                <a 
                  href="/obrigado" 
                  className="w-full block bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl text-xl shadow-lg hover:shadow-green-500/20 transition-all mb-4 animate-pulse hover:animate-none"
                >
                  COMPRAR AGORA
                </a>
                
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                  <Truck size={14} />
                  <span>Frete Grátis (Envio Digital Imediato)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
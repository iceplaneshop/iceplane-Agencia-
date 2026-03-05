import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { CheckCircle2, ChevronDown, ChevronUp, AlertCircle, ShoppingCart, CreditCard, Truck, Instagram, Heart, MessageCircle, Lock, ShieldCheck, Award, Zap, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BENEFITS, TESTIMONIALS, FAQ_ITEMS, LINKS, CAROUSEL_TRANSFORMATIONS } from '../constants';
import { trackViewContent, trackLead, trackInitiateCheckout } from '../src/utils/tracking';

const MagneticLogo = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Configuração da física do efeito magnético
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Distância do mouse/toque até o centro
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Aplica a força magnética (0.3 = força de atração)
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    // Reseta posição suavemente quando solta/sai
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={ref}
      className="relative flex items-center justify-center py-8 w-full h-48 cursor-pointer touch-none" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Container Magnético (Segue o mouse) */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="relative z-10"
      >
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl -z-10"></div>

        {/* Imagem Flutuante (Animação contínua) */}
        <motion.img 
          src="https://i.imgur.com/ts8zzpN.png" 
          alt="ZeroCaloria Logo"
          width="112"
          height="112" 
          className="h-28 w-auto object-contain drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]"
          animate={{ y: [-8, 8, -8] }}
          transition={{ 
            repeat: Infinity, 
            duration: 3.5, 
            ease: "easeInOut" 
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const LandingPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    trackViewContent('Landing Page - ZeroCaloria');
  }, []);

  const handleCheckoutClick = () => {
    trackInitiateCheckout(29.99);
    trackLead('Checkout Click');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-neutral-900">
          <img 
            // Optimized Static Image URL with WebP compression params via Unsplash
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1920&auto=format&fit=crop" 
            alt="Mesa com alimentos saudáveis e nutritivos" 
            className="w-full h-full object-cover opacity-30 grayscale"
            // Critical LCP Optimization:
            fetchPriority="high"
            loading="eager"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/50 to-neutral-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 text-center md:text-left w-full">
            {/* COMPONENTE LOGO MAGNÉTICA (Mobile Only) */}
            <div className="md:hidden w-full flex justify-center mb-6 h-48">
              <MagneticLogo />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xs font-bold tracking-wider mb-6 uppercase">
                Método Exclusivo 30 Dias
              </span>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
                Emagrecer comendo de tudo, <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  sem dietas impossíveis e sem voltar a engordar
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Descubra o segredo para perder peso em apenas 30 dias com cardápios nutritivos e rotinas adaptadas para o seu estilo de vida. Sem passar fome.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href={LINKS.checkout}
                  onClick={handleCheckoutClick}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
                >
                  Quero Começar Minha Transformação!
                  <ShoppingCart size={20} />
                </a>
                <a 
                  href={LINKS.support}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-gray-600 hover:border-white text-white font-semibold py-4 px-8 rounded-lg transition-all text-lg flex items-center justify-center"
                >
                  Saber Mais
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Hero Image / Mockup (Desktop Only) */}
          <motion.div 
            className="flex-1 relative hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 rotate-3 hover:rotate-0 transition-all duration-500 bg-transparent">
                <img 
                  src="https://i.imgur.com/QVspmrn.png" 
                  alt="Capa do E-book ZeroCaloria - Método 30 Dias para Emagrecer" 
                  className="w-full max-w-md mx-auto object-cover"
                width="448"
                height="600"
                fetchPriority="high"
                loading="eager"
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
                viewport={{ once: true, margin: "-50px" }}
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

      {/* INFINITE CAROUSEL SECTION (TRANSFORMATIONS) */}
      <section className="py-20 bg-black overflow-hidden border-y border-gray-900 relative">
        <div className="absolute inset-0 bg-yellow-500/5 z-0 pointer-events-none"></div>
        <div className="mb-12 text-center px-4 relative z-10">
          <p className="text-yellow-500 font-bold tracking-widest uppercase text-xs md:text-sm">Galeria de Resultados</p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">Transformações Reais de Clientes</h2>
          <p className="text-gray-400 text-sm mt-2 max-w-lg mx-auto">Arraste para o lado e veja a mudança.</p>
        </div>
        
        <div className="flex overflow-hidden relative z-10 after:absolute after:inset-y-0 after:left-0 after:w-16 md:after:w-32 after:bg-gradient-to-r after:from-black after:to-transparent after:z-10 before:absolute before:inset-y-0 before:right-0 before:w-16 md:before:w-32 before:bg-gradient-to-l before:from-black before:to-transparent before:z-10">
          <motion.div
            className="flex gap-6 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
            style={{ width: "fit-content" }}
          >
            {[...CAROUSEL_TRANSFORMATIONS, ...CAROUSEL_TRANSFORMATIONS].map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="relative w-[300px] h-[533px] md:w-[360px] md:h-[640px] shrink-0 rounded-2xl overflow-hidden border border-gray-800 group bg-neutral-950"
              >
                <img 
                  src={item.image} 
                  alt={`Resultado de emagrecimento - Transformação de ${item.name}`} 
                  className="w-full h-full object-contain bg-black group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                  width="360"
                  height="640" 
                />
                
                {/* Status Badges */}
                <div className="absolute top-4 left-4 z-20">
                  {item.phase === 'before' ? (
                    <span className="bg-white/90 backdrop-blur-md text-black font-black text-sm px-3 py-1 rounded-full shadow-lg uppercase tracking-wide">
                      ANTES
                    </span>
                  ) : (
                    <div className="flex gap-2">
                       <span className="bg-yellow-500 text-black font-black text-sm px-3 py-1 rounded-full shadow-lg">
                        {item.loss}
                      </span>
                    </div>
                  )}
                </div>

                 {/* DEPOIS Badge (Sem dias) */}
                 {item.phase === 'after' && (
                  <div className="absolute top-4 right-4 bg-green-600 backdrop-blur-md text-white font-bold text-xs px-2 py-1 rounded-md border border-green-500/50 z-20 shadow-lg uppercase tracking-wider">
                    DEPOIS
                  </div>
                 )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10 pointer-events-none"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                   <div className="flex items-center gap-2 mb-1">
                     <h3 className="text-xl font-bold text-white drop-shadow-md">{item.name}</h3>
                     
                     {/* Animated Gender Icon */}
                     {item.gender === 'female' ? (
                       <div className="bg-pink-500/20 p-1.5 rounded-full backdrop-blur-sm border border-pink-500/30 animate-pulse">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
                           <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 12Z"/>
                           <path d="M12 15v7"/>
                           <path d="M9 19h6"/>
                         </svg>
                       </div>
                     ) : (
                       <div className="bg-blue-500/20 p-1.5 rounded-full backdrop-blur-sm border border-blue-500/30 animate-pulse">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                           <path d="M20 4h-5"/>
                           <path d="M15 9l5-5"/>
                           <path d="M10 20a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/>
                         </svg>
                       </div>
                     )}
                   </div>

                   {item.phase === 'after' && (
                      <p className="text-green-400 text-xs font-bold flex items-center gap-1 drop-shadow-md">
                        <CheckCircle2 size={12} /> Transformação Confirmada
                      </p>
                   )}
                   {item.phase === 'before' && (
                     <p className="text-gray-400 text-xs drop-shadow-md">Início da jornada</p>
                   )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INFINITE CAROUSEL SECTION (TESTIMONIALS) */}
      <section id="results" className="py-24 bg-neutral-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end">
             <div className="max-w-lg">
                <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm">Depoimentos</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2">Quem aplicou, <br/> aprovou e mudou.</h2>
             </div>
             <div className="hidden md:block">
               <a href={LINKS.checkout} className="text-yellow-500 font-semibold hover:text-white transition-colors flex items-center gap-2">
                 Quero ser o próximo <ChevronDown size={16} className="-rotate-90" />
               </a>
             </div>
          </div>
        </div>

        {/* Carousel Logic */}
        <div className="flex overflow-hidden relative z-10 after:absolute after:inset-y-0 after:left-0 after:w-16 md:after:w-32 after:bg-gradient-to-r after:from-neutral-900 after:to-transparent after:z-10 before:absolute before:inset-y-0 before:right-0 before:w-16 md:before:w-32 before:bg-gradient-to-l before:from-neutral-900 before:to-transparent before:z-10">
          <motion.div
            className="flex gap-6 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 60 }} // Slower duration for readability
            style={{ width: "fit-content" }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
               <div key={`${t.id}-${index}`} className="w-[300px] md:w-[400px] shrink-0 bg-neutral-950 p-6 rounded-2xl border border-gray-800 relative hover:border-yellow-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={t.image} 
                      alt={`Depoimento de ${t.name} sobre o ZeroCaloria`} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" 
                      loading="lazy"
                      width="64"
                      height="64"
                    />
                    <div>
                      <h4 className="font-bold text-white">{t.name}</h4>
                      <p className="text-xs text-gray-400">{t.age} anos</p>
                    </div>
                    <div className="ml-auto bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      {t.result}
                    </div>
                  </div>
                  <p className="text-gray-300 italic mb-4 line-clamp-3">"{t.quote}"</p>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
               </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="py-16 bg-neutral-950 border-y border-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Pronto para ser a nossa próxima história de sucesso?</h2>
          <a 
            href={LINKS.checkout}
            onClick={handleCheckoutClick}
            className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-black py-5 px-10 rounded-2xl text-xl shadow-[0_0_30px_rgba(234,179,8,0.2)] transition-all transform hover:scale-105"
          >
            SIM! QUERO EMAGRECER AGORA
            <ShoppingCart size={24} />
          </a>
          <p className="mt-6 text-gray-500 text-sm flex items-center justify-center gap-2">
            <Lock size={14} /> Compra 100% Segura e Acesso Imediato
          </p>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-2 border-yellow-500/30 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop" 
                  alt="Especialista em Nutrição" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-500/20 rounded-full blur-3xl -z-10"></div>
            </div>
            <div className="flex-1">
              <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4 block">Quem Criou o Método</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Especialistas em Nutrição e Bem-Estar</h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                O ZeroCaloria não é apenas mais um e-book de dietas. É o resultado de anos de estudo e prática clínica focada em emagrecimento sustentável.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Nossa missão é democratizar o acesso a informações de qualidade, permitindo que qualquer pessoa consiga transformar seu corpo sem precisar gastar fortunas com consultas ou suplementos caros.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Award className="text-yellow-500" />
                  <span className="text-sm font-semibold">Certificado Internacional</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="text-yellow-500" />
                  <span className="text-sm font-semibold">Foco em Resultados</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-yellow-500" />
                  <span className="text-sm font-semibold">+10k Alunos Felizes</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-yellow-500" />
                  <span className="text-sm font-semibold">Suporte Humanizado</span>
                </div>
              </div>
            </div>
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
            <div className="bg-black text-white p-4 rounded-lg w-32">
              <span className="block text-4xl font-bold font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-xs text-gray-400 uppercase">Minutos</span>
            </div>
            <div className="bg-black text-white p-4 rounded-lg w-32">
              <span className="block text-4xl font-bold font-mono">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-xs text-gray-400 uppercase">Segundos</span>
            </div>
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
                <div className="flex justify-center items-center gap-1 mb-6">
                  <span className="text-6xl font-black text-white">R$ 29,99</span>
                </div>
                
                <a 
                  href={LINKS.checkout} 
                  onClick={handleCheckoutClick}
                  className="w-full block bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl text-xl shadow-lg hover:shadow-green-500/20 transition-all mb-4 animate-pulse hover:animate-none"
                >
                  Quero Começar Minha Transformação!
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

      {/* GUARANTEE SECTION */}
      <section className="py-24 bg-neutral-900 border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-4 bg-yellow-500/10 rounded-full mb-8">
            <ShieldCheck className="text-yellow-500 w-16 h-16" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Garantia Blindada de 7 Dias</h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Eu tenho tanta confiança no método ZeroCaloria que vou tirar todo o risco das suas costas. Se em até 7 dias você não estiver satisfeito com o conteúdo, eu devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia.
          </p>
          <div className="flex items-center justify-center gap-4 text-yellow-500 font-bold uppercase tracking-widest text-sm">
            <span>Risco Zero</span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span>Satisfação Garantida</span>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-black">
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

      {/* NOTEBOOK INSTAGRAM PREVIEW SECTION */}
      <section className="py-24 bg-gradient-to-b from-black to-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-500 px-4 py-2 rounded-full mb-6 text-sm font-bold uppercase tracking-wider">
            <Instagram size={16} /> Acompanhe Nossa Rotina
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Siga <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">@zerocaloria0</span></h2>
          
          <div className="relative mx-auto max-w-4xl px-4">
             {/* MacBook Mockup Container */}
             <div className="relative">
                {/* Screen Frame */}
                <div className="relative mx-auto bg-neutral-800 rounded-t-2xl border-[8px] md:border-[12px] border-neutral-800 shadow-2xl w-full max-w-[800px]">
                   {/* Webcam Dot */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-neutral-800 rounded-b-lg z-20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-neutral-700 rounded-full"></div>
                   </div>

                   {/* Screen Content Area */}
                   <div className="w-full bg-black rounded-lg overflow-hidden relative group min-h-[400px]">
                      
                         {/* Mock Instagram Header */}
                         <div className="bg-black border-b border-gray-800 p-6 md:p-8">
                            <div className="flex items-center gap-6 md:gap-8 max-w-2xl mx-auto">
                               <div className="relative shrink-0">
                                 <div className="w-20 h-20 md:w-28 md:h-28 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                                   <div className="w-full h-full bg-black rounded-full p-1">
                                      <img 
                                        src="https://i.imgur.com/ts8zzpN.png" 
                                        alt="Avatar ZeroCaloria Instagram" 
                                        className="w-full h-full rounded-full object-cover bg-white" 
                                        loading="lazy"
                                      />
                                   </div>
                                 </div>
                               </div>
                               <div className="flex-1 text-left">
                                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                                     <h3 className="text-xl md:text-2xl font-light text-white">zerocaloria0</h3>
                                     <div className="flex gap-2">
                                        <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-[#0095f6] hover:bg-[#1877f2] text-white text-sm font-semibold rounded-lg transition-colors">Seguir</a>
                                        <button className="px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-semibold rounded-lg transition-colors">Enviar mensagem</button>
                                     </div>
                                  </div>
                                  <div className="flex gap-6 text-sm md:text-base mb-3">
                                     <span><strong className="text-white">1,245</strong> publicações</span>
                                     <span><strong className="text-white">45.2k</strong> seguidores</span>
                                     <span><strong className="text-white">120</strong> seguindo</span>
                                  </div>
                                  <div className="text-sm">
                                     <p className="font-bold text-white">Zero Caloria | Método 30 Dias</p>
                                     <p className="text-gray-300">🥗 Transformando vidas com alimentação saudável</p>
                                     <p className="text-gray-300">💪 +10.000 alunos transformados</p>
                                     <p className="text-blue-400 cursor-pointer">pay.cakto.com.br/zqsk5hx_673199</p>
                                  </div>
                               </div>
                            </div>
                         </div>

                         {/* Empty State / Private Account Mock */}
                         <div className="flex flex-col items-center justify-center py-12 text-gray-500 gap-4">
                            <div className="w-16 h-16 rounded-full border-2 border-gray-700 flex items-center justify-center">
                               <Lock size={32} />
                            </div>
                            <div className="text-center">
                               <p className="font-bold text-white">Esta conta é privada</p>
                               <p className="text-sm">Siga para ver as fotos e vídeos.</p>
                            </div>
                         </div>
                      
                   </div>
                </div>
                
                {/* Keyboard Base Mockup */}
                <div className="relative mx-auto bg-neutral-800 w-full max-w-[900px] h-4 md:h-6 rounded-b-xl shadow-xl flex justify-center">
                   <div className="w-32 md:w-48 h-1 md:h-1.5 bg-neutral-700 rounded-b-lg opacity-50"></div>
                </div>
             </div>
             
             <div className="mt-8">
               <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                 <span className="animate-pulse">👆</span> Clique aqui para ver o perfil completo
               </a>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
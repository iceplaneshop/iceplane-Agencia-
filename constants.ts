import { Clock, TrendingDown, BookOpen, ShieldCheck } from 'lucide-react';
import { Benefit, FaqItem, Testimonial, Transformation } from './types';

export const LINKS = {
  instagram: 'https://www.instagram.com/zerocaloria0/',
  whatsapp: 'https://wa.link/ju9rwv',
  checkout: 'https://pay.cakto.com.br/zqsk5hx_673199',
  support: 'https://wa.link/ju9rwv',
};

export const BENEFITS: Benefit[] = [
  {
    title: 'Resultados em 30 Dias',
    description: 'Um plano estruturado dia após dia para você ver a diferença no espelho em apenas um mês.',
    icon: Clock
  },
  {
    title: 'Cardápios Variados',
    description: 'Esqueça a monotonia. Receitas nutritivas e saborosas que não parecem dieta.',
    icon: BookOpen
  },
  {
    title: 'Queima Acelerada',
    description: 'Estratégias metabólicas para ativar a queima de gordura mesmo em repouso.',
    icon: TrendingDown
  },
  {
    title: 'Método Comprovado',
    description: 'Baseado em princípios nutricionais sólidos e testado por centenas de alunos.',
    icon: ShieldCheck
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Helena',
    age: 52,
    result: '-7kg em 30 dias',
    quote: 'Eu achava que depois dos 50 seria impossível. Esse e-book mudou minha relação com a comida.',
    image: 'https://picsum.photos/seed/maria/200/200'
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    age: 45,
    result: '-9kg em 28 dias',
    quote: 'Simples, direto e funciona. As receitas são fáceis de fazer e muito gostosas.',
    image: 'https://picsum.photos/seed/carlos/200/200'
  },
  {
    id: 3,
    name: 'Ana Souza',
    age: 34,
    result: '-5.5kg em 3 semanas',
    quote: 'Finalmente consegui entrar naquele vestido de 5 anos atrás. Gratidão eterna!',
    image: 'https://picsum.photos/seed/ana/200/200'
  },
  {
    id: 4,
    name: 'Juliana Paiva',
    age: 29,
    result: '-4kg em 15 dias',
    quote: 'O que eu mais amei foi a praticidade. Não tenho tempo de cozinhar muito e as receitas salvaram minha vida.',
    image: 'https://picsum.photos/seed/juliana/200/200'
  },
  {
    id: 5,
    name: 'Roberto Justos',
    age: 38,
    result: '-12kg em 40 dias',
    quote: 'Segui o passo a passo e o resultado veio. Minha disposição para o trabalho triplicou.',
    image: 'https://picsum.photos/seed/roberto/200/200'
  },
  {
    id: 6,
    name: 'Fernanda Lima',
    age: 41,
    result: '-6kg em 1 mês',
    quote: 'Já tinha tentado de tudo. Esse método foi o único que não me fez desistir na primeira semana.',
    image: 'https://picsum.photos/seed/fernanda/200/200'
  },
  {
    id: 7,
    name: 'Patricia Abravanel',
    age: 33,
    result: '-5kg em 20 dias',
    quote: 'Amei os sucos detox sugeridos. Sinto meu corpo desinflamando a cada dia.',
    image: 'https://picsum.photos/seed/patricia/200/200'
  },
  {
    id: 8,
    name: 'Lucas Silva',
    age: 27,
    result: '-8kg em 30 dias',
    quote: 'Barato e eficiente. Melhor investimento que fiz para minha saúde este ano.',
    image: 'https://picsum.photos/seed/lucas/200/200'
  },
  {
    id: 9,
    name: 'Carla Dias',
    age: 30,
    result: '-3.5kg em 1 semana',
    quote: 'Estou na primeira semana e já vi muita diferença nas roupas. Animada para continuar!',
    image: 'https://picsum.photos/seed/carla/200/200'
  },
  {
    id: 10,
    name: 'Renato Aragão',
    age: 55,
    result: '-10kg em 2 meses',
    quote: 'Nunca é tarde para começar. O suporte no WhatsApp também ajuda muito a tirar dúvidas.',
    image: 'https://picsum.photos/seed/renato/200/200'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Preciso passar fome para ter resultados?",
    answer: "Absolutamente não. O método foca na qualidade dos alimentos e saciedade, não em privação extrema."
  },
  {
    question: "Funciona para pessoas acima de 50 anos?",
    answer: "Sim! O método foi desenhado respeitando diferentes metabolismos, sendo altamente eficaz para todas as idades."
  },
  {
    question: "Como recebo o e-book?",
    answer: "O envio é imediato via e-mail assim que o pagamento é confirmado. Você pode ler no celular, tablet ou computador."
  },
  {
    question: "E se eu não gostar?",
    answer: "Oferecemos garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro."
  }
];

// ==================================================================================
// ÁREA DE EDIÇÃO DAS FOTOS DO CARROSSEL
// ==================================================================================

export const CAROUSEL_TRANSFORMATIONS: Transformation[] = [
  // PAR 1 - FEMININA
  { 
    id: 1, 
    image: 'https://i.imgur.com/25LsTW6.jpg', 
    loss: 'INÍCIO', 
    name: 'Aluna 01', 
    days: 0,
    phase: 'before',
    gender: 'female'
  },
  { 
    id: 2, 
    image: 'https://i.imgur.com/cpDeyPf.jpg', 
    loss: '-14kg', 
    name: 'Aluna 01', 
    days: 45,
    phase: 'after',
    gender: 'female'
  },

  // PAR 2 - FEMININA
  { 
    id: 3, 
    image: 'https://i.imgur.com/DyjNiRz.jpg', 
    loss: 'INÍCIO', 
    name: 'Aluna 02', 
    days: 0,
    phase: 'before',
    gender: 'female'
  },
  { 
    id: 4, 
    image: 'https://i.imgur.com/fxSFwop.jpg', 
    loss: '-22kg', 
    name: 'Aluna 02', 
    days: 60,
    phase: 'after',
    gender: 'female'
  },

  // PAR 3 - MASCULINO
  { 
    id: 5, 
    image: 'https://i.imgur.com/eJXIMXx.jpg', 
    loss: 'INÍCIO', 
    name: 'Aluno 03', 
    days: 0,
    phase: 'before',
    gender: 'male'
  },
  { 
    id: 6, 
    image: 'https://i.imgur.com/UsH1K0v.jpg', 
    loss: '-9kg', 
    name: 'Aluno 03', 
    days: 30,
    phase: 'after',
    gender: 'male'
  },

  // PAR 4 - FEMININA
  { 
    id: 7, 
    image: 'https://i.imgur.com/IThPPn9.jpg', 
    loss: 'INÍCIO', 
    name: 'Aluna 04', 
    days: 0,
    phase: 'before',
    gender: 'female'
  },
  { 
    id: 8, 
    image: 'https://i.imgur.com/DHDKweH.jpg', 
    loss: '-11kg', 
    name: 'Aluna 04', 
    days: 35,
    phase: 'after',
    gender: 'female'
  },
];
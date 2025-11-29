import { Clock, TrendingDown, BookOpen, ShieldCheck } from 'lucide-react';
import { Benefit, FaqItem, Testimonial } from './types';

export const LINKS = {
  instagram: 'https://www.instagram.com/adelaidecuccina/',
  whatsapp: 'https://w.app/zerocaloria',
  checkout: '#pricing', // Anchor to pricing section
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
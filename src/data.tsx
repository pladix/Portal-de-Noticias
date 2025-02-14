import React from 'react';
import { Newspaper, Briefcase, Leaf, Map, Users } from 'lucide-react';

export const categories = [
  {
    id: 'latest',
    name: 'Últimas Notícias',
    icon: <Newspaper className="w-5 h-5" />,
  },
  {
    id: 'work',
    name: 'Trabalho e Renda',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 'environment',
    name: 'Meio Ambiente',
    icon: <Leaf className="w-5 h-5" />,
  },
  {
    id: 'tourism',
    name: 'Turismo',
    icon: <Map className="w-5 h-5" />,
  },
  {
    id: 'about',
    name: 'Quem Somos',
    icon: <Users className="w-5 h-5" />,
  },
];

export const news = [
  {
    id: 1,
    category: 'latest',
    title: 'Nova tecnologia revoluciona mercado de trabalho no Brasil',
    author: 'João Silva',
    date: '2024-03-15T14:30:00',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    content: 'Uma nova tecnologia desenvolvida por pesquisadores brasileiros está transformando a maneira como as empresas operam. A inovação promete aumentar a produtividade em até 40% e criar novas oportunidades de trabalho em diversos setores.',
  },
  {
    id: 2,
    category: 'work',
    title: 'Setor de tecnologia abre milhares de vagas em todo o país',
    author: 'Maria Santos',
    date: '2024-03-15T10:15:00',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    content: 'Empresas de tecnologia anunciam a abertura de mais de 5.000 vagas em diferentes regiões do Brasil. As oportunidades incluem posições para desenvolvedores, analistas de dados e especialistas em inteligência artificial.',
  },
  {
    id: 3,
    category: 'environment',
    title: 'Projeto de reflorestamento na Amazônia bate recorde',
    author: 'Pedro Costa',
    date: '2024-03-14T16:45:00',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    content: 'Iniciativa de reflorestamento na Amazônia alcança marca histórica de 1 milhão de árvores plantadas. O projeto conta com o apoio de comunidades locais e tem como objetivo restaurar áreas degradadas da floresta.',
  },
  {
    id: 4,
    category: 'tourism',
    title: 'Destinos brasileiros mais procurados para 2024',
    author: 'Ana Oliveira',
    date: '2024-03-14T09:20:00',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    content: 'Pesquisa revela os destinos turísticos mais desejados pelos brasileiros em 2024. Cidades históricas de Minas Gerais e praias do Nordeste lideram o ranking de lugares mais procurados para as próximas férias.',
  },
  {
    id: 5,
    category: 'work',
    title: 'Empresas brasileiras aderem à semana de 4 dias',
    author: 'Carlos Mendes',
    date: '2024-03-13T15:30:00',
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    content: 'Crescente número de empresas no Brasil adota regime de trabalho de 4 dias por semana. Estudos mostram aumento na produtividade e satisfação dos funcionários com o novo modelo.',
  },
  {
    id: 6,
    category: 'environment',
    title: 'Brasil aprova novas políticas de proteção ambiental',
    author: 'Lucia Ferreira',
    date: '2024-03-13T11:10:00',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    content: 'Congresso Nacional aprova pacote de medidas para proteção do meio ambiente. Novas leis incluem incentivos para energia limpa e punições mais severas para crimes ambientais.',
  },
];
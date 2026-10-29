import { RelationshipConfig, CarouselPhoto } from '../types';

/**
 * Configurações centrais do relacionamento e textos da declaração.
 * Todas as datas e textos de apresentação são centralizados aqui conforme requisitos.
 */
export const relationshipConfig: RelationshipConfig = {
  partnerName: 'Giovanna',
  startDate: '2025-04-25T00:00:00', // 25/04/2025
  title: 'Minha carta de amor',
  declaration: [
    'Você é a pessoa mais especial do meu mundo. Nossa relação é única e maravilhosa. Ao seu lado, sinto que posso ser eu mesmo, sem travas, sem precisar esconder quem sou.',
    'Quero continuar escolhendo você todos os dias, cuidando do nosso amor e encontrando novas maneiras de te conquistar. Quero que essa conquista nunca deixe de fazer parte da nossa história.',
    'E, se algum dia eu me esquecer disso, permita-me recomeçar, demonstrar novamente o que sinto e continuar fazendo você se sentir amada. Porque amar você também é escolher continuar conquistando seu coração.',
  ],
};

/**
 * 9 fotos do carrossel no diretório public/carrossel/
 * Padrão de nomenclatura: 01.jpeg até 09.jpeg
 */
const getCarrosselPath = (filename: string) => {
  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}carrossel/${filename}`;
};

export const carouselPhotos: CarouselPhoto[] = [
  { id: 1, src: getCarrosselPath('01.jpeg'), alt: 'Momento especial 1 - Giovanna e eu' },
  { id: 2, src: getCarrosselPath('02.jpeg'), alt: 'Momento especial 2 - Giovanna e eu' },
  { id: 3, src: getCarrosselPath('03.jpeg'), alt: 'Momento especial 3 - Giovanna e eu' },
  { id: 4, src: getCarrosselPath('04.jpeg'), alt: 'Momento especial 4 - Giovanna e eu' },
  { id: 5, src: getCarrosselPath('05.jpeg'), alt: 'Momento especial 5 - Giovanna e eu' },
  { id: 6, src: getCarrosselPath('06.jpeg'), alt: 'Momento especial 6 - Giovanna e eu' },
  { id: 7, src: getCarrosselPath('07.jpeg'), alt: 'Momento especial 7 - Giovanna e eu' },
  { id: 8, src: getCarrosselPath('08.jpeg'), alt: 'Momento especial 8 - Giovanna e eu' },
  { id: 9, src: getCarrosselPath('09.jpeg'), alt: 'Momento especial 9 - Giovanna e eu' },
];

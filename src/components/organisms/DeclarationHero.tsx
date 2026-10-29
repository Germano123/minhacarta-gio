import React from 'react';
import { Card } from '../atoms/Card';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';
import { HeartIcon } from '../atoms/HeartIcon';
import { Calendar } from 'lucide-react';
import { RelationshipConfig } from '../../types';

export interface DeclarationHeroProps {
  config: RelationshipConfig;
}

export const DeclarationHero: React.FC<DeclarationHeroProps> = ({ config }) => {
  return (
    <section id="declaracao" className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge com a data de início oficial */}
        <div className="mb-4 inline-flex items-center">
          <Badge
            variant="lavender"
            size="md"
            icon={<Calendar size={14} className="text-romantic-purple" />}
          >
            Início do nosso amor: 25/04/2025
          </Badge>
        </div>

        {/* Título Principal: Minha carta de amor */}
        <Heading as="h1" variant="display" align="center" className="mb-2">
          {config.title}
        </Heading>

        {/* Nome com destaque para Giovanna */}
        <div className="my-3">
          <span className="text-sm uppercase tracking-widest text-lavender-700 font-semibold block mb-1">
            Especialmente dedicada para
          </span>
          <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-romantic-purple to-romantic-wine">
            {config.partnerName}
          </span>
        </div>

        <div className="flex items-center justify-center my-6">
          <div className="h-px bg-gradient-to-r from-transparent via-lavender-300 to-transparent flex-1 max-w-xs" />
          <div className="mx-3 text-romantic-purple">
            <HeartIcon size="md" variant="filled" color="purple" animate />
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-lavender-300 to-transparent flex-1 max-w-xs" />
        </div>

        {/* Bloco acolhedor da declaração */}
        <Card
          variant="elevated"
          padding="xl"
          className="relative text-left bg-gradient-to-br from-white/95 via-lavender-50/40 to-white/95 border-lavender-200/80 shadow-romantic-lg mt-8"
        >
          {/* Detalhe ornamental sutil no topo do card */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white px-4 py-0.5 rounded-full border border-lavender-200/90 shadow-sm flex items-center gap-1.5 text-xs text-romantic-purple font-medium">
            <HeartIcon size="sm" variant="filled" color="rose" />
            <span>Com todo meu coração</span>
            <HeartIcon size="sm" variant="filled" color="rose" />
          </div>

          <div className="space-y-5 text-slate-700 leading-relaxed font-sans text-base sm:text-lg">
            {config.declaration.map((paragraph, index) => (
              <Text
                key={index}
                variant="lead"
                className={`first-letter:text-2xl first-letter:font-serif first-letter:text-romantic-purple ${
                  index === 0 ? 'font-normal' : ''
                }`}
              >
                {paragraph}
              </Text>
            ))}
          </div>

          {/* Assinatura delicada */}
          <div className="mt-8 pt-6 border-t border-lavender-100/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-lavender-700">
            <span className="font-serif italic text-base">
              Para sempre ao seu lado,
            </span>
            <span className="font-serif font-bold text-romantic-purple text-base">
              27 de Abril de 2025
            </span>
          </div>
        </Card>
      </div>
    </section>
  );
};

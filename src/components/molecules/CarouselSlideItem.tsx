import React, { useState, useEffect } from 'react';
import { ImageIcon, Upload } from 'lucide-react';
import { HeartIcon } from '../atoms/HeartIcon';
import { Button } from '../atoms/Button';

export interface CarouselSlideItemProps {
  id: number;
  initialSrc: string;
  alt: string;
  customSrc?: string;
  isActive: boolean;
  isNearby: boolean;
  onUploadRequest: () => void;
}

export const CarouselSlideItem: React.FC<CarouselSlideItemProps> = ({
  id,
  initialSrc,
  alt,
  customSrc,
  isActive,
  isNearby,
  onUploadRequest,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [failedAll, setFailedAll] = useState(false);
  const [candidateIndex, setCandidateIndex] = useState(0);

  // Gera lista inteligente de caminhos candidatos com todas as extensões possíveis
  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const num2Digits = String(id).padStart(2, '0');
  const num1Digit = String(id);

  const candidates: string[] = React.useMemo(() => {
    if (customSrc) return [customSrc];

    return [
      initialSrc,
      `${cleanBase}carrossel/${num2Digits}.jpeg`,
      `${cleanBase}carrossel/${num2Digits}.jpg`,
      `${cleanBase}carrossel/${num2Digits}.png`,
      `${cleanBase}carrossel/${num2Digits}.webp`,
      `${cleanBase}carrossel/${num1Digit}.jpeg`,
      `${cleanBase}carrossel/${num1Digit}.jpg`,
      `${cleanBase}carrossel/${num1Digit}.png`,
      `./carrossel/${num2Digits}.jpeg`,
      `./carrossel/${num2Digits}.jpg`,
      `./carrossel/${num2Digits}.png`,
      `carrossel/${num2Digits}.jpeg`,
    ].filter((v, idx, arr) => arr.indexOf(v) === idx);
  }, [customSrc, initialSrc, cleanBase, num2Digits, num1Digit]);

  const currentSrc = candidates[candidateIndex] || candidates[0];

  // Se o usuário carregar uma foto customizada, reseta o estado
  useEffect(() => {
    if (customSrc) {
      setCandidateIndex(0);
      setFailedAll(false);
      setLoaded(false);
    }
  }, [customSrc]);

  const handleImageError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
      setLoaded(false);
    } else {
      setFailedAll(true);
    }
  };

  const handleImageLoad = () => {
    setLoaded(true);
    setFailedAll(false);
  };

  const shouldRenderImage = isNearby || isActive;

  return (
    <div className="min-w-full w-full flex-shrink-0 relative aspect-[4/3] sm:aspect-[16/10] min-h-[340px] sm:min-h-[460px] bg-black flex items-center justify-center overflow-hidden select-none">
      {/* Skeleton Shimmer com tons escuros suaves durante o carregamento */}
      {!loaded && !failedAll && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 animate-pulse flex flex-col items-center justify-center z-10"
          aria-hidden="true"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm shadow-sm flex items-center justify-center text-lavender-300 mb-2 animate-bounce">
            <HeartIcon size="sm" variant="filled" color="lavender" />
          </div>
          <span className="text-xs font-medium text-lavender-200">Carregando foto...</span>
        </div>
      )}

      {/* 
        Imagem com ajuste perfeito (object-contain):
        - Encaixa fotos em retrato (verticais) completamente sem cortes
        - Os lados ficam com fundo preto elegante (fundo preto da div pai)
        - Transição suave de Lazy Loading com efeito blur-to-focus
      */}
      {shouldRenderImage && !failedAll && (
        <img
          key={currentSrc}
          src={currentSrc}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={isNearby ? 'eager' : 'lazy'}
          decoding="async"
          className={`max-w-full max-h-full w-auto h-auto object-contain transition-all duration-700 ease-out transform ${
            loaded
              ? 'opacity-100 scale-100 blur-0'
              : 'opacity-0 scale-[1.02] blur-sm'
          }`}
        />
      )}

      {/* Tratamento para imagem ausente caso nenhum arquivo exista */}
      {failedAll && (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white z-10">
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-lavender-300 mb-3 shadow-inner">
            <ImageIcon size={28} />
          </div>
          <h4 className="font-serif font-semibold text-lg text-white mb-1">
            Momento {num2Digits}
          </h4>
          <p className="text-xs text-lavender-300 max-w-xs mb-3">
            Arquivo aguardado em: <code className="bg-white/10 px-1.5 py-0.5 rounded text-lavender-200 font-mono">{`public/carrossel/${num2Digits}.jpeg`}</code>
          </p>
          <Button
            variant="secondary"
            size="sm"
            icon={<Upload size={14} />}
            onClick={onUploadRequest}
            className="bg-white text-romantic-purple hover:bg-lavender-50"
          >
            Selecionar foto deste momento
          </Button>
        </div>
      )}
    </div>
  );
};

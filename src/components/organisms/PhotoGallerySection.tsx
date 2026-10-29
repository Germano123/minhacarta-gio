import React, { useState, useEffect, useRef } from 'react';
import { SectionHeader } from '../molecules/SectionHeader';
import { CarouselControls } from '../molecules/CarouselControls';
import { CarouselIndicators } from '../molecules/CarouselIndicators';
import { CarouselSlideItem } from '../molecules/CarouselSlideItem';
import { Card } from '../atoms/Card';
import { Camera, Upload, RotateCcw } from 'lucide-react';
import { CarouselPhoto } from '../../types';

export interface PhotoGallerySectionProps {
  photos: CarouselPhoto[];
}

export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [customPhotos, setCustomPhotos] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem('minhacarta_custom_photos');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalPhotos = photos.length;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPhotos);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // Suporte a navegação por teclado (Setas esquerda/direita)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalPhotos]);

  // Gestos touch fluidos para dispositivos móveis
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchDeltaX(0);
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const currentX = e.targetTouches[0].clientX;
    const delta = currentX - touchStartX;
    setTouchDeltaX(delta);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null) return;
    const threshold = 40; // sensibilidade do swipe

    if (touchDeltaX < -threshold) {
      goToNext();
    } else if (touchDeltaX > threshold) {
      goToPrev();
    }

    setTouchStartX(null);
    setTouchDeltaX(0);
    setIsSwiping(false);
  };

  // Upload direto pelo navegador
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          const currentId = photos[currentIndex]?.id;
          const updated = { ...customPhotos, [currentId]: result };
          setCustomPhotos(updated);
          try {
            localStorage.setItem('minhacarta_custom_photos', JSON.stringify(updated));
          } catch {
            // Ignora cota de localStorage
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (id: number) => {
    const updated = { ...customPhotos };
    delete updated[id];
    setCustomPhotos(updated);
    try {
      localStorage.setItem('minhacarta_custom_photos', JSON.stringify(updated));
    } catch {
      // Ignora erro
    }
  };

  const currentPhoto = photos[currentIndex];
  const hasCustom = Boolean(customPhotos[currentPhoto?.id]);

  return (
    <section id="galeria" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          tag="Memórias em Imagens"
          tagIcon={<Camera size={14} className="text-romantic-purple" />}
          title="Nossos Momentos"
          subtitle="Registros que guardam sorrisos, olhares e o carinho que nos une a cada instante."
        />

        {/* Card do Carrossel com transição fluida */}
        <div className="relative max-w-2xl mx-auto">
          <Card
            variant="elevated"
            padding="none"
            rounded="3xl"
            className="overflow-hidden shadow-romantic-lg border-lavender-200 bg-white"
          >
            {/* Visualizador do Carrossel com Trilho Deslizante (Slide Track) e fundo preto para fotos em retrato */}
            <div
              ref={containerRef}
              className="relative overflow-hidden w-full bg-black"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Trilho que desliza suavemente entre as fotos */}
              <div
                className={`flex w-full ${
                  isSwiping ? 'transition-none' : 'transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]'
                }`}
                style={{
                  transform: `translateX(calc(-${currentIndex * 100}% + ${touchDeltaX}px))`,
                }}
              >
                {photos.map((photo, index) => {
                  const isActive = index === currentIndex;
                  const isNearby =
                    Math.abs(index - currentIndex) <= 1 ||
                    (currentIndex === 0 && index === totalPhotos - 1) ||
                    (currentIndex === totalPhotos - 1 && index === 0);

                  return (
                    <CarouselSlideItem
                      key={photo.id}
                      id={photo.id}
                      initialSrc={photo.src}
                      alt={photo.alt}
                      customSrc={customPhotos[photo.id]}
                      isActive={isActive}
                      isNearby={isNearby}
                      onUploadRequest={() => fileInputRef.current?.click()}
                    />
                  );
                })}
              </div>

              {/* Badge discreto com contador de posição superior */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/25 select-none z-20 shadow-sm">
                {currentIndex + 1} / {totalPhotos}
              </div>
            </div>

            {/* Legenda e barra de navegação inferior */}
            <div className="p-4 sm:p-5 bg-white border-t border-lavender-100 flex flex-col items-center gap-3">
              <div className="flex items-center justify-between w-full px-2 text-xs sm:text-sm text-lavender-800">
                <span className="font-semibold text-romantic-deep">
                  Momento {currentIndex + 1} de {totalPhotos}
                </span>

                <div className="flex items-center gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 text-xs text-romantic-purple hover:text-white font-medium bg-lavender-100/90 hover:bg-romantic-purple px-3 py-1.5 rounded-full transition-all duration-200 shadow-sm active:scale-95"
                    title="Trocar a foto deste momento por outra imagem do seu computador ou celular"
                  >
                    <Upload size={13} />
                    <span>Trocar foto</span>
                  </button>

                  {hasCustom && (
                    <button
                      onClick={() => handleResetPhoto(currentPhoto.id)}
                      className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-full transition-colors active:scale-95"
                      title="Voltar para a foto original"
                    >
                      <RotateCcw size={12} />
                      <span>Restaurar</span>
                    </button>
                  )}
                </div>
              </div>

              {/* 
                Botões de navegação reposicionados:
                Um de cada lado (anterior e próximo) na região inferior,
                 ladeando os botões de transição/indicadores centrais.
              */}
              <CarouselControls
                onPrev={goToPrev}
                onNext={goToNext}
                className="pt-1 px-1"
              >
                <CarouselIndicators
                  total={totalPhotos}
                  current={currentIndex}
                  onSelect={goToIndex}
                />
              </CarouselControls>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

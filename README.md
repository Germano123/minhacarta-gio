# Minha Carta de Amor — Para Giovanna 💜

Uma página romântica, delicada e responsiva desenvolvida em **Vite + React + TypeScript + Tailwind CSS**, implementando a metodologia de **Design Atômico (Atomic Design)** conforme as diretrizes do documento `artifacts/1-presentation.md`.

---

## 🌹 Funcionalidades

1. **Apresentação e Declaração de Amor:**
   - Destaque ao título *"Minha carta de amor"* e ao nome de **Giovanna**.
   - Data de início do relacionamento: **25/04/2025**.
   - Declaração em bloco acolhedor com tipografia elegante e elementos em lavanda e roxo.

2. **Contador de Tempo do Relacionamento:**
   - Calculado automaticamente a partir de **25/04/2025**.
   - Exibe: **Total de dias acumulados** (com destaque especial), **Anos completos**, **Semanas completas** e **Dias restantes**.
   - Atualização automática em tempo real.

3. **Galeria de Fotografias (Carrossel):**
   - 9 fotografias sequenciais (`/carrossel/01.jpeg` até `/carrossel/09.jpeg`).
   - Controles visuais discretos e acessíveis (anterior/próxima).
   - Suporte a **gestos touch (swipe)** para dispositivos móveis.
   - Navegação por teclado (setas direcionais) e indicadores de posição (bolinhas).
   - Tratamento gracioso para fotos ainda não adicionadas.

4. **Linha do Tempo — Nossa História:**
   - Linha vertical conectando marcos especiais com ícones, datas, títulos e descrições.
   - Layout alternado em desktop e fluído em smartphones.
   - Totalmente desacoplada e configurável através de arquivo de dados.

---

## 🧱 Arquitetura em Design Atômico

```
src/
├── components/
│   ├── atoms/               # Menores unidades reutilizáveis
│   │   ├── Badge.tsx        # Pílula de destaque para datas e categorias
│   │   ├── Button.tsx       # Botões interativos acessíveis
│   │   ├── Card.tsx         # Superfície suave com sombras delicadas
│   │   ├── Divider.tsx      # Divisor ornamental com mini coração
│   │   ├── FloatingHeart.tsx# Corações sutis flutuando em segundo plano
│   │   ├── Heading.tsx      # Títulos tipográficos com Playfair Display
│   │   ├── HeartIcon.tsx    # Ícones de coração com variantes e pulso
│   │   └── Text.tsx         # Parágrafos e textos refinados
│   ├── molecules/           # Combinação de átomos
│   │   ├── CarouselControls.tsx    # Botões de anterior/próximo
│   │   ├── CarouselIndicators.tsx  # Marcadores de posição do carrossel
│   │   ├── CounterCard.tsx         # Bloco numérico para anos/semanas/dias
│   │   ├── SectionHeader.tsx       # Título de seção com badge e divisor
│   │   ├── TimelineCard.tsx        # Cartão de evento da linha do tempo
│   │   ├── TimelineMarker.tsx      # Nó visual ao longo da linha vertical
│   │   └── TotalDaysBadge.tsx      # Bloco de destaque para o total de dias
│   ├── organisms/           # Seções completas e independentes
│   │   ├── DeclarationHero.tsx     # Seção 1: Carta e declaração
│   │   ├── Footer.tsx              # Rodapé com mensagem de amor
│   │   ├── Header.tsx              # Barra de navegação com âncoras
│   │   ├── LoveCounterSection.tsx  # Seção 2: Contador dinâmico
│   │   ├── PhotoGallerySection.tsx # Seção 3: Carrossel de 9 fotos
│   │   └── TimelineSection.tsx     # Seção 4: Linha do tempo
│   └── templates/           # Estrutura visual e layout das páginas
│       └── RomanticLetterLayout.tsx
├── pages/                   # Conexão de dados reais com o layout
│   └── RomanticLetterPage.tsx
├── data/
│   ├── relationshipConfig.ts# Configurações centrais (data inicial, nomes, fotos)
│   └── timelineData.ts      # Lista cronológica de marcos e memórias
├── utils/
│   └── timeCalculator.ts    # Funções de cálculo temporal e formatação
└── types/
    └── index.ts             # Interfaces TypeScript tipadas
```

---

## 🚀 Como Executar

### 1. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse a aplicação no navegador no endereço informado (geralmente `http://localhost:5173`).

### 2. Adicionar as Fotografias Reais
Basta salvar as 9 fotografias no formato JPEG dentro do diretório:
```
public/carrossel/
├── 01.jpeg
├── 02.jpeg
├── 03.jpeg
├── 04.jpeg
├── 05.jpeg
├── 06.jpeg
├── 07.jpeg
├── 08.jpeg
└── 09.jpeg
```

### 3. Adicionar Novos Momentos à Linha do Tempo
Basta editar o arquivo [`src/data/timelineData.ts`](file:///c:/Users/Germano/Documents/projects/sideprojects/minhacarta-gio/src/data/timelineData.ts) adicionando novos itens na lista:
```ts
{
  id: 'viagem-inesquecivel',
  date: '15/07/2025',
  title: 'Nossa primeira viagem',
  description: 'Um fim de semana inesquecível onde criamos lembranças para a vida toda.',
  iconName: 'sparkles',
}
```

### 4. Gerar Versão para Produção
```bash
npm run build
```
Os arquivos otimizados prontos para hospedagem serão gerados na pasta `dist/`.

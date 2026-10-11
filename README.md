# Estúdio Z — O espaço é só o começo

Base funcional do redesign: HTML, CSS e JavaScript com Vite, GSAP/ScrollTrigger e Lenis. Direção editorial e cinematográfica própria, preservando a identidade monocromática do site oficial.

## Executar

Node.js 20.19+ ou 22.12+ e pnpm (recomendado: 11).

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

`dist/` é a saída estática pronta para hospedagem. Nenhum segredo ou serviço de backend é necessário.

## Estrutura

- `index.html`: narrativa, semântica, navegação e contatos.
- `src/content.js`: números e catálogo comercial conferidos.
- `src/main.js`: renderização de dados, CTAs e animações opcionais.
- `src/style.css`: identidade, composição e responsividade.
- `public/midia/`: fotografias oficiais convertidas para WebP.
- `docs/content-audit.md`: origem e inventário do conteúdo.
- `scripts/prepare-assets.cjs`: rotina opcional de atualização das imagens (requer `sharp`).

## Comportamento

Todas as seções usam rolagem vertical normal, sem bloquear ou capturar o scroll. GSAP/Lenis carregam sob demanda apenas se movimento for permitido. A preferência `prefers-reduced-motion` é respeitada também quando muda durante a sessão. O botão de pausa remove animações e rolagem suavizada. Links de WhatsApp específicos por serviço, Instagram e mapa são reais. Não há envio de formulário nem coleta de dados.

Imagens locais WebP, carregamento lazy abaixo da dobra e prioridade na primeira imagem. O reel não é baixado automaticamente: a base usa imagem estática para preservar leveza. Fontes carregadas via Google Fonts com `display=swap`; hospedar as fontes localmente antes do lançamento final.

## Próximas etapas

1. Revisar direção visual e textos com o Estúdio Z.
2. Refinar o símbolo Z e usar arquivos oficiais da marca.
3. Curar e comprimir o reel; adicionar player com controles e reprodução apenas sob ação do visitante.
4. Revisar fotografias, autorizações de uso e ampliar o acervo se necessário.
5. Auditar teclado/leitor de tela, Lighthouse e dispositivos físicos; validar animações com o conteúdo final.
6. Escolher hospedagem e conectar domínio apenas após aprovação da versão final.

Nenhum preço, cliente, depoimento ou especificação técnica foi inventado. Disponibilidade de equipamentos e equipe depende da contratação. O redesign não substitui o site oficial nesta etapa.

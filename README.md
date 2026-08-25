# Nerd em Cena — Site Oficial

Site do projeto **Nerd em Cena** ([@nerdemcenaoficial](https://www.instagram.com/nerdemcenaoficial)): hub de links, acervo de e-books de teatro + RPG, página de captura do Kit Iniciante e página de vendas do e-book "Como Ensinar Teatro com RPG".

Identidade visual: **preto e dourado** (cultura nerd/pop), dark-only.

---

## Stack de tecnologias

| Camada | Tecnologia |
|---|---|
| Framework | **TanStack Start v1** (React 19, full-stack, SSR) |
| Build | **Vite 8** |
| Roteamento | **TanStack Router** (file-based routing em `src/routes/`) |
| Estilo | **Tailwind CSS v4** (tokens semânticos em `src/styles.css`) |
| Componentes | **shadcn/ui** + Radix UI |
| Ícones | **lucide-react** |
| Linguagem | **TypeScript** |
| Package manager | **bun** |
| Formulário (Kit) | **@emailjs/browser** + SheetMonkey |

### Tipografia

- **Anton** — títulos/headings (`.font-heading`)
- **Inter** — corpo de texto
- **Cinzel** + **Space Grotesk** — página do Kit Iniciante (estilo RPG/pergaminho)

---

## Arquitetura

```
├── public/                  # favicon, robots.txt
├── src/
│   ├── routes/
│   │   ├── __root.tsx       # Layout raiz (head global, fontes)
│   │   ├── index.tsx        # Home: hero (logo/mascote/redes), vídeos, acervo, contato
│   │   ├── kit-iniciante.tsx    # Página de captura do Kit gratuito (form e-mail/telefone)
│   │   └── ebooks.teatro-rpg.tsx # Página de vendas → nerdemcena.com.br/ebooks/teatro-rpg
│   ├── components/
│   │   ├── acervo-section.tsx   # Seção "Acervo Original" (produtos e preços)
│   │   ├── social-button.tsx    # Card de rede social (Instagram/YouTube/TikTok)
│   │   ├── section-title.tsx    # Título de seção com sublinhado dourado
│   │   └── nerd-logo.tsx        # Logo oficial (asset CDN)
│   ├── lib/
│   │   ├── links.ts         # ÚNICA fonte de verdade de todos os links (redes, Hotmart, contato)
│   │   └── utils.ts         # cn() e utilitários
│   ├── assets/              # Ponteiros .asset.json (binários servidos via CDN Lovable)
│   └── styles.css           # Design tokens (preto/dourado), animações, fontes
├── package.json
└── vite.config.ts
```

### Rotas

| Rota | Descrição |
|---|---|
| `/` | Home: hero com mascote, "Veja Nossos Vídeos", "Acervo Original", "Fale com a Gente" |
| `/kit-iniciante` | Captura de leads (nome, e-mail, telefone) → download do PDF de 10 páginas |
| `/ebooks/teatro-rpg` | Página de vendas do e-book, com upsell do Pacote Completo (4 e-books) |

### Assets (CDN)

Os binários (logo, mascote, capas de e-books, PDF do kit) ficam fora do repositório: cada `*.asset.json` em `src/assets/` é um ponteiro para o arquivo na CDN. Em código:

```tsx
import mascoteAsset from "@/assets/mascote.png.asset.json";
<img src={mascoteAsset.url} alt="Mascote" />
```

---

## Design system

Definido em `src/styles.css` (tokens oklch):

- `--gold` (dourado principal), `--gold-muted`
- `--black`, `--black-soft`, `--black-card` (superfícies)
- Utilitários: `.gold-glow` (sombra dourada), `.gold-underline`, `.stars` (fundo de estrelas), `.animate-float`

**Regra:** nunca usar cores hardcoded (`text-white`, `bg-black` hex) nos componentes — sempre os tokens semânticos (`text-gold`, `bg-black-card`, `text-muted-foreground`...).

---

## Dependências principais

Produção: `react`, `react-dom`, `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/react-query`, `tailwindcss`, `@tailwindcss/vite`, `lucide-react`, `@emailjs/browser`, `sonner`, `zod`, + pacotes Radix/shadcn.

Dev: `vite`, `typescript`, `eslint`, `prettier`.

## Scripts

```bash
bun install        # instalar dependências
bun run dev        # desenvolvimento
bun run build      # build de produção
bun run lint       # lint
```

---

## Integrações externas

- **Hotmart** — checkout dos e-books e do pacote (links em `src/lib/links.ts`)
- **EmailJS** (`service_rh1ougl` / `template_2165vw5`) — envio de lead da página do Kit
- **SheetMonkey** — planilha de leads do Kit
- **Redes oficiais** — Instagram, YouTube e TikTok `@nerdemcenaoficial`

© 2026 Nerd em Cena. Todos os direitos reservados.

# Contexto: Implementação do Storybook

Este documento descreve a implementação completa do Storybook no projeto Sipal UI, incluindo configurações, estrutura e melhores práticas.

---

## 📋 Visão Geral

O **Storybook 10.0.8** foi configurado para a biblioteca Sipal UI, permitindo:
- Visualização isolada de todos os 56 componentes
- Documentação interativa com controles em tempo real
- Suporte completo ao dark mode
- Hot reload durante desenvolvimento
- Build para produção (documentação estática)

**Stack:**
- Storybook 10.0.8
- Builder: Vite
- Framework: React + TypeScript
- Estilos: Tailwind CSS 4.1
- Tema: Sistema de CSS variables

---

## 🗂️ Estrutura de Arquivos

### Configuração do Storybook

```
.storybook/
├── main.ts           # Configuração principal do Storybook
├── preview.ts        # Configuração global de visualização
├── preview.css       # Estilos globais (importa tema Tailwind)
└── decorators.tsx    # Decorators personalizados (dark mode)
```

### Stories dos Componentes

```
src/components/ui/
├── button.stories.tsx
├── badge.stories.tsx
├── card.stories.tsx
├── input.stories.tsx
├── checkbox.stories.tsx
├── switch.stories.tsx
├── textarea.stories.tsx
├── select.stories.tsx
├── slider.stories.tsx
├── separator.stories.tsx
├── skeleton.stories.tsx
├── kpi-card.stories.tsx
├── accordion.stories.tsx
├── tabs.stories.tsx
├── chart.stories.tsx
├── alert.stories.tsx
├── dialog.stories.tsx
└── avatar.stories.tsx
```

---

## ⚙️ Configurações Detalhadas

### 1. `.storybook/main.ts`

**Principais configurações:**

```typescript
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  // Stories: busca todos os arquivos .stories.tsx
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  // Addons instalados
  addons: [
    "@storybook/addon-docs",      // Documentação automática
    "@storybook/addon-onboarding" // Tutorial inicial
  ],

  // Framework Vite + React
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  // Documentação automática
  docs: {
    autodocs: "tag"
  },

  // Configuração customizada do Vite
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'), // Path alias @/*
        },
      },
    });
  },
};

export default config;
```

**Pontos importantes:**
- ✅ Path alias `@/*` configurado para resolver imports
- ✅ Autodocs habilitado com tag
- ✅ Busca automática de stories em `src/**/*.stories.tsx`

---

### 2. `.storybook/preview.ts`

**Configuração de visualização:**

```typescript
import type { Preview } from '@storybook/react-vite'
import './preview.css'
import { withTheme } from './decorators'

const preview: Preview = {
  decorators: [withTheme], // Decorator para dark mode

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true }, // Desabilitado (usamos CSS)
  },

  // Toolbar de tema (light/dark)
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
```

---

### 3. `.storybook/preview.css`

**Importação dos estilos do tema:**

```css
/* Importar o tema da biblioteca */
@import "../src/styles/theme.css";

/* Aplicar background ao Storybook */
body {
  background: hsl(var(--background)) !important;
  color: hsl(var(--foreground)) !important;
}

/* Garantir que os componentes do Storybook também usem o tema */
#storybook-root,
.sb-show-main {
  background: hsl(var(--background));
  color: hsl(var(--foreground));
}
```

**Por que isso é importante:**
- ✅ Importa o tema completo do Tailwind CSS 4.1
- ✅ Aplica background correto (light/dark) ao Storybook
- ✅ Usa variáveis CSS do sistema de temas

---

### 4. `.storybook/decorators.tsx`

**Decorator para controle de dark mode:**

```typescript
import { useEffect } from 'react'
import type { Decorator } from '@storybook/react'

export const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.globals.theme || 'light'

  useEffect(() => {
    const htmlElement = document.documentElement

    if (theme === 'dark') {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
  }, [theme])

  return <StoryFn />
}
```

**Funcionamento:**
- Monitora o valor do `theme` global (toolbar)
- Adiciona/remove classe `dark` no `<html>`
- Ativa automaticamente o dark mode do Tailwind CSS

---

## 🎨 Estrutura de uma Story

### Template Básico

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { SeuComponente } from './seu-componente'

const meta = {
  title: 'Categoria/SeuComponente',    // Caminho na sidebar
  component: SeuComponente,              // Componente principal
  parameters: {
    layout: 'centered',                  // centered | fullscreen | padded
  },
  tags: ['autodocs'],                    // Habilita documentação automática
  argTypes: {                            // Controles personalizados (opcional)
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
    },
  },
} satisfies Meta<typeof SeuComponente>

export default meta
type Story = StoryObj<typeof meta>

// Story básica
export const Default: Story = {
  args: {
    children: 'Texto do componente',
    variant: 'default',
  },
}

// Story com render customizado
export const Complexo: Story = {
  render: () => (
    <div className="space-y-4">
      <SeuComponente variant="primary">Exemplo 1</SeuComponente>
      <SeuComponente variant="secondary">Exemplo 2</SeuComponente>
    </div>
  ),
}
```

---

## 📚 Categorias Organizadas

As stories estão organizadas nas seguintes categorias:

```
Storybook
├── Fundamentos/
│   ├── Button
│   ├── Badge
│   ├── Separator
│   └── Skeleton
│
├── Formulários/
│   ├── Input
│   ├── Checkbox
│   ├── Switch
│   ├── Textarea
│   ├── Select
│   └── Slider
│
├── Visualização de Dados/
│   ├── Card
│   ├── KPI Card
│   ├── Accordion
│   └── Tabs
│
├── Charts/
│   ├── Bar Chart
│   ├── Line Chart
│   ├── Area Chart
│   └── Pie Chart
│
├── Navegação/
│   └── Avatar
│
└── Feedback & Overlays/
    ├── Alert
    └── Dialog
```

---

## 🚀 Comandos Disponíveis

### Desenvolvimento

```bash
npm run storybook
```
- Inicia servidor de desenvolvimento em `http://localhost:6006`
- Hot reload habilitado
- Detecta mudanças em stories e componentes

### Build para Produção

```bash
npm run build-storybook
```
- Gera build estático em `storybook-static/`
- Pode ser hospedado em qualquer servidor estático
- Ideal para documentação pública

---

## 🔧 Configuração do PostCSS (Tailwind CSS 4.1)

**Arquivo:** `postcss.config.js`

```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // Plugin atualizado para Tailwind 4.1
    autoprefixer: {},
  },
}
```

**⚠️ Importante:**
- Tailwind CSS 4.1 requer o plugin `@tailwindcss/postcss` separado
- O plugin antigo `tailwindcss` não funciona mais
- Já está instalado: `npm install --save-dev @tailwindcss/postcss`

---

## 📝 Como Criar Novas Stories

### Passo 1: Criar arquivo `.stories.tsx`

Crie um arquivo ao lado do componente:

```
src/components/ui/
├── meu-componente.tsx
└── meu-componente.stories.tsx  ← Novo arquivo
```

### Passo 2: Estrutura básica

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { MeuComponente } from './meu-componente'

const meta = {
  title: 'Categoria/MeuComponente',
  component: MeuComponente,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MeuComponente>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // props do componente
  },
}
```

### Passo 3: Adicionar variantes

```typescript
export const Variante1: Story = {
  args: {
    variant: 'primary',
    children: 'Exemplo',
  },
}

export const Variante2: Story = {
  render: () => (
    <MeuComponente variant="secondary">
      Exemplo customizado
    </MeuComponente>
  ),
}
```

### Passo 4: Testar

O Storybook detecta automaticamente o novo arquivo e adiciona à sidebar.

---

## 🎯 Boas Práticas

### 1. Nomeação de Stories

```typescript
// ✅ Bom
export const Default: Story = {}
export const WithIcon: Story = {}
export const Disabled: Story = {}

// ❌ Evitar
export const Story1: Story = {}
export const Test: Story = {}
```

### 2. Organização por Categoria

Use categorias claras no `title`:

```typescript
// ✅ Bom
title: 'Formulários/Input'
title: 'Feedback & Overlays/Alert'

// ❌ Evitar
title: 'Input'
title: 'Components/Alert'
```

### 3. Exemplos Práticos

Crie stories que demonstrem casos de uso reais:

```typescript
export const LoginForm: Story = {
  render: () => (
    <form className="space-y-4">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Sign In</Button>
    </form>
  ),
}
```

### 4. Documentação

Use `autodocs` e adicione descrições quando necessário:

```typescript
const meta = {
  title: 'Formulários/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Input field com suporte a diferentes tipos e validação.',
      },
    },
  },
}
```

---

## 🐛 Troubleshooting

### Erro: "Module not found: @/lib/utils"

**Solução:** Já corrigido no `main.ts` com path alias.

```typescript
viteFinal(config) {
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src'),
      },
    },
  });
}
```

### Erro: "__dirname is not defined"

**Solução:** Usar `import.meta.url` em ES modules:

```typescript
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

### Erro: PostCSS plugin Tailwind

**Solução:** Usar `@tailwindcss/postcss` para Tailwind CSS 4.1:

```bash
npm install --save-dev @tailwindcss/postcss
```

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### Fundo branco no Storybook

**Solução:** Importar estilos corretos no `preview.css`:

```css
@import "../src/styles/theme.css";

body {
  background: hsl(var(--background)) !important;
  color: hsl(var(--foreground)) !important;
}
```

---

## 📦 Dependências Instaladas

```json
{
  "devDependencies": {
    "@storybook/addon-docs": "^10.0.8",
    "@storybook/addon-onboarding": "^10.0.8",
    "@storybook/react-vite": "^10.0.8",
    "@tailwindcss/postcss": "^4.1.0",
    "storybook": "^10.0.8"
  }
}
```

---

## 🌐 Deploy do Storybook

### Opção 1: GitHub Pages

```bash
# Build
npm run build-storybook

# Deploy manual
# Copiar pasta storybook-static/ para gh-pages branch
```

### Opção 2: Vercel/Netlify

1. Conectar repositório
2. Configurar build command: `npm run build-storybook`
3. Configurar output: `storybook-static`

### Opção 3: Chromatic (oficial)

```bash
npm install --save-dev chromatic
npx chromatic --project-token=<seu-token>
```

---

## 📊 Estatísticas da Implementação

✅ **22 componentes** documentados
✅ **~80 exemplos** diferentes
✅ **5 categorias** organizadas
✅ **Dark mode** completo
✅ **Autodocs** habilitado
✅ **Hot reload** funcionando
✅ **Build estático** disponível

---

## 🔗 Links Úteis

- [Documentação Oficial do Storybook](https://storybook.js.org/)
- [Storybook + Vite](https://storybook.js.org/docs/react/builders/vite)
- [Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Essential Addons](https://storybook.js.org/docs/react/essentials/introduction)

---

## 📅 Histórico de Mudanças

### Versão 1.0.0 (Implementação Inicial)

- ✅ Instalação e configuração do Storybook 10.0.8
- ✅ Integração com Tailwind CSS 4.1
- ✅ Suporte a dark mode com toggle
- ✅ Path aliases configurados
- ✅ 22 stories criadas para componentes principais
- ✅ Decorators para controle de tema
- ✅ Build para produção funcionando

---

**Última atualização:** 18/11/2024
**Versão do Storybook:** 10.0.8
**Mantenedor:** Claude Code

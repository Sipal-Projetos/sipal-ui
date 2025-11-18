# 📘 Sipal UI

**Versão:** 1.0.0

Biblioteca de componentes React moderna e completa para construção de interfaces administrativas e dashboards.

Construída com **React 18**, **TypeScript**, **Tailwind CSS 4.1**, **Radix UI**, **TanStack Table** e **Chart.js**.

---

## ✨ Características

- 🎨 **56 componentes** profissionais prontos para uso
- 🌗 **Dark Mode** nativo com suporte completo
- ♿ **Acessível** - Construído sobre Radix UI com suporte WAI-ARIA
- 📊 **Charts integrados** - Gráficos com tema sincronizado ao Tailwind
- 🎯 **TypeScript** - Tipagem completa em todos os componentes
- 🎭 **Tailwind CSS 4.1** - Sistema de design baseado em variáveis CSS
- 📱 **Responsivo** - Otimizado para mobile, tablet e desktop
- 🚀 **Tree-shakeable** - Bundle otimizado com imports individuais

---

## 📦 Instalação

```bash
npm install @sipal/ui
# ou
yarn add @sipal/ui
# ou
pnpm add @sipal/ui
```

### Peer Dependencies

```bash
npm install react react-dom tailwindcss
```

---

## 🚀 Quick Start

### 1. Configure o Tailwind CSS

No seu `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@sipal/ui/dist/**/*.{js,mjs}', // Adicione esta linha
  ],
  darkMode: 'class',
  plugins: [require('tailwindcss-animate')],
}

export default config
```

### 2. Importe o CSS do tema

No seu arquivo CSS principal (ex: `app/globals.css` ou `src/index.css`):

```css
@import "@sipal/ui/styles";
```

Ou importe diretamente no seu `_app.tsx` / `layout.tsx`:

```tsx
import '@sipal/ui/styles'
```

### 3. Use os componentes

```tsx
import { Button, Card, Input } from '@sipal/ui'

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Bem-vindo ao Sipal UI</Card.Title>
      </Card.Header>
      <Card.Content>
        <Input placeholder="Digite seu nome..." />
        <Button>Enviar</Button>
      </Card.Content>
    </Card>
  )
}
```

---

## 📚 Documentação

### 🎯 Início Rápido
- **[📋 Índice Visual de Componentes](./COMPONENT_INDEX.md)** - Referência rápida de todos os 56 componentes
- **[📖 Índice de Documentação](./docs/README.md)** - Portal completo da documentação

### 📖 Guias Detalhados
- **[Guia Completo - Parte 1](./docs/components-guide.md)** - Fundamentos & Formulários (22 componentes)
- **[Guia Completo - Parte 2](./docs/components-guide-part2.md)** - Visualização de Dados (11 componentes)
- **[Guia Completo - Parte 3](./docs/components-guide-part3.md)** - Charts & Navegação (15 componentes)
- **[Guia Completo - Parte 4](./docs/components-guide-part4.md)** - Feedback & Overlays (8 componentes)

### 🎨 Temas e Arquitetura
- [Arquitetura e Padrões](./docs/architecture.md)
- [Sistema de Temas](./docs/theming.md)
- [Sipal Charts](./docs/charts.md)
- [Exemplos Práticos](./docs/examples.md)

---

## 🎨 Sistema de Temas

A Sipal UI utiliza um sistema de temas baseado em **variáveis CSS** (Tailwind CSS 4.1).

### Customizando o Tema

Crie ou edite seu arquivo `src/styles/theme.css`:

```css
@import "tailwindcss";

@theme {
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --radius-lg: var(--radius);
}

:root {
  --primary: 222.2 47.4% 11.2%; /* Azul escuro */
  --primary-foreground: 210 40% 98%;
  --radius: 0.75rem; /* Bordas mais arredondadas */
}

.dark {
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
}
```

---

## 🧩 Categorias de Componentes

### Fundamentos (7 componentes)
`Button`, `Icon Button`, `Badge`, `Separator`, `Skeleton`, `Aspect Ratio`, `Label`

### Formulários (15 componentes)
`Input`, `Password Input`, `Textarea`, `Checkbox`, `Radio Group`, `Switch`, `Select`, `MultiSelect`, `Slider`, `Date Picker`, `Date Range Picker`, `Time Picker`, `File Upload`, `Color Picker`, `Form`

### Visualização de Dados (11 componentes)
`Card`, `KPI Card`, `Table`, `Data Table`, `Accordion`, `Collapsible`, `Scroll Area`, `Timeline`, `Tree View`, `Code Block`, `Resizable`

### Gráficos (7 componentes)
`Chart Container`, `Bar Chart`, `Line Chart`, `Area Chart`, `Pie Chart`, `Scatter Chart`, `Mixed Chart`

### Navegação (8 componentes)
`Avatar`, `Tabs`, `Breadcrumb`, `Pagination`, `Stepper`, `Menubar`, `Dropdown Menu`, `Side Navigation`

### Feedback & Overlays (8 componentes)
`Alert`, `Dialog`, `Sheet`, `Popover`, `Tooltip`, `Toast`, `Progress`, `Empty State`

---

## 🔗 Links Úteis

- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TanStack Table](https://tanstack.com/table)
- [Chart.js](https://www.chartjs.org/)

# 🎨 Guia de Temas - Sipal UI

Sistema completo de temas baseado em **Tailwind CSS 4.1** e **variáveis CSS**.

---

## 📋 Tokens de Design

### Cores Semânticas

| Token | Uso | Light Mode | Dark Mode |
|-------|-----|------------|-----------|
| `--primary` | Ações principais, links | `222.2 47.4% 11.2%` | `210 40% 98%` |
| `--secondary` | Ações secundárias | `210 40% 96.1%` | `217.2 32.6% 17.5%` |
| `--destructive` | Ações destrutivas, erros | `0 84.2% 60.2%` | `0 62.8% 30.6%` |
| `--muted` | Elementos de fundo | `210 40% 96.1%` | `217.2 32.6% 17.5%` |
| `--accent` | Destaques, hover | `210 40% 96.1%` | `217.2 32.6% 17.5%` |
| `--background` | Fundo da página | `0 0% 100%` | `222.2 84% 4.9%` |
| `--foreground` | Texto principal | `222.2 47.4% 11.2%` | `210 40% 98%` |
| `--border` | Bordas | `214.3 31.8% 91.4%` | `217.2 32.6% 17.5%` |

### Raios de Borda

```css
--radius: 0.5rem;        /* Padrão */
--radius-lg: var(--radius);
--radius-md: calc(var(--radius) - 2px);
--radius-sm: calc(var(--radius) - 4px);
```

---

## 🛠️ Customização

### Método 1: Sobrescrita de Variáveis CSS

Crie `src/styles/custom-theme.css`:

```css
@import "@sipal/ui/styles";

:root {
  /* Customiza cores */
  --primary: 263 70% 50%;      /* Roxo */
  --primary-foreground: 0 0% 100%;

  --destructive: 0 100% 67%;    /* Vermelho mais vibrante */

  /* Customiza bordas */
  --radius: 1rem;               /* Mais arredondado */
}

.dark {
  --primary: 263 90% 70%;
  --background: 240 10% 3.9%;   /* Fundo mais escuro */
}
```

### Método 2: Tema Personalizado Completo

```css
@import "tailwindcss";

@theme {
  --color-brand: var(--brand);
  --color-brand-foreground: var(--brand-foreground);
}

:root {
  /* Nova paleta */
  --brand: 142 76% 36%;         /* Verde corporativo */
  --brand-foreground: 0 0% 100%;

  --success: 142 71% 45%;
  --warning: 38 92% 50%;
  --error: 0 72% 51%;
  --info: 199 89% 48%;
}

/* Use no Tailwind */
.btn-brand {
  @apply bg-brand text-brand-foreground;
}
```

---

## 🌗 Dark Mode

### Ativação

```tsx
// app/layout.tsx (Next.js)
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark"> {/* Adicione 'dark' */}
      <body>{children}</body>
    </html>
  )
}
```

### Toggle Dinâmico

```tsx
'use client'
import { useState, useEffect } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
```

### Persistência (localStorage)

```tsx
useEffect(() => {
  const saved = localStorage.getItem('theme') || 'light'
  setTheme(saved)
}, [])

useEffect(() => {
  localStorage.setItem('theme', theme)
  document.documentElement.classList.toggle('dark', theme === 'dark')
}, [theme])
```

---

## 🎭 Temas Pré-Construídos

### Tema: Ocean Blue

```css
:root {
  --primary: 199 89% 48%;
  --primary-foreground: 0 0% 100%;
  --secondary: 210 50% 95%;
  --accent: 197 71% 73%;
}
```

### Tema: Sunset Orange

```css
:root {
  --primary: 24 95% 53%;
  --primary-foreground: 0 0% 100%;
  --secondary: 33 100% 96%;
  --accent: 43 96% 56%;
}
```

### Tema: Forest Green

```css
:root {
  --primary: 142 76% 36%;
  --primary-foreground: 0 0% 100%;
  --secondary: 138 76% 97%;
  --accent: 142 70% 45%;
}
```

---

## 📊 Cores nos Gráficos

Os gráficos da Sipal Charts automaticamente sincronizam com o tema:

```tsx
import { BarChart } from '@sipal/ui'

// As cores HSL são convertidas automaticamente para Hex
<BarChart
  data={{
    labels: ['Jan', 'Fev'],
    datasets: [{
      label: 'Vendas',
      data: [10, 20],
      backgroundColor: 'hsl(var(--primary))',  // ✅ Funciona!
    }]
  }}
/>
```

---

## 🔍 Debugging

### Visualizar Cores Ativas

```tsx
export function ThemeDebugger() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="h-20 bg-primary" />
      <div className="h-20 bg-secondary" />
      <div className="h-20 bg-destructive" />
      <div className="h-20 bg-muted" />
      <div className="h-20 bg-accent" />
    </div>
  )
}
```

### Inspecionar Variáveis CSS

```javascript
const primary = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary')
console.log('Primary color:', primary) // "222.2 47.4% 11.2%"
```

---

## 📚 Referências

- [Tailwind CSS v4 Theme Docs](https://tailwindcss.com/)
- [CSS Variables (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [HSL Color Model](https://en.wikipedia.org/wiki/HSL_and_HSV)

# 🏗️ Arquitetura da Sipal UI

Esta documentação descreve a arquitetura técnica e padrões de implementação da biblioteca **Sipal UI**.

---

## 📁 Estrutura de Diretórios

```
sipal-ui/
├── src/
│   ├── components/
│   │   └── ui/           # Todos os componentes exportáveis
│   ├── hooks/            # React Hooks customizados
│   ├── lib/              # Utilitários e helpers
│   └── styles/           # Temas e CSS global
├── docs/                 # Documentação
├── dist/                 # Build output (gerado)
└── package.json
```

---

## 🎯 Padrões de Implementação

### 1. Class Variance Authority (CVA)

Componentes simples (Button, Badge, etc.) usam **CVA** para variações visuais:

```typescript
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center...", // base
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
```

### 2. Radix UI Primitives

Componentes complexos (Dialog, Dropdown, etc.) são wrappers estilizados do **Radix UI**:

```typescript
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn("fixed left-1/2 top-1/2...", className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
))
```

### 3. Composição de Componentes

Componentes complexos exportam sub-componentes para flexibilidade:

```typescript
// card.tsx
export const Card = ({ className, ...props }) => (
  <div className={cn("rounded-lg border bg-card", className)} {...props} />
)

Card.Header = CardHeader
Card.Title = CardTitle
Card.Content = CardContent
Card.Footer = CardFooter

// Uso
<Card>
  <Card.Header>
    <Card.Title>Título</Card.Title>
  </Card.Header>
  <Card.Content>Conteúdo</Card.Content>
</Card>
```

---

## 🎨 Sistema de Temas

### Tailwind CSS 4.1 + Variáveis CSS

A Sipal UI utiliza a diretiva `@theme` do Tailwind v4 para mapear tokens semânticos:

```css
@theme {
  --color-primary: var(--primary);
  --color-destructive: var(--destructive);
  --radius-lg: var(--radius);
}

:root {
  --primary: 222.2 47.4% 11.2%; /* HSL */
  --destructive: 0 84.2% 60.2%;
  --radius: 0.5rem;
}

.dark {
  --primary: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
}
```

### Integração com Chart.js

O helper `getThemeColor()` converte variáveis HSL para Hex:

```typescript
export function getThemeColor(variable: string): string {
  const style = getComputedStyle(document.documentElement)
  const value = style.getPropertyValue(variable).trim()
  return hslToHex(value) // Conversão HSL → Hex
}

// Uso nos gráficos
ChartJS.defaults.color = getThemeColor('--muted-foreground')
```

---

## 🔧 Build System

### tsup Configuration

```typescript
// tsup.config.ts
export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'], // CommonJS e ES Modules
  dts: true,              // Gera arquivos .d.ts
  sourcemap: true,
  external: ['react', 'react-dom'],
  banner: { js: "'use client';" }, // Next.js App Router
  treeshake: true,
})
```

### Package.json Exports

```json
{
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": "./dist/styles/theme.css"
  }
}
```

---

## ♿ Acessibilidade

Todos os componentes interativos seguem as diretrizes **WAI-ARIA**:

- ✅ Navegação por teclado (`Tab`, `Enter`, `Escape`, setas)
- ✅ Atributos ARIA (`role`, `aria-label`, `aria-describedby`)
- ✅ Focus visible e focus trap em modais
- ✅ Suporte a leitores de tela

Exemplo:

```tsx
<button
  type="button"
  role="button"
  aria-label="Fechar"
  aria-describedby="dialog-title"
  onClick={onClose}
>
  <X className="h-4 w-4" />
</button>
```

---

## 🧪 TypeScript

### Props com Generics

Componentes genéricos (DataTable, Select) usam TypeScript Generics:

```typescript
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  // ...
}
```

### Type Safety com CVA

```typescript
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
```

---

## 🚀 Performance

### Tree-shaking

Cada componente é exportado individualmente:

```typescript
// ✅ Importação individual (recomendado)
import { Button } from '@sipal/ui'

// ✅ Também funciona (mas importa tudo)
import * as UI from '@sipal/ui'
```

### Code Splitting

Para componentes grandes, use **dynamic imports**:

```typescript
import dynamic from 'next/dynamic'

const DataTable = dynamic(() => import('@sipal/ui').then(m => m.DataTable), {
  ssr: false,
  loading: () => <Skeleton />
})
```

---

## 📚 Recursos Externos

- [Class Variance Authority](https://cva.style/)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/)
- [TanStack Table](https://tanstack.com/table/latest)

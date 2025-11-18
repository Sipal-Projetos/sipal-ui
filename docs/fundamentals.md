# 🧱 Componentes Fundamentais

Blocos de construção básicos da Sipal UI.

---

## Button

Botão de ação com múltiplas variantes e tamanhos.

### Variantes

- `default` - Botão preenchido com cor primária
- `destructive` - Para ações destrutivas (deletar, cancelar)
- `outline` - Botão com borda
- `secondary` - Ação secundária
- `ghost` - Sem fundo, apenas hover
- `link` - Estilo de link

### Tamanhos

- `default` - Tamanho padrão (h-10)
- `sm` - Pequeno (h-9)
- `lg` - Grande (h-11)
- `icon` - Quadrado para ícones (10x10)

### Exemplo

```tsx
import { Button } from '@sipal/ui'

function Example() {
  return (
    <>
      <Button>Salvar</Button>
      <Button variant="destructive">Deletar</Button>
      <Button variant="outline" size="sm">Cancelar</Button>
      <Button variant="ghost" size="icon">
        <Icon />
      </Button>
    </>
  )
}
```

---

## Badge

Indicador pequeno para status, contagens ou categorias.

### Variantes

- `default` - Badge primário
- `secondary` - Badge secundário
- `destructive` - Para status de erro
- `outline` - Apenas borda

### Exemplo

```tsx
import { Badge } from '@sipal/ui'

<Badge>Novo</Badge>
<Badge variant="destructive">Urgente</Badge>
<Badge variant="outline">Draft</Badge>
```

---

## Separator

Linha divisória horizontal ou vertical.

### Props

- `orientation` - "horizontal" (padrão) ou "vertical"

### Exemplo

```tsx
import { Separator } from '@sipal/ui'

<div>
  <p>Conteúdo acima</p>
  <Separator />
  <p>Conteúdo abaixo</p>
</div>
```

---

## Skeleton

Placeholder animado para estados de carregamento.

### Exemplo

```tsx
import { Skeleton } from '@sipal/ui'

function Loading() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-20 w-full" />
    </div>
  )
}
```

---

## Aspect Ratio

Mantém proporção de elementos (útil para imagens/vídeos).

### Exemplo

```tsx
import { AspectRatio } from '@sipal/ui'

<AspectRatio ratio={16 / 9}>
  <img src="..." alt="..." className="object-cover" />
</AspectRatio>
```

---

## Label

Rótulo acessível para inputs de formulário.

### Exemplo

```tsx
import { Label, Input } from '@sipal/ui'

<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</div>
```

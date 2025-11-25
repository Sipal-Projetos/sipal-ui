# 📖 Contexto de Componentes - Sipal UI

Este arquivo contém a documentação completa de todos os componentes da biblioteca Sipal UI, incluindo exemplos de uso e props principais.

---

## Instalação e Configuração

### 1. Instalação do Pacote

```bash
npm install @sipal/ui
# ou
yarn add @sipal/ui
# ou
pnpm add @sipal/ui
```

### 2. Configuração do Tailwind CSS

Adicione o caminho dos componentes no seu `tailwind.config.ts` (ou `.js`):

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}", // Para Next.js
    "./node_modules/@sipal/ui/dist/**/*.{js,mjs}" // 👈 Adicione esta linha
  ],
  // ... resto da configuração
}

export default config
```

### 3. Importação dos Estilos

Importe o CSS global da biblioteca no ponto de entrada da sua aplicação.

#### Next.js (App Router)
Em `app/layout.tsx`:
```tsx
import '@sipal/ui/styles'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
```

#### Vite / React
Em `src/main.tsx` ou `src/index.tsx`:
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@sipal/ui/styles' // 👈 Importe aqui
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## Índice

- [Fundamentos](#fundamentos)
- [Formulários](#formulários)
- [Visualização de Dados](#visualização-de-dados)
- [Sipal Charts](#sipal-charts)
- [Navegação](#navegação)
- [Feedback & Overlays](#feedback--overlays)

---

# Fundamentos

## 1. Button

Botão versátil com múltiplas variantes e tamanhos.

### Props Principais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | `default` \| `destructive` \| `outline` \| `secondary` \| `ghost` \| `link` | `default` | Estilo visual |
| `size` | `default` \| `sm` \| `lg` \| `icon` | `default` | Tamanho do botão |
| `asChild` | `boolean` | `false` | Renderiza como elemento filho |

### Exemplo de Uso

```tsx
import { Button } from '@sipal/ui'

<Button variant="default">Salvar</Button>
<Button variant="outline">Cancelar</Button>
```

## 2. Badge

Indicador visual para status, tags ou contadores.

### Props Principais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | `default` \| `secondary` \| `destructive` \| `outline` | `default` | Estilo visual |

### Exemplo de Uso

```tsx
import { Badge } from '@sipal/ui'

<Badge>Novo</Badge>
<Badge variant="secondary">Em Progresso</Badge>
```

## 3. Separator

Linha divisória horizontal ou vertical.

### Exemplo de Uso

```tsx
import { Separator } from '@sipal/ui'

<Separator className="my-4" />
<Separator orientation="vertical" />
```

## 4. Skeleton

Placeholder animado para estados de carregamento.

### Exemplo de Uso

```tsx
import { Skeleton } from '@sipal/ui'

<Skeleton className="h-4 w-[250px]" />
```

## 5. Aspect Ratio

Mantém proporção de elementos como imagens e vídeos.

### Exemplo de Uso

```tsx
import { AspectRatio } from '@sipal/ui'

<AspectRatio ratio={16 / 9}>
  <img src="..." alt="Image" className="rounded-md object-cover" />
</AspectRatio>
```

## 6. Label

Rótulo acessível para inputs de formulário.

### Exemplo de Uso

```tsx
import { Label } from '@sipal/ui'

<Label htmlFor="email">Email</Label>
```

---

# Formulários

## 7. Input

Campo de entrada de texto básico.

### Exemplo de Uso

```tsx
import { Input } from '@sipal/ui'

<Input type="email" placeholder="Email" />
```

## 8. Password Input

Campo de senha com toggle de visibilidade.

### Exemplo de Uso

```tsx
import { PasswordInput } from '@sipal/ui'

<PasswordInput id="password" />
```

## 9. Textarea

Campo de texto multilinha.

### Exemplo de Uso

```tsx
import { Textarea } from '@sipal/ui'

<Textarea placeholder="Digite sua mensagem aqui." />
```

## 10. Checkbox

Caixa de seleção binária.

### Exemplo de Uso

```tsx
import { Checkbox } from '@sipal/ui'

<Checkbox id="terms" />
```

## 11. Radio Group

Seleção única entre múltiplas opções.

### Exemplo de Uso

```tsx
import { RadioGroup, RadioGroupItem } from '@sipal/ui'

<RadioGroup defaultValue="option-one">
  <RadioGroupItem value="option-one" id="option-one" />
  <RadioGroupItem value="option-two" id="option-two" />
</RadioGroup>
```

## 12. Switch

Alternador do tipo On/Off.

### Exemplo de Uso

```tsx
import { Switch } from '@sipal/ui'

<Switch id="airplane-mode" />
```

## 13. Select

Dropdown de seleção.

### Exemplo de Uso

```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@sipal/ui'

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
  </SelectContent>
</Select>
```

## 14. MultiSelect

Seleção múltipla com busca e tags.

### Exemplo de Uso

```tsx
import { MultiSelect } from '@sipal/ui'

<MultiSelect
  options={[{ label: 'React', value: 'react' }, { label: 'Vue', value: 'vue' }]}
  selected={selected}
  onChange={setSelected}
/>
```

## 15. Slider

Controle deslizante para valores numéricos.

### Exemplo de Uso

```tsx
import { Slider } from '@sipal/ui'

<Slider defaultValue={[33]} max={100} step={1} />
```

## 16. Date Picker

Seleção de data única.

### Exemplo de Uso

```tsx
import { DatePicker } from '@sipal/ui'

<DatePicker date={date} setDate={setDate} />
```

## 17. Date Range Picker

Seleção de intervalo de datas.

### Exemplo de Uso

```tsx
import { DateRangePicker } from '@sipal/ui'

<DateRangePicker date={dateRange} setDate={setDateRange} />
```

## 18. Time Picker

Seleção de horário.

### Exemplo de Uso

```tsx
import { TimePicker } from '@sipal/ui'

<TimePicker date={date} setDate={setDate} />
```

## 19. File Upload

Upload de arquivos com drag and drop.

### Exemplo de Uso

```tsx
import { FileUpload } from '@sipal/ui'

<FileUpload onDrop={(files) => console.log(files)} />
```

## 20. Color Picker

Seletor de cores.

### Exemplo de Uso

```tsx
import { ColorPicker } from '@sipal/ui'

<ColorPicker color={color} onChange={setColor} />
```

## 21. Form

Integração com React Hook Form.

### Exemplo de Uso

```tsx
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@sipal/ui'

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>
```

---

# Visualização de Dados

## 22. Card

Container versátil para conteúdo.

### Exemplo de Uso

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@sipal/ui'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
</Card>
```

## 23. KPI Card

Card otimizado para métricas.

### Exemplo de Uso

```tsx
import { KpiCard } from '@sipal/ui'
import { Users } from 'lucide-react'

<KpiCard
  title="Total Users"
  value="10,482"
  icon={Users}
  trend={{ value: 12, direction: 'up' }}
/>
```

## 24. Table

Tabela HTML estilizada.

### Exemplo de Uso

```tsx
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@sipal/ui'

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV001</TableCell>
      <TableCell>Paid</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## 25. DataTable

Tabela avançada com ordenação e filtros.

### Exemplo de Uso

```tsx
import { DataTable } from '@sipal/ui'

<DataTable columns={columns} data={data} />
```

## 26. Accordion

Lista de itens colapsáveis.

### Exemplo de Uso

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@sipal/ui'

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## 27. Collapsible

Componente genérico de mostrar/esconder.

### Exemplo de Uso

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@sipal/ui'

<Collapsible>
  <CollapsibleTrigger>Can I use this?</CollapsibleTrigger>
  <CollapsibleContent>Yes. Free to use.</CollapsibleContent>
</Collapsible>
```

## 28. Scroll Area

Container com scrollbar customizada.

### Exemplo de Uso

```tsx
import { ScrollArea } from '@sipal/ui'

<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  Jokester began sneaking into the castle in the middle of the night...
</ScrollArea>
```

## 29. Timeline

Linha do tempo vertical.

### Exemplo de Uso

```tsx
import { Timeline } from '@sipal/ui'

<Timeline items={[{ title: 'Event 1', date: '2024-01-01' }]} />
```

## 30. Tree View

Visualização hierárquica.

### Exemplo de Uso

```tsx
import { TreeView } from '@sipal/ui'

<TreeView data={treeData} />
```

## 31. Code Block

Bloco de código com syntax highlighting.

### Exemplo de Uso

```tsx
import { CodeBlock } from '@sipal/ui'

<CodeBlock code="console.log('hello')" language="javascript" />
```

## 32. Resizable

Painéis redimensionáveis.

### Exemplo de Uso

```tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@sipal/ui'

<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>
```

---

# Sipal Charts

## 33. Bar Chart

Gráfico de barras.

### Exemplo de Uso

```tsx
import { BarChart } from '@sipal/ui'

<BarChart data={chartData} />
```

## 34. Line Chart

Gráfico de linhas.

### Exemplo de Uso

```tsx
import { LineChart } from '@sipal/ui'

<LineChart data={chartData} />
```

## 35. Area Chart

Gráfico de área.

### Exemplo de Uso

```tsx
import { AreaChart } from '@sipal/ui'

<AreaChart data={chartData} />
```

## 36. Pie/Doughnut Chart

Gráficos circulares.

### Exemplo de Uso

```tsx
import { PieChart, DoughnutChart } from '@sipal/ui'

<PieChart data={chartData} />
<DoughnutChart data={chartData} />
```

## 37. Scatter Chart

Gráfico de dispersão.

### Exemplo de Uso

```tsx
import { ScatterChart } from '@sipal/ui'

<ScatterChart data={chartData} />
```

## 38. Mixed Chart

Combinação de gráficos.

### Exemplo de Uso

```tsx
import { MixedChart } from '@sipal/ui'

<MixedChart data={chartData} />
```

---

# Navegação

## 39. Avatar

Imagem de perfil.

### Exemplo de Uso

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@sipal/ui'

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

## 40. Tabs

Navegação por abas.

### Exemplo de Uso

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@sipal/ui'

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
</Tabs>
```

## 41. Breadcrumb

Trilha de navegação.

### Exemplo de Uso

```tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@sipal/ui'

<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href="/">Home</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
```

## 42. Pagination

Paginação.

### Exemplo de Uso

```tsx
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@sipal/ui'

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## 43. Stepper

Indicador de progresso.

### Exemplo de Uso

```tsx
import { Stepper } from '@sipal/ui'

<Stepper steps={[{ label: 'Step 1' }, { label: 'Step 2' }]} currentStep={0} />
```

## 44. Menubar

Menu horizontal.

### Exemplo de Uso

```tsx
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@sipal/ui'

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

## 45. Dropdown Menu

Menu flutuante.

### Exemplo de Uso

```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@sipal/ui'

<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## 46. Context Menu

Menu de clique direito.

### Exemplo de Uso

```tsx
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@sipal/ui'

<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

## 47. Side Navigation

Sidebar de navegação.

### Exemplo de Uso

```tsx
import { SideNavigation, SideNavigationItem } from '@sipal/ui'

<SideNavigation>
  <SideNavigationItem label="Home" icon={<HomeIcon />} />
</SideNavigation>
```

---

# Feedback & Overlays

## 48. Alert

Mensagem de destaque.

### Exemplo de Uso

```tsx
import { Alert, AlertTitle, AlertDescription } from '@sipal/ui'

<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components to your app using the cli.</AlertDescription>
</Alert>
```

## 49. Dialog

Modal.

### Exemplo de Uso

```tsx
import { Dialog, DialogTrigger, DialogContent } from '@sipal/ui'

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

## 50. Sheet

Drawer lateral.

### Exemplo de Uso

```tsx
import { Sheet, SheetTrigger, SheetContent } from '@sipal/ui'

<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you sure?</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

## 51. Popover

Conteúdo flutuante.

### Exemplo de Uso

```tsx
import { Popover, PopoverTrigger, PopoverContent } from '@sipal/ui'

<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>
```

## 52. Tooltip

Dica de hover.

### Exemplo de Uso

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@sipal/ui'

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>Add to library</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## 53. Toast

Notificações.

### Exemplo de Uso

```tsx
import { toast } from '@sipal/ui'

<Button onClick={() => toast("Event has been created")}>Show Toast</Button>
```

## 54. Progress

Barra de progresso.

### Exemplo de Uso

```tsx
import { Progress } from '@sipal/ui'

<Progress value={33} />
```

## 55. Empty State

Estado vazio.

### Exemplo de Uso

```tsx
import { EmptyState } from '@sipal/ui'

<EmptyState title="No results" description="Try another search." />
```

## 56. Hover Card

Card de preview no hover.

### Exemplo de Uso

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@sipal/ui'

<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>The React Framework – created and maintained by @vercel.</HoverCardContent>
</HoverCard>
```

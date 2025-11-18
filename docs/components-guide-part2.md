# 📖 Guia Completo de Componentes - Sipal UI (Parte 2)

Continuação da documentação completa com exemplos práticos.

---

# Visualização de Dados

## 22. Card

Container versátil para conteúdo.

### Exemplo de Uso

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from '@sipal/ui'

export function CardExamples() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Card simples */}
      <Card>
        <CardHeader>
          <CardTitle>Título do Card</CardTitle>
          <CardDescription>Descrição do card</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Conteúdo do card vai aqui.</p>
        </CardContent>
        <CardFooter>
          <Button>Ação</Button>
        </CardFooter>
      </Card>

      {/* Card com composição alternativa */}
      <Card>
        <Card.Header>
          <Card.Title>Usando Composição</Card.Title>
          <Card.Description>Sintaxe alternativa</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Mesmo resultado, sintaxe diferente.</p>
        </Card.Content>
      </Card>
    </div>
  )
}
```

### Preview

```tsx
// Card de produto
function ProductCard({ product }) {
  return (
    <Card>
      <CardHeader>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="mt-2">
          {product.description}
        </CardDescription>
        <p className="text-2xl font-bold mt-4">
          {formatCurrency(product.price)}
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="flex-1">Comprar</Button>
        <Button variant="outline" size="icon">
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
```

---

## 23. KPI Card

Card otimizado para métricas e KPIs.

### Props Principais

| Prop | Tipo | Descrição |
|------|------|-----------|
| `title` | `string` | Título do KPI |
| `value` | `string \| number` | Valor principal |
| `icon` | `LucideIcon` | Ícone do canto superior |
| `description` | `string` | Texto descritivo |
| `trend` | `{value: number, direction: 'up' \| 'down'}` | Indicador de tendência |

### Exemplo de Uso

```tsx
import { KpiCard } from '@sipal/ui'
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'

export function KpiCardExamples() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <KpiCard
        title="Total de Usuários"
        value="2,543"
        icon={Users}
        trend={{ value: 12.5, direction: 'up' }}
        description="vs. mês anterior"
      />

      <KpiCard
        title="Receita Total"
        value="R$ 45.231,00"
        icon={DollarSign}
        trend={{ value: 8.2, direction: 'up' }}
        description="+R$ 3.450 este mês"
      />

      <KpiCard
        title="Vendas"
        value="189"
        icon={ShoppingCart}
        trend={{ value: 3.1, direction: 'down' }}
        description="-6 vendas"
      />

      <KpiCard
        title="Taxa de Conversão"
        value="3.2%"
        icon={TrendingUp}
        description="Meta: 4%"
      />
    </div>
  )
}
```

### Preview

```tsx
// Dashboard dinâmico
function Dashboard() {
  const { data, isLoading } = useQuery('metrics', fetchMetrics)

  if (isLoading) {
    return <div className="grid gap-4 md:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-32" />
      ))}
    </div>
  }

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <KpiCard
        title="Receita"
        value={formatCurrency(data.revenue)}
        icon={DollarSign}
        trend={{
          value: data.revenueGrowth,
          direction: data.revenueGrowth > 0 ? 'up' : 'down'
        }}
      />
      {/* Mais KPIs... */}
    </div>
  )
}
```

---

## 24. Table

Tabela HTML estilizada.

### Exemplo de Uso

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@sipal/ui'

export function TableExamples() {
  const invoices = [
    { id: 'INV001', status: 'Pago', amount: 'R$ 250,00' },
    { id: 'INV002', status: 'Pendente', amount: 'R$ 150,00' },
    { id: 'INV003', status: 'Pago', amount: 'R$ 350,00' },
  ]

  return (
    <Table>
      <TableCaption>Lista de faturas recentes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
```

---

## 25. DataTable

Tabela avançada com TanStack Table.

### Exemplo de Uso

```tsx
import { DataTable } from '@sipal/ui'
import { ColumnDef } from '@tanstack/react-table'

interface User {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
}

const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Cargo',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status')
      return (
        <Badge variant={status === 'active' ? 'default' : 'secondary'}>
          {status === 'active' ? 'Ativo' : 'Inativo'}
        </Badge>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Deletar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTableExample() {
  const data: User[] = [
    {
      id: '1',
      name: 'João Silva',
      email: 'joao@exemplo.com',
      role: 'Desenvolvedor',
      status: 'active',
    },
    // Mais dados...
  ]

  return (
    <DataTable
      columns={columns}
      data={data}
      searchKey="name"
      searchPlaceholder="Buscar por nome..."
    />
  )
}
```

### Preview com Seleção

```tsx
// DataTable com seleção de linhas
const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },
  // Outras colunas...
]

function SelectableDataTable() {
  const [rowSelection, setRowSelection] = useState({})

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        onRowSelectionChange={setRowSelection}
        state={{ rowSelection }}
      />

      {Object.keys(rowSelection).length > 0 && (
        <div className="mt-4">
          <p>{Object.keys(rowSelection).length} linha(s) selecionada(s)</p>
          <Button variant="destructive">
            Deletar Selecionados
          </Button>
        </div>
      )}
    </div>
  )
}
```

---

## 26. Accordion

Lista de itens colapsáveis.

### Exemplo de Uso

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@sipal/ui'

export function AccordionExamples() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>O que é Sipal UI?</AccordionTrigger>
        <AccordionContent>
          Sipal UI é uma biblioteca de componentes React moderna e acessível.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>É gratuito?</AccordionTrigger>
        <AccordionContent>
          Sim, é completamente gratuito e open source.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Como instalar?</AccordionTrigger>
        <AccordionContent>
          <code>npm install @sipal/ui</code>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

### Preview - Accordion Múltiplo

```tsx
// Permite múltiplos itens abertos
function MultipleAccordion() {
  return (
    <Accordion type="multiple" className="w-full">
      {/* Itens... */}
    </Accordion>
  )
}
```

---

## 27. Collapsible

Componente genérico de mostrar/esconder.

### Exemplo de Uso

```tsx
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
} from '@sipal/ui'

export function CollapsibleExamples() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>

      <div className="rounded-md border px-4 py-2 font-mono text-sm">
        @radix-ui/primitives
      </div>

      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
```

---

## 28. Scroll Area

Container com scrollbar customizada.

### Exemplo de Uso

```tsx
import { ScrollArea } from '@sipal/ui'

export function ScrollAreaExamples() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium">Tags</h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-sm">
            Tag {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
```

---

## 29. Timeline

Linha do tempo vertical.

### Exemplo de Uso

```tsx
import { Timeline } from '@sipal/ui'
import { CheckCircle, Clock, XCircle } from 'lucide-react'

export function TimelineExamples() {
  const events = [
    {
      title: 'Pedido realizado',
      description: 'Seu pedido foi confirmado',
      date: '10/01/2024 14:30',
      icon: CheckCircle,
    },
    {
      title: 'Em preparação',
      description: 'Separando os itens',
      date: '10/01/2024 15:00',
      icon: Clock,
    },
    {
      title: 'Saiu para entrega',
      description: 'Previsão: 2 horas',
      date: '10/01/2024 16:00',
      icon: CheckCircle,
    },
  ]

  return <Timeline items={events} />
}
```

---

## 30. Tree View

Visualização hierárquica de dados.

### Exemplo de Uso

```tsx
import { TreeView } from '@sipal/ui'

export function TreeViewExamples() {
  const data = [
    {
      id: '1',
      label: 'src',
      children: [
        {
          id: '1-1',
          label: 'components',
          children: [
            { id: '1-1-1', label: 'Button.tsx' },
            { id: '1-1-2', label: 'Input.tsx' },
          ],
        },
        {
          id: '1-2',
          label: 'lib',
          children: [
            { id: '1-2-1', label: 'utils.ts' },
          ],
        },
      ],
    },
    {
      id: '2',
      label: 'package.json',
    },
  ]

  return (
    <TreeView
      data={data}
      onNodeClick={(node) => console.log('Clicked:', node.label)}
    />
  )
}
```

---

## 31. Code Block

Bloco de código com syntax highlighting e botão de copiar.

### Exemplo de Uso

```tsx
import { CodeBlock } from '@sipal/ui'

export function CodeBlockExamples() {
  const code = `function hello() {
  console.log("Hello, World!")
}`

  return (
    <div className="space-y-4">
      <CodeBlock
        code={code}
        language="typescript"
      />

      <CodeBlock
        code={code}
        language="typescript"
        showLineNumbers
      />
    </div>
  )
}
```

---

## 32. Resizable

Painéis redimensionáveis.

### Exemplo de Uso

```tsx
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@sipal/ui'

export function ResizableExamples() {
  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-[400px]">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Painel Esquerdo</span>
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Topo</span>
            </div>
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Base</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

Continua na parte 3...

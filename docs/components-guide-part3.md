# 📖 Guia Completo de Componentes - Sipal UI (Parte 3)

Continuação: Charts, Navegação e Feedback.

---

# Sipal Charts

## 33-39. Gráficos

Todos os gráficos compartilham a mesma API base e sincronizam automaticamente com o tema.

### Props Principais (Todos os Gráficos)

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `data` | `ChartData` | - | Dados do gráfico |
| `options` | `ChartOptions` | `{}` | Configurações do Chart.js |
| `height` | `number` | `300` | Altura em pixels |
| `loading` | `boolean` | `false` | Mostra skeleton |
| `showLegend` | `boolean` | `true` | Exibe legenda |

---

## 33. Bar Chart

Gráfico de barras verticais ou horizontais.

### Exemplo de Uso

```tsx
import { BarChart } from '@sipal/ui'

export function BarChartExample() {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Vendas 2024',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'hsl(var(--primary))',
      },
      {
        label: 'Vendas 2023',
        data: [8, 15, 5, 7, 4, 6],
        backgroundColor: 'hsl(var(--secondary))',
      },
    ],
  }

  return <BarChart data={data} height={350} />
}
```

### Preview - Barras Horizontais

```tsx
function HorizontalBarChart() {
  return (
    <BarChart
      data={data}
      options={{
        indexAxis: 'y', // Horizontal
        plugins: {
          legend: { position: 'right' },
        },
      }}
    />
  )
}
```

---

## 34. Line Chart

Gráfico de linhas.

### Exemplo de Uso

```tsx
import { LineChart } from '@sipal/ui'

export function LineChartExample() {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Receita',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'hsl(var(--primary))',
        tension: 0.4, // Curva suave
      },
    ],
  }

  return <LineChart data={data} />
}
```

### Preview - Múltiplas Linhas

```tsx
function MultiLineChart() {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Produto A',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'hsl(var(--primary))',
      },
      {
        label: 'Produto B',
        data: [8, 15, 5, 7, 4, 6],
        borderColor: 'hsl(var(--destructive))',
      },
      {
        label: 'Produto C',
        data: [5, 10, 15, 10, 8, 12],
        borderColor: 'hsl(var(--accent))',
      },
    ],
  }

  return <LineChart data={data} />
}
```

---

## 35. Area Chart

Gráfico de área preenchida.

### Exemplo de Uso

```tsx
import { AreaChart } from '@sipal/ui'

export function AreaChartExample() {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Usuários Ativos',
        data: [50, 80, 120, 150, 200, 280],
        backgroundColor: 'hsla(var(--primary), 0.2)',
        borderColor: 'hsl(var(--primary))',
      },
    ],
  }

  return <AreaChart data={data} />
}
```

---

## 36. Pie & Doughnut Chart

Gráficos circulares.

### Exemplo de Uso

```tsx
import { PieChart, DoughnutChart } from '@sipal/ui'

export function PieChartExamples() {
  const data = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        data: [55, 35, 10],
        backgroundColor: [
          'hsl(var(--primary))',
          'hsl(var(--secondary))',
          'hsl(var(--accent))',
        ],
      },
    ],
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <PieChart data={data} />
      <DoughnutChart data={data} />
    </div>
  )
}
```

---

## 37. Scatter Chart

Gráfico de dispersão.

### Exemplo de Uso

```tsx
import { ScatterChart } from '@sipal/ui'

export function ScatterChartExample() {
  const data = {
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 25 },
          { x: 20, y: 30 },
          { x: 25, y: 22 },
          { x: 30, y: 28 },
        ],
        backgroundColor: 'hsl(var(--primary))',
      },
    ],
  }

  return <ScatterChart data={data} />
}
```

---

## 38. Mixed Chart

Combina diferentes tipos de gráficos.

### Exemplo de Uso

```tsx
import { MixedChart } from '@sipal/ui'

export function MixedChartExample() {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        type: 'bar' as const,
        label: 'Vendas',
        data: [10, 20, 15, 25, 18, 30],
        backgroundColor: 'hsl(var(--primary))',
      },
      {
        type: 'line' as const,
        label: 'Meta',
        data: [12, 18, 16, 20, 19, 25],
        borderColor: 'hsl(var(--destructive))',
        borderDash: [5, 5],
      },
    ],
  }

  return <MixedChart data={data} />
}
```

---

### Preview - Dashboard Completo com Charts

```tsx
function ChartDashboard() {
  const { data, isLoading } = useQuery('analytics', fetchAnalytics)

  return (
    <div className="space-y-8">
      {/* KPIs no topo */}
      <div className="grid gap-4 md:grid-cols-4">
        <KpiCard title="Vendas" value="R$ 45k" icon={DollarSign} />
        {/* Mais KPIs... */}
      </div>

      {/* Gráficos */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Vendas Mensais</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              data={data?.monthlySales}
              loading={isLoading}
              height={300}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart
              data={data?.categoryDistribution}
              loading={isLoading}
            />
          </CardContent>
        </Card>
      </div>

      {/* Gráfico largo */}
      <Card>
        <CardHeader>
          <CardTitle>Tendência Anual</CardTitle>
        </CardHeader>
        <CardContent>
          <MixedChart
            data={data?.yearlyTrend}
            loading={isLoading}
            height={400}
          />
        </CardContent>
      </Card>
    </div>
  )
}
```

---

# Navegação

## 39. Avatar

Imagem de perfil com fallback.

### Exemplo de Uso

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@sipal/ui'

export function AvatarExamples() {
  return (
    <div className="flex gap-4">
      {/* Com imagem */}
      <Avatar>
        <AvatarImage src="https://github.com/johndoe.png" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>

      {/* Apenas fallback */}
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      {/* Tamanhos diferentes */}
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs">SM</AvatarFallback>
      </Avatar>

      <Avatar className="h-16 w-16">
        <AvatarFallback className="text-lg">LG</AvatarFallback>
      </Avatar>
    </div>
  )
}
```

### Preview - Lista de Usuários

```tsx
function UserList({ users }) {
  return (
    <div className="space-y-4">
      {users.map(user => (
        <div key={user.id} className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={user.avatar} />
            <AvatarFallback>
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
```

---

## 40. Tabs

Navegação por abas.

### Exemplo de Uso

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@sipal/ui'

export function TabsExamples() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Conta</TabsTrigger>
        <TabsTrigger value="password">Senha</TabsTrigger>
        <TabsTrigger value="settings">Configurações</TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Informações da Conta</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Edite suas informações pessoais aqui.</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Alterar Senha</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Atualize sua senha aqui.</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Configurações</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Gerencie suas preferências.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
```

---

## 41. Breadcrumb

Trilha de navegação.

### Exemplo de Uso

```tsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@sipal/ui'

export function BreadcrumbExamples() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink href="/produtos">Produtos</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink href="/produtos/eletronicos">
            Eletrônicos
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>Notebook</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

### Preview - Com Ellipsis

```tsx
function LongBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink href="/path">Path</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>Current</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

---

## 42. Pagination

Controles de paginação.

### Exemplo de Uso

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@sipal/ui'

export function PaginationExamples() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#" isActive>1</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

---

## 43. Stepper

Indicador de progresso por etapas.

### Exemplo de Uso

```tsx
import { Stepper } from '@sipal/ui'

export function StepperExamples() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    { label: 'Informações', description: 'Dados pessoais' },
    { label: 'Endereço', description: 'Local de entrega' },
    { label: 'Pagamento', description: 'Forma de pagamento' },
    { label: 'Confirmação', description: 'Revisar pedido' },
  ]

  return (
    <div className="space-y-8">
      <Stepper steps={steps} currentStep={currentStep} />

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
        >
          Voltar
        </Button>

        <Button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
        >
          Próximo
        </Button>
      </div>
    </div>
  )
}
```

---

## 44-46. Menubar, Dropdown Menu

Menus contextuais.

### Exemplo de Uso - Menubar

```tsx
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from '@sipal/ui'

export function MenubarExample() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Arquivo</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Novo <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Abrir <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Salvar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Editar</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Desfazer</MenubarItem>
          <MenubarItem>Refazer</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```

---

## 47. Side Navigation

Sidebar responsiva (Desktop + Mobile).

### Exemplo de Uso

```tsx
import {
  SideNavigation,
  SideNavigationHeader,
  SideNavigationContent,
  SideNavigationFooter,
  SideNavigationItem,
} from '@sipal/ui'
import { Home, Users, Settings, LogOut } from 'lucide-react'

export function SideNavigationExample() {
  return (
    <div className="flex h-screen">
      <SideNavigation>
        <SideNavigationHeader>
          <h1 className="text-lg font-bold">Meu App</h1>
        </SideNavigationHeader>

        <SideNavigationContent>
          <div className="space-y-1 px-3">
            <SideNavigationItem
              icon={<Home className="h-4 w-4" />}
              label="Início"
              active
            />
            <SideNavigationItem
              icon={<Users className="h-4 w-4" />}
              label="Usuários"
            />
            <SideNavigationItem
              icon={<Settings className="h-4 w-4" />}
              label="Configurações"
            />
          </div>
        </SideNavigationContent>

        <SideNavigationFooter>
          <SideNavigationItem
            icon={<LogOut className="h-4 w-4" />}
            label="Sair"
          />
        </SideNavigationFooter>
      </SideNavigation>

      <main className="flex-1 overflow-auto p-8">
        {/* Conteúdo principal */}
      </main>
    </div>
  )
}
```

Continua na parte 4 (final)...

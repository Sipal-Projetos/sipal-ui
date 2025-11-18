# 💡 Exemplos Práticos

Casos de uso reais dos componentes da Sipal UI.

---

## Dashboard KPI

```tsx
import { KpiCard } from '@sipal/ui'
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'

function Dashboard() {
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
        title="Receita"
        value="R$ 45.231,00"
        icon={DollarSign}
        trend={{ value: 8.2, direction: 'up' }}
      />
      <KpiCard
        title="Vendas"
        value="189"
        icon={ShoppingCart}
        trend={{ value: 3.1, direction: 'down' }}
      />
      <KpiCard
        title="Taxa de Conversão"
        value="3.2%"
        icon={TrendingUp}
      />
    </div>
  )
}
```

---

## Formulário Completo com Validação

```tsx
import { useForm } from 'react-hook-form'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Input,
  Button,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@sipal/ui'

function UserForm() {
  const form = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field} />
              </FormControl>
              <FormDescription>
                Seu nome completo
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cargo</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="dev">Desenvolvedor</SelectItem>
                  <SelectItem value="design">Designer</SelectItem>
                  <SelectItem value="manager">Gerente</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Salvar</Button>
      </form>
    </Form>
  )
}
```

---

## DataTable com Filtros

```tsx
import { DataTable } from '@sipal/ui'
import { ColumnDef } from '@tanstack/react-table'

interface User {
  id: string
  name: string
  email: string
  role: string
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
]

function UsersTable({ data }: { data: User[] }) {
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

---

## Sidebar de Navegação (Desktop + Mobile)

```tsx
import {
  SideNavigation,
  SideNavigationHeader,
  SideNavigationContent,
  SideNavigationFooter,
  SideNavigationItem,
} from '@sipal/ui'
import { Home, Users, Settings, LogOut } from 'lucide-react'

function AppLayout({ children }) {
  return (
    <div className="flex h-screen">
      <SideNavigation>
        <SideNavigationHeader>
          <h1 className="font-bold">Sipal App</h1>
        </SideNavigationHeader>

        <SideNavigationContent>
          <SideNavigationItem icon={<Home className="h-4 w-4" />} label="Início" active />
          <SideNavigationItem icon={<Users className="h-4 w-4" />} label="Usuários" />
          <SideNavigationItem icon={<Settings className="h-4 w-4" />} label="Configurações" />
        </SideNavigationContent>

        <SideNavigationFooter>
          <SideNavigationItem icon={<LogOut className="h-4 w-4" />} label="Sair" />
        </SideNavigationFooter>
      </SideNavigation>

      <main className="flex-1 overflow-auto p-8">
        {children}
      </main>
    </div>
  )
}
```

---

## Modal de Confirmação

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Button,
} from '@sipal/ui'

function DeleteConfirmation({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tem certeza?</DialogTitle>
          <DialogDescription>
            Esta ação não pode ser desfeita. O item será deletado permanentemente.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Deletar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

---

## Timeline de Atividades

```tsx
import { Timeline } from '@sipal/ui'
import { CheckCircle, Clock, XCircle } from 'lucide-react'

const activities = [
  {
    title: 'Pedido confirmado',
    description: 'Seu pedido foi confirmado e está sendo processado.',
    date: '10/01/2024 14:30',
    icon: CheckCircle,
  },
  {
    title: 'Em preparação',
    description: 'Os itens estão sendo separados.',
    date: '10/01/2024 15:00',
    icon: Clock,
  },
  {
    title: 'Saiu para entrega',
    description: 'Previsão de entrega: 2 horas',
    date: '10/01/2024 16:00',
    icon: CheckCircle,
  },
]

function OrderTracking() {
  return <Timeline items={activities} />
}
```

---

## Empty State

```tsx
import { EmptyState, Button } from '@sipal/ui'
import { Inbox } from 'lucide-react'

function NoMessages() {
  return (
    <EmptyState
      icon={Inbox}
      title="Nenhuma mensagem"
      description="Quando você receber mensagens, elas aparecerão aqui."
      action={<Button>Nova Mensagem</Button>}
    />
  )
}
```

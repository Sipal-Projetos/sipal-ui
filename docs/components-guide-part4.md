# 📖 Guia Completo de Componentes - Sipal UI (Parte 4 - Final)

Última parte: Feedback & Overlays.

---

# Feedback & Overlays

## 48. Alert

Mensagens de destaque inline.

### Props Principais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | `default` \| `destructive` | `default` | Estilo visual |

### Exemplo de Uso

```tsx
import { Alert, AlertTitle, AlertDescription } from '@sipal/ui'
import { AlertCircle, CheckCircle, Info } from 'lucide-react'

export function AlertExamples() {
  return (
    <div className="space-y-4">
      {/* Alert de sucesso */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Sucesso!</AlertTitle>
        <AlertDescription>
          Sua operação foi concluída com sucesso.
        </AlertDescription>
      </Alert>

      {/* Alert de erro */}
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription>
          Ocorreu um erro ao processar sua solicitação.
        </AlertDescription>
      </Alert>

      {/* Alert informativo */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Informação</AlertTitle>
        <AlertDescription>
          Esta funcionalidade estará disponível em breve.
        </AlertDescription>
      </Alert>
    </div>
  )
}
```

### Preview - Alert Dismissible

```tsx
function DismissibleAlert() {
  const [show, setShow] = useState(true)

  if (!show) return null

  return (
    <Alert className="relative">
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Atualização disponível</AlertTitle>
      <AlertDescription>
        Uma nova versão do app está disponível.
      </AlertDescription>
      <button
        onClick={() => setShow(false)}
        className="absolute right-2 top-2 rounded-sm opacity-70 hover:opacity-100"
      >
        <X className="h-4 w-4" />
      </button>
    </Alert>
  )
}
```

---

## 49. Dialog (Modal)

Janela modal sobreposta.

### Exemplo de Uso

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from '@sipal/ui'

export function DialogExamples() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir Modal</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
          <DialogDescription>
            Faça alterações em seu perfil aqui. Clique em salvar quando terminar.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" defaultValue="João Silva" />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="joao@exemplo.com" />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline">Cancelar</Button>
          <Button>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

### Preview - Modal de Confirmação

```tsx
function DeleteConfirmDialog({ item, onConfirm }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Deletar
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Você tem certeza?</DialogTitle>
          <DialogDescription>
            Esta ação não pode ser desfeita. Isso irá deletar permanentemente{' '}
            <span className="font-semibold">{item.name}</span>.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              onConfirm()
              setOpen(false)
            }}
          >
            Sim, deletar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

---

## 50. Sheet (Drawer)

Painel deslizante lateral.

### Props Principais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `side` | `top` \| `right` \| `bottom` \| `left` | `right` | Lado de origem |

### Exemplo de Uso

```tsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from '@sipal/ui'

export function SheetExamples() {
  return (
    <div className="flex gap-4">
      {/* Drawer da direita */}
      <Sheet>
        <SheetTrigger asChild>
          <Button>Abrir Drawer</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filtros</SheetTitle>
            <SheetDescription>
              Configure os filtros de busca
            </SheetDescription>
          </SheetHeader>

          <div className="py-4 space-y-4">
            {/* Conteúdo dos filtros */}
          </div>
        </SheetContent>
      </Sheet>

      {/* Drawer da esquerda */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Menu</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          {/* Itens do menu */}
        </SheetContent>
      </Sheet>

      {/* Drawer de baixo */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Notificações</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Notificações Recentes</SheetTitle>
          </SheetHeader>
          {/* Lista de notificações */}
        </SheetContent>
      </Sheet>
    </div>
  )
}
```

### Preview - Carrinho de Compras

```tsx
function ShoppingCartSheet({ items }) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <Badge className="absolute -right-2 -top-2 h-5 w-5 p-0 flex items-center justify-center">
              {items.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho ({items.length} itens)</SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 py-4">
            {items.map(item => (
              <div key={item.id} className="flex gap-4">
                <img src={item.image} className="h-16 w-16 rounded object-cover" />
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {formatCurrency(item.price)} × {item.qty}
                  </p>
                </div>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>

        <Separator className="my-4" />

        <div className="space-y-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>

          <Button className="w-full" size="lg">
            Finalizar Compra
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
```

---

## 51. Popover

Conteúdo flutuante ativado por clique.

### Exemplo de Uso

```tsx
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
} from '@sipal/ui'

export function PopoverExamples() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Abrir Popover</Button>
      </PopoverTrigger>

      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium">Dimensões</h4>
          <p className="text-sm text-muted-foreground">
            Configure as dimensões do elemento.
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <Label htmlFor="width" className="w-20">Largura</Label>
              <Input id="width" type="number" defaultValue={100} />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="height" className="w-20">Altura</Label>
              <Input id="height" type="number" defaultValue={100} />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

---

## 52. Tooltip

Dica flutuante ativada por hover.

### Exemplo de Uso

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Button,
} from '@sipal/ui'

export function TooltipExamples() {
  return (
    <TooltipProvider>
      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover aqui</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Esta é uma dica útil</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <Info className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Informações adicionais</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
```

---

## 53. Toast

Notificações temporárias (usando Sonner).

### Setup (uma vez no app)

```tsx
// app/layout.tsx ou _app.tsx
import { Toaster } from '@sipal/ui'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
```

### Exemplo de Uso

```tsx
import { toast } from '@sipal/ui'
import { Button } from '@sipal/ui'

export function ToastExamples() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Toast simples */}
      <Button onClick={() => toast('Mensagem enviada!')}>
        Toast Simples
      </Button>

      {/* Toast com título */}
      <Button onClick={() => toast('Sucesso', {
        description: 'Seu arquivo foi salvo.',
      })}>
        Toast com Descrição
      </Button>

      {/* Toast de sucesso */}
      <Button onClick={() => toast.success('Salvo com sucesso!')}>
        Sucesso
      </Button>

      {/* Toast de erro */}
      <Button
        variant="destructive"
        onClick={() => toast.error('Erro ao salvar')}
      >
        Erro
      </Button>

      {/* Toast com ação */}
      <Button onClick={() => toast('Item deletado', {
        action: {
          label: 'Desfazer',
          onClick: () => console.log('Undo'),
        },
      })}>
        Com Ação
      </Button>

      {/* Toast de loading */}
      <Button onClick={() => {
        const id = toast.loading('Processando...')
        setTimeout(() => {
          toast.success('Concluído!', { id })
        }, 2000)
      }}>
        Loading
      </Button>

      {/* Toast com duração customizada */}
      <Button onClick={() => toast('Será fechado em 10s', {
        duration: 10000,
      })}>
        10 Segundos
      </Button>
    </div>
  )
}
```

### Preview - Toast em Ações Async

```tsx
async function saveData() {
  const promise = fetch('/api/save', { method: 'POST' })

  toast.promise(promise, {
    loading: 'Salvando...',
    success: 'Salvo com sucesso!',
    error: 'Erro ao salvar',
  })
}

function SaveButton() {
  return (
    <Button onClick={saveData}>
      Salvar
    </Button>
  )
}
```

---

## 54. Progress

Barra de progresso linear.

### Exemplo de Uso

```tsx
import { Progress } from '@sipal/ui'

export function ProgressExamples() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10))
    }, 500)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-4">
      <div>
        <Label>Progresso: {progress}%</Label>
        <Progress value={progress} className="mt-2" />
      </div>

      <div>
        <Label>Upload</Label>
        <Progress value={45} className="mt-2" />
      </div>

      <div>
        <Label>Download</Label>
        <Progress value={70} className="mt-2 h-2" />
      </div>
    </div>
  )
}
```

### Preview - Upload com Progresso

```tsx
function FileUploadWithProgress() {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const uploadFile = async (file: File) => {
    setUploading(true)
    setProgress(0)

    // Simula upload
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          toast.success('Upload concluído!')
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div className="space-y-4">
      <FileUpload
        onDrop={(files) => uploadFile(files[0])}
        disabled={uploading}
      />

      {uploading && (
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Enviando arquivo...</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} />
        </div>
      )}
    </div>
  )
}
```

---

## 55. Empty State

Placeholder visual para quando não há dados.

### Props Principais

| Prop | Tipo | Descrição |
|------|------|-----------|
| `icon` | `LucideIcon` | Ícone do estado vazio |
| `title` | `string` | Título |
| `description` | `string` | Descrição |
| `action` | `ReactNode` | Ação (geralmente um botão) |

### Exemplo de Uso

```tsx
import { EmptyState, Button } from '@sipal/ui'
import { Inbox, FileText, Users, ShoppingBag } from 'lucide-react'

export function EmptyStateExamples() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Sem mensagens */}
      <EmptyState
        icon={Inbox}
        title="Nenhuma mensagem"
        description="Quando você receber mensagens, elas aparecerão aqui."
        action={<Button>Nova Mensagem</Button>}
      />

      {/* Sem documentos */}
      <EmptyState
        icon={FileText}
        title="Nenhum documento"
        description="Comece criando seu primeiro documento."
        action={
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Criar Documento
          </Button>
        }
      />

      {/* Sem usuários */}
      <EmptyState
        icon={Users}
        title="Nenhum usuário encontrado"
        description="Tente ajustar os filtros ou convide novos membros."
      />

      {/* Carrinho vazio */}
      <EmptyState
        icon={ShoppingBag}
        title="Carrinho vazio"
        description="Adicione produtos ao seu carrinho para começar."
        action={<Button>Explorar Produtos</Button>}
      />
    </div>
  )
}
```

### Preview - Lista Condicional

```tsx
function UserList() {
  const { data: users, isLoading } = useQuery('users', fetchUsers)

  if (isLoading) {
    return <UserListSkeleton />
  }

  if (users.length === 0) {
    return (
      <EmptyState
        icon={Users}
        title="Nenhum usuário cadastrado"
        description="Comece adicionando o primeiro usuário ao sistema."
        action={
          <Button onClick={() => router.push('/users/new')}>
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Usuário
          </Button>
        }
      />
    )
  }

  return (
    <div className="space-y-4">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
```

---

# 🎯 Conclusão

Você agora tem acesso a **56 componentes** profissionais e prontos para uso!

## Quick Links

- [README Principal](../README.md)
- [Arquitetura](./architecture.md)
- [Temas](./theming.md)
- [Gráficos](./charts.md)
- [Exemplos Práticos](./examples.md)

## Próximos Passos

1. **Instale as dependências:**
   ```bash
   npm install @sipal/ui
   ```

2. **Configure o tema:**
   ```tsx
   import '@sipal/ui/styles'
   ```

3. **Comece a usar:**
   ```tsx
   import { Button, Card } from '@sipal/ui'
   ```

## Suporte

- 📖 [Documentação Completa](https://github.com/Sipal-Projetos/sipal-ui)
- 💬 [Issues](https://github.com/Sipal-Projetos/sipal-ui/issues)
- 🌟 [Exemplos no CodeSandbox](https://codesandbox.io/examples/sipal-ui)

---

**Feito com ❤️ pela equipe Sipal**

# 📖 Guia Completo de Componentes - Sipal UI

Documentação completa com exemplos práticos de todos os 56 componentes da biblioteca.

---

## 📑 Índice

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
import { Plus, Trash2 } from 'lucide-react'

export function ButtonExamples() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Variantes */}
      <Button variant="default">Salvar</Button>
      <Button variant="destructive">Deletar</Button>
      <Button variant="outline">Cancelar</Button>
      <Button variant="secondary">Secundário</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>

      {/* Tamanhos */}
      <Button size="sm">Pequeno</Button>
      <Button size="default">Padrão</Button>
      <Button size="lg">Grande</Button>

      {/* Com ícones */}
      <Button size="icon">
        <Plus className="h-4 w-4" />
      </Button>

      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Adicionar Item
      </Button>

      {/* Estados */}
      <Button disabled>Desabilitado</Button>
    </div>
  )
}
```

### Preview

```tsx
// Botão com loading
function SubmitButton() {
  const [loading, setLoading] = useState(false)

  return (
    <Button
      onClick={async () => {
        setLoading(true)
        await saveData()
        setLoading(false)
      }}
      disabled={loading}
    >
      {loading ? 'Salvando...' : 'Salvar'}
    </Button>
  )
}
```

---

## 2. Badge

Indicador visual para status, tags ou contadores.

### Props Principais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | `default` \| `secondary` \| `destructive` \| `outline` | `default` | Estilo visual |

### Exemplo de Uso

```tsx
import { Badge } from '@sipal/ui'

export function BadgeExamples() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Novo</Badge>
      <Badge variant="secondary">Em Progresso</Badge>
      <Badge variant="destructive">Urgente</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  )
}
```

### Preview

```tsx
// Badge com status dinâmico
function StatusBadge({ status }: { status: 'active' | 'pending' | 'inactive' }) {
  const variants = {
    active: 'default',
    pending: 'secondary',
    inactive: 'outline',
  } as const

  return <Badge variant={variants[status]}>{status}</Badge>
}

// Badge com contador
function NotificationBadge({ count }: { count: number }) {
  if (count === 0) return null

  return (
    <div className="relative">
      <Bell className="h-5 w-5" />
      <Badge className="absolute -right-2 -top-2 h-5 w-5 p-0 flex items-center justify-center">
        {count > 99 ? '99+' : count}
      </Badge>
    </div>
  )
}
```

---

## 3. Separator

Linha divisória horizontal ou vertical.

### Props Principais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `orientation` | `horizontal` \| `vertical` | `horizontal` | Direção da linha |

### Exemplo de Uso

```tsx
import { Separator } from '@sipal/ui'

export function SeparatorExamples() {
  return (
    <div className="space-y-4">
      <div>
        <h3>Seção 1</h3>
        <Separator className="my-4" />
        <p>Conteúdo da seção 1</p>
      </div>

      <div className="flex h-20 items-center space-x-4">
        <span>Item 1</span>
        <Separator orientation="vertical" />
        <span>Item 2</span>
      </div>
    </div>
  )
}
```

---

## 4. Skeleton

Placeholder animado para estados de carregamento.

### Exemplo de Uso

```tsx
import { Skeleton } from '@sipal/ui'

export function SkeletonExamples() {
  return (
    <div className="space-y-4">
      {/* Card skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      {/* Avatar + texto */}
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
    </div>
  )
}
```

### Preview

```tsx
// Skeleton de lista
function UserListSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  )
}
```

---

## 5. Aspect Ratio

Mantém proporção de elementos como imagens e vídeos.

### Exemplo de Uso

```tsx
import { AspectRatio } from '@sipal/ui'

export function AspectRatioExamples() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* 16:9 - Vídeo */}
      <AspectRatio ratio={16 / 9}>
        <img
          src="/video-thumbnail.jpg"
          alt="Video"
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>

      {/* 1:1 - Quadrado */}
      <AspectRatio ratio={1}>
        <img
          src="/profile.jpg"
          alt="Profile"
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>

      {/* 4:3 - Clássico */}
      <AspectRatio ratio={4 / 3}>
        <img
          src="/photo.jpg"
          alt="Photo"
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>
    </div>
  )
}
```

---

## 6. Label

Rótulo acessível para inputs de formulário.

### Exemplo de Uso

```tsx
import { Label } from '@sipal/ui'

export function LabelExamples() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="seu@email.com" />
    </div>
  )
}
```

---

# Formulários

## 7. Input

Campo de entrada de texto básico.

### Exemplo de Uso

```tsx
import { Input, Label } from '@sipal/ui'

export function InputExamples() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Nome</Label>
        <Input id="name" placeholder="Digite seu nome" />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="seu@email.com" />
      </div>

      <div>
        <Label htmlFor="number">Número</Label>
        <Input id="number" type="number" placeholder="0" />
      </div>

      <Input disabled placeholder="Campo desabilitado" />
    </div>
  )
}
```

### Preview

```tsx
// Input com validação
function ValidatedInput() {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const validate = (v: string) => {
    if (v.length < 3) {
      setError('Mínimo 3 caracteres')
    } else {
      setError('')
    }
  }

  return (
    <div>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          validate(e.target.value)
        }}
        className={error ? 'border-destructive' : ''}
      />
      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </div>
  )
}
```

---

## 8. Password Input

Campo de senha com toggle de visibilidade.

### Exemplo de Uso

```tsx
import { PasswordInput, Label } from '@sipal/ui'

export function PasswordInputExamples() {
  return (
    <div className="space-y-2">
      <Label htmlFor="password">Senha</Label>
      <PasswordInput
        id="password"
        placeholder="Digite sua senha"
      />
    </div>
  )
}
```

### Preview

```tsx
// Formulário de login
function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="password">Senha</Label>
        <PasswordInput
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full">
        Entrar
      </Button>
    </form>
  )
}
```

---

## 9. Textarea

Campo de texto multilinha.

### Exemplo de Uso

```tsx
import { Textarea, Label } from '@sipal/ui'

export function TextareaExamples() {
  return (
    <div className="space-y-2">
      <Label htmlFor="message">Mensagem</Label>
      <Textarea
        id="message"
        placeholder="Digite sua mensagem..."
        rows={5}
      />
    </div>
  )
}
```

---

## 10. Checkbox

Caixa de seleção binária.

### Exemplo de Uso

```tsx
import { Checkbox, Label } from '@sipal/ui'

export function CheckboxExamples() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Aceito os termos e condições</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="newsletter"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="newsletter">
          Quero receber newsletter
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Desabilitado</Label>
      </div>
    </div>
  )
}
```

### Preview

```tsx
// Lista de tarefas
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Fazer compras', done: false },
    { id: 2, text: 'Estudar React', done: true },
    { id: 3, text: 'Exercícios', done: false },
  ])

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <div key={todo.id} className="flex items-center space-x-2">
          <Checkbox
            checked={todo.done}
            onCheckedChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.done ? 'line-through text-muted-foreground' : ''}>
            {todo.text}
          </span>
        </div>
      ))}
    </div>
  )
}
```

---

## 11. Radio Group

Seleção única entre múltiplas opções.

### Exemplo de Uso

```tsx
import { RadioGroup, RadioGroupItem, Label } from '@sipal/ui'

export function RadioGroupExamples() {
  return (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Opção 1</Label>
      </div>

      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Opção 2</Label>
      </div>

      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">Opção 3</Label>
      </div>
    </RadioGroup>
  )
}
```

### Preview

```tsx
// Seletor de plano
function PlanSelector() {
  const [plan, setPlan] = useState('basic')

  return (
    <RadioGroup value={plan} onValueChange={setPlan}>
      <div className="space-y-4">
        {[
          { id: 'basic', name: 'Básico', price: 'R$ 29/mês' },
          { id: 'pro', name: 'Pro', price: 'R$ 99/mês' },
          { id: 'enterprise', name: 'Enterprise', price: 'Personalizado' },
        ].map((option) => (
          <div
            key={option.id}
            className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent"
          >
            <RadioGroupItem value={option.id} id={option.id} />
            <Label htmlFor={option.id} className="flex-1 cursor-pointer">
              <div className="font-medium">{option.name}</div>
              <div className="text-sm text-muted-foreground">{option.price}</div>
            </Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  )
}
```

---

## 12. Switch

Alternador do tipo On/Off.

### Exemplo de Uso

```tsx
import { Switch, Label } from '@sipal/ui'

export function SwitchExamples() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="airplane" />
        <Label htmlFor="airplane">Modo Avião</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="notifications"
          checked={enabled}
          onCheckedChange={setEnabled}
        />
        <Label htmlFor="notifications">
          Notificações {enabled ? 'ativadas' : 'desativadas'}
        </Label>
      </div>
    </div>
  )
}
```

---

## 13. Select

Dropdown de seleção.

### Exemplo de Uso

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@sipal/ui'

export function SelectExamples() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Selecione um país" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="br">Brasil</SelectItem>
        <SelectItem value="us">Estados Unidos</SelectItem>
        <SelectItem value="uk">Reino Unido</SelectItem>
        <SelectItem value="ca">Canadá</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

### Preview

```tsx
// Select com grupos
function GroupedSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Selecione uma fruta" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frutas Cítricas</SelectLabel>
          <SelectItem value="orange">Laranja</SelectItem>
          <SelectItem value="lemon">Limão</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Frutas Tropicais</SelectLabel>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="mango">Manga</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
```

---

## 14. MultiSelect

Seleção múltipla com busca e tags.

### Exemplo de Uso

```tsx
import { MultiSelect } from '@sipal/ui'

export function MultiSelectExamples() {
  const [selected, setSelected] = useState<string[]>([])

  const frameworks = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Next.js', value: 'nextjs' },
  ]

  return (
    <MultiSelect
      options={frameworks}
      selected={selected}
      onChange={setSelected}
      placeholder="Selecione frameworks..."
    />
  )
}
```

### Preview

```tsx
// MultiSelect com limite
function LimitedMultiSelect() {
  const [selected, setSelected] = useState<string[]>([])
  const MAX_SELECTIONS = 3

  const handleChange = (values: string[]) => {
    if (values.length <= MAX_SELECTIONS) {
      setSelected(values)
    }
  }

  return (
    <div>
      <MultiSelect
        options={options}
        selected={selected}
        onChange={handleChange}
        placeholder={`Selecione até ${MAX_SELECTIONS} itens`}
      />
      <p className="text-sm text-muted-foreground mt-2">
        {selected.length}/{MAX_SELECTIONS} selecionados
      </p>
    </div>
  )
}
```

---

## 15. Slider

Controle deslizante para valores numéricos.

### Exemplo de Uso

```tsx
import { Slider } from '@sipal/ui'

export function SliderExamples() {
  const [value, setValue] = useState([50])

  return (
    <div className="space-y-6">
      <div>
        <Label>Volume: {value[0]}%</Label>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
        />
      </div>

      <div>
        <Label>Faixa de preço</Label>
        <Slider
          defaultValue={[25, 75]}
          max={100}
          step={1}
        />
      </div>
    </div>
  )
}
```

---

## 16-18. Date Picker, Date Range Picker, Time Picker

Seletores de data e hora.

### Exemplo de Uso

```tsx
import { DatePicker, DateRangePicker, TimePicker } from '@sipal/ui'

export function DateTimeExamples() {
  const [date, setDate] = useState<Date>()
  const [dateRange, setDateRange] = useState<DateRange>()
  const [time, setTime] = useState('')

  return (
    <div className="space-y-4">
      <div>
        <Label>Data única</Label>
        <DatePicker date={date} onSelect={setDate} />
      </div>

      <div>
        <Label>Período</Label>
        <DateRangePicker
          dateRange={dateRange}
          onSelect={setDateRange}
        />
      </div>

      <div>
        <Label>Horário</Label>
        <TimePicker value={time} onChange={setTime} />
      </div>
    </div>
  )
}
```

---

## 19. File Upload

Upload de arquivos com drag-and-drop.

### Exemplo de Uso

```tsx
import { FileUpload } from '@sipal/ui'

export function FileUploadExamples() {
  const handleDrop = (files: File[]) => {
    console.log('Arquivos:', files)
  }

  return (
    <div className="space-y-4">
      {/* Upload básico */}
      <FileUpload onDrop={handleDrop} />

      {/* Apenas imagens */}
      <FileUpload
        onDrop={handleDrop}
        accept={{
          'image/*': ['.png', '.jpg', '.jpeg', '.gif']
        }}
        maxFiles={5}
      />

      {/* Com limite de tamanho */}
      <FileUpload
        onDrop={handleDrop}
        maxSize={5 * 1024 * 1024} // 5MB
        showPreview={true}
      />
    </div>
  )
}
```

---

## 20. Color Picker

Seletor de cores.

### Exemplo de Uso

```tsx
import { ColorPicker } from '@sipal/ui'

export function ColorPickerExamples() {
  const [color, setColor] = useState('#3b82f6')

  return (
    <div className="space-y-4">
      <ColorPicker value={color} onChange={setColor} />

      <div
        className="h-20 rounded-md"
        style={{ backgroundColor: color }}
      />
    </div>
  )
}
```

---

## 21. Form (React Hook Form)

Integração com React Hook Form.

### Exemplo de Uso

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
} from '@sipal/ui'

interface FormData {
  username: string
  email: string
}

export function FormExample() {
  const form = useForm<FormData>({
    defaultValues: {
      username: '',
      email: '',
    },
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          rules={{ required: 'Campo obrigatório' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome de usuário</FormLabel>
              <FormControl>
                <Input placeholder="joao123" {...field} />
              </FormControl>
              <FormDescription>
                Este será seu nome público
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          rules={{
            required: 'Campo obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido'
            }
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="joao@exemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  )
}
```

Continua na próxima parte devido ao tamanho...

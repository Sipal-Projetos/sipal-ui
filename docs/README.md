# 📚 Documentação Sipal UI

Bem-vindo à documentação completa da **Sipal UI v1.0.0**!

---

## 📖 Guias Principais

### 🚀 Começando

- **[README Principal](../README.md)** - Instalação, quick start e visão geral
- **[Arquitetura](./architecture.md)** - Padrões de implementação e estrutura interna
- **[Sistema de Temas](./theming.md)** - Customização de cores e dark mode

### 🧩 Componentes

**[Guia Completo de Componentes](./components-guide.md)** - Documentação detalhada dos 56 componentes dividida em 4 partes:

1. **[Parte 1: Fundamentos & Formulários](./components-guide.md)**
   - 7 Componentes Fundamentais (Button, Badge, Separator, etc.)
   - 15 Componentes de Formulários (Input, Select, Date Pickers, etc.)

2. **[Parte 2: Visualização de Dados](./components-guide-part2.md)**
   - 11 Componentes (Card, KPI Card, DataTable, Timeline, TreeView, etc.)

3. **[Parte 3: Charts & Navegação](./components-guide-part3.md)**
   - 7 Tipos de Gráficos (Bar, Line, Area, Pie, Mixed, etc.)
   - 8 Componentes de Navegação (Avatar, Tabs, Sidebar, etc.)

4. **[Parte 4: Feedback & Overlays](./components-guide-part4.md)**
   - 8 Componentes (Alert, Dialog, Toast, Progress, EmptyState, etc.)

### 📊 Especializados

- **[Sipal Charts](./charts.md)** - Guia detalhado do sistema de gráficos
- **[Fundamentos](./fundamentals.md)** - Componentes básicos em detalhes
- **[Exemplos Práticos](./examples.md)** - Casos de uso reais e templates

---

## 🎯 Busca Rápida por Componente

### Fundamentos
`Button` • `Badge` • `Separator` • `Skeleton` • `Aspect Ratio` • `Label`

### Formulários
`Input` • `Password Input` • `Textarea` • `Checkbox` • `Radio Group` • `Switch` • `Select` • `MultiSelect` • `Slider` • `Date Picker` • `Date Range Picker` • `Time Picker` • `File Upload` • `Color Picker` • `Form`

### Visualização de Dados
`Card` • `KPI Card` • `Table` • `DataTable` • `Accordion` • `Collapsible` • `Scroll Area` • `Timeline` • `Tree View` • `Code Block` • `Resizable`

### Charts
`Bar Chart` • `Line Chart` • `Area Chart` • `Pie Chart` • `Doughnut Chart` • `Scatter Chart` • `Mixed Chart`

### Navegação
`Avatar` • `Tabs` • `Breadcrumb` • `Pagination` • `Stepper` • `Menubar` • `Dropdown Menu` • `Side Navigation`

### Feedback & Overlays
`Alert` • `Dialog` • `Sheet` • `Popover` • `Tooltip` • `Toast` • `Progress` • `Empty State`

---

## 📋 Por Categoria

### Entrada de Dados
Para coletar informações do usuário:
- **Texto:** Input, Password Input, Textarea
- **Seleção:** Checkbox, Radio Group, Switch, Select, MultiSelect
- **Data/Hora:** Date Picker, Date Range Picker, Time Picker
- **Arquivos:** File Upload, Color Picker
- **Formulários:** Form (React Hook Form)

### Exibição de Dados
Para mostrar informações:
- **Containers:** Card, KPI Card
- **Tabelas:** Table, DataTable
- **Hierarquia:** Timeline, Tree View, Accordion
- **Outros:** Code Block, Scroll Area, Resizable

### Visualização de Métricas
Para dashboards e relatórios:
- **KPIs:** KPI Card
- **Gráficos:** Bar, Line, Area, Pie, Scatter, Mixed Charts

### Navegação
Para mover-se pelo app:
- **Menus:** Menubar, Dropdown Menu, Side Navigation
- **Indicadores:** Breadcrumb, Tabs, Stepper, Pagination
- **Identidade:** Avatar

### Comunicação
Para feedback ao usuário:
- **Mensagens:** Alert, Toast
- **Modais:** Dialog, Sheet, Popover, Tooltip
- **Status:** Progress, Empty State

---

## 🎨 Por Caso de Uso

### Dashboard Administrativo
```
KPI Card + Bar/Line Charts + DataTable + Side Navigation
```

### Formulário de Cadastro
```
Form + Input + Select + Date Picker + Button
```

### E-commerce
```
Card + Badge + Sheet (carrinho) + Dialog (confirmação) + Toast
```

### Gerenciamento de Arquivos
```
Tree View + File Upload + Progress + Empty State
```

### Sistema de Mensagens
```
Timeline + Avatar + Badge + Toast + Empty State
```

---

## 💡 Dicas de Implementação

### Performance
- Use `React.memo()` em componentes que renderizam listas grandes
- DataTable já é otimizado com virtualização
- Charts suportam `loading` prop para skeleton automático

### Acessibilidade
- Todos os componentes seguem WAI-ARIA
- Use `Label` com inputs para screen readers
- Tooltips aparecem no hover E no foco de teclado
- Modais capturam foco automaticamente

### Responsividade
- Side Navigation se transforma em Sheet no mobile
- Cards se adaptam com grid responsivo
- DataTable tem scroll horizontal automático
- Charts são totalmente responsivos

### Dark Mode
- Ative com classe `dark` no elemento raiz
- Todas as cores sincronizam automaticamente
- Charts também adaptam cores

---

## 🔗 Links Úteis

- **Repositório:** [GitHub](https://github.com/Sipal-Projetos/sipal-ui)
- **Radix UI:** [Documentação](https://www.radix-ui.com/)
- **TanStack Table:** [Documentação](https://tanstack.com/table)
- **Chart.js:** [Documentação](https://www.chartjs.org/)
- **Tailwind CSS:** [Documentação](https://tailwindcss.com/)

---

## 📦 Instalação Rápida

```bash
npm install @sipal/ui
```

```tsx
// app/layout.tsx
import '@sipal/ui/styles'

// Seu componente
import { Button, Card, DataTable } from '@sipal/ui'
```

---

## 🤝 Contribuindo

Encontrou um problema ou tem uma sugestão? Abra uma issue no GitHub!

---

**Versão:** 1.0.0
**Última atualização:** Janeiro 2024
**Licença:** MIT

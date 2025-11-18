# 🗂️ Índice Visual de Componentes - Sipal UI

Referência rápida de todos os 56 componentes com links diretos para documentação.

---

## 🧱 Fundamentos (7 componentes)

| Componente | Uso | Docs |
|------------|-----|------|
| **Button** | Botão de ação com variantes (default, destructive, outline, ghost, link) | [Ver →](./docs/components-guide.md#1-button) |
| **Badge** | Indicador de status ou tag (default, secondary, destructive, outline) | [Ver →](./docs/components-guide.md#2-badge) |
| **Separator** | Linha divisória horizontal ou vertical | [Ver →](./docs/components-guide.md#3-separator) |
| **Skeleton** | Placeholder animado para loading states | [Ver →](./docs/components-guide.md#4-skeleton) |
| **Aspect Ratio** | Mantém proporção de imagens/vídeos (16:9, 4:3, 1:1) | [Ver →](./docs/components-guide.md#5-aspect-ratio) |
| **Label** | Rótulo acessível para inputs de formulário | [Ver →](./docs/components-guide.md#6-label) |

---

## 📝 Formulários (15 componentes)

### Entrada de Texto

| Componente | Uso | Docs |
|------------|-----|------|
| **Input** | Campo de texto básico | [Ver →](./docs/components-guide.md#7-input) |
| **Password Input** | Campo de senha com toggle de visibilidade | [Ver →](./docs/components-guide.md#8-password-input) |
| **Textarea** | Campo de texto multilinha redimensionável | [Ver →](./docs/components-guide.md#9-textarea) |

### Seleção

| Componente | Uso | Docs |
|------------|-----|------|
| **Checkbox** | Seleção binária (checked/unchecked) | [Ver →](./docs/components-guide.md#10-checkbox) |
| **Radio Group** | Seleção única entre múltiplas opções | [Ver →](./docs/components-guide.md#11-radio-group) |
| **Switch** | Alternador On/Off | [Ver →](./docs/components-guide.md#12-switch) |
| **Select** | Dropdown simples de seleção | [Ver →](./docs/components-guide.md#13-select) |
| **MultiSelect** | Seleção múltipla com busca e tags | [Ver →](./docs/components-guide.md#14-multiselect) |
| **Slider** | Controle deslizante para valores numéricos | [Ver →](./docs/components-guide.md#15-slider) |

### Data e Hora

| Componente | Uso | Docs |
|------------|-----|------|
| **Date Picker** | Seleção de data única com calendário | [Ver →](./docs/components-guide.md#16-18-date-picker-date-range-picker-time-picker) |
| **Date Range Picker** | Seleção de período (data inicial e final) | [Ver →](./docs/components-guide.md#16-18-date-picker-date-range-picker-time-picker) |
| **Time Picker** | Seleção de horário (horas:minutos) | [Ver →](./docs/components-guide.md#16-18-date-picker-date-range-picker-time-picker) |

### Especiais

| Componente | Uso | Docs |
|------------|-----|------|
| **File Upload** | Upload com drag-and-drop e preview | [Ver →](./docs/components-guide.md#19-file-upload) |
| **Color Picker** | Seletor de cores com presets | [Ver →](./docs/components-guide.md#20-color-picker) |
| **Form** | Integração com React Hook Form + validação | [Ver →](./docs/components-guide.md#21-form-react-hook-form) |

---

## 📊 Visualização de Dados (11 componentes)

### Containers

| Componente | Uso | Docs |
|------------|-----|------|
| **Card** | Container versátil (Header, Title, Content, Footer) | [Ver →](./docs/components-guide-part2.md#22-card) |
| **KPI Card** | Card otimizado para métricas com ícone e tendência | [Ver →](./docs/components-guide-part2.md#23-kpi-card) |

### Tabelas

| Componente | Uso | Docs |
|------------|-----|------|
| **Table** | Tabela HTML simples estilizada | [Ver →](./docs/components-guide-part2.md#24-table) |
| **DataTable** | Tabela avançada (TanStack Table) com ordenação, filtro, paginação | [Ver →](./docs/components-guide-part2.md#25-datatable) |

### Expansíveis

| Componente | Uso | Docs |
|------------|-----|------|
| **Accordion** | Lista vertical de itens colapsáveis | [Ver →](./docs/components-guide-part2.md#26-accordion) |
| **Collapsible** | Componente genérico de mostrar/esconder | [Ver →](./docs/components-guide-part2.md#27-collapsible) |

### Visualizações Especiais

| Componente | Uso | Docs |
|------------|-----|------|
| **Scroll Area** | Container com scrollbar customizada cross-browser | [Ver →](./docs/components-guide-part2.md#28-scroll-area) |
| **Timeline** | Linha do tempo vertical com eventos e ícones | [Ver →](./docs/components-guide-part2.md#29-timeline) |
| **Tree View** | Visualização hierárquica (pastas/arquivos) | [Ver →](./docs/components-guide-part2.md#30-tree-view) |
| **Code Block** | Bloco de código com syntax highlight e botão de copiar | [Ver →](./docs/components-guide-part2.md#31-code-block) |
| **Resizable** | Painéis redimensionáveis (split pane) | [Ver →](./docs/components-guide-part2.md#32-resizable) |

---

## 📈 Sipal Charts (7 componentes)

Sistema de gráficos integrado ao tema Tailwind com Chart.js.

| Componente | Tipo | Docs |
|------------|------|------|
| **Bar Chart** | Gráfico de barras (vertical/horizontal) | [Ver →](./docs/components-guide-part3.md#33-bar-chart) |
| **Line Chart** | Gráfico de linhas simples ou múltiplas | [Ver →](./docs/components-guide-part3.md#34-line-chart) |
| **Area Chart** | Gráfico de área preenchida | [Ver →](./docs/components-guide-part3.md#35-area-chart) |
| **Pie Chart** | Gráfico de pizza circular | [Ver →](./docs/components-guide-part3.md#36-pie--doughnut-chart) |
| **Doughnut Chart** | Gráfico de rosca (pizza com centro vazio) | [Ver →](./docs/components-guide-part3.md#36-pie--doughnut-chart) |
| **Scatter Chart** | Gráfico de dispersão (pontos x/y) | [Ver →](./docs/components-guide-part3.md#37-scatter-chart) |
| **Mixed Chart** | Combina barras + linhas no mesmo gráfico | [Ver →](./docs/components-guide-part3.md#38-mixed-chart) |

**Recursos Especiais:**
- ✅ Sincronização automática com tema Tailwind
- ✅ Dark mode nativo
- ✅ Skeleton de loading integrado
- ✅ Totalmente responsivo

[Ver guia completo de Charts →](./docs/charts.md)

---

## 🧭 Navegação (8 componentes)

| Componente | Uso | Docs |
|------------|-----|------|
| **Avatar** | Imagem de perfil com fallback para iniciais | [Ver →](./docs/components-guide-part3.md#39-avatar) |
| **Tabs** | Navegação por abas de conteúdo | [Ver →](./docs/components-guide-part3.md#40-tabs) |
| **Breadcrumb** | Trilha de navegação (Home > Seção > Página) | [Ver →](./docs/components-guide-part3.md#41-breadcrumb) |
| **Pagination** | Controles de navegação de páginas | [Ver →](./docs/components-guide-part3.md#42-pagination) |
| **Stepper** | Indicador visual de progresso de etapas | [Ver →](./docs/components-guide-part3.md#43-stepper) |
| **Menubar** | Menu horizontal estilo desktop (Arquivo, Editar, Ver) | [Ver →](./docs/components-guide-part3.md#44-46-menubar-dropdown-menu) |
| **Dropdown Menu** | Menu flutuante acionado por botão | [Ver →](./docs/components-guide-part3.md#44-46-menubar-dropdown-menu) |
| **Side Navigation** | Sidebar responsiva (desktop fixo, mobile drawer) | [Ver →](./docs/components-guide-part3.md#47-side-navigation) |

---

## 🔔 Feedback & Overlays (8 componentes)

### Mensagens

| Componente | Uso | Docs |
|------------|-----|------|
| **Alert** | Mensagem de destaque inline (success, error, warning, info) | [Ver →](./docs/components-guide-part4.md#48-alert) |
| **Toast** | Notificações temporárias no canto da tela (Sonner) | [Ver →](./docs/components-guide-part4.md#53-toast) |

### Modais e Overlays

| Componente | Uso | Docs |
|------------|-----|------|
| **Dialog** | Modal que bloqueia o fundo (confirmações, formulários) | [Ver →](./docs/components-guide-part4.md#49-dialog-modal) |
| **Sheet** | Painel deslizante lateral (drawer) | [Ver →](./docs/components-guide-part4.md#50-sheet-drawer) |
| **Popover** | Conteúdo flutuante ativado por clique (não modal) | [Ver →](./docs/components-guide-part4.md#51-popover) |
| **Tooltip** | Dica flutuante ativada por hover | [Ver →](./docs/components-guide-part4.md#52-tooltip) |

### Indicadores

| Componente | Uso | Docs |
|------------|-----|------|
| **Progress** | Barra de progresso linear (0-100%) | [Ver →](./docs/components-guide-part4.md#54-progress) |
| **Empty State** | Placeholder visual para quando não há dados | [Ver →](./docs/components-guide-part4.md#55-empty-state) |

---

## 🔍 Busca Rápida por Funcionalidade

### Precisa coletar dados do usuário?
→ **Formulários:** Input, Password, Textarea, Checkbox, Radio, Switch, Select, MultiSelect, Date/Time Pickers, File Upload, Color Picker

### Precisa exibir dados em tabela?
→ **Table** (simples) ou **DataTable** (avançado com filtros e ordenação)

### Precisa mostrar métricas/dashboards?
→ **KPI Card** + **Charts** (Bar, Line, Area, Pie, Mixed)

### Precisa feedback ao usuário?
→ **Toast** (notificações), **Alert** (mensagens inline), **Progress** (carregamento)

### Precisa confirmação do usuário?
→ **Dialog** (modal bloqueante) ou **Sheet** (painel lateral)

### Precisa navegação?
→ **Side Navigation** (sidebar), **Tabs** (abas), **Breadcrumb** (trilha), **Pagination**

### Precisa mostrar "nenhum resultado"?
→ **Empty State** (com ícone, título, descrição e ação)

### Precisa hierarquia/árvore?
→ **Tree View** (pastas/arquivos) ou **Accordion** (lista colapsável)

---

## 📚 Documentação Relacionada

- **[README Principal](./README.md)** - Instalação e visão geral
- **[Documentação Completa](./docs/README.md)** - Índice de todos os guias
- **[Arquitetura](./docs/architecture.md)** - Padrões de implementação
- **[Sistema de Temas](./docs/theming.md)** - Customização e dark mode
- **[Exemplos Práticos](./docs/examples.md)** - Templates prontos

---

## 🎯 Por Nível de Complexidade

### Nível 1 - Básico
`Button`, `Badge`, `Input`, `Label`, `Separator`, `Skeleton`, `Avatar`

### Nível 2 - Intermediário
`Card`, `Alert`, `Tabs`, `Accordion`, `Progress`, `Tooltip`, `Breadcrumb`

### Nível 3 - Avançado
`DataTable`, `Form`, `Side Navigation`, `Date Pickers`, `MultiSelect`

### Nível 4 - Especializado
`Charts` (todos), `Tree View`, `Resizable`, `Timeline`, `Code Block`

---

**Total de Componentes:** 56
**Linhas de Código:** ~5.000+
**Exemplos na Documentação:** 700+
**Cobertura:** 100%

---

Feito com ❤️ pela equipe Sipal

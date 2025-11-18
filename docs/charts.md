# 📊 Sipal Charts

Sistema de gráficos integrado ao tema baseado em **Chart.js**.

---

## Por que Sipal Charts?

O Chart.js renderiza em **Canvas**, que não suporta CSS diretamente. Os Sipal Charts resolvem isso:

1. Injeta cores do tema Tailwind no Chart.js automaticamente
2. Suporte a dark mode nativo
3. API unificada e simplificada
4. Skeletons de loading integrados

---

## Configuração Automática de Tema

Cores HSL do Tailwind são convertidas automaticamente para Hex:

```typescript
// Interno: executado automaticamente
ChartJS.defaults.color = getThemeColor('--muted-foreground')
ChartJS.defaults.borderColor = getThemeColor('--border')
```

Você pode usar `hsl(var(--primary))` nos datasets e o Chart.js receberá o valor correto!

---

## Componentes Disponíveis

### BarChart

Gráfico de barras verticais ou horizontais.

```tsx
import { BarChart } from '@sipal/ui'

<BarChart
  data={{
    labels: ['Jan', 'Fev', 'Mar'],
    datasets: [{
      label: 'Vendas',
      data: [10, 20, 15],
      backgroundColor: 'hsl(var(--primary))',
    }]
  }}
  height={300}
/>
```

### LineChart

Gráfico de linhas.

```tsx
import { LineChart } from '@sipal/ui'

<LineChart
  data={{
    labels: ['Jan', 'Fev', 'Mar'],
    datasets: [{
      label: 'Receita',
      data: [100, 200, 150],
      borderColor: 'hsl(var(--primary))',
      tension: 0.4, // Curva suave
    }]
  }}
/>
```

### AreaChart

Gráfico de área preenchida.

```tsx
import { AreaChart } from '@sipal/ui'

<AreaChart
  data={{
    labels: ['Jan', 'Fev', 'Mar'],
    datasets: [{
      label: 'Usuários',
      data: [50, 80, 120],
      backgroundColor: 'rgba(var(--primary-rgb), 0.2)',
      borderColor: 'hsl(var(--primary))',
    }]
  }}
/>
```

### PieChart & DoughnutChart

Gráficos circulares.

```tsx
import { PieChart } from '@sipal/ui'

<PieChart
  data={{
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [{
      data: [55, 35, 10],
      backgroundColor: [
        'hsl(var(--primary))',
        'hsl(var(--secondary))',
        'hsl(var(--accent))',
      ],
    }]
  }}
/>
```

### ScatterChart

Gráfico de dispersão.

```tsx
import { ScatterChart } from '@sipal/ui'

<ScatterChart
  data={{
    datasets: [{
      label: 'Dataset 1',
      data: [
        { x: 10, y: 20 },
        { x: 15, y: 25 },
        { x: 20, y: 30 },
      ],
      backgroundColor: 'hsl(var(--primary))',
    }]
  }}
/>
```

### MixedChart

Combina barras e linhas no mesmo gráfico.

```tsx
import { MixedChart } from '@sipal/ui'

<MixedChart
  data={{
    labels: ['Jan', 'Fev', 'Mar'],
    datasets: [
      {
        type: 'bar',
        label: 'Vendas',
        data: [10, 20, 15],
        backgroundColor: 'hsl(var(--primary))',
      },
      {
        type: 'line',
        label: 'Meta',
        data: [12, 18, 16],
        borderColor: 'hsl(var(--destructive))',
      },
    ]
  }}
/>
```

---

## Loading State

Todos os gráficos suportam skeleton de loading:

```tsx
<BarChart data={data} loading={isLoading} />
```

---

## Customização Avançada

Use a prop `options` para configurar comportamento:

```tsx
<LineChart
  data={data}
  options={{
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { display: false },
      },
    },
  }}
/>
```

---

## Dicas de Performance

1. **Memoize os dados:**

```tsx
const chartData = React.useMemo(() => ({
  labels: [...],
  datasets: [...]
}), [dependency])
```

2. **Use decimation para muitos pontos:**

```tsx
options={{
  parsing: false,
  plugins: {
    decimation: {
      enabled: true,
      algorithm: 'lttb',
    },
  },
}}
```

---

## Referências

- [Chart.js Docs](https://www.chartjs.org/docs/latest/)
- [react-chartjs-2](https://react-chartjs-2.js.org/)

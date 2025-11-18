import * as React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  ChartData,
} from 'chart.js'
import { Bar, Line, Pie, Doughnut, Scatter } from 'react-chartjs-2'
import { getThemeColor } from '@/lib/utils'
import { Skeleton } from './skeleton'
import { cn } from '@/lib/utils'

// Registrar componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

// Configurar cores padrão do tema
if (typeof window !== 'undefined') {
  ChartJS.defaults.color = getThemeColor('--muted-foreground')
  ChartJS.defaults.borderColor = getThemeColor('--border')
  ChartJS.defaults.font.family = 'inherit'
}

export type ChartType = 'bar' | 'line' | 'area' | 'pie' | 'doughnut' | 'scatter' | 'mixed'

interface BaseChartProps {
  data: ChartData<any>
  options?: ChartOptions<any>
  height?: number
  className?: string
  loading?: boolean
}

export interface SipalChartProps extends BaseChartProps {
  type: ChartType
  showLegend?: boolean
}

export function SipalChart({
  type,
  data,
  options = {},
  height = 300,
  className,
  loading = false,
  showLegend = true,
}: SipalChartProps) {
  const defaultOptions: ChartOptions<any> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        position: 'top',
      },
    },
    ...options,
  }

  if (loading) {
    return <Skeleton className={cn('w-full', className)} style={{ height }} />
  }

  const chartProps = {
    data,
    options: defaultOptions,
    height,
  }

  return (
    <div className={cn('w-full', className)} style={{ height }}>
      {type === 'bar' && <Bar {...chartProps} />}
      {type === 'line' && <Line {...chartProps} />}
      {type === 'area' && (
        <Line
          {...chartProps}
          options={{
            ...defaultOptions,
            elements: {
              line: {
                fill: true,
              },
            },
          }}
        />
      )}
      {type === 'pie' && <Pie {...chartProps} />}
      {type === 'doughnut' && <Doughnut {...chartProps} />}
      {type === 'scatter' && <Scatter {...chartProps} />}
      {type === 'mixed' && <Bar {...chartProps} />}
    </div>
  )
}

// Componentes específicos para cada tipo de gráfico
export function BarChart(props: Omit<SipalChartProps, 'type'>) {
  return <SipalChart {...props} type="bar" />
}

export function LineChart(props: Omit<SipalChartProps, 'type'>) {
  return <SipalChart {...props} type="line" />
}

export function AreaChart(props: Omit<SipalChartProps, 'type'>) {
  return <SipalChart {...props} type="area" />
}

export function PieChart(props: Omit<SipalChartProps, 'type'>) {
  return <SipalChart {...props} type="pie" />
}

export function DoughnutChart(props: Omit<SipalChartProps, 'type'>) {
  return <SipalChart {...props} type="doughnut" />
}

export function ScatterChart(props: Omit<SipalChartProps, 'type'>) {
  return <SipalChart {...props} type="scatter" />
}

export function MixedChart(props: Omit<SipalChartProps, 'type'>) {
  return <SipalChart {...props} type="mixed" />
}

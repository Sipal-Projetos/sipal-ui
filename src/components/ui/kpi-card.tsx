import { ArrowDown, ArrowUp, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from './card'

interface KpiCardProps {
  title: string
  value: string | number
  description?: string
  icon?: LucideIcon
  trend?: {
    value: number
    direction: 'up' | 'down'
  }
  className?: string
}

export function KpiCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
}: KpiCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend) && (
          <div className="mt-1 flex items-center gap-2 text-xs">
            {trend && (
              <span
                className={cn(
                  'flex items-center gap-1 font-medium',
                  trend.direction === 'up'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                )}
              >
                {trend.direction === 'up' ? (
                  <ArrowUp className="h-3 w-3" />
                ) : (
                  <ArrowDown className="h-3 w-3" />
                )}
                {Math.abs(trend.value)}%
              </span>
            )}
            {description && (
              <span className="text-muted-foreground">{description}</span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

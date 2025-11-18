import * as React from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface TimelineItem {
  title: string
  description?: string
  date?: string
  icon?: LucideIcon
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn('relative border-l border-border', className)}>
      {items.map((item, index) => (
        <li key={index} className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 ring-background">
            {item.icon ? (
              <item.icon className="h-3 w-3 text-primary-foreground" />
            ) : (
              <span className="h-2 w-2 rounded-full bg-primary-foreground" />
            )}
          </span>
          {item.date && (
            <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
              {item.date}
            </time>
          )}
          <h3 className="text-lg font-semibold text-foreground">
            {item.title}
          </h3>
          {item.description && (
            <p className="mt-1 text-base font-normal text-muted-foreground">
              {item.description}
            </p>
          )}
        </li>
      ))}
    </ol>
  )
}

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Input } from './input'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Button } from './button'

interface ColorPickerProps {
  value?: string
  onChange: (color: string) => void
  className?: string
}

export function ColorPicker({ value = '#000000', onChange, className }: ColorPickerProps) {
  const [color, setColor] = React.useState(value)

  const handleChange = (newColor: string) => {
    setColor(newColor)
    onChange(newColor)
  }

  const presetColors = [
    '#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff',
    '#ffff00', '#ff00ff', '#00ffff', '#ff8800', '#8800ff',
  ]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn('w-full justify-start gap-2', className)}
        >
          <div
            className="h-6 w-6 rounded border"
            style={{ backgroundColor: color }}
          />
          <span className="text-sm">{color.toUpperCase()}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              type="color"
              value={color}
              onChange={(e) => handleChange(e.target.value)}
              className="h-10 w-12 cursor-pointer p-1"
            />
            <Input
              type="text"
              value={color}
              onChange={(e) => handleChange(e.target.value)}
              className="flex-1"
              placeholder="#000000"
            />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Cores predefinidas</p>
            <div className="grid grid-cols-5 gap-2">
              {presetColors.map((presetColor) => (
                <button
                  key={presetColor}
                  type="button"
                  className={cn(
                    'h-8 w-8 rounded border-2 transition-all hover:scale-110',
                    color === presetColor ? 'border-primary ring-2 ring-ring' : 'border-transparent'
                  )}
                  style={{ backgroundColor: presetColor }}
                  onClick={() => handleChange(presetColor)}
                />
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

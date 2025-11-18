import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './separator'

const meta = {
  title: 'Fundamentos/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <div>
        <h4 className="text-sm font-medium">Radix UI</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          Unstyled, accessible components.
        </p>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          Unstyled components.
        </p>
      </div>
      <Separator orientation="vertical" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix UI</h4>
        <p className="text-sm text-muted-foreground">
          Accessible components.
        </p>
      </div>
    </div>
  ),
}

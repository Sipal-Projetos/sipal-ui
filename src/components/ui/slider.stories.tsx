import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './slider'
import { Label } from './label'

const meta = {
  title: 'Formulários/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <Label>Volume</Label>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
    </div>
  ),
}

export const Range: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <Label>Price Range</Label>
        <Slider defaultValue={[25, 75]} max={100} step={1} />
      </div>
    </div>
  ),
}

export const WithSteps: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <Label>Rating (0-5)</Label>
        <Slider defaultValue={[3]} max={5} step={1} />
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  ),
}

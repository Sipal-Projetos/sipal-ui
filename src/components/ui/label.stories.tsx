import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './label'
import { Checkbox } from './checkbox'

const meta = {
    title: 'Fundamentos/Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Seu endereço de email',
    },
}

export const WithInput: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Aceitar termos e condições</Label>
        </div>
    ),
}

import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './calendar'
import { ptBR } from 'date-fns/locale'

const meta = {
    title: 'Formulários/Calendar',
    component: Calendar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        mode: 'single',
        selected: new Date(),
        className: 'rounded-md border shadow',
        locale: ptBR,
    },
}

export const Range: Story = {
    args: {
        mode: 'range',
        selected: {
            from: new Date(),
            to: new Date(new Date().setDate(new Date().getDate() + 5)),
        },
        className: 'rounded-md border shadow',
        locale: ptBR,
    },
}

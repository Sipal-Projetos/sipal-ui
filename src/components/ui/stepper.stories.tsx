import type { Meta, StoryObj } from '@storybook/react'
import { Stepper } from './stepper'

const meta = {
    title: 'Navegação/Stepper',
    component: Stepper,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Stepper>

export default meta
type Story = StoryObj<typeof meta>

const steps = [
    {
        label: 'Dados Pessoais',
        description: 'Identificação',
    },
    {
        label: 'Endereço',
        description: 'Localização',
    },
    {
        label: 'Pagamento',
        description: 'Faturamento',
    },
    {
        label: 'Confirmação',
        description: 'Revisão',
    },
]

export const Default: Story = {
    args: {
        steps,
        currentStep: 1,
        className: 'w-[600px]',
    },
}

export const Completed: Story = {
    args: {
        steps,
        currentStep: 4,
        className: 'w-[600px]',
    },
}

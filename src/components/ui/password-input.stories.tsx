import type { Meta, StoryObj } from '@storybook/react'
import { PasswordInput } from './password-input'

const meta = {
    title: 'Formulários/Password Input',
    component: PasswordInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <div className="w-[300px]">
            <PasswordInput placeholder="Digite sua senha" />
        </div>
    ),
}

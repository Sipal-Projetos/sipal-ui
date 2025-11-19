import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState } from './empty-state'
import { FolderOpen, Plus } from 'lucide-react'
import { Button } from './button'

const meta = {
    title: 'Feedback & Overlays/Empty State',
    component: EmptyState,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        icon: FolderOpen,
        title: 'Nenhum item encontrado',
        description: 'Você ainda não criou nenhum item. Comece criando um agora.',
    },
}

export const WithAction: Story = {
    args: {
        icon: FolderOpen,
        title: 'Nenhum projeto',
        description: 'Você não tem projetos ativos no momento.',
        action: (
            <Button>
                <Plus className="mr-2 h-4 w-4" />
                Novo Projeto
            </Button>
        ),
    },
}

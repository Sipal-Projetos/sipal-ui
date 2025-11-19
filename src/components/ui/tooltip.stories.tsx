import type { Meta, StoryObj } from '@storybook/react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './tooltip'
import { Button } from './button'

const meta = {
    title: 'Feedback & Overlays/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Passe o mouse</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Adicionar à biblioteca</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ),
}

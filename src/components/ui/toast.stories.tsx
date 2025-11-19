import type { Meta, StoryObj } from '@storybook/react'
import { Toaster } from './toast'

const meta = {
    title: 'Feedback & Overlays/Toast',
    component: Toaster,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Toast notifications powered by Sonner. Add `<Toaster />` to your app and use `toast()` from sonner to show notifications.',
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <div className="flex flex-col gap-4 p-4">
            <Toaster />
            <div className="text-sm text-muted-foreground">
                <p>The Toaster component is now rendered.</p>
                <p className="mt-2">To trigger toasts in your app, import and use:</p>
                <code className="block mt-2 p-2 bg-muted rounded">
                    {`import { toast } from 'sonner'`}
                    <br />
                    {`toast('Message', { description: 'Details' })`}
                </code>
            </div>
        </div>
    ),
}

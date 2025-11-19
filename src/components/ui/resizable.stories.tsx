import type { Meta, StoryObj } from '@storybook/react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from './resizable'

const meta = {
    title: 'Visualização de Dados/Resizable',
    component: ResizablePanelGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <ResizablePanelGroup
            direction="horizontal"
            className="max-w-md rounded-lg border md:min-w-[450px]"
        >
            <ResizablePanel defaultSize={50}>
                <div className="flex h-[200px] items-center justify-center p-6">
                    <span className="font-semibold">One</span>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={25}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Two</span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={75}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Three</span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
}

export const WithHandle: Story = {
    render: () => (
        <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
        >
            <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Sidebar</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Content</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
}

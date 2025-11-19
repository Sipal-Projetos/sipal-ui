import type { Meta, StoryObj } from '@storybook/react'
import { TreeView } from './tree-view'

const meta = {
    title: 'Visualização de Dados/Tree View',
    component: TreeView,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TreeView>

export default meta
type Story = StoryObj<typeof meta>

const data = [
    {
        id: '1',
        label: 'Documents',
        children: [
            {
                id: '1-1',
                label: 'Work',
                children: [
                    { id: '1-1-1', label: 'Report.docx' },
                    { id: '1-1-2', label: 'Budget.xlsx' },
                ],
            },
            {
                id: '1-2',
                label: 'Personal',
                children: [{ id: '1-2-1', label: 'Photos' }],
            },
        ],
    },
    {
        id: '2',
        label: 'Downloads',
        children: [
            { id: '2-1', label: 'Installer.exe' },
            { id: '2-2', label: 'Image.png' },
        ],
    },
]

export const Default: Story = {
    args: {
        data,
        className: 'w-[300px]',
    },
}

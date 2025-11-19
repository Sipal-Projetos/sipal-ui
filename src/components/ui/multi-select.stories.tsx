import type { Meta, StoryObj } from '@storybook/react'
import { MultiSelect } from './multi-select'
import { useState } from 'react'

const meta = {
    title: 'Formulários/Multi Select',
    component: MultiSelect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MultiSelect>

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
    { value: 'next.js', label: 'Next.js' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
]

export const Default: Story = {
    render: () => {
        const [selected, setSelected] = useState<string[]>([])
        return (
            <div className="w-[400px]">
                <MultiSelect
                    options={frameworks}
                    selected={selected}
                    onChange={setSelected}
                    placeholder="Select frameworks..."
                />
            </div>
        )
    },
}

export const PreSelected: Story = {
    render: () => {
        const [selected, setSelected] = useState<string[]>(['next.js', 'remix'])
        return (
            <div className="w-[400px]">
                <MultiSelect
                    options={frameworks}
                    selected={selected}
                    onChange={setSelected}
                    placeholder="Select frameworks..."
                />
            </div>
        )
    },
}

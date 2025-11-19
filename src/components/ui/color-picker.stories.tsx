import type { Meta, StoryObj } from '@storybook/react'
import { ColorPicker } from './color-picker'
import { useState } from 'react'

const meta = {
    title: 'Formulários/Color Picker',
    component: ColorPicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ColorPicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        const [color, setColor] = useState('#000000')
        return (
            <div className="w-[300px]">
                <ColorPicker value={color} onChange={setColor} />
            </div>
        )
    },
}

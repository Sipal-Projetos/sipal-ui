import type { Meta, StoryObj } from '@storybook/react'
import { TimePicker } from './time-picker'
import { useState } from 'react'

const meta = {
    title: 'Formulários/Time Picker',
    component: TimePicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TimePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        const [time, setTime] = useState('12:00')
        return (
            <div className="w-[200px]">
                <TimePicker value={time} onChange={setTime} />
            </div>
        )
    },
}

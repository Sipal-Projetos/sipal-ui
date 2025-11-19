import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './date-picker'
import { useState } from 'react'

const meta = {
    title: 'Formulários/Date Picker',
    component: DatePicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        const [date, setDate] = useState<Date>()
        return (
            <div className="w-[300px]">
                <DatePicker date={date} onSelect={setDate} />
            </div>
        )
    },
}

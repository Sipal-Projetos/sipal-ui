import type { Meta, StoryObj } from '@storybook/react'
import { DateRangePicker } from './date-range-picker'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns'

const meta = {
    title: 'Formulários/Date Range Picker',
    component: DateRangePicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DateRangePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        const [date, setDate] = useState<DateRange | undefined>({
            from: new Date(),
            to: addDays(new Date(), 20),
        })

        return (
            <div className="w-[300px]">
                <DateRangePicker dateRange={date} onSelect={setDate} />
            </div>
        )
    },
}

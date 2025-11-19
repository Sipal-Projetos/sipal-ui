import type { Meta, StoryObj } from '@storybook/react'
import { Timeline } from './timeline'
import { Calendar, CheckCircle2, Circle, Clock } from 'lucide-react'

const meta = {
    title: 'Visualização de Dados/Timeline',
    component: Timeline,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        items: [
            {
                title: 'Application Submitted',
                description: 'Your application has been received and is being reviewed.',
                date: 'Just now',
                icon: Clock,
            },
            {
                title: 'Interview Scheduled',
                description: 'An interview has been scheduled with the hiring manager.',
                date: '2 days ago',
                icon: Calendar,
            },
            {
                title: 'Offer Accepted',
                description: 'You have accepted the offer letter.',
                date: '1 week ago',
                icon: CheckCircle2,
            },
        ],
    },
}

export const Simple: Story = {
    args: {
        items: [
            {
                title: 'Step 1',
                description: 'Description for step 1',
            },
            {
                title: 'Step 2',
                description: 'Description for step 2',
            },
            {
                title: 'Step 3',
                description: 'Description for step 3',
            },
        ],
    },
}

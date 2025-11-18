import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './card'
import { Button } from './button'

const meta = {
  title: 'Visualização de Dados/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card Description</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Card content goes here. This is an example of a card component.</p>
      </Card.Content>
      <Card.Footer className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </Card.Footer>
    </Card>
  ),
}

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <Card.Header>
        <Card.Title>Notifications</Card.Title>
        <Card.Description>You have 3 unread messages.</Card.Description>
      </Card.Header>
      <Card.Content>
        <div className="space-y-2">
          <div className="border-b pb-2">
            <p className="text-sm font-medium">New message from John</p>
            <p className="text-xs text-muted-foreground">2 minutes ago</p>
          </div>
          <div className="border-b pb-2">
            <p className="text-sm font-medium">Meeting reminder</p>
            <p className="text-xs text-muted-foreground">1 hour ago</p>
          </div>
          <div className="pb-2">
            <p className="text-sm font-medium">System update available</p>
            <p className="text-xs text-muted-foreground">3 hours ago</p>
          </div>
        </div>
      </Card.Content>
    </Card>
  ),
}

export const WithoutFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <Card.Header>
        <Card.Title>Quick Stats</Card.Title>
        <Card.Description>Overview of your metrics</Card.Description>
      </Card.Header>
      <Card.Content>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Total Users</p>
            <p className="text-2xl font-bold">1,234</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Active Now</p>
            <p className="text-2xl font-bold">89</p>
          </div>
        </div>
      </Card.Content>
    </Card>
  ),
}

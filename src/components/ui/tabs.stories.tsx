import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'
import { Card } from './card'

const meta = {
  title: 'Visualização de Dados/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-muted-foreground">
          Make changes to your account here.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-muted-foreground">
          Change your password here.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

export const WithCards: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Overview</h3>
          <p className="text-sm text-muted-foreground mt-2">
            View a summary of your account activity and key metrics.
          </p>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Analytics</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Detailed analytics and insights about your performance.
          </p>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Reports</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Generate and download comprehensive reports.
          </p>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[450px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
      <TabsContent value="tab4">Content for Tab 4</TabsContent>
    </Tabs>
  ),
}

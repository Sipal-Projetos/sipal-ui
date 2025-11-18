import type { Meta, StoryObj } from '@storybook/react'
import { KpiCard } from './kpi-card'
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react'

const meta = {
  title: 'Visualização de Dados/KPI Card',
  component: KpiCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KpiCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Total Revenue',
    value: '$45,231.89',
    description: '+20.1% from last month',
  },
}

export const WithIcon: Story = {
  args: {
    title: 'Total Revenue',
    value: '$45,231.89',
    description: '+20.1% from last month',
    icon: DollarSign,
  },
}

export const WithTrendUp: Story = {
  args: {
    title: 'Active Users',
    value: '2,543',
    description: '+18.2% from last month',
    icon: Users,
    trend: {
      value: 18.2,
      direction: 'up',
    },
  },
}

export const WithTrendDown: Story = {
  args: {
    title: 'Bounce Rate',
    value: '32.5%',
    description: '-4.3% from last month',
    icon: Activity,
    trend: {
      value: 4.3,
      direction: 'down',
    },
  },
}

export const Dashboard: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <KpiCard
        title="Total Revenue"
        value="$45,231.89"
        description="+20.1% from last month"
        icon={DollarSign}
        trend={{ value: 20.1, direction: 'up' }}
      />
      <KpiCard
        title="Active Users"
        value="2,543"
        description="+18.2% from last month"
        icon={Users}
        trend={{ value: 18.2, direction: 'up' }}
      />
      <KpiCard
        title="Conversion Rate"
        value="12.5%"
        description="+4.3% from last month"
        icon={TrendingUp}
        trend={{ value: 4.3, direction: 'up' }}
      />
      <KpiCard
        title="Bounce Rate"
        value="32.5%"
        description="-2.1% from last month"
        icon={Activity}
        trend={{ value: 2.1, direction: 'down' }}
      />
    </div>
  ),
}

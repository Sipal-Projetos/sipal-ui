import type { Meta, StoryObj } from '@storybook/react'
import { BarChart, LineChart, AreaChart, PieChart } from './chart'

// Bar Chart Stories
const barMeta = {
  title: 'Charts/Bar Chart',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BarChart>

export default barMeta

export const BarDefault: StoryObj<typeof BarChart> = {
  args: {
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
    height: 300,
  },
}

export const BarMultipleDatasets: StoryObj<typeof BarChart> = {
  args: {
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Revenue',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
        {
          label: 'Expenses',
          data: [8, 11, 7, 9, 5, 6],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
      ],
    },
    height: 300,
  },
}

export const BarLoading: StoryObj<typeof BarChart> = {
  args: {
    data: {
      labels: [],
      datasets: [],
    },
    loading: true,
    height: 300,
  },
}

// Line Chart Stories
export const LineDefault: StoryObj<typeof LineChart> = {
  render: () => (
    <LineChart
      data={{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Users',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
          },
        ],
      }}
      height={300}
    />
  ),
}

export const LineMultiple: StoryObj<typeof LineChart> = {
  render: () => (
    <LineChart
      data={{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
          },
          {
            label: 'Dataset 2',
            data: [28, 48, 40, 19, 86, 27],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.4,
          },
        ],
      }}
      height={300}
    />
  ),
}

// Area Chart
export const AreaDefault: StoryObj<typeof AreaChart> = {
  render: () => (
    <AreaChart
      data={{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Sales',
            data: [30, 45, 35, 50, 45, 60],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.3)',
            fill: true,
            tension: 0.4,
          },
        ],
      }}
      height={300}
    />
  ),
}

// Pie Chart
export const PieDefault: StoryObj<typeof PieChart> = {
  render: () => (
    <PieChart
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
          {
            label: 'Votes',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ],
            borderWidth: 1,
          },
        ],
      }}
      height={300}
    />
  ),
}

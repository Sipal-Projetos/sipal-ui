import type { Meta, StoryObj } from '@storybook/react'
import { CodeBlock } from './code-block'

const meta = {
    title: 'Visualização de Dados/Code Block',
    component: CodeBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

const code = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Button</Button>
}`

export const Default: Story = {
    args: {
        code,
        language: 'tsx',
        className: 'w-[400px]',
    },
}

export const WithLineNumbers: Story = {
    args: {
        code,
        language: 'tsx',
        showLineNumbers: true,
        className: 'w-[400px]',
    },
}

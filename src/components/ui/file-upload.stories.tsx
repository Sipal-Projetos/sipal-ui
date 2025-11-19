import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload } from './file-upload'

const meta = {
    title: 'Formulários/File Upload',
    component: FileUpload,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FileUpload>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <div className="w-[500px]">
            <FileUpload
                onDrop={(files) => console.log(files)}
                accept={{
                    'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
                }}
                maxFiles={3}
            />
        </div>
    ),
}

export const SingleFile: Story = {
    render: () => (
        <div className="w-[500px]">
            <FileUpload
                onDrop={(files) => console.log(files)}
                maxFiles={1}
                multiple={false}
            />
        </div>
    ),
}

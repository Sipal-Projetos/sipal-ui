import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { Button } from './button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './form'
import { Input } from './input'

const meta = {
    title: 'Formulários/Form',
    component: Form,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Form components built on top of react-hook-form for building accessible forms with validation.',
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

type FormValues = {
    username: string
    email: string
}

export const Default: Story = {
    render: () => {
        const form = useForm<FormValues>({
            defaultValues: {
                username: '',
                email: '',
            },
        })

        function onSubmit(values: FormValues) {
            console.log('Form submitted:', values)
            alert(`Form submitted!\nUsername: ${values.username}\nEmail: ${values.email}`)
        }

        return (
            <div className="w-[400px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="username"
                            rules={{ required: 'Username is required', minLength: { value: 2, message: 'Username must be at least 2 characters' } }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your username" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            rules={{ required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        We'll never share your email.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        )
    },
}

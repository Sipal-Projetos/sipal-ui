import type { Meta, StoryObj } from '@storybook/react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './sheet'
import { Button } from './button'
import { Input } from './input'
import { Label } from './label'

const meta = {
    title: 'Feedback & Overlays/Sheet',
    component: Sheet,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Abrir Sheet</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Editar perfil</SheetTitle>
                    <SheetDescription>
                        Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Nome
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Salvar alterações</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    ),
}

export const SideLeft: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Abrir Esquerda</Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Menu Lateral</SheetTitle>
                    <SheetDescription>
                        Este é um exemplo de sheet abrindo do lado esquerdo.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    ),
}

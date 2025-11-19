import type { Meta, StoryObj } from '@storybook/react'
import {
    SideNavigation,
    SideNavigationContent,
    SideNavigationFooter,
    SideNavigationHeader,
    SideNavigationItem,
} from './side-navigation'
import {
    BarChart3,
    Box,
    Home,
    LayoutDashboard,
    LogOut,
    Settings,
    Users,
} from 'lucide-react'

const meta = {
    title: 'Navegação/Side Navigation',
    component: SideNavigation,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SideNavigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <div className="flex h-[600px] w-full border">
            <SideNavigation>
                <SideNavigationHeader>
                    <div className="flex items-center gap-2 font-bold text-xl">
                        <Box className="h-6 w-6 text-primary" />
                        <span>Sipal UI</span>
                    </div>
                </SideNavigationHeader>
                <SideNavigationContent>
                    <SideNavigationItem
                        icon={<Home className="h-4 w-4" />}
                        label="Início"
                        active
                    />
                    <SideNavigationItem
                        icon={<LayoutDashboard className="h-4 w-4" />}
                        label="Dashboard"
                    />
                    <SideNavigationItem
                        icon={<Users className="h-4 w-4" />}
                        label="Usuários"
                    />
                    <SideNavigationItem
                        icon={<BarChart3 className="h-4 w-4" />}
                        label="Relatórios"
                    />
                    <SideNavigationItem
                        icon={<Settings className="h-4 w-4" />}
                        label="Configurações"
                    />
                </SideNavigationContent>
                <SideNavigationFooter>
                    <SideNavigationItem
                        icon={<LogOut className="h-4 w-4" />}
                        label="Sair"
                    />
                </SideNavigationFooter>
            </SideNavigation>
            <div className="flex-1 bg-muted/10 p-8">
                <h1 className="text-2xl font-bold">Conteúdo Principal</h1>
                <p className="text-muted-foreground mt-2">
                    O conteúdo da página é renderizado aqui.
                </p>
            </div>
        </div>
    ),
}

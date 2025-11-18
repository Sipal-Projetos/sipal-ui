import * as React from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { Sheet, SheetContent, SheetTrigger } from './sheet'

interface SideNavigationContextType {
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}

const SideNavigationContext = React.createContext<SideNavigationContextType>({
  isCollapsed: false,
  setIsCollapsed: () => {},
})

export function useSideNavigation() {
  return React.useContext(SideNavigationContext)
}

interface SideNavigationProps {
  children: React.ReactNode
  defaultCollapsed?: boolean
  className?: string
}

export function SideNavigation({
  children,
  defaultCollapsed = false,
  className,
}: SideNavigationProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  return (
    <SideNavigationContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      {/* Mobile */}
      <div className="md:hidden">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            {children}
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <aside
        className={cn(
          'hidden md:flex flex-col border-r bg-background transition-all duration-300',
          isCollapsed ? 'w-16' : 'w-64',
          className
        )}
      >
        {children}
      </aside>
    </SideNavigationContext.Provider>
  )
}

export function SideNavigationHeader({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex h-16 items-center border-b px-4', className)}>
      {children}
    </div>
  )
}

export function SideNavigationContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex-1 overflow-y-auto py-4', className)}>
      {children}
    </div>
  )
}

export function SideNavigationFooter({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('border-t p-4', className)}>
      {children}
    </div>
  )
}

interface SideNavigationItemProps {
  icon?: React.ReactNode
  label: string
  active?: boolean
  onClick?: () => void
  className?: string
}

export function SideNavigationItem({
  icon,
  label,
  active,
  onClick,
  className,
}: SideNavigationItemProps) {
  const { isCollapsed } = useSideNavigation()

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
        active && 'bg-accent text-accent-foreground',
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {!isCollapsed && <span>{label}</span>}
    </button>
  )
}

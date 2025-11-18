import * as React from 'react'
import { ChevronRight, Folder, File } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './button'

export interface TreeNode {
  id: string
  label: string
  children?: TreeNode[]
  icon?: React.ReactNode
}

interface TreeViewProps {
  data: TreeNode[]
  onNodeClick?: (node: TreeNode) => void
  className?: string
}

interface TreeNodeProps {
  node: TreeNode
  level: number
  onNodeClick?: (node: TreeNode) => void
}

function TreeNodeComponent({ node, level, onNodeClick }: TreeNodeProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const hasChildren = node.children && node.children.length > 0

  return (
    <div>
      <div
        className={cn(
          'flex items-center gap-1 rounded-md px-2 py-1 hover:bg-accent',
          'cursor-pointer'
        )}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
        onClick={() => {
          if (hasChildren) {
            setIsOpen(!isOpen)
          }
          onNodeClick?.(node)
        }}
      >
        {hasChildren ? (
          <ChevronRight
            className={cn(
              'h-4 w-4 shrink-0 transition-transform',
              isOpen && 'rotate-90'
            )}
          />
        ) : (
          <span className="w-4" />
        )}
        {node.icon || (hasChildren ? <Folder className="h-4 w-4" /> : <File className="h-4 w-4" />)}
        <span className="ml-2 text-sm">{node.label}</span>
      </div>
      {hasChildren && isOpen && (
        <div>
          {node.children!.map((child) => (
            <TreeNodeComponent
              key={child.id}
              node={child}
              level={level + 1}
              onNodeClick={onNodeClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function TreeView({ data, onNodeClick, className }: TreeViewProps) {
  return (
    <div className={cn('w-full', className)}>
      {data.map((node) => (
        <TreeNodeComponent
          key={node.id}
          node={node}
          level={0}
          onNodeClick={onNodeClick}
        />
      ))}
    </div>
  )
}

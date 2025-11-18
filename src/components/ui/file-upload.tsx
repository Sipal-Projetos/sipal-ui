import * as React from 'react'
import { useDropzone, type DropzoneOptions } from 'react-dropzone'
import { Upload, X, FileIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './button'

interface FileUploadProps extends Omit<DropzoneOptions, 'onDrop'> {
  onDrop: (files: File[]) => void
  className?: string
  showPreview?: boolean
}

export function FileUpload({
  onDrop,
  className,
  showPreview = true,
  ...dropzoneOptions
}: FileUploadProps) {
  const [files, setFiles] = React.useState<File[]>([])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    ...dropzoneOptions,
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles)
      onDrop(acceptedFiles)
    },
  })

  const removeFile = (fileToRemove: File) => {
    const newFiles = files.filter((file) => file !== fileToRemove)
    setFiles(newFiles)
    onDrop(newFiles)
  }

  return (
    <div className={cn('space-y-4', className)}>
      <div
        {...getRootProps()}
        className={cn(
          'flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-6 py-10 text-center transition-colors hover:border-muted-foreground/50',
          isDragActive && 'border-primary bg-accent',
          className
        )}
      >
        <input {...getInputProps()} />
        <Upload className="mb-4 h-10 w-10 text-muted-foreground" />
        {isDragActive ? (
          <p className="text-sm text-muted-foreground">
            Solte os arquivos aqui...
          </p>
        ) : (
          <div className="space-y-1">
            <p className="text-sm font-medium">
              Arraste arquivos ou clique para selecionar
            </p>
            <p className="text-xs text-muted-foreground">
              {dropzoneOptions.accept
                ? Object.values(dropzoneOptions.accept).flat().join(', ')
                : 'Qualquer arquivo'}
            </p>
          </div>
        )}
      </div>

      {showPreview && files.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Arquivos selecionados:</p>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <FileIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{file.name}</span>
                  <span className="text-xs text-muted-foreground">
                    ({(file.size / 1024).toFixed(2)} KB)
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFile(file)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

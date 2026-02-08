"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { importExcel } from "@/lib/excel"
import type { ExcelDataset } from "@/lib/db"
import { cn } from "@/lib/utils"

type ExcelUploaderProps = {
  workspaceId: number | null
  onImported?: (dataset: ExcelDataset) => void
  className?: string
}

export function ExcelUploader({
  workspaceId,
  onImported,
  className,
}: ExcelUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null
    setSelectedFile(file)
    setError(null)
  }

  const handleImport = async () => {
    if (!selectedFile) {
      setError("Please choose an Excel file.")
      return
    }
    if (!workspaceId) {
      setError("Create a workspace first.")
      return
    }

    setIsLoading(true)
    setError(null)
    try {
      const dataset = await importExcel(selectedFile, workspaceId)
      onImported?.(dataset)
      setSelectedFile(null)
      if (inputRef.current) inputRef.current.value = ""
    } catch {
      setError("Import failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <input
        ref={inputRef}
        type="file"
        accept=".xlsx"
        onChange={handleFileChange}
        className="block w-full text-sm text-white file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-white/20"
      />
      <Button
        type="button"
        onClick={handleImport}
        disabled={isLoading || !workspaceId}
        className="w-full"
      >
        {isLoading ? "Importing..." : "Import Excel"}
      </Button>
      {selectedFile && (
        <p className="text-xs text-blue-100/80">Selected: {selectedFile.name}</p>
      )}
      {error && <p className="text-xs text-red-300">{error}</p>}
    </div>
  )
}

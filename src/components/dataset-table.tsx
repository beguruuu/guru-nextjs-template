"use client"

import { useEffect, useMemo, useState } from "react"
import { liveQuery } from "dexie"
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { db, type ExcelDataset, type ExcelCellValue } from "@/lib/db"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type RowRecord = Record<string, string>

type DatasetTableProps = {
  workspaceId: number
}

function formatCell(value: ExcelCellValue) {
  if (value === null) return ""
  return String(value)
}

export function DatasetTable({ workspaceId }: DatasetTableProps) {
  const [datasets, setDatasets] = useState<ExcelDataset[]>([])

  useEffect(() => {
    const subscription = liveQuery(() =>
      db.excelDatasets.where("workspaceId").equals(workspaceId).toArray()
    ).subscribe({
      next: (items) => setDatasets(items),
      error: () => setDatasets([]),
    })

    return () => subscription.unsubscribe()
  }, [workspaceId])

  const activeDataset = useMemo(() => {
    return datasets
      .slice()
      .sort((a, b) => b.createdAt - a.createdAt)
      .at(0)
  }, [datasets])

  const activeSheet = activeDataset?.sheets[0]

  const columns = useMemo<ColumnDef<RowRecord>[]>(() => {
    if (!activeSheet) return []
    return activeSheet.columns.map((columnName, index) => ({
      accessorKey: `col_${index}`,
      header: columnName || `Column ${index + 1}`,
    }))
  }, [activeSheet])

  const data = useMemo<RowRecord[]>(() => {
    if (!activeSheet) return []
    return activeSheet.rows.map((row) => {
      const record: RowRecord = {}
      activeSheet.columns.forEach((_, index) => {
        record[`col_${index}`] = formatCell(row[index])
      })
      return record
    })
  }, [activeSheet])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (!activeDataset) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-blue-100/80">
        No datasets yet.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-blue-100/80">Latest dataset</p>
          <h2 className="text-lg font-semibold text-white">
            {activeDataset.name}
          </h2>
        </div>
        <p className="text-xs text-blue-100/70">
          Rows: {activeSheet?.rows.length ?? 0}
        </p>
      </div>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-blue-100/80"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="text-blue-50">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

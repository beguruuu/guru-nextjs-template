"use client"

import * as XLSX from "xlsx"
import { db, type ExcelCellValue, type ExcelDataset } from "./db"

export const WORKSPACE_ID_KEY = "guru:workspaceId"

export function getStoredWorkspaceId(): number | null {
  if (typeof window === "undefined") return null
  const raw = window.localStorage.getItem(WORKSPACE_ID_KEY)
  const id = raw ? Number(raw) : null
  return id && Number.isFinite(id) ? id : null
}

export function storeWorkspaceId(id: number) {
  if (typeof window === "undefined") return
  window.localStorage.setItem(WORKSPACE_ID_KEY, String(id))
}

async function getOrCreateWorkspaceId(): Promise<number> {
  const storedId = getStoredWorkspaceId()
  if (storedId) return storedId

  const now = Date.now()
  const id = await db.workspaces.add({
    name: "Default Workspace",
    createdAt: now,
    updatedAt: now,
  })

  storeWorkspaceId(id)
  return id
}

function normalizeCellValue(value: unknown): ExcelCellValue {
  if (value === null || value === undefined) return null
  if (typeof value === "string") return value
  if (typeof value === "number") return value
  if (typeof value === "boolean") return value
  if (value instanceof Date) return value.toISOString()
  return String(value)
}

function normalizeHeaderCell(value: unknown, index: number): string {
  const cell = normalizeCellValue(value)
  const text = cell === null ? "" : String(cell).trim()
  return text.length > 0 ? text : `Column ${index + 1}`
}

function normalizeRow(values: unknown[], columnCount: number): ExcelCellValue[] {
  return Array.from({ length: columnCount }, (_, index) =>
    normalizeCellValue(values[index])
  )
}

export async function importExcel(
  file: File,
  workspaceId?: number
): Promise<ExcelDataset> {
  const buffer = await file.arrayBuffer()
  const workbook = XLSX.read(buffer, { type: "array" })

  const sheets = workbook.SheetNames.map((sheetName) => {
    const sheet = workbook.Sheets[sheetName]
    const rows = XLSX.utils.sheet_to_json<unknown[]>(sheet, {
      header: 1,
    }) as unknown[][]

    const headerRow = rows[0] ?? []
    const dataRows = rows.slice(1)
    const headerColumns = headerRow.map((value, index) =>
      normalizeHeaderCell(value, index)
    )
    const fallbackCount = dataRows.reduce(
      (max, row) => Math.max(max, row.length),
      0
    )
    const columns =
      headerColumns.length > 0
        ? headerColumns
        : Array.from({ length: fallbackCount }, (_, index) => `Column ${index + 1}`)

    const normalizedRows = dataRows.map((row) =>
      normalizeRow(row, columns.length)
    )

    return {
      sheetName,
      columns,
      rows: normalizedRows,
    }
  })

  const dataset: ExcelDataset = {
    workspaceId: workspaceId ?? (await getOrCreateWorkspaceId()),
    name: file.name,
    sheets,
    createdAt: Date.now(),
  }

  const id = await db.excelDatasets.add(dataset)
  return { ...dataset, id }
}

export function excelToPromptText(dataset: ExcelDataset): string {
  return dataset.sheets
    .map((sheet) => {
      const columns = sheet.columns
      const header = `| ${columns.join(" | ")} |`
      const separator = `| ${columns.map(() => "---").join(" | ")} |`
      const body = sheet.rows
        .slice(0, 50)
        .map((row) => {
          const cells = row.map((value) =>
            (value ?? "").toString().slice(0, 50)
          )
          return `| ${cells.join(" | ")} |`
        })
        .join("\n")
      return `**Sheet: ${sheet.sheetName}**\n${header}\n${separator}\n${body}`
    })
    .join("\n\n")
}

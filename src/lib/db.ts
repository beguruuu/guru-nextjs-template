"use client"

import Dexie, { type Table } from "dexie"

export type ExcelCellValue = string | number | boolean | null

export type ExcelSheet = {
  sheetName: string
  columns: string[]
  rows: ExcelCellValue[][]
}

export type ExcelDataset = {
  id?: number
  workspaceId: number
  name: string
  sheets: ExcelSheet[]
  createdAt: number
}

export type Workspace = {
  id?: number
  name: string
  createdAt: number
  updatedAt: number
}

export type Artifact = {
  id?: number
  workspaceId: number
  datasetId?: number
  type: "schema" | "prompt" | "ui" | "other"
  content: string
  createdAt: number
}

class GuruDB extends Dexie {
  workspaces!: Table<Workspace, number>
  excelDatasets!: Table<ExcelDataset, number>
  artifacts!: Table<Artifact, number>

  constructor() {
    super("guru")
    this.version(1).stores({
      workspaces: "++id, name, createdAt, updatedAt",
      excelDatasets: "++id, workspaceId, name, createdAt",
      artifacts: "++id, workspaceId, datasetId, type, createdAt",
    })
  }
}

export const db = new GuruDB()

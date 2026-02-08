import { clsx, type ClassValue } from "clsx"
import { z } from "zod"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const excelSheetSchema = z.object({
  sheetName: z.string(),
  columns: z.array(z.string()),
  rows: z.array(
    z.array(z.union([z.string(), z.number(), z.boolean(), z.null()]))
  ),
})

export const excelDatasetSchema = z.object({
  id: z.number().optional(),
  workspaceId: z.number(),
  name: z.string(),
  sheets: z.array(excelSheetSchema),
  createdAt: z.number(),
})

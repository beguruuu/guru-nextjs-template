"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { db } from "@/lib/db"
import { getStoredWorkspaceId, storeWorkspaceId } from "@/lib/excel"

export default function Home() {
  const [workspaceId, setWorkspaceId] = useState<number | null>(null)
  const [workspaceName, setWorkspaceName] = useState("")
  const [isCreating, setIsCreating] = useState(false)

  useEffect(() => {
    const storedId = getStoredWorkspaceId()
    if (!storedId) return
    setWorkspaceId(storedId)
    db.workspaces.get(storedId).then((workspace) => {
      if (workspace) setWorkspaceName(workspace.name)
    })
  }, [])

  const handleCreateWorkspace = async () => {
    const trimmedName = workspaceName.trim() || "My Workspace"
    setIsCreating(true)
    const now = Date.now()

    if (workspaceId) {
      await db.workspaces.update(workspaceId, {
        name: trimmedName,
        updatedAt: now,
      })
      setIsCreating(false)
      return
    }

    const id = await db.workspaces.add({
      name: trimmedName,
      createdAt: now,
      updatedAt: now,
    })
    storeWorkspaceId(id)
    setWorkspaceId(id)
    setIsCreating(false)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 px-4 py-10 text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <div className="relative flex justify-center">
          <div className="absolute inset-0 flex justify-center">
            <div className="h-40 w-40 rounded-full bg-linear-to-r from-blue-400 to-cyan-400 opacity-40 blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-blue-300/40 bg-linear-to-br from-blue-200/30 to-cyan-200/20 backdrop-blur-sm">
              <Image
                src="/logo-no-text-light.png"
                alt="GURU"
                width={100}
                height={100}
                className="h-24 w-24 drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Welcome. Let's build your
            <span className="block bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text font-black text-transparent">
              Operating System
            </span>
          </h1>
          <p className="text-sm text-blue-100/90 md:text-base">
            Start by describing how your team works day to day or upload the
            spreadsheets you already use
          </p>
        </div>


        <p className="text-xs text-blue-200/80">
          GURU will guide you, ask the right questions, and turn your requests
          into software.
        </p>
      </div>
    </div>
  )
}
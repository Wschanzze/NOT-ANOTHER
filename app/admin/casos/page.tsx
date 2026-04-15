"use client"

import { useState, useEffect, useCallback } from "react"
import { Plus, Pencil, Trash2, X, Check, AlertCircle, Briefcase } from "lucide-react"

interface Case {
  id: string
  tag: string
  title: string
  description: string
  metrics: string[]
}

const EMPTY_CASE: Omit<Case, "id"> = {
  tag: "",
  title: "",
  description: "",
  metrics: [],
}

export default function AdminCasos() {
  const [cases, setCases] = useState<Case[]>([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState<{ open: boolean; mode: "create" | "edit"; data: Omit<Case, "id"> & { id?: string } }>({
    open: false,
    mode: "create",
    data: EMPTY_CASE,
  })
  const [metricInput, setMetricInput] = useState("")
  const [saving, setSaving] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)

  const showToast = useCallback((message: string, type: "success" | "error") => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }, [])

  const fetchCases = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/cases")
      if (!res.ok) throw new Error()
      setCases(await res.json())
    } catch {
      showToast("Error al cargar los casos", "error")
    } finally {
      setLoading(false)
    }
  }, [showToast])

  useEffect(() => {
    fetchCases()
  }, [fetchCases])

  function openCreate() {
    setModal({ open: true, mode: "create", data: { ...EMPTY_CASE } })
    setMetricInput("")
  }

  function openEdit(c: Case) {
    setModal({ open: true, mode: "edit", data: { ...c } })
    setMetricInput("")
  }

  function closeModal() {
    setModal((m) => ({ ...m, open: false }))
    setMetricInput("")
  }

  function addMetric() {
    const trimmed = metricInput.trim()
    if (!trimmed) return
    setModal((m) => ({ ...m, data: { ...m.data, metrics: [...m.data.metrics, trimmed] } }))
    setMetricInput("")
  }

  function removeMetric(metric: string) {
    setModal((m) => ({ ...m, data: { ...m.data, metrics: m.data.metrics.filter((v) => v !== metric) } }))
  }

  async function handleSave() {
    setSaving(true)
    try {
      const isEdit = modal.mode === "edit"
      const res = await fetch("/api/admin/cases", {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(modal.data),
      })
      if (!res.ok) throw new Error()
      await fetchCases()
      closeModal()
      showToast(isEdit ? "Caso actualizado" : "Caso creado", "success")
    } catch {
      showToast("Error al guardar", "error")
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: string) {
    try {
      const res = await fetch("/api/admin/cases", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
      if (!res.ok) throw new Error()
      await fetchCases()
      setDeleteConfirm(null)
      showToast("Caso eliminado", "success")
    } catch {
      showToast("Error al eliminar", "error")
    }
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl border text-sm shadow-xl transition-all ${
            toast.type === "success"
              ? "bg-zinc-950 border-green-800 text-green-400"
              : "bg-zinc-950 border-red-900 text-red-400"
          }`}
        >
          {toast.type === "success" ? (
            <Check className="w-4 h-4 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0" />
          )}
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Administrar</p>
          <h1 className="text-3xl font-light text-white">Casos de Estudio</h1>
          <p className="text-zinc-500 text-sm mt-1">{cases.length} casos en total</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 bg-[#5100fd] hover:bg-[#6610ff] text-white px-4 py-2.5 rounded-xl text-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          Agregar caso
        </button>
      </div>

      {/* Table */}
      {loading ? (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-12 flex items-center justify-center">
          <p className="text-zinc-600 text-sm">Cargando...</p>
        </div>
      ) : (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
          {cases.length === 0 ? (
            <div className="p-12 flex flex-col items-center gap-3 text-center">
              <Briefcase className="w-8 h-8 text-zinc-700" />
              <p className="text-zinc-500 text-sm">No hay casos aún. Agregá el primero.</p>
            </div>
          ) : (
            <div className="divide-y divide-zinc-800">
              {/* Header row */}
              <div className="grid grid-cols-[1fr_3fr_1fr_1fr] gap-4 px-6 py-3 text-xs uppercase tracking-wider text-zinc-600">
                <span>Tag</span>
                <span>Título</span>
                <span>Métricas</span>
                <span className="text-right">Acciones</span>
              </div>
              {cases.map((c) => (
                <div key={c.id} className="grid grid-cols-[1fr_3fr_1fr_1fr] gap-4 px-6 py-4 items-center hover:bg-zinc-900/40 transition-colors">
                  <span className="text-xs px-2.5 py-1 rounded-full border border-[#84cc16]/30 bg-[#84cc16]/5 text-[#a3e635] w-fit whitespace-nowrap">
                    {c.tag}
                  </span>
                  <span className="text-sm text-white truncate">{c.title}</span>
                  <span className="text-xs text-zinc-500">{c.metrics.length} métricas</span>
                  <div className="flex items-center gap-2 justify-end">
                    <button
                      onClick={() => openEdit(c)}
                      className="p-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                      title="Editar"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    {deleteConfirm === c.id ? (
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-red-400">¿Eliminar?</span>
                        <button
                          onClick={() => handleDelete(c.id)}
                          className="p-1.5 rounded-lg text-red-400 hover:bg-red-950/30 transition-colors"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="p-1.5 rounded-lg text-zinc-500 hover:bg-zinc-800 transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirm(c.id)}
                        className="p-2 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-950/20 transition-colors"
                        title="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-2xl flex flex-col max-h-[90vh]">
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800 shrink-0">
              <h2 className="text-lg font-medium text-white">
                {modal.mode === "create" ? "Agregar caso" : "Editar caso"}
              </h2>
              <button
                onClick={closeModal}
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal body */}
            <div className="overflow-y-auto flex-1 px-6 py-5">
              <div className="flex flex-col gap-4">
                <Field label="Tag / Industria">
                  <input
                    type="text"
                    value={modal.data.tag}
                    onChange={(e) => setModal((m) => ({ ...m, data: { ...m.data, tag: e.target.value } }))}
                    placeholder="Ej: Fintech, SaaS, Logística..."
                    className="admin-input"
                  />
                </Field>

                <Field label="Título del caso">
                  <input
                    type="text"
                    value={modal.data.title}
                    onChange={(e) => setModal((m) => ({ ...m, data: { ...m.data, title: e.target.value } }))}
                    placeholder="Ej: Reducción del 60% en tiempo de onboarding"
                    className="admin-input"
                  />
                </Field>

                <Field label="Descripción">
                  <textarea
                    value={modal.data.description}
                    onChange={(e) => setModal((m) => ({ ...m, data: { ...m.data, description: e.target.value } }))}
                    placeholder="Descripción del caso de estudio..."
                    rows={4}
                    className="admin-input resize-none"
                  />
                </Field>

                <Field label="Métricas">
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={metricInput}
                      onChange={(e) => setMetricInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addMetric()
                        }
                      }}
                      placeholder="Ej: 60% menos tiempo (Enter para agregar)"
                      className="admin-input flex-1"
                    />
                    <button
                      type="button"
                      onClick={addMetric}
                      className="px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-sm transition-colors shrink-0"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  {modal.data.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {modal.data.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-zinc-700 text-zinc-300 bg-zinc-900"
                        >
                          {metric}
                          <button
                            onClick={() => removeMetric(metric)}
                            className="text-zinc-500 hover:text-red-400 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </Field>
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-zinc-800 shrink-0">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-xl text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                disabled={saving || !modal.data.tag || !modal.data.title}
                className="px-5 py-2 bg-[#5100fd] hover:bg-[#6610ff] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm transition-colors"
              >
                {saving ? "Guardando..." : modal.mode === "create" ? "Crear caso" : "Guardar cambios"}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .admin-input {
          width: 100%;
          background: rgb(24 24 27);
          border: 1px solid rgb(63 63 70);
          border-radius: 0.75rem;
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          color: white;
          outline: none;
          transition: border-color 0.15s;
        }
        .admin-input::placeholder {
          color: rgb(82 82 91);
        }
        .admin-input:focus {
          border-color: #5100fd;
        }
      `}</style>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs text-zinc-400 uppercase tracking-wider">{label}</label>
      {children}
    </div>
  )
}

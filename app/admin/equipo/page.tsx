"use client"

import { useState, useEffect, useCallback } from "react"
import { Plus, Pencil, Trash2, X, Check, AlertCircle, User } from "lucide-react"
import Image from "next/image"

interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  skills: string[]
  image: string
  linkedin: string
  twitter: string
}

const EMPTY_MEMBER: Omit<TeamMember, "id"> = {
  name: "",
  role: "",
  description: "",
  skills: [],
  image: "",
  linkedin: "#",
  twitter: "#",
}

export default function AdminEquipo() {
  const [team, setTeam] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState<{ open: boolean; mode: "create" | "edit"; data: Omit<TeamMember, "id"> & { id?: string } }>({
    open: false,
    mode: "create",
    data: EMPTY_MEMBER,
  })
  const [skillInput, setSkillInput] = useState("")
  const [saving, setSaving] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)

  const showToast = useCallback((message: string, type: "success" | "error") => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }, [])

  const fetchTeam = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/team")
      if (!res.ok) throw new Error()
      setTeam(await res.json())
    } catch {
      showToast("Error al cargar el equipo", "error")
    } finally {
      setLoading(false)
    }
  }, [showToast])

  useEffect(() => {
    fetchTeam()
  }, [fetchTeam])

  function openCreate() {
    setModal({ open: true, mode: "create", data: { ...EMPTY_MEMBER } })
    setSkillInput("")
  }

  function openEdit(member: TeamMember) {
    setModal({ open: true, mode: "edit", data: { ...member } })
    setSkillInput("")
  }

  function closeModal() {
    setModal((m) => ({ ...m, open: false }))
    setSkillInput("")
  }

  function addSkill() {
    const trimmed = skillInput.trim()
    if (!trimmed) return
    setModal((m) => ({ ...m, data: { ...m.data, skills: [...m.data.skills, trimmed] } }))
    setSkillInput("")
  }

  function removeSkill(skill: string) {
    setModal((m) => ({ ...m, data: { ...m.data, skills: m.data.skills.filter((s) => s !== skill) } }))
  }

  async function handleSave() {
    setSaving(true)
    try {
      const isEdit = modal.mode === "edit"
      const res = await fetch("/api/admin/team", {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(modal.data),
      })
      if (!res.ok) throw new Error()
      await fetchTeam()
      closeModal()
      showToast(isEdit ? "Miembro actualizado" : "Miembro creado", "success")
    } catch {
      showToast("Error al guardar", "error")
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: string) {
    try {
      const res = await fetch("/api/admin/team", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
      if (!res.ok) throw new Error()
      await fetchTeam()
      setDeleteConfirm(null)
      showToast("Miembro eliminado", "success")
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
          <h1 className="text-3xl font-light text-white">Equipo</h1>
          <p className="text-zinc-500 text-sm mt-1">{team.length} miembros en total</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 bg-[#5100fd] hover:bg-[#6610ff] text-white px-4 py-2.5 rounded-xl text-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          Agregar miembro
        </button>
      </div>

      {/* Table */}
      {loading ? (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-12 flex items-center justify-center">
          <p className="text-zinc-600 text-sm">Cargando...</p>
        </div>
      ) : (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
          {team.length === 0 ? (
            <div className="p-12 flex flex-col items-center gap-3 text-center">
              <User className="w-8 h-8 text-zinc-700" />
              <p className="text-zinc-500 text-sm">No hay miembros aún. Agregá el primero.</p>
            </div>
          ) : (
            <div className="divide-y divide-zinc-800">
              {/* Header row */}
              <div className="grid grid-cols-[3fr_2fr_1fr] gap-4 px-6 py-3 text-xs uppercase tracking-wider text-zinc-600">
                <span>Nombre</span>
                <span>Rol</span>
                <span className="text-right">Acciones</span>
              </div>
              {team.map((member) => (
                <div key={member.id} className="grid grid-cols-[3fr_2fr_1fr] gap-4 px-6 py-4 items-center hover:bg-zinc-900/40 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0 bg-zinc-800">
                      {member.image ? (
                        <Image src={member.image} alt={member.name} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <User className="w-4 h-4 text-zinc-600" />
                        </div>
                      )}
                    </div>
                    <span className="text-sm text-white truncate">{member.name}</span>
                  </div>
                  <span className="text-sm text-zinc-400 truncate">{member.role}</span>
                  <div className="flex items-center gap-2 justify-end">
                    <button
                      onClick={() => openEdit(member)}
                      className="p-2 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                      title="Editar"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    {deleteConfirm === member.id ? (
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-red-400">¿Eliminar?</span>
                        <button
                          onClick={() => handleDelete(member.id)}
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
                        onClick={() => setDeleteConfirm(member.id)}
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
                {modal.mode === "create" ? "Agregar miembro" : "Editar miembro"}
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
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Nombre">
                    <input
                      type="text"
                      value={modal.data.name}
                      onChange={(e) => setModal((m) => ({ ...m, data: { ...m.data, name: e.target.value } }))}
                      placeholder="Ej: Mateo Rodríguez"
                      className="admin-input"
                    />
                  </Field>
                  <Field label="Rol">
                    <input
                      type="text"
                      value={modal.data.role}
                      onChange={(e) => setModal((m) => ({ ...m, data: { ...m.data, role: e.target.value } }))}
                      placeholder="Ej: CEO & Fundador"
                      className="admin-input"
                    />
                  </Field>
                </div>

                <Field label="Descripción">
                  <textarea
                    value={modal.data.description}
                    onChange={(e) => setModal((m) => ({ ...m, data: { ...m.data, description: e.target.value } }))}
                    placeholder="Breve descripción del miembro..."
                    rows={3}
                    className="admin-input resize-none"
                  />
                </Field>

                <Field label="Imagen (ruta o URL)">
                  <input
                    type="text"
                    value={modal.data.image}
                    onChange={(e) => setModal((m) => ({ ...m, data: { ...m.data, image: e.target.value } }))}
                    placeholder="Ej: /images/team-ceo.jpg"
                    className="admin-input"
                  />
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="LinkedIn URL">
                    <input
                      type="text"
                      value={modal.data.linkedin}
                      onChange={(e) => setModal((m) => ({ ...m, data: { ...m.data, linkedin: e.target.value } }))}
                      placeholder="#"
                      className="admin-input"
                    />
                  </Field>
                  <Field label="Twitter URL">
                    <input
                      type="text"
                      value={modal.data.twitter}
                      onChange={(e) => setModal((m) => ({ ...m, data: { ...m.data, twitter: e.target.value } }))}
                      placeholder="#"
                      className="admin-input"
                    />
                  </Field>
                </div>

                <Field label="Skills">
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addSkill()
                        }
                      }}
                      placeholder="Escribí una skill y presioná Enter"
                      className="admin-input flex-1"
                    />
                    <button
                      type="button"
                      onClick={addSkill}
                      className="px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-sm transition-colors shrink-0"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  {modal.data.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {modal.data.skills.map((skill) => (
                        <span
                          key={skill}
                          className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-zinc-700 text-zinc-300 bg-zinc-900"
                        >
                          {skill}
                          <button
                            onClick={() => removeSkill(skill)}
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
                disabled={saving || !modal.data.name || !modal.data.role}
                className="px-5 py-2 bg-[#5100fd] hover:bg-[#6610ff] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm transition-colors"
              >
                {saving ? "Guardando..." : modal.mode === "create" ? "Crear miembro" : "Guardar cambios"}
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

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react"

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Error al iniciar sesión")
        return
      }

      router.push("/admin")
      router.refresh()
    } catch {
      setError("Error de conexión. Intentá de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      {/* Background glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(81,0,253,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-md">
        {/* Logo / brand */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">Panel de administración</p>
          <h1 className="text-3xl font-light text-white">Not Another</h1>
        </div>

        {/* Card */}
        <div className="relative rounded-2xl border border-zinc-800 p-px">
          <div className="relative bg-zinc-950 rounded-2xl p-8">
            <h2 className="text-lg font-medium text-white mb-1">Iniciar sesión</h2>
            <p className="text-zinc-500 text-sm mb-8">Ingresá tus credenciales de administrador</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-400 uppercase tracking-wider">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="admin@ejemplo.com"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#5100fd] transition-colors"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-400 uppercase tracking-wider">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-12 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#5100fd] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 bg-red-950/40 border border-red-900/50 rounded-xl px-4 py-3">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#5100fd] hover:bg-[#6610ff] disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl py-3 text-sm font-medium transition-colors mt-1"
              >
                {loading ? "Iniciando sesión..." : "Ingresar"}
              </button>
            </form>
          </div>
        </div>

        <p className="text-center text-zinc-700 text-xs mt-6">
          Acceso restringido — solo personal autorizado
        </p>
      </div>
    </div>
  )
}

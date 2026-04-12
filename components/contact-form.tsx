"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  message: string
  budget: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.company.trim()) {
      newErrors.company = "El nombre de la empresa es requerido"
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          budget: "",
        })
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setErrors({ name: "Error al enviar el formulario. Intenta nuevamente." })
      }
    } catch (error) {
      setErrors({ name: "Error al enviar el formulario. Intenta nuevamente." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-6 text-center rounded-2xl border border-[#5100fd]/30 bg-[#5100fd]/5">
        <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-light text-white mb-2">¡Mensaje recibido!</h3>
        <p className="text-zinc-400">
          Nos pondremos en contacto pronto para discutir tu proyecto.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-light text-zinc-300">
          Nombre completo
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          className={`bg-zinc-950 border-zinc-800 text-white placeholder-zinc-600 ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-light text-zinc-300">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className={`bg-zinc-950 border-zinc-800 text-white placeholder-zinc-600 ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Company */}
      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-light text-zinc-300">
          Empresa
        </label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Nombre de tu empresa"
          className={`bg-zinc-950 border-zinc-800 text-white placeholder-zinc-600 ${
            errors.company ? "border-red-500" : ""
          }`}
        />
        {errors.company && (
          <p className="text-xs text-red-500">{errors.company}</p>
        )}
      </div>

      {/* Budget */}
      <div className="space-y-2">
        <label htmlFor="budget" className="block text-sm font-light text-zinc-300">
          Presupuesto estimado (opcional)
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, budget: e.target.value }))
          }
          className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#5100fd] focus:border-transparent"
        >
          <option value="">Selecciona un rango</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k-100k">$50,000 - $100,000</option>
          <option value="100k+">$100,000+</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-light text-zinc-300">
          Cuéntanos sobre tu proyecto
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="¿Qué necesitas construir? ¿Cuáles son tus objetivos?"
          rows={5}
          className={`bg-zinc-950 border-zinc-800 text-white placeholder-zinc-600 resize-none ${
            errors.message ? "border-red-500" : ""
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full group bg-[#5100fd] hover:bg-[#6610ff] text-white px-8 py-6 text-base rounded-lg transition-all duration-[650ms] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-[650ms] group-hover:translate-x-1" />
      </Button>
    </form>
  )
}

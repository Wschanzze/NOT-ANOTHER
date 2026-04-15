import { AdminSidebar } from "./components/admin-sidebar"

export const metadata = {
  title: "Admin — Not Another",
  description: "Panel de administración",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}

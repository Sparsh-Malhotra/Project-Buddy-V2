import Sidebar from '@/components/Profile/Sidebar'
import Protected from '@/context/Protected'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Protected>
      <main className="flex h-screen">
        <Sidebar />
        {children}
      </main>
    </Protected>
  )
}

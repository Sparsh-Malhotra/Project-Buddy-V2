'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

export default function Protected({ children }: { children: ReactNode }) {
  const { status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') redirect('/login')
  }, [status])

  if (status === 'loading') return null

  return <>{children}</>
}

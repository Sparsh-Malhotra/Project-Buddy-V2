import { inter } from '@/core/Fonts'
import './globals.css'
import NextAuthProvider from '@/context/NextAuthProvider'

export const metadata = {
  title: 'Project Buddy',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}

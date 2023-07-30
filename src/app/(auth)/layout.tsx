import { BoldText } from '@/core/Typography'
import Image from 'next/image'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex h-screen">
      <aside className="bg-[#F8F8FD] flex-1 relative">
        <img
          src="/assets/Auth/Pattern.svg"
          alt="pattern"
          className="absolute bottom-0"
        />
        <div className="flex items-center justify-center gap-3 w-full h-full">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={36}
            height={36}
            className="z-[100]"
          />
          <BoldText className="z-[100] text-4xl">Project Buddy</BoldText>
        </div>
      </aside>
      <section className="flex-[1.4]">{children}</section>
    </main>
  )
}

import { MediumText } from '@/core/Typography'

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex h-screen">
      <aside className="bg-[#CCCCF5] flex-1"></aside>
      <section className="flex-[2.5]">
        <div className="flex flex-col items-center justify-center gap-3 h-full w-full m-auto px-20">
          <MediumText className="text-3xl">Complete your Profile</MediumText>
          {children}
        </div>
      </section>
    </main>
  )
}

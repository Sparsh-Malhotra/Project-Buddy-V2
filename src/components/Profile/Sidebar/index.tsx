'use client'

import { MediumText, RegularText } from '@/core/Typography'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathName = usePathname().split('/')
  let browseBuddiesClass = 'text-secondary',
    myProfileClass = 'text-secondary'

  if (pathName[1] === 'dashboard') {
    myProfileClass = 'bg-[#E9EBFD] text-primary'
  } else if (pathName[1] === 'browse-buddies') {
    browseBuddiesClass = 'bg-[#E9EBFD] text-primary'
  }

  return (
    <section className="flex flex-col w-[19vw] bg-[#F8F8FD] relative pt-4">
      <div className="flex items-center gap-3 px-3">
        <Image src="/assets/logo.svg" alt="logo" width={32} height={32} />
        <MediumText className="text-2xl">Project Buddy</MediumText>
      </div>
      <div className="relative">
        <ul className="px-4 mt-10">
          <Link href="/browse-buddies">
            <li
              className={`flex items-center gap-2 py-2 px-1 ${browseBuddiesClass}`}
            >
              {pathName[1] === 'browse-buddies' && (
                <div className="bg-primary w-1 h-10 absolute left-0" />
              )}
              <Image
                src="/assets/Sidebar/Buddies.svg"
                alt="buddies"
                width={24}
                height={24}
              />
              <RegularText>Browse Buddies</RegularText>
            </li>
          </Link>
          <Link href="/dashboard">
            <li
              className={`flex items-center gap-2 mt-2 py-2 px-1 ${myProfileClass}`}
            >
              {pathName[1] === 'dashboard' && (
                <div className="bg-primary w-1 h-10 absolute left-0" />
              )}
              <Image
                src="/assets/Sidebar/Profile.svg"
                alt="buddies"
                width={24}
                height={24}
              />
              <RegularText>My Public Profile</RegularText>
            </li>
          </Link>
        </ul>
      </div>
      <img
        src="/assets/Sidebar/pattern.svg"
        alt="pattern"
        className="absolute right-0 bottom-0"
      />
    </section>
  )
}

export default Sidebar

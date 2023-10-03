'use client'

import React, { FunctionComponent, PropsWithChildren } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BoldText, MediumText, RegularText } from '@/core/Typography'
import { LogOut, Mail } from 'lucide-react'
import GitHubCalendar from 'react-github-calendar'

type ProfileCardProps = {
  className?: string
}

const ProfileCard: FunctionComponent<PropsWithChildren<ProfileCardProps>> = ({
  className,
  children,
}) => (
  <div className={`border border-borderColor h-fit ${className}`}>
    {children}
  </div>
)

type EditButtonProps = {
  id: string
}

const EditButton = ({ id }: EditButtonProps) => {
  return (
    <Button
      variant="ghost"
      className="border border-borderColor p-2 flex justify-center items-center hover:bg-[#4640DE26]"
    >
      <Image
        src="/assets/Profile/Edit.svg"
        alt="edit"
        width={20}
        height={20}
        id={id}
      />
    </Button>
  )
}

const skillsData = ['React', 'Javascript', 'HTML', 'CSS']

export default function Dashboard() {
  return (
    <section className="flex flex-col w-[81vw]">
      <nav className="flex items-center justify-between border-b border-b-borderColor w-full px-5 py-3">
        <BoldText className="text-[1.8rem]">My Profile</BoldText>
        <Button
          variant="outline"
          className="text-[#FF6550] gap-3 text-base hover:bg-[#ff655026] hover:text-[#FF6550] border-[#FF6550]"
        >
          <LogOut />
          Logout
        </Button>
      </nav>
      <div className="grid grid-cols-5 gap-2 mt-2 mx-3 max-h-screen">
        <ProfileCard className="flex flex-col col-span-3">
          <img
            src="/assets/Profile/header-bg.png"
            alt="Header image"
            width="fit-content"
            className="h-[80px]"
          />
          <div className="flex items-center px-4 py-2">
            <Image
              src="https://placehold.co/100x100/"
              alt="avatar"
              unoptimized
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="flex flex-col ml-4">
              <MediumText className="text-[#25324B] text-xl">
                John Doe
              </MediumText>
              <RegularText className="text-secondary my-[0.5]">
                Frontend Developer
              </RegularText>
              <div className="flex gap-1">
                <Image
                  src="/assets/Profile/Location.svg"
                  alt="location"
                  width={15}
                  height={18}
                />
                <RegularText className="text-secondary">Mumbai</RegularText>
              </div>
            </div>
            <Button
              variant="outline"
              className="text-primary gap-3 text-base hover:bg-[#4640DE26] hover:text-primary border-borderColor ml-auto"
            >
              Edit Profile
            </Button>
          </div>
        </ProfileCard>
        <ProfileCard className="px-4 py-2 col-span-2">
          <div className="flex justify-between">
            <MediumText className="text-lg">Additional Details</MediumText>
            <EditButton id="about" />
          </div>
          <div className="flex gap-2 mb-3">
            <Mail color="#7C8493" />
            <div className="flex flex-col">
              <RegularText className="text-secondary">Email</RegularText>
              <RegularText>sparsmalhotra@gmail.com</RegularText>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <Image
              src="/assets/Profile/University.svg"
              alt="university"
              width={20}
              height={20}
            />
            <div className="flex flex-col">
              <RegularText className="text-secondary">University</RegularText>
              <RegularText>Aktu</RegularText>
            </div>
          </div>
        </ProfileCard>
        <ProfileCard className="px-4 py-2 col-span-3">
          <div className="flex justify-between items-center">
            <MediumText className="text-lg">About Me</MediumText>
            <EditButton id="about" />
          </div>
          <RegularText className="text-[#515B6F] mt-1">
            I’m a product designer + filmmaker currently working remotely at
            Twitter from beautiful Manchester, United Kingdom. I’m passionate
            about designing digital products that have a positive impact on the
            world.
            <br />
            <br /> For 10 years, I’ve specialised in interface, experience &
            interaction design as well as working in user research and product
            strategy for product agencies, big tech companies & start-ups.
          </RegularText>
        </ProfileCard>
        <ProfileCard className="px-4 py-2 col-span-2">
          <div className="flex justify-between">
            <MediumText className="text-lg">Social Links</MediumText>
            <EditButton id="about" />
          </div>
          <div>
            <div className="flex gap-2">
              <Image
                src="/assets/Profile/Github.svg"
                alt="github"
                width={24}
                height={24}
              />
              <Image
                src="/assets/Profile/Twitter.svg"
                alt="github"
                width={24}
                height={24}
              />
              <Image
                src="/assets/Profile/Linkedin.svg"
                alt="github"
                width={24}
                height={24}
              />
              <Image
                src="/assets/Profile/Dribble.svg"
                alt="github"
                width={24}
                height={24}
              />
              <RegularText className="text-secondary">Email</RegularText>
            </div>
          </div>
        </ProfileCard>
        <ProfileCard className="px-4 py-2 col-span-3">
          <div className="flex justify-between items-start">
            <MediumText className="text-lg">Skills</MediumText>
            <EditButton id="skills" />
          </div>
          <div className="flex gap-2 items-center">
            {React.Children.toArray(
              skillsData.map((skill) => (
                <div className="bg-[#ececf9] text-primary py-1 px-3 rounded-sm">
                  {skill}
                </div>
              ))
            )}
          </div>
        </ProfileCard>
        <div className="col-span-2"></div>
        <ProfileCard className="px-4 py-2 flex flex-col gap-2 col-span-3">
          <MediumText className="text-lg">GitHub Contributions</MediumText>
          <GitHubCalendar username="Sparsh-Malhotra" colorScheme="light" />
        </ProfileCard>
      </div>
    </section>
  )
}

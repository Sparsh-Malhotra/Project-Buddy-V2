import CategoryCard from "@/components/Home/CategoryCard";
import FeaturedBuddyCard from "@/components/Home/FeaturedBuddyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BoldText, MediumText, RegularText } from "@/core/Typography";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-[#F8F8FD] px-12 py-4 h-[10vh]">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image src="/assets/logo.svg" alt="logo" width={32} height={32} />
            <MediumText className="text-2xl">Project Buddy</MediumText>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="link" className="text-base" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <div className="border border-primary h-10"></div>
            <Button className="text-base" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </header>
      <main className="flex flex-col">
        <article className="bg-[#F8F8FD] flex items-center px-12 h-[90vh] pb-20 relative overflow-hidden">
          <div className="flex flex-col gap-4">
            <div>
              <BoldText className="text-6xl tracking-wide leading-tight">
                Looking for a
              </BoldText>
              <BoldText className="text-6xl text-blue-accent tracking-wide leading-tight">
                Project
              </BoldText>
              <BoldText className="text-6xl text-blue-accent tracking-wide leading-tight">
                Partner ?
              </BoldText>
            </div>
            <Image
              src="/assets/Home/header-vector.svg"
              alt="vector"
              width={400}
              height={32}
            />
            <RegularText className="text-[#515B6F] text-lg w-3/4">
              Great platform for students and working professionals to pair up
              for a project.
            </RegularText>
            <div className="flex items-center px-4 py-2 bg-white gap-4 rounded-sm mt-4 z-[1000]">
              <Image
                src="/assets/Common/search-icon.svg"
                alt="search"
                width={30}
                height={30}
              />
              <Input
                placeholder="Tech Stack"
                className="border-0 border-b-2 rounded-none"
              />
              <Button className="px-16" asChild>
                <Link href="/search-buddies">Search</Link>
              </Button>
            </div>
          </div>
          <img
            src="/assets/Home/Pattern.svg"
            alt="pattern"
            className="absolute -right-4 top-1"
          />
        </article>
        <section className="px-12 py-6">
          <div className="flex items-center justify-between">
            <MediumText className="text-3xl">
              Explore by <span className="text-blue-accent">category</span>
            </MediumText>
            <Button variant="link" className="text-base gap-1">
              Show all categories
              <ArrowRight />
            </Button>
          </div>
          <div className="flex items-center gap-2 flex-wrap mt-4">
            <CategoryCard
              icon="/assets/Common/CategoryIcons/ui.svg"
              title="UI/UX"
              count={0}
            />
          </div>
        </section>
        <section className="px-12 py-6">
          <div className="flex items-center justify-between">
            <MediumText className="text-3xl">
              Featured <span className="text-blue-accent">buddies</span>
            </MediumText>
            <Button variant="link" className="text-base gap-1">
              Show all buddies
              <ArrowRight />
            </Button>
          </div>
          <div className="flex items-center gap-2 flex-wrap mt-4">
            <FeaturedBuddyCard
              profileIcon="/assets/Common/CategoryIcons/ui.svg"
              name="Sparsh Malhotra"
              location="Delhi, India"
            />
          </div>
        </section>
      </main>
    </>
  );
}

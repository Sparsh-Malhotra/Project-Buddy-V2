"use client";

import LottiePlayer from "@/components/Common/LottiePlayer";
import Filters from "@/components/Profile/Filters";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MultiSelect from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoriesOptions, SkillOptions, TechStackOptions } from "@/constants";
import { BoldText, MediumText, RegularText } from "@/core/Typography";
import { LogOut, MapPin, Search } from "lucide-react";

export default function BrowseBuddies() {
  return (
    <section className="flex flex-col w-[81vw] h-full">
      <nav className="flex items-center justify-between border-b border-b-borderColor px-5 py-4">
        <BoldText className="text-[1.8rem]">Find Buddies</BoldText>
        <Button
          variant="outline"
          className="text-[#FF6550] gap-3 text-base hover:bg-[#ff655026] hover:text-[#FF6550] border-[#FF6550]"
        >
          <LogOut />
          Logout
        </Button>
      </nav>
      <div className="border-b border-b-borderColor px-5 py-4">
        <div className="flex items-center justify-center gap-6 py-2 border border-borderColor w-full">
          <div className="flex items-center gap-3 w-1/3">
            <Search />
            <Input
              placeholder="Search Buddies"
              className="border-0 border-b-2 rounded-none px-0 focus-visible:ring-0"
            />
          </div>
          <div className="w-1 h-10 border-l-2 border-borderColor" />
          <div className="flex items-center gap-3 w-1/3">
            <MapPin />
            <Select>
              <SelectTrigger className="border-0 border-b rounded-none focus-visible:ring-0">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-[20%]">Search</Button>
        </div>
      </div>
      <div className="flex items-center gap-1 px-4 py-4">
        <div className="flex-1 flex flex-col gap-3">
          <Filters
            defaultOpen
            filterTitle="Tech Stack"
            filterOptions={TechStackOptions}
          />
          <Filters filterTitle="Categories" filterOptions={CategoriesOptions} />
          <RegularText className="text-base">Skills</RegularText>
          <MultiSelect
            options={SkillOptions}
            placeholder="Select Skills"
            onChange={(values) => console.log(values)}
            dir="top"
            className="w-[200px]"
          />
        </div>
        <div className="flex flex-col items-start flex-[3] h-full">
          <div className="flex flex-col">
            <MediumText className="text-lg">All Buddies</MediumText>
            <RegularText className="text-[#25324B] text-sm">
              Showing 73 results
            </RegularText>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <LottiePlayer src="/assets/Profile/empty-ghost.json" />
            <MediumText className="text-[#25324B] text-lg mt-2">
              No Buddies Found
            </MediumText>
          </div>
        </div>
      </div>
    </section>
  );
}

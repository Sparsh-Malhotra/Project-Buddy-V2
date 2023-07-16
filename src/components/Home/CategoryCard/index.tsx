import { RegularText } from "@/core/Typography";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ICategoryCard {
  icon: string;
  title: string;
  count: number;
}

const CategoryCard = ({ icon, title, count }: ICategoryCard) => (
  <div className="rounded-sm border border-primary p-6 flex flex-col gap-4 cursor-pointer group hover:bg-primary">
    <Image
      src={icon}
      alt="icon"
      width={48}
      height={48}
      className="group-hover:text-white group-hover:brightness-0 group-hover:invert"
    />
    <RegularText className="text-base group-hover:text-white">
      {title}
    </RegularText>
    <div className="flex items-center gap-2">
      <RegularText className="text-base group-hover:text-white">
        {count} buddies available
      </RegularText>
      <ArrowRight width={24} height={24} className="group-hover:text-white" />
    </div>
  </div>
);

export default CategoryCard;

import { MediumText, RegularText } from "@/core/Typography";
import Image from "next/image";

interface IFeaturedBuddyCard {
  profileIcon: string;
  name: string;
  location: string;
  techStacks?: string[];
}

const FeaturedBuddyCard = ({
  profileIcon,
  name,
  location,
  techStacks,
}: IFeaturedBuddyCard) => (
  <div className="rounded-sm border border-primary p-4 flex flex-col gap-1">
    <Image
      src={profileIcon}
      alt="user icon"
      width={48}
      height={48}
      className="self-center"
    />
    <MediumText>{name}</MediumText>
    <RegularText className="text-md text-secondary">{location}</RegularText>
  </div>
);

export default FeaturedBuddyCard;

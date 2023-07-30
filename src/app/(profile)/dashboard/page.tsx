import { Button } from "@/components/ui/button";
import { BoldText } from "@/core/Typography";
import { LogOut } from "lucide-react";

export default function Dashboard() {
  return (
    <section className="flex flex-col w-[81vw]">
      <nav className="flex items-center justify-between border-b border-b-borderColor w-full px-5 py-4">
        <BoldText className="text-[1.8rem]">My Profile</BoldText>
        <Button
          variant="outline"
          className="text-[#FF6550] gap-3 text-base hover:bg-[#ff655026] hover:text-[#FF6550] border-[#FF6550]"
        >
          <LogOut />
          Logout
        </Button>
      </nav>
      <div className="flex flex-col flex-wrap"></div>
    </section>
  );
}

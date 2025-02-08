import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, Menu } from "lucide-react";
import { navLinks } from "../shared/NavBar";
import Link from "next/link";

const NavSideSheet = () => {
  return (
    <Sheet key={"left"}>
      <SheetTrigger className="p-0 m-0">
        <Menu color="#A78BFA" size={28} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {/* Add your navigation links here */}
        <div className="flex min-w-fit flex-col gap-4 overflow-hidden px-10 ">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="group flex items-center gap-2">
                <ArrowRight className="size-5 -translate-x-full text-black opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:translate-x-0 group-hover:text-main group-hover:opacity-100 md:size-10" />

                <h1 className="z-10 -translate-x-6 cursor-pointer font-mono text-xl font-medium text-black transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:text-main dark:text-white md:-translate-x-12 md:text-4xl md:group-hover:translate-x-0">
                  {item?.label}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavSideSheet;

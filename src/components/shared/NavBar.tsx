"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import Image from "next/image";
import Container from "./Container";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavSideSheet from "../sheet/NavSideSheet";

export type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
];

const NavBar = () => {
  const { setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <nav className="py-4 border-b w-full border-main-light sticky top-0 left-0 right-0 z-50 bg-white dark:bg-black">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-4">
            <div className="lg:hidden flex items-center">
              <NavSideSheet />
            </div>
            <Link href="/" className="hidden lg:block">
              <Image src={logo} width={40} height={40} alt="logo" />
            </Link>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="hidden lg:flex justify-center items-center gap-6 font-light text-lg">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${
                    pathname === href
                      ? "text-main font-medium duration-200"
                      : "hover:text-main duration-200"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex justify-center items-center gap-4 lg:gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;

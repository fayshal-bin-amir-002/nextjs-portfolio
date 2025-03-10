"use client";

import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { logoutUser } from "@/service/auth";
import { useRouter } from "next/navigation";

const NavUser = () => {
  const router = useRouter();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Button
          className="w-full"
          onClick={async () => {
            await logoutUser();
            router.push("/");
          }}
        >
          Logout
        </Button>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavUser;

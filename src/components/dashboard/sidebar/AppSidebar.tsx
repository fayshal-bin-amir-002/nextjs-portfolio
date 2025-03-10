import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import NavMain from "./NavMain";
import NavUser from "./NavUser";
import { FolderKanban, House, LayoutDashboard, Mail, Rss } from "lucide-react";

const sidebarItems = [
  {
    title: "Home",
    url: "/",
    icon: House,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Blog Management",
    url: "/dashboard/blog-management",
    icon: Rss,
  },
  {
    title: "Project Management",
    url: "/dashboard/project-management",
    icon: FolderKanban,
  },
  {
    title: "Contact Messages",
    url: "/dashboard/contact-messages",
    icon: Mail,
  },
];

const AppSidebar = async ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={sidebarItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;

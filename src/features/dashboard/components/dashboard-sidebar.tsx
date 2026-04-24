"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import {
  type LucideIcon,
  Home,
  LayoutGrid,
  AudioLines,
  Volume2,
  Settings,
  Headphones,
} from "lucide-react";
import SidebarNavSection from "./sidebar-nav-section";

interface MenuItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  onClick?: () => void;
}

const mainMenuItems: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Explore voices",
    url: "/voices",
    icon: LayoutGrid,
  },
  {
    title: "Text to speech",
    url: "/text-to-speech",
    icon: AudioLines,
  },
  {
    title: "Voice cloning",
    icon: Volume2,
    // onClick: () => setVoiceDialogOpen(true),
  },
];

const othersMenuItems: MenuItem[] = [
  {
    title: "Settings",
    icon: Settings,
    // onClick: () => clerk.openOrganizationProfile(),
  },
  {
    title: "Help and support",
    url: "mailto:business@codewithantonio.com",
    icon: Headphones,
  },
];

export default function DashboardSidebar() {
  return (
    <Sidebar  collapsible="icon">
      <SidebarHeader>
        <div className="flex justify-between items-center">
          <span>Resonance</span>
          <SidebarTrigger />
        </div>
        <SidebarMenu>
          <SidebarMenuItem>
            <OrganizationSwitcher
              hidePersonal
              appearance={{
                elements: {
                  rootBox:
                    "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
                  organizationSwitcherTrigger:
                    "w-full! justify-between! bg-white! border! border-border! rounded-md! pl-1! pr-2! py-1! gap-3! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1! shadow-[0px_1px_1.5px_0px_rgba(44,54,53,0.03)]!",
                  organizationPreview: "gap-2!",
                  organizationPreviewAvatarBox: "size-6! rounded-sm!",
                  organizationPreviewTextContainer:
                    "text-xs! tracking-tight! font-medium! text-foreground! group-data-[collapsible=icon]:hidden!",
                  organizationPreviewMainIdentifier: "text-[13px]!",
                  organizationSwitcherTriggerIcon:
                    "size-4! text-sidebar-foreground! group-data-[collapsible=icon]:hidden!",
                },
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarNavSection label="Dashboard" items={mainMenuItems} />
        <SidebarNavSection label="Others" items={othersMenuItems} />
        <SidebarNavSection label="Others" items={othersMenuItems} />
        <SidebarNavSection label="Others" items={othersMenuItems} />
        <SidebarNavSection label="Others" items={othersMenuItems} />{" "}
        <SidebarNavSection label="Others" items={othersMenuItems} />
        <SidebarNavSection label="Others" items={othersMenuItems} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <UserButton
              showName
              appearance={{
                elements: {
                  userButtonBox: "flex-row-reverse! items-center gap-2",
                },
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

"use client";

import { usePathname } from "next/navigation";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface MenuItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  onClick?: () => void;
}

interface SidebarNavSectionProps {
  label?: string;
  items: MenuItem[];
}

export default function SidebarNavSection({
  label,
  items,
}: SidebarNavSectionProps) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}

      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const isActive = item.url
              ? pathname === item.url || pathname.startsWith(item.url + "/")
              : false;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  onClick={!item.url ? item.onClick : undefined}
                  tooltip={item.title}
                >
                  {item.url ? (
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  ) : (
                    <button>
                      <item.icon />
                      <span>{item.title}</span>
                    </button>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

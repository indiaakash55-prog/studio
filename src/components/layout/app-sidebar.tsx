import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { OmIcon } from "@/components/icons/om-icon";
import { BookOpenText, Home, Shield, Sparkles } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: <Home /> },
  { href: "/hanuman-chalisa", label: "Hanuman Chalisa", icon: <BookOpenText /> },
  { href: "/hanuman-aarti", label: "Hanuman Aarti", icon: <Sparkles /> },
  { href: "/mata-rani-aarti", label: "Mata Rani Aarti", icon: <Sparkles /> },
  { href: "/ganesh-ji-aarti", label: "Ganesh Ji Aarti", icon: <Sparkles /> },
  { href: "/vishnu-aarti", label: "Vishnu Aarti", icon: <Sparkles /> },
  { href: "/divya-mantra-kosh", label: "Mantra Kosh", icon: <Shield /> },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 p-2">
          <OmIcon className="size-8 text-primary" />
          <h1 className="font-headline text-2xl font-bold text-primary">
            ऋषि विद्या
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {links.map((link) => (
            <SidebarMenuItem key={link.href}>
              <Link href={link.href}>
                <SidebarMenuButton
                  isActive={pathname === link.href}
                  className="font-headline text-base"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}

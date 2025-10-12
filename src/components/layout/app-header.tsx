
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookHeart,
  BookOpenText,
  Home,
  Shield,
  Sparkles,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PanelLeft } from "lucide-react";
import React from "react";

const links = [
  { href: "/", label: "Home", icon: <Home /> },
  { href: "/hanuman-chalisa", label: "Hanuman Chalisa", icon: <BookOpenText /> },
  { href: "/hanuman-aarti", label: "Hanuman Aarti", icon: <Sparkles /> },
  { href: "/mata-rani-aarti", label: "Mata Rani Aarti", icon: <Sparkles /> },
  { href: "/ganesh-ji-aarti", label: "Ganesh Ji Aarti", icon: <Sparkles /> },
  { href: "/vishnu-aarti", label: "Vishnu Aarti", icon: <Sparkles /> },
  { href: "/jaharveer-baba-aarti", label: "Jaharveer Baba Aarti", icon: <Sparkles /> },
  { href: "/divya-mantra-kosh", label: "Mantra Kosh", icon: <Shield /> },
  { href: "/puja-vidhiyan", label: "Puja Vidhiyan", icon: <BookHeart /> },
];

function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-2">
      {links.map((link) => (
        <Button
          key={link.href}
          asChild
          variant={pathname === link.href ? "secondary" : "ghost"}
          className="justify-start gap-2"
        >
          <Link href={link.href}>
            {React.cloneElement(link.icon, { className: "h-5 w-5" })}
            <span className="font-headline text-base">{link.label}</span>
          </Link>
        </Button>
      ))}
    </nav>
  );
}

export function AppHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-4xl font-bold text-primary">ॐ</span>
        <h1 className="font-headline text-2xl font-bold text-primary">
          ऋषि विद्या
        </h1>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4">
        {/* Simplified desktop nav, maybe just a few key links or a dropdown */}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <PanelLeft className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs p-0">
              <div className="flex items-center gap-2 p-4 border-b">
                <span className="text-4xl font-bold text-primary">ॐ</span>
                <h1 className="font-headline text-2xl font-bold text-primary">
                  ऋषि विद्या
                </h1>
              </div>
              <div className="p-4">
                <NavLinks />
              </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

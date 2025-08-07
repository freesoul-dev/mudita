
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#offerings", label: "Offerings" },
  { href: "/#ideal-for", label: "Retreats" },
  { href: "/contact", label: "Contact" },
];

const darkNavPages = ["/contact", "/inquire"];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const pathname = usePathname();

  const isDarkNav = darkNavPages.includes(pathname);

  React.useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolledOrDarkPage = hasScrolled || isDarkNav;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolledOrDarkPage ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <Image src="/logo.png" alt="Mudita logo" width={50} height={50} />
            <span className={cn("font-headline text-2xl font-bold", isScrolledOrDarkPage ? "text-foreground" : "text-white drop-shadow-md")}>
              Mudita
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn("font-medium transition-colors", isScrolledOrDarkPage ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white drop-shadow-sm")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="/inquire">Inquire About Your Retreat</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn("inline-flex items-center justify-center rounded-md p-2 focus:outline-none", isScrolledOrDarkPage ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white")}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="px-4 pb-4">
            <Button asChild className="w-full">
              <Link href="/inquire" onClick={() => setIsOpen(false)}>Inquire Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

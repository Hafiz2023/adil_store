"use client";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import { ModeToggle } from "@/components/shared/ModeToggle";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

// Array of navigation links to keep the code clean and maintainable
const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Mens_selection" },
  { name: "Women", href: "/Sale_women" },
  { name: "Kids", href: "/Kids_Products" },
  { name: "Contact", href: "/Contact" },
];

/**
 * Navbar Component
 * Renders the top navigation bar for the application.
 * Includes branding, navigation links, search, and user actions.
 * Responsive design with a hamburger menu for mobile screens.
 * Features a sticky position and glassmorphism effect for premium UX.
 */
const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 sticky top-0 z-50 backdrop-blur-md bg-background/80 shadow-sm dark:shadow-none border-b dark:border-border transition-all duration-300">
      {/* MOBILE: Logo and Menu Icon */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide font-bold hover:scale-105 hover:text-primary transition-all duration-300">ADIL</div>
        </Link>
        <Menu />
      </div>

      {/* BIGGER SCREENS: Full Navigation */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT: Logo and Navigation Links */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 hover:scale-105 transition-all duration-300">
            <Image src="/logo.png" alt="Logo" width={28} height={28} className="rounded-md" />
            <div className="text-2xl tracking-wide font-extrabold text-primary">ADIL</div>
          </Link>
          <nav className="hidden xl:flex gap-2 font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 relative group overflow-hidden"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2"></span>
              </Link>
            ))}
          </nav>
        </div>
        {/* RIGHT: Search, Icons, and Theme Toggle */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-end gap-6">
          <SearchBar />
          <NavIcons />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

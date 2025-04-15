import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, User, MicIcon, Menu, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { IMAGES } from "@/constants/images";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="jd-container py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <div className="relative w-32 h-8">
                <Image
                  src={IMAGES.LOGO}
                  alt="JustDial Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="128px"
                />
              </div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-6 relative">
            <div className="flex items-center w-full bg-muted rounded-md overflow-hidden">
              <Input
                type="text"
                placeholder="Search for businesses, services, etc."
                className="flex-1 border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                aria-label="Search"
              />
              <Button size="icon" variant="ghost" className="h-full aspect-square rounded-none" aria-label="Voice Search">
                <MicIcon className="h-5 w-5 text-muted-foreground" />
              </Button>
              <Button size="sm" className="rounded-none h-full px-4 bg-primary hover:bg-primary/90" aria-label="Search">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-1 md:gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden md:flex items-center" aria-label="Language Selector">
                  English
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Hindi</DropdownMenuItem>
                <DropdownMenuItem>Tamil</DropdownMenuItem>
                <DropdownMenuItem>Telugu</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" className="hidden md:flex" aria-label="Advertise" asChild>
              <Link href="/advertise">Advertise</Link>
            </Button>

            <Button variant="ghost" size="sm" className="hidden md:flex" aria-label="Careers" asChild>
              <Link href="/careers">Careers</Link>
            </Button>

            <Button variant="ghost" size="sm" className="hidden md:flex" aria-label="Investor Relations" asChild>
              <Link href="/investor-relations">Investor Relations</Link>
            </Button>

            <Button variant="outline" size="sm" className="hidden sm:flex" aria-label="Free Listing" asChild>
              <Link href="/free-listing">Free Listing</Link>
            </Button>

            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90" aria-label="Login" asChild>
              <Link href="/login">
                <User className="h-4 w-4 mr-2" />
                Login
              </Link>
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="flex md:hidden mt-3 relative">
          <div className="flex items-center w-full bg-muted rounded-md overflow-hidden">
            <Input
              type="text"
              placeholder="Search..."
              className="flex-1 border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              aria-label="Search"
            />
            <Button size="icon" variant="ghost" className="h-full aspect-square rounded-none" aria-label="Voice Search">
              <MicIcon className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Button size="sm" className="rounded-none h-full px-4 bg-primary hover:bg-primary/90" aria-label="Search">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

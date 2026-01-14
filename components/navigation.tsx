"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Sparkles, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#speakers", label: "Speakers" },
  { href: "#schedule", label: "Schedule" },
  { href: "#venue", label: "Venue" },
  { href: "#sponsors", label: "Sponsors" },
]

const pastEvents = [
  { href: "/events/2025", label: "Innovate QA 2025", year: 2025 },
  { href: "/events/2024", label: "Innovate QA 2024", year: 2024 },
]

const communityLinks = [
  { href: "/meetups", label: "Meetup Events" },
  { href: "/volunteer", label: "Volunteer / Speak" },
]

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/diversity-inclusion", label: "Diversity & Inclusion" },
  { href: "/privacy-policy", label: "Privacy Policy" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Innovate QA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Community
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {communityLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="w-full cursor-pointer">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Past Events
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {pastEvents.map((event) => (
                <DropdownMenuItem key={event.year} asChild>
                  <Link href={event.href} className="w-full cursor-pointer">
                    {event.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Company
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {companyLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="w-full cursor-pointer">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild>
            <Link href="#register">Register Now</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-border pt-4 mt-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Community</p>
                {communityLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-border pt-4 mt-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Past Events</p>
                {pastEvents.map((event) => (
                  <Link
                    key={event.year}
                    href={event.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-1"
                  >
                    {event.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-border pt-4 mt-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Company</p>
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <Button asChild>
                  <Link href="#register">Register Now</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

import Link from "next/link"
import { Sparkles, Heart } from "lucide-react"

const footerLinks = {
  event: [
    { label: "Innovate QA 2026", href: "/" },
    { label: "Speakers", href: "#speakers" },
    { label: "Schedule", href: "#schedule" },
    { label: "Venue", href: "#venue" },
  ],
  community: [
    { label: "Meetup Events", href: "/meetups" },
    { label: "Become a Speaker", href: "/volunteer" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Sponsor Us", href: "#sponsors" },
  ],
  pastEvents: [
    { label: "Innovate QA 2025", href: "/events/2025" },
    { label: "Innovate QA 2024", href: "/events/2024" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Diversity & Inclusion", href: "/diversity-inclusion" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Innovate QA</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Advancing the field of software testing and quality engineering.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Event</h3>
            <ul className="space-y-2">
              {footerLinks.event.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Past Events</h3>
            <ul className="space-y-2">
              {footerLinks.pastEvents.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Innovate QA Events. All Rights Reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Created with <Heart className="h-4 w-4 text-primary fill-primary" /> by Innovate QA Team
          </p>
        </div>
      </div>
    </footer>
  )
}

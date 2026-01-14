import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { CalendarDays, MapPin, Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  // Event date: June 5, 2026
  const eventDate = new Date("2026-06-05T09:00:00")

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="absolute inset-0 bg-[url('/abstract-geometric-purple.png')] opacity-5 bg-cover bg-center" />
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <CalendarDays className="h-4 w-4" />
            <span>June 5, 2026 • Seattle, WA</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Welcome to <span className="text-primary">Innovate QA</span> Conference 2026
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Join industry leaders, pioneers, and visionaries sharing insights, best practices, and cutting-edge tools to
            build high-quality, safe, accessible, and reliable systems.
          </p>

          <div className="mb-12">
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-medium">Event Starts In</p>
            <CountdownTimer targetDate={eventDate} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-base px-8" asChild>
              <Link href="#register">Register Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
              <Link href="#speakers">View Speakers</Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>500+ Attendees</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              <span>20+ Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Hilton Garden Inn, Issaquah</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

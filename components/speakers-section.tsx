import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const speakers = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechCorp",
    image: "/professional-asian-woman-headshot.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Johnson",
    role: "Director of QA",
    company: "CloudScale",
    image: "/professional-man-headshot-african-american.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Elena Rodriguez",
    role: "Principal SDET",
    company: "AutomateAI",
    image: "/latina-professional-headshot.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "TestLabs",
    image: "/professional-asian-man-headshot.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Patel",
    role: "Head of Quality",
    company: "FinTech Solutions",
    image: "/professional-indian-woman-headshot.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Wilson",
    role: "Staff Engineer",
    company: "DevOps Inc",
    image: "/professional-man-headshot-caucasian.jpg",
    linkedin: "#",
    twitter: "#",
  },
]

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Speakers</h2>
          <p className="text-lg text-muted-foreground">
            Learn from industry pioneers and thought leaders who are shaping the future of quality engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {speakers.map((speaker) => (
            <Card
              key={speaker.name}
              className="bg-card border-border/50 overflow-hidden group hover:border-primary/30 transition-colors"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4">
                <h3 className="text-lg font-semibold text-foreground">{speaker.name}</h3>
                <p className="text-sm text-primary font-medium">{speaker.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{speaker.company}</p>
                <div className="flex gap-2">
                  <Link
                    href={speaker.linkedin}
                    className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href={speaker.twitter}
                    className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Twitter className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="#all-speakers">View All Speakers</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Plane, Building } from "lucide-react"
import Link from "next/link"

export function VenueSection() {
  return (
    <section id="venue" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Venue</h2>
          <p className="text-lg text-muted-foreground">
            Join us at the beautiful Hilton Garden Inn in Issaquah, Washington.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="aspect-video rounded-xl overflow-hidden bg-muted">
            <img
              src="/hilton-garden-inn-hotel-exterior-modern.jpg"
              alt="Hilton Garden Inn Issaquah"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <Card className="bg-card border-border/50 mb-6">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Hilton Garden Inn</h3>
                    <p className="text-muted-foreground">
                      1800 Northwest Gilman Boulevard
                      <br />
                      Issaquah, Washington 98027
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-primary" />
                    <span>Off I-90, 15 miles from central Seattle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-primary" />
                    <span>20 miles from SeaTac Airport</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Free parking on premises</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link href="https://maps.google.com" target="_blank">
                  Get Directions
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#" target="_blank">
                  Book Hotel Room
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const pricingTiers = [
  {
    name: "Early Bird",
    price: "$199",
    description: "Limited availability",
    features: [
      "Full day conference access",
      "Breakfast & lunch included",
      "Networking sessions",
      "Digital content access",
    ],
    popular: false,
    available: false,
    cta: "Sold Out",
  },
  {
    name: "Standard",
    price: "$299",
    description: "Best value",
    features: [
      "Full day conference access",
      "Breakfast & lunch included",
      "Networking sessions",
      "Digital content access",
      "Workshop access",
      "Certificate of attendance",
    ],
    popular: true,
    available: true,
    cta: "Register Now",
  },
  {
    name: "VIP",
    price: "$499",
    description: "Premium experience",
    features: [
      "Full day conference access",
      "Breakfast & lunch included",
      "Exclusive networking dinner",
      "Digital content access",
      "All workshop access",
      "Certificate of attendance",
      "Reserved front row seating",
      "Meet & greet with speakers",
    ],
    popular: false,
    available: true,
    cta: "Register Now",
  },
]

export function PricingSection() {
  return (
    <section id="register" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the ticket that fits your needs. All tickets include full conference access.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative bg-card border-border/50 ${
                tier.popular ? "border-primary shadow-lg scale-105" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.popular ? "default" : "outline"}
                  disabled={!tier.available}
                  asChild={tier.available}
                >
                  {tier.available ? (
                    <Link href="https://www.eventbrite.com/e/innovateqa-seattle-2025-tickets-1143506060409">
                      {tier.cta}
                    </Link>
                  ) : (
                    tier.cta
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

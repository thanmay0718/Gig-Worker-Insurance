import { Check, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/DashboardLayout";

const plans = [
  {
    name: "Basic Plan",
    price: "₹25",
    period: "/week",
    desc: "Coverage for moderate weather disruptions",
    features: ["Moderate rain coverage", "Basic heat protection", "Email support", "Weekly payouts"],
    recommended: false,
  },
  {
    name: "Standard Plan",
    price: "₹40",
    period: "/week",
    desc: "Coverage for rain, heat, and pollution",
    features: ["Full rain coverage", "Heat & pollution protection", "Priority support", "Auto-claim processing", "Daily payouts"],
    recommended: true,
  },
  {
    name: "Premium Plan",
    price: "₹60",
    period: "/week",
    desc: "Full disruption coverage with maximum protection",
    features: ["All weather coverage", "Pollution & AQI protection", "24/7 dedicated support", "Instant auto-claims", "Instant payouts", "Fraud priority review"],
    recommended: false,
  },
];

export default function Policies() {
  const handleBuy = (plan: string) => {
    toast({ title: "Policy Selected!", description: `You selected the ${plan}. This is a demo.` });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">Insurance Plans</h1>
          <p className="text-muted-foreground">Choose the plan that fits your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`relative border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                plan.recommended ? "border-primary ring-2 ring-primary/20" : ""
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="gap-1 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3" /> Recommended
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="font-display">{plan.name}</CardTitle>
                <CardDescription>{plan.desc}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-extrabold font-display text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-success flex-shrink-0" />
                    <span className="text-foreground">{f}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.recommended ? "default" : "outline"}
                  onClick={() => handleBuy(plan.name)}
                >
                  Buy Policy
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

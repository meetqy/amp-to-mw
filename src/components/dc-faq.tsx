import { HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function DcFaq() {
  const faqs = [
    {
      q: "What is DC amperage?",
      a: "DC amperage refers to the strength of a direct current (DC) electrical flow, measured in Amperes (Amps). It represents the rate at which electric charge flows through a conductor in a single, constant direction, typically from batteries or solar panels.",
    },
    {
      q: "How to calculate DC amps?",
      a: "To calculate DC amps (amperage), you use the formula: Amps = Watts / Volts. For instance, a 120-watt light bulb running on a 12-volt DC battery draws 10 amps of current.",
    },
    {
      q: "Is amperage the same as current?",
      a: "Yes, in practical terms, they refer to the same thing. 'Current' is the flow of electric charge, and 'amperage' is the measure of that flow in Amperes. It's like the difference between 'distance' and 'mileage'.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-2 px-2">
        <HelpCircle className="size-5 text-primary" />
        <h2 className="text-xl font-bold">Amperage & DC Power FAQ</h2>
      </div>
      <div className="grid gap-4">
        {faqs.map((faq, idx) => (
          <Card key={idx}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold">{faq.q}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

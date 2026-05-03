import { HelpCircle, Info, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export function DcToAcContent() {
  const examples = [
    { dc_w: 1000, eff: 95, ac_v: 230, ac_w: 950, ac_a: 4.13 },
    { dc_w: 2000, eff: 95, ac_v: 230, ac_w: 1900, ac_a: 8.26 },
    { dc_w: 3000, eff: 92, ac_v: 230, ac_w: 2760, ac_a: 12.0 },
    { dc_w: 5000, eff: 97, ac_v: 230, ac_w: 4850, ac_a: 21.09 },
  ];

  const faqs = [
    {
      q: "How to calculate DC to AC conversion?",
      a: "The AC power is calculated by multiplying the DC input power by the inverter's efficiency. Then, the AC current is the AC power divided by the AC output voltage (for single-phase systems).",
    },
    {
      q: "What is inverter efficiency?",
      a: "Inverter efficiency is the ratio of output AC power to input DC power. Most modern solar inverters have an efficiency between 94% and 98%.",
    },
    {
      q: "How much AC power do I get from 1000W DC?",
      a: "If your inverter is 95% efficient, 1000W of DC power will yield 950W of AC power. The remaining 50W is lost as heat.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-12">
      {/* Examples Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lightbulb className="size-5 text-primary" />
            <CardTitle>Inverter Conversion Examples (at 230V AC)</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>DC Power</TableHead>
                <TableHead>Efficiency</TableHead>
                <TableHead>AC Power</TableHead>
                <TableHead className="text-right">AC Current</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {examples.map((ex, idx) => (
                <TableRow key={idx}>
                  <TableCell>{ex.dc_w} W</TableCell>
                  <TableCell>{ex.eff}%</TableCell>
                  <TableCell>{ex.ac_w} W</TableCell>
                  <TableCell className="text-right font-mono font-bold">
                    {ex.ac_a.toFixed(2)} A
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Formula Explanation */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Info className="size-5 text-muted-foreground" />
            <CardTitle>DC to AC Conversion Formula</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-6 rounded-lg space-y-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground">AC Output Power:</span>
              <code className="text-xl font-bold text-primary">
                P(AC) = P(DC) × Efficiency
              </code>
            </div>
            <div className="flex flex-col items-center gap-2 border-t border-muted-foreground/20 pt-4">
              <span className="text-sm text-muted-foreground">AC Output Current (Single Phase):</span>
              <code className="text-xl font-bold text-primary">
                I(AC) = P(AC) / V(AC)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 px-2">
          <HelpCircle className="size-5 text-primary" />
          <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="grid gap-4">
          {faqs.map((faq, idx) => (
            <Card key={idx}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold">
                  {faq.q}
                </CardTitle>
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
    </div>
  );
}

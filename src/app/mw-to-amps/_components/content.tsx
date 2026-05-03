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

export function MwToAmpsContent() {
  const examples = [
    { mw: 1, kv: 11, pf: 0.8, a: 65.61 },
    { mw: 2, kv: 11, pf: 0.8, a: 131.22 },
    { mw: 5, kv: 33, pf: 0.8, a: 109.35 },
    { mw: 10, kv: 33, pf: 0.8, a: 218.69 },
    { mw: 10, kv: 66, pf: 0.8, a: 109.35 },
    { mw: 20, kv: 132, pf: 0.8, a: 109.35 },
  ];

  const faqs = [
    {
      q: "How to convert MW to Amps?",
      a: "To convert Megawatts (MW) to Amps, you need to know the voltage (kV) and the power factor. For a 3-phase system, the formula is: I (A) = (P (MW) × 1000) / (√3 × V (kV) × PF).",
    },
    {
      q: "What is the current for 1 MW at 11kV?",
      a: "For a 1 MW load at 11kV with a 0.8 power factor, the current is approximately 65.6 Amps in a 3-phase system.",
    },
    {
      q: "Why do we divide by √3?",
      a: "In 3-phase systems, the power calculation involves the line-to-line voltage. The factor √3 (approx. 1.732) accounts for the phase relationship between the three lines.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-12">
      {/* Examples Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lightbulb className="size-5 text-primary" />
            <CardTitle>Common MW to Amps Conversions (3-Phase)</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Power (MW)</TableHead>
                <TableHead>Voltage (kV)</TableHead>
                <TableHead>PF</TableHead>
                <TableHead className="text-right">Current (A)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {examples.map((ex, idx) => (
                <TableRow key={idx}>
                  <TableCell>{ex.mw} MW</TableCell>
                  <TableCell>{ex.kv} kV</TableCell>
                  <TableCell>{ex.pf}</TableCell>
                  <TableCell className="text-right font-mono font-bold">
                    {ex.a.toFixed(2)} A
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
            <CardTitle>Three-Phase MW to Amps Formula</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg flex flex-col items-center gap-2">
            <code className="text-xl font-bold text-primary">
              I(A) = (P(MW) × 1000) / (√3 × V(kV) × PF)
            </code>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Where:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>I (A):</strong> Current in Amperes
              </li>
              <li>
                <strong>P (MW):</strong> Power in Megawatts
              </li>
              <li>
                <strong>V (kV):</strong> Line-to-Line voltage in Kilovolts
              </li>
              <li>
                <strong>PF:</strong> Power Factor (usually between 0.8 and 1.0)
              </li>
              <li>
                <strong>√3:</strong> Square root of 3 (approx. 1.732)
              </li>
            </ul>
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

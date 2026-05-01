import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { HelpCircle, Info, Lightbulb } from "lucide-react";

export function KvToMwContent() {
  const examples = [
    { kv: 11, a: 100, pf: 0.8, mw: 1.524 },
    { kv: 11, a: 200, pf: 0.8, mw: 3.048 },
    { kv: 33, a: 100, pf: 0.8, mw: 4.572 },
    { kv: 33, a: 200, pf: 0.8, mw: 9.145 },
    { kv: 66, a: 100, pf: 0.8, mw: 9.145 },
    { kv: 132, a: 100, pf: 0.8, mw: 18.29 },
  ];

  const faqs = [
    {
      q: "Can you convert kV to MW directly?",
      a: "No, kV (kilovolts) is a unit of voltage, while MW (megawatts) is a unit of power. To calculate power, you need to know the voltage, current (Amps), and the power factor of the system.",
    },
    {
      q: "How many MW is a 33kV line?",
      a: "A 33kV line doesn't have a fixed MW value. It depends on the current it carries. For example, a 33kV line carrying 100A with a 0.8 power factor would provide approx 4.57 MW of power.",
    },
    {
      q: "What is the formula for kV to MW in 3-phase systems?",
      a: "The formula is: P (MW) = (√3 × V (kV) × I (A) × PF) / 1000. Where √3 is approx 1.732.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-12">
      {/* Examples Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lightbulb className="size-5 text-primary" />
            <CardTitle>Common kV to MW Conversions (3-Phase)</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Voltage (kV)</TableHead>
                <TableHead>Current (A)</TableHead>
                <TableHead>PF</TableHead>
                <TableHead className="text-right">Power (MW)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {examples.map((ex, idx) => (
                <TableRow key={idx}>
                  <TableCell>{ex.kv} kV</TableCell>
                  <TableCell>{ex.a} A</TableCell>
                  <TableCell>{ex.pf}</TableCell>
                  <TableCell className="text-right font-mono font-bold">
                    {ex.mw.toFixed(3)} MW
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
            <CardTitle>Three-Phase kV to MW Formula</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg flex flex-col items-center gap-2">
            <code className="text-xl font-bold text-primary">P(MW) = √3 × V(kV) × I(A) × PF / 1000</code>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Where:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>P (MW):</strong> Real power in Megawatts
              </li>
              <li>
                <strong>V (kV):</strong> Line-to-Line voltage in Kilovolts
              </li>
              <li>
                <strong>I (A):</strong> Current in Amperes
              </li>
              <li>
                <strong>PF:</strong> Power Factor (usually between 0.8 and 1.0)
              </li>
              <li>
                <strong>√3:</strong> Square root of 3 (approx. 1.732) for 3-phase systems
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
                <CardTitle className="text-base font-semibold">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

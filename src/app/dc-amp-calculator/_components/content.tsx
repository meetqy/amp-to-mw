import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { Info, Lightbulb } from "lucide-react";

export function DcAmpContent() {
  const examples = [
    { w: 120, v: 12, a: 10 },
    { w: 240, v: 12, a: 20 },
    { w: 60, v: 12, a: 5 },
    { w: 1200, v: 120, a: 10 },
    { w: 2400, v: 120, a: 20 },
    { w: 1000, v: 24, a: 41.67 },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-12">
      {/* Examples Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lightbulb className="size-5 text-primary" />
            <CardTitle>Common DC Watts to Amps Conversions</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Power (Watts)</TableHead>
                <TableHead>Voltage (Volts)</TableHead>
                <TableHead className="text-right">Current (Amps)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {examples.map((ex, idx) => (
                <TableRow key={idx}>
                  <TableCell>{ex.w} W</TableCell>
                  <TableCell>{ex.v} V</TableCell>
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
            <CardTitle>DC Amps Calculation Formula</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg flex flex-col items-center gap-2">
            <code className="text-xl font-bold text-primary">I(A) = P(W) / V(V)</code>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            <p>
              To calculate DC amperes, you simply divide the power in watts by the voltage in volts.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>I (A):</strong> Current in Amperes (Amps)</li>
              <li><strong>P (W):</strong> Power in Watts</li>
              <li><strong>V (V):</strong> Voltage in Volts</li>
            </ul>
            <p className="mt-2 italic">
              Example: A 120W device running on a 12V DC system draws 10A of current (120 / 12 = 10).
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

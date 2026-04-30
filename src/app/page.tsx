import { Table as TableIcon } from "lucide-react";
import { AmpsToWattsCalculator } from "~/components/amps-to-watts-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export default function HomePage() {
  const quickReference = [
    { amps: 1, watts: 120 },
    { amps: 5, watts: 600 },
    { amps: 10, watts: 1200 },
    { amps: 15, watts: 1800 },
    { amps: 20, watts: 2400 },
    { amps: 30, watts: 3600 },
  ];

  return (
    <main className="max-w-5xl mx-auto py-12 px-4 space-y-12">
      <AmpsToWattsCalculator />

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TableIcon className="size-5 text-primary" />
            <CardTitle>Quick Reference (120V DC)</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Current (Amps)</TableHead>
                <TableHead>Voltage (Volts)</TableHead>
                <TableHead className="text-right">Power (Watts)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quickReference.map((item) => (
                <TableRow key={item.amps}>
                  <TableCell className="font-medium">{item.amps} A</TableCell>
                  <TableCell>120 V</TableCell>
                  <TableCell className="text-right">{item.watts} W</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="text-[10px] text-center text-muted-foreground italic mt-4">
            * Based on Watts = Amps × 120V
          </p>
        </CardContent>
      </Card>
    </main>
  );
}

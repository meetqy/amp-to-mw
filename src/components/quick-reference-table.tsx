import { Table as TableIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

type CalculationType = "DC" | "AC_SINGLE" | "AC_THREE_LL" | "AC_THREE_LN";

interface QuickReferenceTableProps {
  type: CalculationType;
  voltage?: number;
  pf?: number;
}

export function QuickReferenceTable({
  type,
  voltage = 120,
  pf = 0.8,
}: QuickReferenceTableProps) {
  // Standard consumer/small business amps
  const standardAmps = [0.00416, 1, 10, 20, 30, 50, 100];

  // High power/industrial benchmarks
  const industrialBenchmarks = [
    { label: "11 kV System", V: 11000, A: 100, type: "AC_THREE_LL" as const },
    { label: "11 kV System", V: 11000, A: 500, type: "AC_THREE_LL" as const },
    { label: "33 kV System", V: 33000, A: 100, type: "AC_THREE_LL" as const },
    { label: "33 kV System", V: 33000, A: 500, type: "AC_THREE_LL" as const },
    { label: "High Current", V: 415, A: 4000, type: "AC_THREE_LL" as const },
  ];

  const calculateWatts = (A: number, V: number, T: CalculationType) => {
    switch (T) {
      case "DC":
        return A * V;
      case "AC_SINGLE":
        return A * V * pf;
      case "AC_THREE_LL":
        return Math.sqrt(3) * A * V * pf;
      case "AC_THREE_LN":
        return 3 * A * V * pf;
      default:
        return 0;
    }
  };

  const getTitle = () => {
    switch (type) {
      case "DC":
        return `DC Quick Reference (${voltage}V)`;
      case "AC_SINGLE":
        return `AC 1φ Quick Reference (${voltage}V, PF=${pf})`;
      case "AC_THREE_LL":
        return `AC 3φ L-L Quick Reference (${voltage}V, PF=${pf})`;
      case "AC_THREE_LN":
        return `AC 3φ L-N Quick Reference (${voltage}V, PF=${pf})`;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      {/* Standard Reference Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TableIcon className="size-5 text-primary" />
            <CardTitle>{getTitle()}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Current (Amps)</TableHead>
                <TableHead>Voltage (Volts)</TableHead>
                {type !== "DC" && <TableHead>PF</TableHead>}
                <TableHead className="text-right text-primary">
                  Power (MW)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {standardAmps.map((A) => {
                const W = calculateWatts(A, voltage, type);
                const MW = W / 1000000;
                return (
                  <TableRow key={A}>
                    <TableCell className="font-medium">
                      {A < 0.01 ? "4.16 mA (500mW)" : `${A} A`}
                    </TableCell>
                    <TableCell>{voltage} V</TableCell>
                    {type !== "DC" && <TableCell>{pf}</TableCell>}
                    <TableCell className="text-right font-mono font-bold">
                      {MW < 0.001
                        ? (W / 1000).toFixed(2) + " kW"
                        : MW.toFixed(4) + " MW"}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Industrial Benchmarks Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TableIcon className="size-5 text-primary" />
            <CardTitle>
              Industrial & High Voltage Benchmarks (11kV, 33kV, 4000A)
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>System / Label</TableHead>
                <TableHead>Voltage</TableHead>
                <TableHead>Current</TableHead>
                <TableHead className="text-right text-primary">
                  Power (MW)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {industrialBenchmarks.map((item, idx) => {
                const W = calculateWatts(item.A, item.V, item.type);
                const MW = W / 1000000;
                return (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{item.label}</TableCell>
                    <TableCell>{(item.V / 1000).toFixed(0)} kV</TableCell>
                    <TableCell>{item.A} A</TableCell>
                    <TableCell className="text-right font-mono font-bold text-primary">
                      {MW.toFixed(2)} MW
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <p className="text-[10px] text-muted-foreground mt-4 italic">
            * Industrial calculations assume 3-Phase L-L system with PF={pf}.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

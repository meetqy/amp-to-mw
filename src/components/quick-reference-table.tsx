import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Table as TableIcon } from "lucide-react";

type CalculationType = "DC" | "AC_SINGLE" | "AC_THREE_LL" | "AC_THREE_LN";

interface QuickReferenceTableProps {
  type: CalculationType;
  voltage?: number;
  pf?: number;
}

export function QuickReferenceTable({ type, voltage = 120, pf = 0.8 }: QuickReferenceTableProps) {
  const amps = [1, 5, 10, 15, 20, 30];
  
  const calculateWatts = (A: number) => {
    switch (type) {
      case "DC":
        return A * voltage;
      case "AC_SINGLE":
        return A * voltage * pf;
      case "AC_THREE_LL":
        return Math.sqrt(3) * A * voltage * pf;
      case "AC_THREE_LN":
        return 3 * A * voltage * pf;
      default:
        return 0;
    }
  };

  const getTitle = () => {
    switch (type) {
      case "DC": return `DC Quick Reference (${voltage}V)`;
      case "AC_SINGLE": return `AC 1φ Quick Reference (${voltage}V, PF=${pf})`;
      case "AC_THREE_LL": return `AC 3φ L-L Quick Reference (${voltage}V, PF=${pf})`;
      case "AC_THREE_LN": return `AC 3φ L-N Quick Reference (${voltage}V, PF=${pf})`;
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
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
              <TableHead className="text-right">Power (Watts)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {amps.map((A) => (
              <TableRow key={A}>
                <TableCell className="font-medium">{A} A</TableCell>
                <TableCell>{voltage} V</TableCell>
                {type !== "DC" && <TableCell>{pf}</TableCell>}
                <TableCell className="text-right">
                  {calculateWatts(A).toLocaleString(undefined, { maximumFractionDigits: 0 })} W
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

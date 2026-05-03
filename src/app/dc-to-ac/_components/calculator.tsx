"use client";

import { Calculator } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function DcToAcCalculator() {
  const [dcWatts, setDcWatts] = useState<string>("1000");
  const [efficiency, setEfficiency] = useState<string>("95");
  const [acVoltage, setAcVoltage] = useState<string>("230");
  const [acResultAmps, setAcResultAmps] = useState<number>(0);
  const [acResultWatts, setAcResultWatts] = useState<number>(0);

  useEffect(() => {
    const P_dc = parseFloat(dcWatts) || 0;
    const eff = (parseFloat(efficiency) || 0) / 100;
    const V_ac = parseFloat(acVoltage) || 0;

    // AC Power (Watts) = DC Power * Efficiency
    const P_ac = P_dc * eff;
    setAcResultWatts(P_ac);

    // AC Current (Amps) = AC Power / AC Voltage (Single Phase)
    const I_ac = V_ac > 0 ? P_ac / V_ac : 0;
    setAcResultAmps(I_ac);
  }, [dcWatts, efficiency, acVoltage]);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="size-6 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">
            DC to AC Inverter Calculator
          </h1>
        </div>
        <CardDescription>
          Calculate AC output power and current from DC input power and inverter efficiency.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* DC Power Input */}
          <div className="space-y-3">
            <Label htmlFor="dc-watts">DC Input Power (Watts)</Label>
            <div className="relative">
              <Input
                id="dc-watts"
                onChange={(e) => setDcWatts(e.target.value)}
                placeholder="e.g. 1000"
                type="number"
                value={dcWatts}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground pointer-events-none">
                W
              </span>
            </div>
          </div>

          {/* Efficiency Input */}
          <div className="space-y-3">
            <Label htmlFor="efficiency">Efficiency (%)</Label>
            <div className="relative">
              <Input
                id="efficiency"
                max="100"
                min="0"
                onChange={(e) => setEfficiency(e.target.value)}
                placeholder="e.g. 95"
                type="number"
                value={efficiency}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground pointer-events-none">
                %
              </span>
            </div>
          </div>

          {/* AC Voltage Input */}
          <div className="space-y-3">
            <Label htmlFor="ac-voltage">AC Output Voltage (Volts)</Label>
            <div className="relative">
              <Input
                id="ac-voltage"
                onChange={(e) => setAcVoltage(e.target.value)}
                placeholder="e.g. 230"
                type="number"
                value={acVoltage}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground pointer-events-none">
                V
              </span>
            </div>
          </div>
        </div>

        {/* Result Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative overflow-hidden bg-primary rounded-2xl p-6 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.01]">
            <div className="relative z-10 flex flex-col items-center justify-center">
              <p className="text-sm font-medium opacity-80 mb-1">AC Output Power</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black tracking-tight">
                  {acResultWatts.toLocaleString(undefined, { maximumFractionDigits: 1 })}
                </span>
                <span className="text-xl font-bold opacity-80 uppercase">Watts</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          <div className="relative overflow-hidden bg-secondary rounded-2xl p-6 text-secondary-foreground shadow-lg shadow-secondary/20 transition-all hover:scale-[1.01]">
            <div className="relative z-10 flex flex-col items-center justify-center">
              <p className="text-sm font-medium opacity-80 mb-1">AC Output Current</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black tracking-tight">
                  {acResultAmps.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
                <span className="text-xl font-bold opacity-80 uppercase">Amps</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-32 h-32 bg-black/5 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg text-center">
          <code className="text-xs font-mono text-muted-foreground">
            Formulas: P_ac = P_dc × Efficiency | I_ac = P_ac / V_ac
          </code>
        </div>
      </CardContent>
    </Card>
  );
}

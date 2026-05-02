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

export function DcAmpCalculator() {
  const [watts, setWatts] = useState<string>("120");
  const [voltage, setVoltage] = useState<string>("12");
  const [resultAmps, setResultAmps] = useState<number>(0);

  useEffect(() => {
    const W = parseFloat(watts) || 0;
    const V = parseFloat(voltage) || 0;

    // Formula: I(A) = P(W) / V(V)
    const I = V > 0 ? W / V : 0;
    setResultAmps(I);
  }, [watts, voltage]);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="size-6 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            DC Amps Calculator
          </h1>
        </div>
        <CardDescription>
          Calculate Direct Current (DC) Amperes (A) from Power (Watts) and
          Voltage (Volts).
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Watts Input */}
          <div className="space-y-3">
            <Label htmlFor="watts">Power (Watts)</Label>
            <div className="relative">
              <Input
                id="watts"
                onChange={(e) => setWatts(e.target.value)}
                placeholder="e.g. 120"
                type="number"
                value={watts}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground pointer-events-none">
                W
              </span>
            </div>
          </div>

          {/* Voltage Input */}
          <div className="space-y-3">
            <Label htmlFor="voltage">Voltage (Volts)</Label>
            <div className="relative">
              <Input
                id="voltage"
                onChange={(e) => setVoltage(e.target.value)}
                placeholder="e.g. 12"
                type="number"
                value={voltage}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground pointer-events-none">
                V
              </span>
            </div>
          </div>
        </div>

        {/* Result Display */}
        <div className="relative overflow-hidden bg-primary rounded-2xl p-8 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.01]">
          <div className="relative z-10 flex flex-col items-center justify-center">
            <p className="text-sm font-medium opacity-80 mb-2">
              Calculated Current (Amps)
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tight">
                {resultAmps.toLocaleString(undefined, {
                  maximumFractionDigits: 3,
                })}
              </span>
              <span className="text-2xl font-bold opacity-80 uppercase">
                Amps
              </span>
            </div>
            <div className="mt-6 px-4 py-1.5 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
              <code className="text-xs font-mono">
                Formula: I(A) = P(W) / V(V)
              </code>
            </div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-48 bg-white/5 rounded-full" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 size-32 bg-white/5 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}

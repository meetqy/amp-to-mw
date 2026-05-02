"use client";

import { Calculator, Info } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function KvToMwCalculator() {
  const [voltageKv, setVoltageKv] = useState<string>("33");
  const [current, setCurrent] = useState<string>("100");
  const [pf, setPf] = useState<string>("0.8");
  const [resultMw, setResultMw] = useState<number>(0);

  useEffect(() => {
    const V_kv = parseFloat(voltageKv) || 0;
    const I = parseFloat(current) || 0;
    const PF = parseFloat(pf) || 0;

    // Formula: P(MW) = (√3 * V(kV) * I(A) * PF) / 1000
    const P_mw = (Math.sqrt(3) * V_kv * I * PF) / 1000;
    setResultMw(P_mw);
  }, [voltageKv, current, pf]);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="size-6 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">
            kV to MW Calculator
          </h1>
        </div>
        <CardDescription>
          Calculate Megawatts (MW) from Kilovolts (kV) and Amperes (A) for
          3-Phase AC systems.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Voltage Input */}
          <div className="space-y-3">
            <Label htmlFor="voltage">Voltage (kV)</Label>
            <div className="relative">
              <Input
                id="voltage"
                onChange={(e) => setVoltageKv(e.target.value)}
                placeholder="e.g. 33"
                type="number"
                value={voltageKv}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground pointer-events-none">
                kV
              </span>
            </div>
          </div>

          {/* Current Input */}
          <div className="space-y-3">
            <Label htmlFor="current">Current (Amps)</Label>
            <div className="relative">
              <Input
                id="current"
                onChange={(e) => setCurrent(e.target.value)}
                placeholder="e.g. 100"
                type="number"
                value={current}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground pointer-events-none">
                A
              </span>
            </div>
          </div>

          {/* PF Input */}
          <div className="space-y-3">
            <Label htmlFor="pf">Power Factor</Label>
            <Input
              id="pf"
              max="1"
              min="0"
              onChange={(e) => setPf(e.target.value)}
              placeholder="0.8"
              step="0.01"
              type="number"
              value={pf}
            />
          </div>
        </div>

        {/* Result Display */}
        <div className="relative overflow-hidden bg-primary rounded-2xl p-8 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.01]">
          <div className="relative z-10 flex flex-col items-center justify-center">
            <p className="text-sm font-medium opacity-80 mb-2">
              Calculated Power (MW)
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tight">
                {resultMw.toLocaleString(undefined, {
                  maximumFractionDigits: 3,
                })}
              </span>
              <span className="text-2xl font-bold opacity-80 uppercase">
                MW
              </span>
            </div>
            <div className="mt-6 px-4 py-1.5 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
              <code className="text-xs font-mono">
                Formula: P(MW) = (√3 × kV × A × PF) / 1000
              </code>
            </div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-48 bg-white/5 rounded-full" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 size-32 bg-white/5 rounded-full" />
        </div>

        <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-100 dark:border-amber-900/30">
          <Info className="size-4 text-amber-600 dark:text-amber-500 mt-0.5 shrink-0" />
          <p className="text-xs text-amber-800 dark:text-amber-400 leading-relaxed">
            <strong>Note:</strong> kV cannot be converted to MW directly. You
            must know the current (Amps) and Power Factor to calculate the
            actual power.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

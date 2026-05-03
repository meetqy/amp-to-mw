"use client";

import { Calculator } from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function MwToAmpsCalculator() {
  const [powerMw, setPowerMw] = useState<string>("1.5");
  const [voltageKv, setVoltageKv] = useState<string>("11");
  const [pf, setPf] = useState<string>("0.8");
  const [resultAmps, setResultAmps] = useState<number>(0);

  useEffect(() => {
    const P_mw = parseFloat(powerMw) || 0;
    const V_kv = parseFloat(voltageKv) || 0;
    const PF = parseFloat(pf) || 0;

    // Formula: I(A) = (P(MW) * 1000) / (√3 * V(kV) * PF)
    const I = V_kv > 0 && PF > 0 ? (P_mw * 1000) / (Math.sqrt(3) * V_kv * PF) : 0;
    setResultAmps(I);
  }, [powerMw, voltageKv, pf]);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="size-6 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">MW to Amps Calculator</h1>
        </div>
        <CardDescription>Calculate Amperes (A) from Megawatts (MW) and Kilovolts (kV) for 3-Phase AC systems.</CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Power Input */}
          <div className="space-y-3">
            <Label htmlFor="power">Power (MW)</Label>
            <div className="relative">
              <Input id="power" onChange={(e) => setPowerMw(e.target.value)} placeholder="e.g. 1.5" type="number" value={powerMw} />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground pointer-events-none">MW</span>
            </div>
          </div>

          {/* Voltage Input */}
          <div className="space-y-3">
            <Label htmlFor="voltage">Voltage (kV)</Label>
            <div className="relative">
              <Input id="voltage" onChange={(e) => setVoltageKv(e.target.value)} placeholder="e.g. 11" type="number" value={voltageKv} />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground pointer-events-none">kV</span>
            </div>
          </div>

          {/* PF Input */}
          <div className="space-y-3">
            <Label htmlFor="pf">Power Factor</Label>
            <Input id="pf" max="1" min="0" onChange={(e) => setPf(e.target.value)} placeholder="0.8" step="0.01" type="number" value={pf} />
          </div>
        </div>

        {/* Result Display */}
        <div className="relative overflow-hidden bg-primary rounded-2xl p-8 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.01]">
          <div className="relative z-10 flex flex-col items-center justify-center">
            <p className="text-sm font-medium opacity-80 mb-2">Calculated Current (Amps)</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tight">
                {resultAmps.toLocaleString(undefined, {
                  maximumFractionDigits: 3,
                })}
              </span>
              <span className="text-2xl font-bold opacity-80 uppercase">Amps</span>
            </div>
            <div className="mt-6 px-4 py-1.5 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
              <code className="text-xs font-mono">Formula: I(A) = (P(MW) × 1000) / (√3 × V(kV) × PF)</code>
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </CardContent>
    </Card>
  );
}

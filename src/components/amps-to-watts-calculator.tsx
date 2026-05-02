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

type CalculationType = "DC" | "AC_SINGLE" | "AC_THREE_LL" | "AC_THREE_LN";

const TYPES: { value: CalculationType; label: string; formula: string }[] = [
  { value: "DC", label: "DC", formula: "P = I × V" },
  { value: "AC_SINGLE", label: "AC 1φ", formula: "P = PF × I × V" },
  {
    value: "AC_THREE_LL",
    label: "AC 3φ (L-L)",
    formula: "P = √3 × PF × I × VL-L",
  },
  {
    value: "AC_THREE_LN",
    label: "AC 3φ (L-N)",
    formula: "P = 3 × PF × I × VL-N",
  },
];

interface AmpsToWattsCalculatorProps {
  defaultType?: CalculationType;
}

export function AmpsToWattsCalculator({
  defaultType = "DC",
}: AmpsToWattsCalculatorProps) {
  const [current, setCurrent] = useState<string>("1");
  const [voltage, setVoltage] = useState<string>("120");
  const [pf, setPf] = useState<string>("0.8");
  const [type, setType] = useState<CalculationType>(defaultType);
  const [result, setResult] = useState<number>(0);

  // Sync type if defaultType changes
  useEffect(() => {
    setType(defaultType);
  }, [defaultType]);

  useEffect(() => {
    const I = parseFloat(current) || 0;
    const V = parseFloat(voltage) || 0;
    const PF = parseFloat(pf) || 0;

    let P = 0;
    switch (type) {
      case "DC":
        P = I * V;
        break;
      case "AC_SINGLE":
        P = PF * I * V;
        break;
      case "AC_THREE_LL":
        P = Math.sqrt(3) * PF * I * V;
        break;
      case "AC_THREE_LN":
        P = 3 * PF * I * V;
        break;
    }
    setResult(P);
  }, [current, voltage, pf, type]);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="size-6 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">
            {TYPES.find((t) => t.value === type)?.label} Amps to Watts
          </h1>
        </div>
        <CardDescription>
          Convert electrical current or <strong>amperage</strong> in amps to
          power in watts and milliwatts (mW). Supports DC, single-phase, and
          three-phase AC circuits.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Current Input */}
          <div className="space-y-3">
            <Label htmlFor="current">Current (Amps)</Label>
            <div className="relative">
              <Input
                className="pr-10"
                id="current"
                onChange={(e) => setCurrent(e.target.value)}
                placeholder="e.g. 10"
                type="number"
                value={current}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground pointer-events-none">
                A
              </span>
            </div>
          </div>

          {/* Voltage Input */}
          <div className="space-y-3">
            <Label htmlFor="voltage">
              Voltage (Volts{" "}
              {type === "AC_THREE_LL"
                ? "L-L"
                : type === "AC_THREE_LN"
                  ? "L-N"
                  : ""}
              )
            </Label>
            <div className="relative">
              <Input
                className="pr-10"
                id="voltage"
                onChange={(e) => setVoltage(e.target.value)}
                type="number"
                value={voltage}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground pointer-events-none">
                V
              </span>
            </div>
          </div>
        </div>

        {/* PF Input - only for AC */}
        {type !== "DC" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="pf">Power Factor (PF)</Label>
              <span className="text-[10px] bg-muted px-2 py-0.5 rounded-full text-muted-foreground font-medium uppercase tracking-wider">
                0.0 to 1.0
              </span>
            </div>
            <Input
              id="pf"
              max="1"
              min="0"
              onChange={(e) => setPf(e.target.value)}
              placeholder="e.g. 0.8"
              step="0.01"
              type="number"
              value={pf}
            />
            <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-100 dark:border-amber-900/30">
              <Info className="size-4 text-amber-600 dark:text-amber-500 mt-0.5 shrink-0" />
              <p className="text-xs text-amber-800 dark:text-amber-400 leading-relaxed">
                AC systems require a power factor. Resistive loads are usually
                1.0, while inductive loads (like motors) are less than 1.0.
              </p>
            </div>
          </div>
        )}

        {/* Result Display */}
        <div className="relative overflow-hidden bg-primary rounded-2xl p-8 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.01]">
          <div className="relative z-10 flex flex-col items-center justify-center">
            <p className="text-sm font-medium opacity-80 mb-2">
              Calculated Power Output
            </p>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight">
                  {result.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </span>
                <span className="text-2xl font-bold opacity-80 uppercase">
                  Watts
                </span>
              </div>
              <div className="text-lg font-medium opacity-70">
                = {(result * 1000).toLocaleString()} mW
              </div>
            </div>
            <div className="mt-6 px-4 py-1.5 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
              <code className="text-xs font-mono">
                Formula: {TYPES.find((t) => t.value === type)?.formula}
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

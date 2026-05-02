import { Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type CalculationType = "DC" | "AC_SINGLE" | "AC_THREE_LL" | "AC_THREE_LN";

interface FormulaExplanationProps {
  type: CalculationType;
}

export function FormulaExplanation({ type }: FormulaExplanationProps) {
  const getContent = () => {
    switch (type) {
      case "DC":
        return {
          title: "DC Power Calculation",
          formula: "P(W) = I(A) × V(V)",
          explanation:
            "For Direct Current (DC) circuits, power is simply the product of current and voltage.",
          example: "2A × 120V = 240W",
        };
      case "AC_SINGLE":
        return {
          title: "Single Phase AC Power Calculation",
          formula: "P(W) = PF × I(A) × V(V)",
          explanation:
            "For single phase Alternating Current (AC), the Power Factor (PF) must be included to account for the phase difference between voltage and current.",
          example: "0.8 (PF) × 2A × 120V = 192W",
        };
      case "AC_THREE_LL":
        return {
          title: "Three Phase AC (Line-to-Line) Calculation",
          formula: "P(W) = √3 × PF × I(A) × VL-L(V)",
          explanation:
            "When using line-to-line voltage in a three-phase system, the power is calculated using the square root of 3 (approx. 1.732).",
          example: "√3 × 0.8 × 2A × 208V ≈ 576W",
        };
      case "AC_THREE_LN":
        return {
          title: "Three Phase AC (Line-to-Neutral) Calculation",
          formula: "P(W) = 3 × PF × I(A) × VL-N(V)",
          explanation:
            "When using line-to-neutral voltage in a three-phase system, the power is exactly three times the power of a single phase.",
          example: "3 × 0.8 × 2A × 120V = 576W",
        };
    }
  };

  const content = getContent();

  return (
    <Card className="w-full max-w-3xl mx-auto border-dashed">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Info className="size-5 text-muted-foreground" />
          <CardTitle className="text-lg">{content.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted/50 p-4 rounded-lg flex flex-col items-center gap-2">
          <code className="text-xl font-bold text-primary">
            {content.formula}
          </code>
          <div className="text-sm text-muted-foreground italic">
            To get Milliwatts (mW): P(mW) = P(W) × 1000
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {content.explanation}
          </p>
          <div className="text-sm">
            <span className="font-semibold">Example:</span>{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded">
              {content.example}
            </code>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

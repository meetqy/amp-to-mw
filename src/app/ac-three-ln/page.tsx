import { AmpsToWattsCalculator } from "~/components/amps-to-watts-calculator";
import { CalculatorLinks } from "~/components/calculator-links";
import { QuickReferenceTable } from "~/components/quick-reference-table";
import { FormulaExplanation } from "~/components/formula-explanation";

export default function AcThreeLNPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4 space-y-12">
      <div className="space-y-8">
        <AmpsToWattsCalculator defaultType="AC_THREE_LN" />
        <CalculatorLinks />
      </div>

      <QuickReferenceTable type="AC_THREE_LN" />

      <FormulaExplanation type="AC_THREE_LN" />
    </main>
  );
}

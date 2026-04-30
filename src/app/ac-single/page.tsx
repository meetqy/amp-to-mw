import { AmpsToWattsCalculator } from "~/components/amps-to-watts-calculator";
import { CalculatorLinks } from "~/components/calculator-links";
import { QuickReferenceTable } from "~/components/quick-reference-table";
import { FormulaExplanation } from "~/components/formula-explanation";

export default function AcSinglePage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4 space-y-12">
      <div className="space-y-8">
        <AmpsToWattsCalculator defaultType="AC_SINGLE" />
        <CalculatorLinks />
      </div>

      <QuickReferenceTable type="AC_SINGLE" />

      <FormulaExplanation type="AC_SINGLE" />
    </main>
  );
}

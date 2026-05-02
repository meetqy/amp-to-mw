import { AmpsToWattsCalculator } from "~/components/amps-to-watts-calculator";
import { CalculatorLinks } from "~/components/calculator-links";
import { DcFaq } from "~/components/dc-faq";
import { FormulaExplanation } from "~/components/formula-explanation";
import { QuickReferenceTable } from "~/components/quick-reference-table";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4 space-y-12">
      <div className="space-y-8">
        <CalculatorLinks />
        <AmpsToWattsCalculator defaultType="DC" />
      </div>

      <QuickReferenceTable type="DC" />

      <FormulaExplanation type="DC" />

      <DcFaq />
    </main>
  );
}

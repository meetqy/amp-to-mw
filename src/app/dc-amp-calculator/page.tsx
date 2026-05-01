import { CalculatorLinks } from "~/components/calculator-links";
import { DcAmpCalculator } from "./_components/calculator";
import { DcAmpContent } from "./_components/content";

export const metadata = {
  title: "DC Amps Calculator | Watts to Amps (Direct Current)",
  description:
    "Calculate Direct Current (DC) Amps from Watts and Volts. Easy to use online DC current calculator with formula and common conversion examples.",
};

export default function DcAmpPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4 space-y-12">
      <div className="space-y-8">
        <DcAmpCalculator />
        <CalculatorLinks />
      </div>

      <DcAmpContent />
    </main>
  );
}

import { CalculatorLinks } from "~/components/calculator-links";
import { MwToAmpsCalculator } from "./_components/calculator";
import { MwToAmpsContent } from "./_components/content";

export const metadata = {
  title: "MW to Amps Calculator | Megawatts to Amperes Converter",
  description: "Calculate current in Amps from power in Megawatts (MW) and voltage in Kilovolts (kV) for 3-phase systems.",
};

export default function MwToAmpsPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4 space-y-12">
      <div className="space-y-8">
        <CalculatorLinks />
        <MwToAmpsCalculator />
      </div>

      <MwToAmpsContent />
    </main>
  );
}

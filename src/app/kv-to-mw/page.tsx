import { CalculatorLinks } from "~/components/calculator-links";
import { KvToMwCalculator } from "./_components/calculator";
import { KvToMwContent } from "./_components/content";

export const metadata = {
  title: "kV to MW Calculator | Convert Kilovolts to Megawatts",
  description: "Calculate Megawatts (MW) from Kilovolts (kV) and Amps. Online 3-phase power calculator with formula, examples (33kV, 11kV), and FAQ.",
};

export default function KvToMwPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4 space-y-12">
      <div className="space-y-8">
        <KvToMwCalculator />
        <CalculatorLinks />
      </div>

      <KvToMwContent />
    </main>
  );
}

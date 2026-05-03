import { CalculatorLinks } from "~/components/calculator-links";
import { DcToAcCalculator } from "./_components/calculator";
import { DcToAcContent } from "./_components/content";

export const metadata = {
  title: "DC to AC Inverter Calculator | DC Watts to AC Watts Converter",
  description: "Calculate AC output power and current from DC input power and inverter efficiency. Perfect for solar and battery systems.",
};

export default function DcToAcPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4 space-y-12">
      <div className="space-y-8">
        <CalculatorLinks />
        <DcToAcCalculator />
      </div>

      <DcToAcContent />
    </main>
  );
}

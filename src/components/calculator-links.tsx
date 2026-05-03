"use client";

import { Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const NAV_ITEMS = [
  { label: "DC", path: "/" },
  { label: "DC Amps", path: "/dc-amp-calculator" },
  { label: "AC 1φ", path: "/ac-single" },
  { label: "AC 3φ (L-L)", path: "/ac-three-ll" },
  { label: "AC 3φ (L-N)", path: "/ac-three-ln" },
  { label: "kV to MW", path: "/kv-to-mw" },
  { label: "MW to Amps", path: "/mw-to-amps" },
  { label: "DC to AC", path: "/dc-to-ac" },
];

export function CalculatorLinks() {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                isActive ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground",
              )}
              href={item.path}
              key={item.path}
            >
              <Zap className={cn("size-3.5", isActive ? "fill-current" : "")} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

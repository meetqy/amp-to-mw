"use client";

import { useEffect, useState } from "react";
import { AdUnit } from "./ad-unit";

export function ResponsiveAd() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 728);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile === null)
    return <div className="min-h-[50px] md:min-h-[90px]" />;

  return (
    <div className="flex justify-center items-center pt-4">
      {!isMobile && (
        <AdUnit
          atKey="6c0f2f33e90f8dfb16cf31f8f12adbb8"
          format="iframe"
          height={90}
          width={728}
        />
      )}
      <AdUnit
        atKey="951dd8f945b2fc5e30c057d43a54ffb6"
        format="iframe"
        height={50}
        width={320}
      />
    </div>
  );
}

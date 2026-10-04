"use client";

import React from "react";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "light" | "dark" | "gold";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showTagline?: boolean;
}

export default function BrandLogo({
  variant = "light",
  size = "md",
  className = "",
  showTagline = true,
}: BrandLogoProps) {
  // Dimension mappings based on size prop
  const dimensions = {
    sm: { width: 140, height: 70, wrapperClass: "h-9 w-auto" },
    md: { width: 180, height: 90, wrapperClass: "h-11 sm:h-12 w-auto" },
    lg: { width: 240, height: 120, wrapperClass: "h-16 sm:h-20 w-auto" },
    xl: { width: 320, height: 160, wrapperClass: "h-24 sm:h-28 w-auto" },
  }[size];

  // Invert filter for dark backgrounds vs clean image for light backgrounds
  const filterStyle =
    variant === "dark"
      ? "brightness-0 invert drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
      : variant === "gold"
      ? "brightness-0 invert-[.75] sepia-[.9] saturate-[5] hue-rotate-[5deg]"
      : "mix-blend-multiply";

  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <div className={`relative ${dimensions.wrapperClass} flex items-center justify-center`}>
        <Image
          src={assetPath("/images/introvert-to-icon-logo.png")}
          alt="Introvert To Icon by Paritosh Anand"
          width={dimensions.width}
          height={dimensions.height}
          className={`object-contain transition-all duration-300 ${filterStyle}`}
          priority
        />
      </div>
    </div>
  );
}

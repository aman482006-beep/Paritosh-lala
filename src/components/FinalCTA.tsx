"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { courseData } from "@/content/paritosh";

export default function FinalCTA() {
  const { finalCta, checkoutUrl } = courseData;

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F1F1F1] text-[#1F1E1E] relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0D0906] text-white text-xs font-mono tracking-widest uppercase mb-6 sm:mb-8 shadow-sm">
          <span>INTROVERT TO ICON</span>
        </div>

        {/* Giant Editorial Headline */}
        <h2 className="max-w-[960px] text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-[#1F1E1E] leading-[1.08]">
          Speak with confidence. Tell better stories. Become unforgettable.
        </h2>

        {/* Supporting copy */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#5D3C23] font-normal leading-relaxed max-w-2xl mx-auto">
          {finalCta.subheadline}
        </p>

        {/* Centered CTA */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center">
          <Link
            href={checkoutUrl}
            className="w-[280px] sm:w-[320px] h-[60px] inline-flex items-center justify-center rounded-full bg-[#0D0906] hover:opacity-85 text-white font-semibold text-base tracking-wide transition-all duration-300 active:scale-[0.98] shadow-sm"
          >
            GET INSTANT ACCESS
          </Link>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs font-mono text-[#6B7280]">
            <Lock className="w-3.5 h-3.5 text-[#1F1E1E]" />
            <span>{finalCta.guaranteeNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

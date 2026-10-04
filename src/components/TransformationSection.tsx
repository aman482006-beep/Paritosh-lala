"use client";

import React from "react";
import { XCircle, CheckCircle2 } from "lucide-react";
import { courseData } from "@/content/paritosh";

export default function TransformationSection() {
  const { transformation } = courseData;

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[10px] sm:text-[11px] font-mono font-medium tracking-widest text-[#4B5563] uppercase mb-4">
            <span>{transformation.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.05] uppercase whitespace-pre-line">
            {transformation.headline}
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-normal">
            {transformation.subheadline}
          </p>
        </div>

        {/* Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* BEFORE CARD */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#E5E7EB] mb-5 sm:mb-6">
                <span className="text-[11px] font-mono font-bold tracking-widest text-rose-700 uppercase">
                  [ {transformation.beforeLabel} ]
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-[#9CA3AF]">UNRESOLVED FRICTION</span>
              </div>

              <div className="space-y-3.5 sm:space-y-4">
                {transformation.beforePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-[#E5E7EB] text-[11px] font-mono text-[#6B7280]">
              Pattern: Cognitive overthinking &amp; uncalibrated vocal delivery
            </div>
          </div>

          {/* AFTER CARD */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#1F1E1E] text-white border border-neutral-800 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-800 mb-5 sm:mb-6">
                <span className="text-[11px] font-mono font-bold tracking-widest text-gold-400 uppercase">
                  [ {transformation.afterLabel} ]
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400">APPLIED MASTERY</span>
              </div>

              <div className="space-y-3.5 sm:space-y-4">
                {transformation.afterPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-neutral-100 font-medium leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-neutral-800/80 text-[11px] font-mono text-neutral-400">
              Result: Anchored authority &amp; unforced personal expression
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { courseData } from "@/content/paritosh";

export default function ProblemSection() {
  const { problems, checkoutUrl } = courseData;

  return (
    <section id="problem" className="py-16 sm:py-24 lg:py-32 bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[10px] sm:text-[11px] font-mono font-medium tracking-widest text-[#4B5563] uppercase mb-4">
            <span>{problems.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.05] uppercase whitespace-pre-line">
            {problems.headline}
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-normal">
            {problems.subheadline}
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {problems.cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#D1D5DB] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#F3F4F6] text-[#374151]">
                    {card.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#9CA3AF]">
                    COMMON FRICTION
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#1F1E1E] leading-snug tracking-tight">
                  {card.painPoint}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
                <span className="text-[10px] font-mono font-bold tracking-widest text-gold-600 uppercase block mb-1">
                  {card.skillLabel}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#1F1E1E] leading-snug">
                  {card.skillOutcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Funnel Conversion Card */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#1F1E1E] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm border border-neutral-800">
          <div className="max-w-xl">
            <span className="text-[10px] sm:text-xs font-mono font-bold text-gold-400 uppercase tracking-widest">
              STOP THE OVERTHINKING CYCLE
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mt-1 text-white">
              Ready to turn private thoughts into magnetic speaking?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 font-normal">
              Learn the mechanical drills behind calm, authoritative communication.
            </p>
          </div>

          <Link
            href={checkoutUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-neutral-100 text-[#1F1E1E] font-bold text-xs sm:text-sm tracking-wide transition-all shrink-0 active:scale-95 shadow-sm"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowUpRight className="w-4 h-4 text-[#1F1E1E]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

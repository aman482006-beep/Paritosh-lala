"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { courseData } from "@/content/paritosh";

export default function ProgramOverviewSection() {
  const { checkoutUrl } = courseData;

  const points = [
    {
      num: "1.",
      title: "Self-Paced Core Curriculum with Lifetime Replay Access",
      desc: "Comprehensive video modules breaking down voice modulation, storytelling frameworks, thought structuring, and public speaking presence with zero fluff.",
    },
    {
      num: "2.",
      title: "The Signature 'Record & Review' Speech Audit System",
      desc: "A mechanical 4-step daily diagnostic method to record 2-minute drills, calibrate body language, eliminate fillers, and measure tangible week-over-week progress.",
    },
    {
      num: "3.",
      title: "Field-Tested Frameworks for Meetings, Keynotes & 1-on-1s",
      desc: "Immediate battle-tested formulas you can deploy tomorrow in executive standups, high-stakes client pitches, salary negotiations, or networking dinners.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FBF6F4] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0D0906] text-white text-xs sm:text-sm font-mono tracking-widest uppercase mb-6 sm:mb-8 shadow-sm">
          <span>INTROVERT TO ICON · 2026 EDITION</span>
        </div>

        {/* Headline */}
        <h2 className="max-w-[960px] text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.06] uppercase">
          Practical communication mastery for thinkers who want to be heard
        </h2>

        {/* Subtitle */}
        <p className="mt-5 sm:mt-6 max-w-[800px] text-base sm:text-lg text-[#5D3C23] font-normal leading-relaxed">
          Introvert To Icon isn’t about becoming an aggressive extrovert. It’s about finally knowing what matters, removing internal friction, and speaking with quiet, undeniable gravitas.
        </p>

        {/* 3 Numbered Blocks in Creator College format */}
        <div className="mt-12 sm:mt-16 w-full max-w-[850px] space-y-4 sm:space-y-6 text-left">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
            >
              <span className="text-2xl sm:text-3xl font-black text-[#57423A] shrink-0 font-mono">
                {point.num}
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#1F1E1E] tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 sm:mt-12">
          <Link
            href={checkoutUrl}
            className="w-full sm:w-[320px] h-[58px] sm:h-[62px] inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0D0906] hover:bg-black text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-md active:scale-95"
          >
            <span>JOIN INTROVERT TO ICON</span>
            <ArrowUpRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}

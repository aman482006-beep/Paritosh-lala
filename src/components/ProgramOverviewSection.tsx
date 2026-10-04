"use client";

import React from "react";
import Link from "next/link";
import { courseData } from "@/content/paritosh";

export default function ProgramOverviewSection() {
  const { checkoutUrl } = courseData;

  const points = [
    {
      num: "01",
      title: "Core Video Curriculum",
      desc: "Zero-fluff modules on voice modulation, thought formulation, and speaking with quiet gravitas.",
    },
    {
      num: "02",
      title: "Daily Speech Audit System",
      desc: "A 2-minute diagnostic practice method to eliminate filler words, tremors, and awkward posture.",
    },
    {
      num: "03",
      title: "Real-World Frameworks",
      desc: "Ready-to-use speech formulas for high-pressure meetings, interviews, presentations, and 1-on-1s.",
    },
  ];

  return (
    <section id="method" className="py-14 sm:py-20 bg-[#FBF6F4] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0D0906] text-white text-xs font-mono tracking-widest uppercase mb-6 shadow-sm">
          <span>INTROVERT TO ICON · 2026 EDITION</span>
        </div>

        {/* Headline */}
        <h2 className="max-w-[900px] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1F1E1E] leading-[1.15]">
          Practical communication mastery for thinkers who want to be heard
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-[700px] text-sm sm:text-base text-[#5D3C23] font-normal leading-relaxed">
          Not about becoming an aggressive extrovert. It’s about speaking with clarity, structure, and natural gravitas.
        </p>

        {/* 3 Numbered Blocks in Creator College format */}
        <div className="mt-10 sm:mt-12 w-full max-w-[850px] grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <span className="text-xl sm:text-2xl font-bold text-[#57423A] font-mono block mb-2">
                  {point.num}
                </span>
                <h3 className="text-base font-bold text-[#1F1E1E] tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          <Link
            href={checkoutUrl}
            className="w-[280px] sm:w-[320px] h-[60px] inline-flex items-center justify-center rounded-full bg-[#0D0906] hover:opacity-85 text-white font-semibold text-base tracking-wide transition-all duration-300 active:scale-[0.98] shadow-sm"
          >
            JOIN INTROVERT TO ICON
          </Link>
        </div>
      </div>
    </section>
  );
}

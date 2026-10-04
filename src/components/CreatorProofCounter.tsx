"use client";

import React from "react";

export default function CreatorProofCounter() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8F9FC] text-[#1F1E1E] border-y border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="max-w-[850px] mx-auto text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1E1E] leading-[1.12]">
          Over 1.5 Million+ People Reached with Storytelling &amp; Communication Education
        </h2>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-12 text-left">
          <div className="p-7 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <span className="text-3xl sm:text-4xl font-bold text-[#1F1E1E] tracking-tight block">
              250 MILLION+
            </span>
            <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
              Views across video essays, Instagram reels, podcasts, and keynote addresses.
            </p>
          </div>

          <div className="p-7 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <span className="text-3xl sm:text-4xl font-bold text-[#1F1E1E] tracking-tight block">
              1.5 MILLION+
            </span>
            <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
              Community members following Paritosh's storytelling and communication journeys.
            </p>
          </div>

          <div className="p-7 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <span className="text-3xl sm:text-4xl font-bold text-[#1F1E1E] tracking-tight block">
              TEDx &amp; KEYNOTES
            </span>
            <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
              Delivered across prestigious auditoriums, industry conferences, and executive summits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

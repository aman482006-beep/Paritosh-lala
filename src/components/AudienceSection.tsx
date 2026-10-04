"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function AudienceSection() {
  const notForPoints = [
    "You want cheap tricks to fake an aggressive personality.",
    "You expect charisma overnight without 2-minute practice drills.",
    "You want passive theory instead of an active speech lab.",
    "You are unwilling to dedicate 15 minutes a day to practice.",
  ];

  const forPoints = [
    "You want to speak with calm gravitas and clear structure.",
    "You are ready for structured micro-drills that build lasting skill.",
    "You want to tell captivating stories in meetings and talks.",
    "You want to express your authentic voice without shouting.",
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FBF6F4] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[850px] mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1F1E1E] leading-[1.15]">
            2026 is the year you finally speak with clarity and confidence
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5D3C23] font-normal leading-relaxed">
            Designed for quiet thinkers, creators, and professionals who want natural gravitas without shouting.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* NOT FOR YOU IF */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-rose-200">
                <span>NOT FOR YOU IF...</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1F1E1E] tracking-tight mb-4">
                This program is not a fit if:
              </h3>

              <div className="space-y-3">
                {notForPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FOR YOU IF */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-emerald-200">
                <span>FOR YOU IF...</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1F1E1E] tracking-tight mb-4">
                This program is built for you if:
              </h3>

              <div className="space-y-3">
                {forPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

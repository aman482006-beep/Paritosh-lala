"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Check } from "lucide-react";
import { courseData } from "@/content/paritosh";

export default function CurriculumSection() {
  const { curriculum, checkoutUrl } = courseData;
  const [expandedId, setExpandedId] = useState<string | null>("mod-01");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="curriculum" className="py-16 sm:py-24 lg:py-32 bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[10px] sm:text-[11px] font-mono font-medium tracking-widest text-[#4B5563] uppercase mb-4">
            <span>{curriculum.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1E1E] leading-[1.12]">
            {curriculum.headline}
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-normal">
            {curriculum.subheadline}
          </p>

          <p className="mt-2 text-xs text-[#9CA3AF] font-mono">
            {curriculum.disclaimer}
          </p>
        </div>

        {/* 10 Modules Grid: 1 col on mobile, 2 cols on tablet & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {curriculum.modules.map((module) => {
            const isExpanded = expandedId === module.id;

            return (
              <div
                key={module.id}
                className={`flex flex-col justify-between rounded-2xl sm:rounded-3xl border transition-all duration-200 p-6 sm:p-7 ${
                  isExpanded
                    ? "bg-white border-[#1F1E1E]/30 shadow-sm"
                    : "bg-white border-[#E5E7EB] hover:border-[#D1D5DB]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#1F1E1E] text-white">
                      MODULE {module.number}
                    </span>

                    {module.duration && (
                      <span className="text-[10px] sm:text-[11px] font-mono text-[#6B7280] bg-[#F3F4F6] px-2 py-0.5 rounded">
                        {module.duration}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#1F1E1E] tracking-tight">
                    {module.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                    {module.description}
                  </p>

                  {/* Highlights */}
                  {module.highlights && module.highlights.length > 0 && (
                    <div
                      className={`space-y-2 overflow-hidden transition-all duration-200 ${
                        isExpanded ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0"
                      }`}
                    >
                      {module.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#374151]">
                          <Check className="w-3.5 h-3.5 text-[#1F1E1E] mt-1 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(module.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1F1E1E] hover:text-black transition-colors"
                  >
                    <span>{isExpanded ? "COLLAPSE DRILLS" : "VIEW CORE DRILLS"}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <span className="text-[10px] font-mono text-[#9CA3AF]">
                    SELF-PACED
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Post-Curriculum Action */}
        <div className="mt-12 sm:mt-16 text-center flex flex-col items-center">
          <p className="text-xs sm:text-sm text-[#4B5563] font-medium mb-4">
            Master all 10 modules at your own pace with Paritosh.
          </p>
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

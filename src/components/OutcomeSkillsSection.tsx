"use client";

import React from "react";
import { MessageSquare, BookOpen, ShieldCheck, UserCheck, Volume2, Users2 } from "lucide-react";
import { courseData } from "@/content/paritosh";

const iconMap: Record<string, React.ReactNode> = {
  COMMUNICATION: <MessageSquare className="w-4 h-4 text-[#1F1E1E]" />,
  STORYTELLING: <BookOpen className="w-4 h-4 text-[#1F1E1E]" />,
  CONFIDENCE: <ShieldCheck className="w-4 h-4 text-[#1F1E1E]" />,
  "BODY LANGUAGE": <UserCheck className="w-4 h-4 text-[#1F1E1E]" />,
  VOICE: <Volume2 className="w-4 h-4 text-[#1F1E1E]" />,
  CONVERSATIONS: <Users2 className="w-4 h-4 text-[#1F1E1E]" />,
};

export default function OutcomeSkillsSection() {
  const { skillMetrics } = courseData;

  return (
    <section className="py-16 sm:py-24 bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[10px] sm:text-[11px] font-mono font-medium tracking-widest text-[#4B5563] uppercase mb-4">
            <span>{skillMetrics.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] text-[#1F1E1E] leading-tight">
            {skillMetrics.headline}
          </h2>
        </div>

        {/* 6 White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillMetrics.categories.map((cat, idx) => (
            <div
              key={cat.name}
              className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#D1D5DB] transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F3F4F6] border border-[#E5E7EB]">
                  {iconMap[cat.name] || <span className="text-xs font-mono">0{idx + 1}</span>}
                </div>
                <span className="text-xs font-mono font-bold text-[#9CA3AF]">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-black tracking-tight text-[#1F1E1E]">
                {cat.name}
              </h3>

              <p className="mt-1 text-[11px] font-mono font-bold text-gold-700 uppercase tracking-wider">
                {cat.summary}
              </p>

              <p className="mt-3 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                {cat.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

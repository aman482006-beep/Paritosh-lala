"use client";

import React from "react";
import { Mic, Briefcase, Users, Video, TrendingUp, MessageCircle } from "lucide-react";
import { courseData } from "@/content/paritosh";

const iconMap: Record<string, React.ReactNode> = {
  Mic: <Mic className="w-4 h-4 text-[#1F1E1E]" />,
  Briefcase: <Briefcase className="w-4 h-4 text-[#1F1E1E]" />,
  Users: <Users className="w-4 h-4 text-[#1F1E1E]" />,
  Video: <Video className="w-4 h-4 text-[#1F1E1E]" />,
  TrendingUp: <TrendingUp className="w-4 h-4 text-[#1F1E1E]" />,
  MessageCircle: <MessageCircle className="w-4 h-4 text-[#1F1E1E]" />,
};

export default function UseCaseSection() {
  const { useCases } = courseData;

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[10px] sm:text-[11px] font-mono font-medium tracking-widest text-[#4B5563] uppercase mb-4">
            <span>{useCases.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.05]">
            {useCases.headline}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl font-normal">
            {useCases.subheadline}
          </p>
        </div>

        {/* 6 White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {useCases.cases.map((uc) => (
            <div
              key={uc.id}
              className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#D1D5DB] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F3F4F6] border border-[#E5E7EB]">
                    {iconMap[uc.iconName]}
                  </div>
                  <span className="text-[10px] font-mono text-[#9CA3AF]">
                    SCENARIO
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#1F1E1E] tracking-tight mb-3">
                  {uc.scenario}
                </h3>

                {/* Problem */}
                <div className="mb-3">
                  <span className="text-[10px] font-mono font-bold text-rose-700 uppercase tracking-wider block mb-0.5">
                    THE FRICTION
                  </span>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                    {uc.problem}
                  </p>
                </div>

                {/* Practice */}
                <div className="mb-3">
                  <span className="text-[10px] font-mono font-bold text-[#1F1E1E] uppercase tracking-wider block mb-0.5">
                    WHAT YOU PRACTICE
                  </span>
                  <p className="text-xs sm:text-sm text-[#374151] font-medium leading-relaxed">
                    {uc.skillPracticed}
                  </p>
                </div>
              </div>

              {/* Outcome */}
              <div className="pt-3 border-t border-[#E5E7EB]">
                <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider block mb-0.5">
                  THE OUTCOME
                </span>
                <p className="text-xs sm:text-sm text-[#1F1E1E] font-semibold leading-relaxed">
                  {uc.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

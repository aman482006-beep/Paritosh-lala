"use client";

import React from "react";
import { Brain, Sparkles, Volume2 } from "lucide-react";

export default function StatsTickerSection() {
  const frameworks = [
    {
      icon: Brain,
      title: "Thought Structuring",
      desc: "Organize ideas instantly under pressure so words come out clear and intentional.",
    },
    {
      icon: Sparkles,
      title: "Adrenaline Channeling",
      desc: "Turn nervous physical tension into grounded, steady room presence.",
    },
    {
      icon: Volume2,
      title: "Vocal Gravitas",
      desc: "Master downward inflection, strategic pauses, and calm authority without shouting.",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#F1F1F1] border-t border-[#E5E7EB] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Headline */}
        <h2 className="max-w-[920px] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1F1E1E] leading-[1.15] uppercase">
          I will teach you the exact frameworks I use to speak with calm authority and captivate audiences without shouting
        </h2>

        {/* 3 Core Frameworks Strip — Crisp, non-repetitive, zero stat duplicates */}
        <div className="w-full max-w-[960px] mt-8 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-left">
            {frameworks.map((fw, idx) => {
              const Icon = fw.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#F8F9FC] border border-[#E5E7EB] flex items-center justify-center text-[#57423A] mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#1F1E1E] tracking-tight">
                      {fw.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                      {fw.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

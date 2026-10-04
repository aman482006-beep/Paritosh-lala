"use client";

import React from "react";

export default function StatsTickerSection() {
  const tickerItems = [
    { count: "250M+", label: "Total Views" },
    { count: "1.5M+", label: "Global Community" },
    { count: "24.5M", label: "Top Viral Reach" },
    { count: "100+", label: "Keynotes & Stages" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F1F1F1] border-t border-[#E5E7EB] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Headline (Creator College 3xl-heading style) */}
        <h2 className="max-w-[920px] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1E1E] leading-[1.12] uppercase">
          I will teach you the exact frameworks I use to speak with calm authority and captivate audiences without shouting
        </h2>

        {/* Concise Single-Row Metric Proof Strip */}
        <div className="w-full max-w-[960px] mt-8 sm:mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {tickerItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#57423A] tracking-tight">
                  {item.count}
                </span>
                <span className="text-xs font-mono font-medium text-[#6B7280] mt-1.5 uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export default function StatsTickerSection() {
  const tickerItems = [
    { label: "Viral Reel", count: "24.5M" },
    { label: "YouTube Essay", count: "1.4M" },
    { label: "Total Views", count: "117M+" },
    { label: "Community", count: "1.5M+" },
    { label: "Storytelling Reach", count: "23.5M" },
    { label: "Keynote Views", count: "1.9M" },
    { label: "Instagram Audience", count: "1.3M" },
    { label: "YouTube Subscribers", count: "229K" },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F1F1F1] border-t border-[#E5E7EB] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Headline */}
        <h2 className="max-w-[900px] text-2xl sm:text-4xl md:text-5xl font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.08] uppercase">
          I will teach you the exact frameworks I use to speak with calm authority and captivate audiences without shouting
        </h2>

        {/* Ticker Cards Horizontal Row / Grid */}
        <div className="w-full mt-10 sm:mt-12 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {tickerItems.slice(0, 4).map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center"
              >
                <span className="text-2xl sm:text-3xl font-black text-[#57423A] tracking-tight">
                  {item.count}
                </span>
                <span className="text-xs font-mono text-[#6B7280] mt-1 uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-3 sm:mt-4">
            {tickerItems.slice(4, 8).map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center"
              >
                <span className="text-2xl sm:text-3xl font-black text-[#57423A] tracking-tight">
                  {item.count}
                </span>
                <span className="text-xs font-mono text-[#6B7280] mt-1 uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Statement Box */}
        <div className="mt-12 sm:mt-16 max-w-[800px]">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1F1E1E] tracking-tight leading-snug">
            Stop overthinking conversations, speaking without structure, and feeling invisible in high-stakes rooms.
          </h3>
          <p className="mt-4 text-sm sm:text-base text-[#4B5563] leading-relaxed font-normal">
            There is a mechanical, step-by-step way to communicate that actually works, is sustainable, and leads to commanding natural respect without needing to fake an extroverted personality.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export default function OutcomeWall() {
  const outcomes = [
    { title: "Composed in meetings within 48 hours", tag: "Workplace Clarity" },
    { title: "Eliminated filler words ('um', 'like') completely", tag: "Cadence & Pacing" },
    { title: "Landed job placement through confident interview delivery", tag: "High-Stakes Speaking" },
    { title: "Delivered first auditorium speech without freezing", tag: "Public Speaking" },
    { title: "Turned mundane anecdotes into gripping dinner stories", tag: "Storytelling" },
    { title: "Held the attention of 500+ listeners without shouting", tag: "Stage Presence" },
    { title: "Mastered the 2-minute daily diagnostic self-audit", tag: "Record & Review" },
    { title: "Comfortable initiating conversations with senior leaders", tag: "Networking" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F1F1F1] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-[#6B7280] uppercase block mb-2">
          REAL RESULTS
        </span>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1E1E] leading-[1.12]">
          Real Quiet Thinkers, Real Conversational Growth
        </h2>

        <p className="mt-3 text-sm sm:text-base text-[#4B5563] max-w-xl mx-auto font-normal">
          The before-and-afters you're aiming for...
        </p>

        {/* Outcome tiles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 sm:mt-12 text-left">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1E1E] tracking-tight leading-snug">
                {item.title}
              </h3>
              <div className="mt-4 pt-3 border-t border-[#F3F4F6]">
                <span className="text-[10px] font-mono font-bold text-gold-700 uppercase">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

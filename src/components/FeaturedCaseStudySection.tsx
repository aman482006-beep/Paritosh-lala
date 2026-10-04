"use client";

import React from "react";

export default function FeaturedCaseStudySection() {
  const cards = [
    {
      stat: "0 Panic Moments",
      desc: "Grounding and pause protocols eliminated voice tremors and shallow breathing.",
    },
    {
      stat: "3 Key Pitches Won",
      desc: "Turned dry slide decks into compelling stories that closed enterprise accounts.",
    },
    {
      stat: "100% Authentic Voice",
      desc: "Grounded conversational presence without faking extroversion or shouting.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FBF6F4] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Featured Quote */}
        <div className="max-w-[960px] mx-auto text-center mb-10 sm:mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8C6D58] block mb-3">
            FEATURED STUDENT BREAKTHROUGH
          </span>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1F1E1E] leading-[1.15]">
            “I spent 4 years freezing in meetings. Within 6 weeks of Introvert To Icon, I led our global all-hands keynote with total composure.”
          </blockquote>
          <p className="mt-4 text-xs sm:text-sm font-mono text-[#5D3C23]">
            — Tanvi Saxena, Engineering Lead &amp; Speaker
          </p>
        </div>

        {/* 3 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#57423A] tracking-tight">
                  {card.stat}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

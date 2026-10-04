"use client";

import React from "react";

export default function FeaturedCaseStudySection() {
  const cards = [
    {
      stat: "0 Panic Moments",
      desc: "Diaphragmatic grounding and vocal pause protocols eliminated voice tremors, shallow breathing, and racing pulse.",
    },
    {
      stat: "3 Client Pitches Won",
      desc: "Transformed dry slide presentations into structured narrative stories that secured multi-million rupee enterprise accounts.",
    },
    {
      stat: "100% Authentic Voice",
      desc: "Achieved magnetic conversational presence without forcing a fake extrovert persona or shouting over colleagues.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FBF6F4] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Featured Quote */}
        <div className="max-w-[960px] mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8C6D58] block mb-4">
            FEATURED STUDENT BREAKTHROUGH
          </span>
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1E1E] leading-[1.12]">
            “I spent 4 years freezing in executive meetings and avoiding keynotes. Within 6 weeks of Introvert To Icon, I led our global all-hands keynote with total composure.”
          </blockquote>
          <p className="mt-5 text-sm sm:text-base font-mono text-[#5D3C23]">
            — Tanvi Saxena, Senior Engineering Lead &amp; Technical Speaker
          </p>
        </div>

        {/* 3 Outcome Cards on #FFFFFF */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#57423A] tracking-tight">
                  {card.stat}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
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

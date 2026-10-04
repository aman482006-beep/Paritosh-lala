"use client";

import React from "react";
import Image from "next/image";
import { courseData } from "@/content/paritosh";

export default function FounderStory() {
  const { timeline } = courseData;

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[10px] sm:text-[11px] font-mono font-medium tracking-widest text-[#4B5563] uppercase mb-4">
            <span>{timeline.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.05]">
            {timeline.headline}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl font-normal">
            {timeline.subheadline}
          </p>
        </div>

        {/* 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Milestones */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 relative before:absolute before:inset-0 before:left-4 sm:before:left-5 before:w-px before:bg-[#E5E7EB]">
            {timeline.milestones.map((milestone) => (
              <div key={milestone.id} className="relative flex items-start gap-4 sm:gap-6 group">
                <div className="relative z-10 flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white border-2 border-[#1F1E1E] shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#1F1E1E]" />
                </div>

                <div className="flex-1 p-5 sm:p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-gold-700 uppercase">
                      {milestone.period}
                    </span>
                    <span className="text-[10px] font-mono text-[#9CA3AF]">
                      MILESTONE
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#1F1E1E] tracking-tight">
                    {milestone.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                    {milestone.narrative}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#E5E7EB] text-xs font-mono text-[#1F1E1E]">
                    <span className="font-bold">Insight: </span>
                    {milestone.keyInsight}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column Visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-5">
            <div className="p-2 sm:p-2.5 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900">
                <Image
                  src="/images/paritosh-speaking.webp"
                  alt="Paritosh Anand public speaking on stage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                    TEDx &amp; PUBLIC SPEAKING
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                    Translating inner nervousness into external stage authority.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <span className="text-[10px] font-mono font-bold text-[#6B7280] uppercase tracking-widest block mb-1.5">
                FOUNDER'S PHILOSOPHY
              </span>
              <p className="text-xs sm:text-sm text-[#1F1E1E] font-medium leading-relaxed italic">
                “When you stop trying to simulate someone else’s personality, all the energy you wasted on pretending can finally go into speaking clearly.”
              </p>
              <div className="mt-3 text-[11px] font-mono text-[#6B7280]">
                — Paritosh Anand
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

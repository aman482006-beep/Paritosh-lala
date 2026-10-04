"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { courseData } from "@/content/paritosh";
import VideoEmbed from "./VideoEmbed";

export default function MasterclassSection() {
  const { masterclass, socials } = courseData;

  return (
    <section className="py-16 sm:py-24 bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[10px] sm:text-[11px] font-mono font-medium tracking-widest text-[#4B5563] uppercase mb-4">
            <span>{masterclass.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.05] uppercase">
            {masterclass.headline}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl font-normal">
            {masterclass.subheadline}
          </p>
        </div>

        {/* 3 Masterclass Cards: White containers on #F1F1EF */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {masterclass.videos.map((vid) => (
            <div
              key={vid.id}
              className="flex flex-col rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              <div className="p-3">
                <VideoEmbed
                  videoUrl={vid.youtubeUrl}
                  videoId={vid.videoId}
                  title={vid.title}
                  aspectRatio="16/9"
                  badgeText="PREVIEW PLACEHOLDER"
                  instructorLabel="Paritosh Anand"
                  subnote="Configure in paritosh.ts"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-gold-700 uppercase block mb-1">
                    {vid.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-[#1F1E1E] tracking-tight leading-snug">
                    {vid.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                    {vid.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <a
                    href={vid.youtubeUrl || socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1F1E1E] hover:text-black transition-colors"
                  >
                    <span>Watch on YouTube</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-[10px] font-mono text-[#9CA3AF]">
                    {vid.duration || "Preview Lesson"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

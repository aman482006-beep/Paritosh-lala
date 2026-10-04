"use client";

import React from "react";
import { ArrowUpRight, Youtube, Instagram } from "lucide-react";
import { courseData } from "@/content/paritosh";

export default function SocialContentProof() {
  const { contentProof } = courseData;

  return (
    <section className="py-16 sm:py-24 bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[10px] sm:text-[11px] font-mono font-medium tracking-widest text-[#4B5563] uppercase mb-4">
            <span>{contentProof.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] text-[#1F1E1E] leading-tight">
            {contentProof.headline}
          </h2>

          <p className="mt-2 text-sm sm:text-base text-[#4B5563] max-w-2xl font-normal">
            {contentProof.subheadline}
          </p>
        </div>

        {/* 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {contentProof.cards.map((card) => {
            const isYouTube = card.platform === "YouTube";

            return (
              <div
                key={card.id}
                className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#D1D5DB] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1F1E1E]">
                      {isYouTube ? (
                        <Youtube className="w-4 h-4 text-rose-600" />
                      ) : (
                        <Instagram className="w-4 h-4 text-pink-600" />
                      )}
                      <span>{card.platform}</span>
                    </span>

                    <span className="text-[10px] font-mono text-[#6B7280] bg-[#F3F4F6] px-2 py-0.5 rounded">
                      {card.viewsOrBadge || card.topic}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-[#1F1E1E] tracking-tight leading-snug">
                    {card.title}
                  </h3>

                  <p className="mt-1.5 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E5E7EB]">
                  {card.url ? (
                    <a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1F1E1E] hover:text-black transition-colors"
                    >
                      <span>Explore on {card.platform}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-[#9CA3AF]">
                      Link coming soon
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

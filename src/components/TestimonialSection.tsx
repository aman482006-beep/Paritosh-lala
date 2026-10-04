"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Quote } from "lucide-react";
import { courseData } from "@/content/paritosh";
import VideoEmbed from "./VideoEmbed";

export default function TestimonialSection() {
  const { testimonials, checkoutUrl } = courseData;

  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32 bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[10px] sm:text-[11px] font-mono font-medium tracking-widest text-[#4B5563] uppercase mb-4">
            <span>{testimonials.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.05]">
            {testimonials.headline}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl font-normal">
            {testimonials.subheadline}
          </p>
        </div>

        {/* Text Testimonials: Pure white cards on #F1F1EF */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.items.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl sm:rounded-3xl border flex flex-col justify-between transition-all ${
                item.verified
                  ? "bg-white border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#D1D5DB]"
                  : "bg-white/60 border-dashed border-[#D1D5DB] opacity-75"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {item.verified ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                        VERIFIED FEEDBACK
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-[#6B7280] bg-[#F3F4F6] px-2 py-0.5 rounded">
                        UPCOMING
                      </span>
                    )}
                  </div>
                  <Quote className="w-4 h-4 text-[#D1D5DB]" />
                </div>

                <p className="text-xs sm:text-sm text-[#374151] leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#1F1E1E]">
                    {item.name}
                  </div>
                  <div className="text-[11px] font-mono text-[#6B7280]">
                    {item.role}
                  </div>
                </div>

                {item.topic && (
                  <span className="text-[10px] font-mono text-[#6B7280] bg-[#F3F4F6] px-2 py-0.5 rounded">
                    {item.topic}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video Wall */}
        <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-[#E5E7EB]">
          <div className="max-w-xl mb-8">
            <span className="text-[10px] sm:text-xs font-mono font-bold text-[#6B7280] uppercase tracking-widest block mb-1">
              STUDENT CASE STUDY WALL
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1F1E1E] tracking-tight">
              Watch Real Conversational Transformations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.videos.map((vid) => (
              <div
                key={vid.id}
                className="rounded-2xl sm:rounded-3xl bg-white p-2.5 sm:p-3 border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              >
                <VideoEmbed
                  videoUrl={vid.youtubeUrl}
                  title={vid.name}
                  aspectRatio="16/9"
                  badgeText="STUDENT REVIEW PLACEHOLDER"
                  instructorLabel={vid.name}
                  subnote="Slot ready for student submission"
                />
                <div className="p-3 sm:p-4">
                  <p className="text-xs font-mono font-bold text-[#1F1E1E] uppercase tracking-wider">
                    {vid.name}
                  </p>
                  <p className="text-xs text-[#6B7280] mt-1 line-clamp-2 font-normal">
                    {vid.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Post-Testimonial CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href={checkoutUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1F1E1E] hover:bg-black text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm active:scale-95"
          >
            <span>JOIN THE NEXT COHORT</span>
            <ArrowUpRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}

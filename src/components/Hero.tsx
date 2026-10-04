"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { courseData } from "@/content/paritosh";
import VideoEmbed from "./VideoEmbed";

export default function Hero() {
  const { hero, checkoutUrl } = courseData;

  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28 bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Headlines & Action CTAs */}
          <div className="w-full lg:col-span-7 flex flex-col text-left">
            {/* Minimal Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[10px] sm:text-[11px] font-mono font-medium tracking-widest text-[#4B5563] uppercase w-fit mb-5 sm:mb-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              <span>{hero.eyebrow}</span>
              <span className="text-[#9CA3AF]">•</span>
              <span>PARITOSH ANAND</span>
            </div>

            {/* Giant 3-Line Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.0] uppercase">
              {hero.titleLines.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 sm:mt-7 text-base sm:text-lg md:text-xl text-[#4B5563] font-normal leading-relaxed max-w-xl">
              {hero.subtitle}
            </p>

            {/* Minimal Bullets */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-[#374151] font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#1F1E1E]" />
                No forced extroversion
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#1F1E1E]" />
                The Record &amp; Review framework
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#1F1E1E]" />
                Self-paced video modules
              </span>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href={checkoutUrl}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1F1E1E] hover:bg-black text-white text-sm sm:text-base font-bold tracking-wide transition-all shadow-sm active:scale-98"
              >
                <span>{hero.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-[#FAF9F7] text-[#1F1E1E] text-sm sm:text-base font-semibold border border-[#E5E7EB] transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowDown className="w-4 h-4 text-[#6B7280]" />
              </a>
            </div>

            <p className="mt-4 text-xs font-mono text-[#6B7280]">
              Direct checkout • Instant access via the official learning portal
            </p>
          </div>

          {/* Right Column: 16:9 Media Preview Card */}
          <div className="w-full lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-xl lg:max-w-none p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <VideoEmbed
                videoUrl={hero.videoUrl}
                videoId={hero.videoId}
                title={hero.videoTitle}
                thumbnail={hero.videoThumbnail}
                aspectRatio="16/9"
                badgeText="REPLACE WITH YOUTUBE VIDEO"
                instructorLabel="Paritosh Anand • Introvert To Icon"
                subnote="16:9 4K Video Embed Slot"
                className="w-full"
              />

              <div className="mt-2.5 flex items-center justify-between text-xs text-[#6B7280] px-2 font-mono">
                <span className="flex items-center gap-1.5 font-medium">
                  Official Course Preview
                </span>
                <span>Configurable in paritosh.ts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

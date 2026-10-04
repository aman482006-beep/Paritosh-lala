"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { courseData } from "@/content/paritosh";
import VideoEmbed from "./VideoEmbed";

export default function CreatorCollegeHero() {
  const { hero, checkoutUrl } = courseData;

  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 bg-[#F1F1F1] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Creator College Top Pill */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0D0906] text-white text-xs sm:text-sm font-mono tracking-widest uppercase mb-6 sm:mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span>OFFICIAL ENROLLMENT OPEN • INTROVERT TO ICON</span>
        </div>

        {/* Centered Large Editorial Headline */}
        <h1 className="max-w-[960px] text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.03] uppercase">
          SPEAK WITH CONFIDENCE, MASTER STORYTELLING AND EXPRESS WHO YOU ARE
        </h1>

        {/* Centered Subtitle */}
        <p className="mt-5 sm:mt-7 max-w-[820px] text-base sm:text-lg md:text-xl text-[#4B5563] font-normal leading-relaxed">
          Join the comprehensive communication and public-speaking program by Paritosh Anand to speak clearly, tell captivating stories, build unshakeable confidence, and become unforgettable. Designed for quiet thinkers who want substance over noise.
        </p>

        {/* Centered 16:9 Video Container (800px max width matching Creator College) */}
        <div className="w-full max-w-[840px] mt-8 sm:mt-10 p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <VideoEmbed
            videoUrl={hero.videoUrl}
            videoId={hero.videoId}
            title={hero.videoTitle}
            thumbnail={hero.videoThumbnail}
            aspectRatio="16/9"
            badgeText="WATCH COURSE PREVIEW"
            instructorLabel="Paritosh Anand • Introvert To Icon"
            subnote="16:9 4K Video Preview Slot"
            className="w-full"
            directEmbed={true}
          />
        </div>

        {/* Centered Primary CTA Button */}
        <div className="mt-8 sm:mt-10 w-full flex flex-col items-center">
          <Link
            href={checkoutUrl}
            className="w-full sm:w-[320px] h-[58px] sm:h-[62px] inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0D0906] hover:bg-black text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-md active:scale-95"
          >
            <span>GET INSTANT ACCESS</span>
            <ArrowUpRight className="w-4 h-4 text-gold-400" />
          </Link>

          <p className="mt-3 text-xs font-mono text-[#6B7280]">
            Direct checkout • Instant access via the official learning portal
          </p>
        </div>

        {/* Dual Authority Cards Side-by-Side (Creator College S2 bottom cards) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-14 sm:mt-20 text-left">
          {/* Card 1: Storyteller & Public Speaker */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0D0906] text-white flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0">
                  <Image
                    src="/images/paritosh-portrait.webp"
                    alt="Paritosh Anand"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                    Paritosh Anand, Storyteller &amp; Speaker
                  </h3>
                  <span className="text-xs text-gold-400 font-mono">
                    1.5M+ Audience Across Platforms
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                “I spent years overthinking every room I walked into. I wasn't born a natural extrovert. Every speaking technique, storytelling hook, and vocal pause was reverse-engineered through trial and error.”
              </p>

              <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-normal">
                I am giving you the exact frameworks I used to step onto TEDx stages, build an engaged community, and express ideas with authority.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400">AUDIENCE REACH</span>
              <span className="text-white font-bold">1.5M+</span>
            </div>
          </div>

          {/* Card 2: Founder & Creative Director */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0D0906] text-white flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0">
                  <Image
                    src="/images/paritosh-speaking.webp"
                    alt="Paritosh Anand"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                    Founder, We Smile Media
                  </h3>
                  <span className="text-xs text-gold-400 font-mono">
                    Creative Agency &amp; Production
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                “In business, the person who explains the problem most clearly wins the contract. Communication is the single most leveraged skill an entrepreneur or creator can master.”
              </p>

              <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-normal">
                I am teaching you the practical, repeatable Record &amp; Review method inside Introvert To Icon so you never second-guess your speech again.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400">CREDENTIALS</span>
              <span className="text-white font-bold">TEDx SPEAKER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { courseData } from "@/content/paritosh";
import { assetPath } from "@/lib/utils";
import VideoEmbed from "./VideoEmbed";

export default function CreatorCollegeHero() {
  const { hero, checkoutUrl } = courseData;

  return (
    <section id="why-paritosh" className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 bg-[#F1F1F1] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Creator College Top Pill */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0D0906] text-white text-xs sm:text-sm font-mono tracking-widest uppercase mb-6 sm:mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span>OFFICIAL ENROLLMENT OPEN • INTROVERT TO ICON</span>
        </div>

        {/* Centered Large Editorial Headline (Creator College 4xl-heading: text-6xl font-bold) */}
        <h1 className="max-w-[960px] text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-[#1F1E1E] leading-[1.08] uppercase">
          SPEAK WITH CONFIDENCE, MASTER STORYTELLING AND EXPRESS WHO YOU ARE
        </h1>

        {/* Centered Subtitle */}
        <p className="mt-5 sm:mt-7 max-w-[820px] text-base sm:text-lg md:text-xl text-[#4B5563] font-normal leading-relaxed">
          Join the comprehensive communication and public-speaking program by Paritosh Anand to speak clearly, tell captivating stories, build unshakeable confidence, and become unforgettable. Designed for quiet thinkers who want substance over noise.
        </p>

        {/* Centered 16:9 Video Container */}
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

        {/* Centered Primary CTA Button (Exact Creator College Button Style: 320x60px, rounded-full, font-semibold text-base) */}
        <div className="mt-8 sm:mt-10 w-full flex flex-col items-center">
          <Link
            href={checkoutUrl}
            className="w-[280px] sm:w-[320px] h-[60px] inline-flex items-center justify-center rounded-full bg-[#0D0906] hover:opacity-85 text-white font-semibold text-base tracking-wide transition-all duration-300 shadow-none active:scale-[0.98]"
          >
            <span>GET INSTANT ACCESS</span>
          </Link>

          <p className="mt-3 text-xs font-mono text-[#6B7280]">
            Direct checkout • Instant access via the official learning portal
          </p>
        </div>

        {/* Dual Authority Cards Side-by-Side (Minimal Box Design matching Reference Screenshots) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-14 sm:mt-20">
          {/* Card 1: Storyteller & Public Speaker */}
          <div className="p-7 sm:p-10 rounded-[28px] bg-[#0D0906] text-white flex flex-col justify-between border border-white/10 shadow-2xl transition-all duration-300 hover:border-gold-500/30">
            <div className="flex flex-col items-center text-center">
              {/* Centered Circular Avatar */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-md mb-4 bg-neutral-900 shrink-0">
                <Image
                  src={assetPath("/images/paritosh-portrait.png")}
                  alt="Paritosh Anand - Storyteller & Speaker"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Centered Title & Subtitle */}
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                Paritosh Anand, Storyteller &amp; Speaker
              </h3>
              <span className="mt-1.5 text-xs font-mono font-semibold text-gold-400 uppercase tracking-widest">
                1.5M+ Audience Across Platforms
              </span>

              {/* Centered Quote & Paragraphs */}
              <p className="mt-5 text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal max-w-[92%]">
                “I spent years overthinking every room I walked into. I wasn't born a natural extrovert. Every speaking technique, storytelling hook, and vocal pause was reverse-engineered through trial and error.”
              </p>

              <p className="mt-3.5 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal max-w-[92%]">
                I am giving you the exact frameworks I used to step onto TEDx stages, build an engaged community, and express ideas with authority.
              </p>
            </div>

            {/* Bottom Footer Strip inside card */}
            <div className="mt-8 pt-5 border-t border-neutral-800/90 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-400">
              <span>AUDIENCE REACH</span>
              <span className="text-white font-bold text-xs sm:text-sm font-mono">1.5M+</span>
            </div>
          </div>

          {/* Card 2: Founder & Creative Director */}
          <div className="p-7 sm:p-10 rounded-[28px] bg-[#0D0906] text-white flex flex-col justify-between border border-white/10 shadow-2xl transition-all duration-300 hover:border-gold-500/30">
            <div className="flex flex-col items-center text-center">
              {/* Centered Circular Avatar */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-md mb-4 bg-neutral-900 shrink-0">
                <Image
                  src={assetPath("/images/paritosh-speaking.png")}
                  alt="Paritosh Anand - Founder We Smile Media"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Centered Title & Subtitle */}
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                Founder, We Smile Media
              </h3>
              <span className="mt-1.5 text-xs font-mono font-semibold text-gold-400 uppercase tracking-widest">
                Creative Agency &amp; Production
              </span>

              {/* Centered Quote & Paragraphs */}
              <p className="mt-5 text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal max-w-[92%]">
                “In business, the person who explains the problem most clearly wins the contract. Communication is the single most leveraged skill an entrepreneur or creator can master.”
              </p>

              <p className="mt-3.5 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal max-w-[92%]">
                I am teaching you the practical, repeatable Record &amp; Review method inside Introvert To Icon so you never second-guess your speech again.
              </p>
            </div>

            {/* Bottom Footer Strip inside card */}
            <div className="mt-8 pt-5 border-t border-neutral-800/90 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-400">
              <span>CREDENTIALS</span>
              <span className="text-white font-bold text-xs sm:text-sm font-mono">TEDx SPEAKER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

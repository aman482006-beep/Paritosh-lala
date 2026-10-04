"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { courseData } from "@/content/paritosh";
import { assetPath } from "@/lib/utils";
import VideoEmbed from "./VideoEmbed";

import BrandLogo from "./BrandLogo";

export default function CreatorCollegeHero() {
  const { hero, checkoutUrl } = courseData;

  return (
    <section id="why-paritosh" className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 bg-[#F1F1F1] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Official Brand Logo Banner */}
        <div className="mb-6 sm:mb-8">
          <BrandLogo variant="light" size="lg" />
        </div>

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

        {/* Centered 16:9 Video Container (Clean borderless presentation) */}
        <div className="w-full max-w-[840px] mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <VideoEmbed
            videoUrl={hero.videoUrl}
            videoId={hero.videoId}
            title={hero.videoTitle}
            thumbnail={hero.videoThumbnail}
            aspectRatio="16/9"
            badgeText="WATCH COURSE PREVIEW"
            instructorLabel="Paritosh Anand • Introvert To Icon"
            subnote="16:9 4K Video Preview Slot"
            className="w-full border-0"
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

        {/* Reference-Matched Dual Authority Cards Container */}
        <div className="w-full mt-14 sm:mt-20 flex flex-col items-center">
          {/* Top Pill Button matching Reference Screenshot */}
          <Link
            href={checkoutUrl}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#3D322B] hover:bg-[#2C241F] text-white text-xs sm:text-sm font-bold font-mono tracking-widest uppercase transition-all duration-300 shadow-md mb-8 active:scale-[0.98]"
          >
            <span>GET INSTANT ACCESS</span>
          </Link>

          {/* Dual Authority Cards Side-by-Side (Exact Reference Screenshot Match) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-center">
            {/* Card 1: Storyteller & Public Speaker */}
            <div className="p-8 sm:p-12 rounded-[24px] bg-[#161514] text-white flex flex-col items-center justify-between border border-white/5 shadow-2xl transition-all duration-300">
              <div className="flex flex-col items-center">
                {/* Centered Circular Avatar */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-white/20 shadow-lg mb-5 bg-neutral-900 shrink-0">
                  <Image
                    src={assetPath("/images/paritosh-portrait.png")}
                    alt="Paritosh Anand - Storyteller & Speaker"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Title (Clean bold text without extra subtitle clutter) */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Paritosh Anand, Storyteller &amp; Speaker
                </h3>

                {/* Clean Centered Paragraphs */}
                <p className="mt-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-[95%]">
                  I spent years overthinking every room I walked into. Every speaking technique and storytelling hook was reverse-engineered through trial and error.
                </p>

                <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal max-w-[95%]">
                  I will give you the exact frameworks I used to step onto TEDx stages, build an engaged community, and express ideas with authority.
                </p>
              </div>

              {/* Bottom Element: Clean Brand Logo */}
              <div className="mt-10 sm:mt-12 text-center">
                <span className="text-base sm:text-lg font-black font-sans tracking-[0.25em] text-white uppercase opacity-90">
                  WE SMILE MEDIA
                </span>
              </div>
            </div>

            {/* Card 2: Creator & Speaker with Audience Stats */}
            <div className="p-8 sm:p-12 rounded-[24px] bg-[#161514] text-white flex flex-col items-center justify-between border border-white/5 shadow-2xl transition-all duration-300">
              <div className="flex flex-col items-center">
                {/* Centered Circular Avatar */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-white/20 shadow-lg mb-5 bg-neutral-900 shrink-0">
                  <Image
                    src={assetPath("/images/paritosh-speaking.png")}
                    alt="Paritosh Anand - Creator"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Paritosh Anand, Creator with 1.5M+ audience
                </h3>

                {/* Clean Centered Paragraphs */}
                <p className="mt-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-[95%]">
                  In business, the person who explains the problem most clearly wins the contract. Communication is the single most leveraged skill an entrepreneur or creator can master.
                </p>

                <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal max-w-[95%]">
                  I will teach you the practical, repeatable Record &amp; Review method inside Introvert To Icon so you never second-guess your speech again.
                </p>
              </div>

              {/* Bottom Element: Social Platform Counter Badges */}
              <div className="mt-10 sm:mt-12 flex items-center justify-center gap-4 text-xs sm:text-sm font-mono font-bold text-neutral-200">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-pink-400">📷</span>
                  <span>1.5M+</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-red-500">▶</span>
                  <span>500K+</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-gold-400">🎤</span>
                  <span>TEDx Speaker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import { courseData } from "@/content/paritosh";

export default function AuthoritySection() {
  const { authority } = courseData;
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section id="why-paritosh" className="py-16 sm:py-24 lg:py-32 bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-none p-2.5 sm:p-3 rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-900">
                <Image
                  src={authority.portraitImage}
                  alt="Paritosh Anand portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />

                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-black/85 backdrop-blur-md text-white border border-white/10">
                  <div className="text-[10px] font-mono font-bold tracking-widest text-gold-400 uppercase">
                    INSTRUCTOR
                  </div>
                  <p className="text-sm font-bold text-white tracking-tight mt-0.5">
                    Paritosh Anand
                  </p>
                  <p className="text-xs text-neutral-300 font-mono">
                    TEDx Speaker • Storyteller • Founder
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Credentials */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-[10px] sm:text-[11px] font-mono font-medium tracking-widest text-[#4B5563] uppercase w-fit mb-4">
              <span>{authority.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.08]">
              {authority.headline}
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#4B5563] leading-relaxed font-normal">
              {authority.subheadline}
            </p>

            {/* FROM -> TO Comparison Box */}
            <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold tracking-wider text-rose-700 uppercase">
                  [ {authority.fromLabel} ]
                </span>
                <p className="mt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {authority.fromText}
                </p>
              </div>

              <div className="flex flex-col border-t sm:border-t-0 sm:border-l border-[#E5E7EB] pt-3 sm:pt-0 sm:pl-5">
                <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-800 uppercase">
                  [ {authority.toLabel} ]
                </span>
                <p className="mt-1 text-xs sm:text-sm text-[#1F1E1E] leading-relaxed font-medium">
                  {authority.toText}
                </p>
              </div>
            </div>

            {/* Credibility points */}
            <div className="mt-6 sm:mt-8 space-y-3">
              {authority.credibilityBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1F1E1E] text-white">
                    <Check className="w-2.5 h-2.5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#1F1E1E]">
                      {bullet.title}
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                      {bullet.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Expandable story */}
            {showFullStory && (
              <div className="mt-5 p-5 rounded-2xl bg-white border border-[#E5E7EB] text-xs sm:text-sm text-[#4B5563] space-y-2.5 shadow-sm">
                <p>
                  For years, I believed public speaking was an inborn trait. Every unexpected question triggered rapid overthinking, leaving me stammering.
                </p>
                <p>
                  Everything changed when I treated speaking like video editing: cutting out filler words, holding silence with pauses, and anchoring vocal delivery.
                </p>
                <p>
                  That exact methodology took me to TEDx stages, 1.5M+ online followers, and founding We Smile Media. Introvert To Icon is that exact blueprint.
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#method"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1F1E1E] hover:bg-black text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm active:scale-95"
              >
                <span>{authority.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </a>

              <button
                onClick={() => setShowFullStory(!showFullStory)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-[#4B5563] hover:text-[#1F1E1E] transition-colors"
              >
                <span>{showFullStory ? "Hide Story" : "Read Paritosh's Story"}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    showFullStory ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

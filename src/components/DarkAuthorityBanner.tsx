"use client";

import React from "react";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

export default function DarkAuthorityBanner() {
  const stats = [
    { value: "250M+", label: "Organic Content Views" },
    { value: "1.5M+", label: "Global Community" },
    { value: "10+ Years", label: "Media & Keynote Experience" },
  ];

  const coaches = [
    {
      name: "Paritosh Anand",
      role: "Lead Instructor & TEDx Speaker",
      desc: "Architect of Introvert To Icon, keynote speaker, and narrative strategist.",
      image: assetPath("/images/paritosh-portrait.webp"),
    },
    {
      name: "We Smile Media",
      role: "Creative Direction & Storytelling",
      desc: "Production studio crafting high-impact commercial campaigns and long-form visual narratives.",
      image: assetPath("/images/paritosh-speaking.webp"),
    },
    {
      name: "Speech Mechanics Lab",
      role: "Vocal Modulation & Breathwork",
      desc: "Science-backed diagnostic drills targeting voice stabilization and room acoustics.",
      image: assetPath("/images/introvert-to-icon-cover.webp"),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0D0906] text-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Headline */}
        <h2 className="max-w-[900px] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]">
          Personalized frameworks from a proven storyteller and public speaker
        </h2>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 max-w-[700px] text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
          No matter where you start, Introvert To Icon gives you the exact tools to speak clearly, command attention, and build authentic presence.
        </p>

        {/* 3 Giant Metric Counters in Creator College Section 8 style */}
        <div className="w-full max-w-[900px] mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center border-y border-neutral-800 py-10 sm:py-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-mono text-neutral-400 mt-2 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Credentials / Coaches Grid */}
        <div className="w-full mt-14 sm:mt-16">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-8 font-semibold">
            THE METHOD &amp; PRODUCTION BEHIND INTROVERT TO ICON
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
            {coaches.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mb-4 border border-neutral-700 bg-neutral-800">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {c.name}
                  </h3>
                  <p className="text-xs text-gold-400 font-mono mt-0.5">
                    {c.role}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

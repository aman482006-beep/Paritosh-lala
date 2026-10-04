"use client";

import React from "react";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

export default function DarkAuthorityBanner() {
  const stats = [
    { value: "10+ Years", label: "Speaking & Media Experience" },
    { value: "100+", label: "Keynotes & Stages Delivered" },
    { value: "TEDx", label: "Featured Stage Speaker" },
  ];

  const coaches = [
    {
      name: "Paritosh Anand",
      role: "Lead Instructor & TEDx Speaker",
      desc: "Keynote orator and narrative strategist with over a decade of stage experience.",
      image: assetPath("/images/paritosh-portrait.png"),
    },
    {
      name: "We Smile Media",
      role: "Creative Direction & Production",
      desc: "Production studio crafting high-impact campaigns and visual storytelling.",
      image: assetPath("/images/paritosh-speaking.png"),
    },
    {
      name: "Speech Mechanics Lab",
      role: "Voice & Presence Protocols",
      desc: "Science-backed diagnostic drills targeting vocal resonance and room acoustics.",
      image: assetPath("/images/introvert-to-icon-cover.webp"),
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#0D0906] text-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Headline */}
        <h2 className="max-w-[900px] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.15]">
          Personalized frameworks from a proven storyteller and public speaker
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-[700px] text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
          The exact tools to speak clearly, command attention, and build authentic presence without shouting.
        </p>

        {/* 3 Metric Counters in Creator College Section 8 style */}
        <div className="w-full max-w-[900px] mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center border-y border-neutral-800 py-8 sm:py-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-mono text-neutral-400 mt-1.5 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Credentials / Coaches Grid */}
        <div className="w-full mt-10 sm:mt-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-6 font-semibold">
            THE METHOD &amp; PRODUCTION BEHIND INTROVERT TO ICON
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 text-left">
            {coaches.map((c, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mb-3 border border-neutral-700 bg-neutral-800">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {c.name}
                  </h3>
                  <p className="text-xs text-gold-400 font-mono mt-0.5">
                    {c.role}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
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

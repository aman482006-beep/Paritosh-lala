"use client";

import React from "react";
import Link from "next/link";
import { courseData } from "@/content/paritosh";

export default function StrugglingWithSection() {
  const { checkoutUrl } = courseData;

  const painCards = [
    {
      quote: "“I never know what to say under pressure”",
      desc: "Your thoughts scramble and come out rushed. You’ll master rapid thought structuring so your points land crisp, clear, and intentional.",
    },
    {
      quote: "“I sound less confident than I feel”",
      desc: "Conviction gets lost in trailing voice and uptalk. You’ll calibrate downward inflection and vocal resonance so you speak with grounded authority.",
    },
    {
      quote: "“I struggle to approach senior leaders”",
      desc: "Starting conversations feels intimidating without a script. You’ll get frictionless, observation-based frameworks that feel completely natural.",
    },
    {
      quote: "“I have stories, but struggle to tell them”",
      desc: "Great experiences fall flat without pacing. You’ll learn the 3-act tension arc used by top storytellers to hold complete room attention.",
    },
    {
      quote: "“I freeze when all eyes are on me”",
      desc: "High-stakes moments trigger fight-or-flight. You’ll practice breath regulation and stillness protocols to turn adrenaline into presence.",
    },
    {
      quote: "“My body language undermines my words”",
      desc: "Restless hands and tense posture distract listeners. You’ll align physical stillness and intentional gestures so your delivery matches your conviction.",
    },
  ];

  return (
    <section id="problem" className="py-14 sm:py-20 bg-[#FBF6F4] text-[#1F1E1E] relative">
      <div id="struggling" className="absolute -top-20" />
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[850px] mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1F1E1E] leading-[1.15] uppercase">
            Speaking up can sometimes feel like you're fighting an internal panic button
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#5D3C23] font-normal leading-relaxed">
            There is a reason why some people speak with calm gravitas and never freeze. It's about building the right speech mechanics and frameworks.
          </p>

          <p className="mt-6 text-xs font-mono font-semibold uppercase tracking-widest text-[#8C6D58]">
            We know what you're struggling with...
          </p>
        </div>

        {/* 6 Problem Cards in Crisp Creator College layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {painCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#1F1E1E] tracking-tight leading-snug">
                  {card.quote}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Kicker & Action */}
        <div className="mt-12 sm:mt-14 text-center flex flex-col items-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#5D3C23]">
            Learn. Execute. Speak.
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1F1E1E] mt-1">
            Make 2026 the year you speak with calm authority.
          </h3>

          <Link
            href={checkoutUrl}
            className="mt-5 w-[280px] sm:w-[320px] h-[60px] inline-flex items-center justify-center rounded-full bg-[#0D0906] hover:opacity-85 text-white font-semibold text-base tracking-wide transition-all duration-300 active:scale-[0.98]"
          >
            <span>JOIN INTROVERT TO ICON</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

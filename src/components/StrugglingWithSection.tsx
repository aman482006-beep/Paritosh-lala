"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { courseData } from "@/content/paritosh";

export default function StrugglingWithSection() {
  const { checkoutUrl } = courseData;

  const painCards = [
    {
      quote: "“I never know what to say in high-pressure moments”",
      desc: "You have deep thoughts in your head, but when the moment comes, they scramble and come out fragmented or rushed.",
      inside: "You’ll learn thought structuring and rapid formulation frameworks so your words come out crisp, intentional, and compelling.",
    },
    {
      quote: "“I sound less confident than I actually feel”",
      desc: "Your internal conviction gets lost in trailing voice, filler words, uptalk, and uncertain cadence.",
      inside: "You’ll master downward inflection, vocal resonance, and cadence so you sound grounded and authoritative.",
    },
    {
      quote: "“I struggle to start conversations with strangers or senior leaders”",
      desc: "Walking into a room of new people or approaching an executive feels overwhelming without a script.",
      inside: "You’ll get frictionless, observation-based opening frameworks and conversational tennis mechanics that feel completely natural.",
    },
    {
      quote: "“I know stories, but I don't know how to tell them”",
      desc: "You recall great experiences, but when you recount them, people's eyes wander and the punchline falls flat.",
      inside: "You’ll learn the 3-act retention hook and narrative tension arc used by top storytellers and creators.",
    },
    {
      quote: "“I freeze while speaking in front of people”",
      desc: "Boardrooms, seminars, or live crowds trigger an adrenaline spike that scrambles your vocabulary.",
      inside: "You’ll practice adrenaline channeling, breath regulation, and stage presence protocols that turn nervous energy into presence.",
    },
    {
      quote: "“My voice and body language don't match what I'm saying”",
      desc: "Restless hands, tense shoulders, and a flat monotone voice unintentionally undermine your authority.",
      inside: "You’ll align physical stillness, non-verbal congruence, and dynamic gestural anchoring.",
    },
  ];

  return (
    <section id="struggling" className="py-16 sm:py-24 bg-[#FBF6F4] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[850px] mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.08] uppercase">
            Speaking up can sometimes feel like you're fighting an internal panic button
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#5D3C23] font-normal leading-relaxed">
            “But there is a reason why some people speak with calm gravitas, hold attention in every room, and never freeze. It's all about building the right speech mechanics and frameworks.”
          </p>

          <p className="mt-8 text-xs font-mono font-bold uppercase tracking-widest text-[#8C6D58]">
            We know what you're struggling with...
          </p>
        </div>

        {/* 6 Problem Cards in Creator College layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {painCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#1F1E1E] tracking-tight leading-snug">
                  {card.quote}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F3F4F6]">
                <span className="text-[10px] font-mono font-bold tracking-widest text-gold-700 uppercase block mb-1">
                  ‍INSIDE INTROVERT TO ICON:
                </span>
                <p className="text-xs sm:text-sm font-medium text-[#1F1E1E] leading-relaxed">
                  {card.inside}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Kicker & Action */}
        <div className="mt-14 sm:mt-16 text-center flex flex-col items-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#5D3C23]">
            Learn. Execute. Speak.
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#1F1E1E] mt-1">
            Make 2026 the year you finally invest in yourself and speak with power!
          </h3>

          <Link
            href={checkoutUrl}
            className="mt-6 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0D0906] hover:bg-black text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm active:scale-95"
          >
            <span>JOIN INTROVERT TO ICON</span>
            <ArrowUpRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}

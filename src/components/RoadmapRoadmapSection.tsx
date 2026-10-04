"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { courseData } from "@/content/paritosh";

export default function RoadmapRoadmapSection() {
  const { checkoutUrl } = courseData;

  const cards = [
    {
      title: "Voice Calibration & Diaphragmatic Breath",
      subtitle: "Eliminate tremors and ground your voice in physical resonance",
      bullets: [
        "Master the deep belly breath protocol before entering high-stakes meetings",
        "Calibrate downward inflection so your statements project authority",
        "Eliminate vocal fry, trailing sentences, and nervous throat clearing",
      ],
    },
    {
      title: "Thought Structuring & The Story Spine",
      subtitle: "Stop rambling and formulate ideas crisply before you speak",
      bullets: [
        "Deploy the 3-act narrative hook to grab attention in the first 7 seconds",
        "Master conversational tennis to keep 1-on-1 chats flowing naturally",
        "Use structured mental templates to answer unpredictable questions calmly",
      ],
    },
    {
      title: "The 'Record & Review' Speech Lab",
      subtitle: "A private, self-correcting practice loop to diagnose blind spots",
      bullets: [
        "Record 2-minute daily speech drills in the comfort of your own space",
        "Audit micro-gestures, hand anchoring, eye contact, and verbal pauses",
        "Measure undeniable week-over-week growth using structured rubrics",
      ],
    },
    {
      title: "Room Command & High-Stakes Presence",
      subtitle: "Step onto stages, boardrooms, and social events with stillness",
      bullets: [
        "Own physical stillness to project calm, commanding gravitas",
        "Connect with strangers and senior leaders without rehearsed awkwardness",
        "Deliver presentations with emotional range, humor, and memorable takeaways",
      ],
    },
  ];

  const bottomStats = [
    {
      value: "0 Filler Words",
      desc: "Replaced 'um', 'uh', and throat clearing with purposeful pauses",
    },
    {
      value: "15+ Rehearsals",
      desc: "Completed self-paced drills in the Record & Review laboratory",
    },
    {
      value: "100% Authentic",
      desc: "Mastered expression without faking an extroverted personality",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FBF6F4] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Header */}
        <h2 className="max-w-[900px] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1E1E] leading-[1.12]">
          What your 30 days will look like
        </h2>

        <p className="mt-4 sm:mt-5 max-w-[700px] text-base sm:text-lg text-[#5D3C23] font-normal leading-relaxed">
          The step-by-step drills and frameworks you'll practice daily to rewire how you formulate thoughts and speak.
        </p>

        {/* 4 Dark Cards (#0D0906) in Creator College Section 13 style */}
        <div className="w-full mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0D0906] text-white flex flex-col justify-between shadow-xl"
            >
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-gold-400 uppercase block mb-2">
                  PHASE 0{idx + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {card.subtitle}
                </p>

                <div className="mt-6 space-y-3">
                  {card.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 sm:mt-12">
          <Link
            href={checkoutUrl}
            className="w-[280px] sm:w-[320px] h-[60px] inline-flex items-center justify-center rounded-full bg-[#0D0906] hover:opacity-85 text-white font-semibold text-base tracking-wide transition-all duration-300 active:scale-[0.98] shadow-sm"
          >
            GET INSTANT ACCESS
          </Link>
        </div>

        {/* Sub-quote & 3 Stats */}
        <div className="w-full mt-14 sm:mt-18 pt-12 border-t border-[#E5E7EB]">
          <blockquote className="max-w-[850px] mx-auto text-lg sm:text-2xl font-semibold text-[#1F1E1E] leading-snug">
            “If you have the right communication frameworks, there's no way you won't command respect in any room you walk into.”
          </blockquote>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
            {bottomStats.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              >
                <span className="text-xl sm:text-2xl font-semibold text-[#57423A] tracking-tight block">
                  {item.value}
                </span>
                <span className="text-xs text-[#4B5563] leading-relaxed mt-1 block">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

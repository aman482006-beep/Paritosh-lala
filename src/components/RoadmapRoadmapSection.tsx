"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { courseData } from "@/content/paritosh";

export default function RoadmapRoadmapSection() {
  const { checkoutUrl } = courseData;

  const cards = [
    {
      title: "Voice Calibration & Breath",
      subtitle: "Eliminate tremors and ground your vocal resonance.",
      bullets: [
        "Deep belly breathing to stop nervous shakes",
        "Downward inflection for calm authority",
        "Eradicate vocal fry and trailing sentences",
      ],
    },
    {
      title: "Thought Structuring & Stories",
      subtitle: "Formulate ideas crisply before you speak.",
      bullets: [
        "7-second hooks to capture attention instantly",
        "Conversational tennis for natural 1-on-1 flow",
        "Mental templates to answer tough questions calmly",
      ],
    },
    {
      title: "Record & Review Lab",
      subtitle: "A private self-diagnostic practice method.",
      bullets: [
        "2-minute daily self-recording micro-drills",
        "Audit hand gestures, eye contact, and pauses",
        "Objective weekly progress tracking rubrics",
      ],
    },
    {
      title: "Room Command & Presence",
      subtitle: "Step into meetings and stages with stillness.",
      bullets: [
        "Stillness protocols for executive gravitas",
        "Approach strangers and senior leaders naturally",
        "Deliver presentations with lasting impact",
      ],
    },
  ];

  const bottomStats = [
    {
      value: "0 Filler Words",
      desc: "Purposeful pauses over nervous filler",
    },
    {
      value: "15+ Micro-Drills",
      desc: "Fast daily self-recording exercises",
    },
    {
      value: "100% Authentic",
      desc: "Calm authority without fake extroversion",
    },
  ];

  return (
    <section id="method" className="py-14 sm:py-20 bg-[#FBF6F4] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Header */}
        <h2 className="max-w-[900px] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1F1E1E] leading-[1.15]">
          What your 30 days will look like
        </h2>

        <p className="mt-3 max-w-[700px] text-sm sm:text-base text-[#5D3C23] font-normal leading-relaxed">
          Daily micro-drills and repeatable frameworks to rewire how you formulate thoughts and speak.
        </p>

        {/* 4 Dark Cards */}
        <div className="w-full mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 text-left">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-7 rounded-2xl bg-[#0D0906] text-white flex flex-col justify-between shadow-lg"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-gold-400 uppercase block mb-1.5">
                  PHASE 0{idx + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {card.subtitle}
                </p>

                <div className="mt-4 space-y-2">
                  {card.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          <Link
            href={checkoutUrl}
            className="w-[280px] sm:w-[320px] h-[60px] inline-flex items-center justify-center rounded-full bg-[#0D0906] hover:opacity-85 text-white font-semibold text-base tracking-wide transition-all duration-300 active:scale-[0.98] shadow-sm"
          >
            GET INSTANT ACCESS
          </Link>
        </div>

        {/* 3 Stats Strip */}
        <div className="w-full mt-10 sm:mt-12 pt-8 border-t border-[#E5E7EB]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-left">
            {bottomStats.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              >
                <span className="text-lg sm:text-xl font-bold text-[#57423A] tracking-tight block">
                  {item.value}
                </span>
                <span className="text-xs text-[#4B5563] leading-relaxed mt-0.5 block">
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

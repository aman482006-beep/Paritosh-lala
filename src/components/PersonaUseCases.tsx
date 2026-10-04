"use client";

import React from "react";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

export default function PersonaUseCases() {
  const personas = [
    {
      title: "“I’m an engineer: I want to speak in reviews without panic”",
      quote: "“I learned speech mechanics instead of faking extroversion. Downward inflection and pauses changed everything.”",
      name: "Makenzie Conklin",
      handle: "@makenzie_dev",
      role: "Systems Engineer",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      title: "“I’m a founder: I want to pitch investors and lead all-hands”",
      quote: "“The 3-act hook and conversational tennis framework stopped my nervous over-explaining and secured our seed round.”",
      name: "Kate Tan",
      handle: "@hellokatetan",
      role: "Fintech Co-Founder",
      image: assetPath("/images/testimonial-02.webp"),
    },
    {
      title: "“I’m a creator: I want to speak on camera without freezing”",
      quote: "“The Record & Review system doubled my watch-time in 4 weeks. I no longer second-guess every single sentence.”",
      name: "Hannah Explains",
      handle: "@hannahexplainsit",
      role: "Educational Creator",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      title: "“I’m a consultant: I want clients to respect my advice”",
      quote: "“Stillness and vocal grounding completely transformed how senior clients receive my strategic recommendations.”",
      name: "Michael Chen",
      handle: "@coachmichael",
      role: "Strategy & Advisory",
      image: assetPath("/images/testimonial-02.webp"),
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F1F1F1] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[850px] mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1F1E1E] leading-[1.15]">
            “I’m a professional, I want to communicate ideas that move people”
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#5D3C23] font-normal leading-relaxed">
            Engineers, founders, creators, and consultants turning quiet thinking into unmistakable authority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {personas.map((p, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#FBF6F4] border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[#1F1E1E] tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal italic">
                  {p.quote}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-neutral-200 border border-neutral-300 shrink-0">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1F1E1E] leading-tight">
                    {p.name}
                  </h4>
                  <p className="text-[11px] text-[#6B7280] font-mono">
                    {p.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

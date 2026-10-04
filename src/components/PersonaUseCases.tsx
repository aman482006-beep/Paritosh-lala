"use client";

import React from "react";
import Image from "next/image";

export default function PersonaUseCases() {
  const personas = [
    {
      title: "“I’m an engineer, I want to speak up in technical reviews without anxiety”",
      quote: "“The distinction between changing your personality and acquiring speech mechanics was a revelation. I speak with structured downward inflection and strategic pauses now.”",
      name: "Makenzie Conklin",
      handle: "@makenzie_dev",
      role: "Senior Systems Engineer · 51k followers",
      image: "/images/testimonial-01.webp",
    },
    {
      title: "“I’m a founder, I want to pitch investors and lead all-hands meetings”",
      quote: "“I used to over-explain when nervous. Introvert To Icon gave me the 3-act narrative hook and conversational tennis framework that secured our seed round.”",
      name: "Kate Tan",
      handle: "@hellokatetan",
      role: "Fintech Co-Founder · 30K followers",
      image: "/images/testimonial-02.webp",
    },
    {
      title: "“I’m a creator, I want to speak naturally on camera without freezing”",
      quote: "“The Record & Review framework changed the way I shoot videos. In just 4 weeks, my audience watch-time doubled and I stopped second-guessing every word.”",
      name: "Hannah Explains",
      handle: "@hannahexplainsit",
      role: "Educational Creator · 75.7K followers",
      image: "/images/testimonial-01.webp",
    },
    {
      title: "“I’m a consultant, I want clients to respect my recommendations”",
      quote: "“I wish I signed up sooner. Paritosh’s frameworks for room acoustics, physical stillness, and vocal grounding completely transformed my client engagements.”",
      name: "Michael Chen",
      handle: "@coachmichael",
      role: "Strategy & Advisory · 65.8k followers",
      image: "/images/testimonial-02.webp",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F1F1F1] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[850px] mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.08] uppercase">
            “I’m a professional, I want to communicate ideas that move people to action”
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#5D3C23] font-normal leading-relaxed">
            Engineers, founders, creators, consultants, and leaders have joined Introvert To Icon to turn quiet thinking into unmistakable authority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {personas.map((p, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FBF6F4] border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#1F1E1E] leading-snug tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal italic">
                  {p.quote}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center gap-3.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-200 border border-neutral-300 shrink-0">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1F1E1E]">
                    {p.name}
                  </h4>
                  <p className="text-[11px] font-mono text-[#6B7280]">
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

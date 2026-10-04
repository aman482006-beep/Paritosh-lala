"use client";

import React from "react";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

export default function HowIsThisDifferentSection() {
  const reviewsDifferent = [
    {
      quote: "“I used to overthink every sentence. Within two weeks of 2-minute drills, I was volunteering to lead team demos.”",
      name: "Alexandria Maria",
      role: "Engineering Lead",
      handle: "@alexandria.m",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“Most courses teach you to be loud. Paritosh teaches calm stillness and downward inflection. My presence completely transformed.”",
      name: "Peter Barry",
      role: "Product Manager",
      handle: "@peterbarry_pm",
      image: assetPath("/images/testimonial-02.webp"),
    },
    {
      quote: "“Muting my practice video showed me I was fidgeting. Fixing that single habit made me look twice as authoritative immediately.”",
      name: "Ana Mitchell",
      role: "Design Director",
      handle: "@anamitchell",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“The 3-Act storytelling framework makes team catchups, meeting hooks, and dinner conversations feel effortless.”",
      name: "Matyas Speakeasy",
      role: "Founder & Creator",
      handle: "@matyas.speaks",
      image: assetPath("/images/testimonial-02.webp"),
    },
  ];

  const reviewsBusy = [
    {
      quote: "“I work 50+ hours a week. Doing one 2-minute drill in the morning gave me clear focus for all my meetings that day.”",
      name: "Alyssa Bonner",
      role: "Management Consultant",
      handle: "@alyssabonner",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“Bite-sized and zero fluff. You absorb a framework in 10 minutes and use it immediately in real conversations.”",
      name: "Kricket Speegle",
      role: "Senior Director of Ops",
      handle: "@kricketspeegle",
      image: assetPath("/images/testimonial-02.webp"),
    },
    {
      quote: "“Even with a full-time job and family, 15 minutes a day was enough. My manager noticed the change within 3 weeks.”",
      name: "Shalini Mehra",
      role: "Senior Finance Analyst",
      handle: "@shalini_mehra",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“2-minute phone recordings take almost no time, but the compounding returns on confidence are massive.”",
      name: "Nicole Klutse",
      role: "Tech Lead & Speaker",
      handle: "@nicoleklutse",
      image: assetPath("/images/testimonial-02.webp"),
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F1F1F1] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: How is this different? */}
        <div className="max-w-[850px] mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1F1E1E] leading-[1.15]">
            “I’ve taken other courses — how is this different?”
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5D3C23] font-normal leading-relaxed">
            Most programs teach theoretical advice on 'being extroverted'. Introvert To Icon gives you objective speech mechanics.
          </p>
        </div>

        {/* 4 Cards Grid for Part 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-14 sm:mb-18">
          {reviewsDifferent.map((r, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#FBF6F4] border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-[#1F1E1E] leading-relaxed font-normal italic">
                {r.quote}
              </p>

              <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-neutral-200 border border-neutral-300 shrink-0">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1F1E1E] leading-tight">
                    {r.name}
                  </h4>
                  <p className="text-[11px] text-[#6B7280] font-mono">
                    {r.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Busy schedule? */}
        <div className="max-w-[850px] mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1F1E1E] leading-[1.15]">
            “Will this work if I have a busy full-time schedule?”
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5D3C23] font-normal leading-relaxed">
            Yes. The entire system is built around 2-minute daily micro-drills you do on your own phone.
          </p>
        </div>

        {/* 4 Cards Grid for Part 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {reviewsBusy.map((r, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#FBF6F4] border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-[#1F1E1E] leading-relaxed font-normal italic">
                {r.quote}
              </p>

              <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-neutral-200 border border-neutral-300 shrink-0">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1F1E1E] leading-tight">
                    {r.name}
                  </h4>
                  <p className="text-[11px] text-[#6B7280] font-mono">
                    {r.role}
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

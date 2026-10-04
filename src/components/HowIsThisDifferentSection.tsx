"use client";

import React from "react";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

export default function HowIsThisDifferentSection() {
  const reviewsDifferent = [
    {
      quote: "“The level of practical support and structured feedback is unparalleled. I used to overthink every sentence before speaking. Within two weeks of doing the 2-minute drills, I was volunteering to lead project demos.”",
      name: "Alexandria Maria",
      role: "Engineering Lead",
      handle: "@alexandria.m",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“Most public speaking courses teach you to be loud and fake an extroverted personality. Paritosh teaches you to speak with calm stillness and downward inflection. You leave this course with your presence completely transformed.”",
      name: "Peter Barry",
      role: "Product Manager",
      handle: "@peterbarry_pm",
      image: assetPath("/images/testimonial-02.webp"),
    },
    {
      quote: "“The Record & Review framework changed everything. Muting my practice video showed me I was swaying and fidgeting. Fixing that single habit made me look twice as authoritative immediately.”",
      name: "Ana Mitchell",
      role: "Design Director",
      handle: "@anamitchell",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“The best money I have ever spent on personal growth. The 3-Act storytelling framework makes dinner conversations, team catchups, and presentation hooks feel completely natural.”",
      name: "Matyas Speakeasy",
      role: "Founder & Creator",
      handle: "@matyas.speaks",
      image: assetPath("/images/testimonial-02.webp"),
    },
  ];

  const reviewsBusy = [
    {
      quote: "“Within the first week alone, I got my money's worth of investment. I work 50+ hours a week, and doing just one 3-minute drill in the morning gave me clear focus for all my meetings that day.”",
      name: "Alyssa Bonner",
      role: "Management Consultant",
      handle: "@alyssabonner",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“Introvert To Icon gave me so much clarity and focus. The self-paced modules are bite-sized, direct, and zero fluff. You can absorb a framework in 10 minutes and use it immediately.”",
      name: "Kricket Speegle",
      role: "Senior Director of Ops",
      handle: "@kricketspeegle",
      image: assetPath("/images/testimonial-02.webp"),
    },
    {
      quote: "“Even with a full-time job and a busy family schedule, I managed to complete the core drills in 15 minutes a day. My manager commented on my improved clarity within 3 weeks.”",
      name: "Shalini Mehra",
      role: "Senior Finance Analyst",
      handle: "@shalini_mehra",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“I got the exact blueprints I needed without any wasted theory. The 2-minute phone recordings take almost no time, but the compounding returns on your confidence are massive.”",
      name: "Nicole Klutse",
      role: "Tech Lead & Speaker",
      handle: "@nicoleklutse",
      image: assetPath("/images/testimonial-02.webp"),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F1F1F1] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: How is this different? */}
        <div className="max-w-[850px] mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1E1E] leading-[1.12]">
            “I’ve taken other courses — how is this different?”
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5D3C23] font-normal leading-relaxed">
            You may have read books or watched communication tips online, but Introvert To Icon is a technical training laboratory built around deliberate, repeatable speaking mechanics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {reviewsDifferent.map((r, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FBF6F4] border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-[#1F1E1E] leading-relaxed font-normal italic">
                {r.quote}
              </p>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center gap-3.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-200 border border-neutral-300 shrink-0">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1F1E1E]">
                    {r.name}
                  </h4>
                  <p className="text-[11px] font-mono text-[#6B7280]">
                    {r.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Will I be able to fit this into my schedule? (Creator College S16 second block) */}
        <div className="max-w-[850px] mb-10 sm:mb-12 pt-8 border-t border-[#E5E7EB]">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1E1E] leading-[1.12]">
            “I’m very busy, will I be able to fit this into my schedule?”
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5D3C23] font-normal leading-relaxed">
            You have a demanding calendar, and we don't expect you to do hours of homework each day. Every lesson and drill is designed to be completed in 10 to 15 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {reviewsBusy.map((r, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FBF6F4] border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-[#1F1E1E] leading-relaxed font-normal italic">
                {r.quote}
              </p>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center gap-3.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-200 border border-neutral-300 shrink-0">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1F1E1E]">
                    {r.name}
                  </h4>
                  <p className="text-[11px] font-mono text-[#6B7280]">
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

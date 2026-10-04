"use client";

import React from "react";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

export default function BeginnerSection() {
  const testimonials = [
    {
      quote: "“If you’re serious about building a confident voice, Introvert To Icon is one of the best investments you will ever make.”",
      name: "Adrienne Arya",
      handle: "@adriennearyaa",
      detail: "Junior Software Engineer",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“I started Introvert To Icon terrified of speaking in team standups, and now I lead client demos every single week without shaking.”",
      name: "Hemish Patel",
      handle: "@hempatel.ui",
      detail: "Lead Product Designer",
      image: assetPath("/images/testimonial-02.webp"),
    },
    {
      quote: "“I started with zero speaking experience, and by the end of 4 weeks I delivered my first company presentation to 80 colleagues.”",
      name: "Charlie Vance",
      handle: "@buildingquietclarity",
      detail: "Operations Manager",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“In 30 days, I went from awkward throat-clearing and rambling to crisp, punchy sentences that keep everyone's attention.”",
      name: "Emily Shindel",
      handle: "@emily_shindel",
      detail: "Content Strategist",
      image: assetPath("/images/testimonial-02.webp"),
    },
    {
      quote: "“I finally feel super aligned with my voice. I don't feel like I have to shout or pretend to be someone else to be respected.”",
      name: "Pele Zach",
      handle: "@pele.zac",
      detail: "Startup Founder",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“Introvert To Icon gave me actionable protocols for breath control, voice projection, and eliminating panic before speaking.”",
      name: "Rosie Puri",
      handle: "@rosie.puri",
      detail: "Consultant",
      image: assetPath("/images/testimonial-02.webp"),
    },
    {
      quote: "“Public speaking felt so lonely and intimidating before. Paritosh makes the entire process feel like an objective craft anyone can learn.”",
      name: "Mayura Sen",
      handle: "@mayurasen",
      detail: "Research Fellow",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“I finally feel like I'm finding my own authentic voice instead of mimicking loud personalities on the internet.”",
      name: "Abhay Sharma",
      handle: "@abhay_speaks",
      detail: "Creative Producer",
      image: assetPath("/images/testimonial-02.webp"),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F1F1F1] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[850px] mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1E1E] leading-[1.12]">
            “I’m a complete introvert and have social anxiety — is this course right for me?”
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5D3C23] font-normal leading-relaxed">
            If you're starting from quiet self-doubt, this is the exact place to build confidence before you step into higher stakes. You don't need to change who you are.
          </p>
        </div>

        {/* 8 Cards Grid matching Creator College Section 10 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#FBF6F4] border border-[#E5E7EB] flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              <p className="text-xs sm:text-sm text-[#1F1E1E] leading-relaxed font-normal italic">
                {item.quote}
              </p>

              <div className="mt-5 pt-3 border-t border-[#E5E7EB] flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-neutral-200 border border-neutral-300 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1F1E1E] leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#6B7280] font-mono">
                    {item.detail}
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

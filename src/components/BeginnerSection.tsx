"use client";

import React from "react";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

export default function BeginnerSection() {
  const testimonials = [
    {
      quote: "“If you want to build a confident voice without shouting, this is the best investment you will ever make.”",
      name: "Adrienne Arya",
      handle: "@adriennearyaa",
      detail: "Software Engineer",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“I was terrified of team standups. Now I lead client demos every week without shaking.”",
      name: "Hemish Patel",
      handle: "@hempatel.ui",
      detail: "Product Designer",
      image: assetPath("/images/testimonial-02.webp"),
    },
    {
      quote: "“Zero speaking experience to delivering an all-hands talk to 80 colleagues in 4 weeks.”",
      name: "Charlie Vance",
      handle: "@buildingquietclarity",
      detail: "Operations Manager",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“In 30 days, I went from rambling to punchy sentences that keep everyone's attention.”",
      name: "Emily Shindel",
      handle: "@emily_shindel",
      detail: "Content Strategist",
      image: assetPath("/images/testimonial-02.webp"),
    },
    {
      quote: "“I don't have to pretend to be someone else to be respected in high-stakes meetings.”",
      name: "Pele Zach",
      handle: "@pele.zac",
      detail: "Startup Founder",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“Actionable protocols for breath control, vocal projection, and eliminating speech panic.”",
      name: "Rosie Puri",
      handle: "@rosie.puri",
      detail: "Consultant",
      image: assetPath("/images/testimonial-02.webp"),
    },
    {
      quote: "“Paritosh turns public speaking into an objective craft that anyone can learn and master.”",
      name: "Mayura Sen",
      handle: "@mayurasen",
      detail: "Research Fellow",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“I found my own authentic voice instead of mimicking loud personalities on the internet.”",
      name: "Abhay Sharma",
      handle: "@abhay_speaks",
      detail: "Creative Producer",
      image: assetPath("/images/testimonial-02.webp"),
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F1F1F1] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-[850px] mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1F1E1E] leading-[1.15]">
            “I’m an introvert with speech anxiety — is this course right for me?”
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5D3C23] font-normal leading-relaxed">
            Yes. This course was built specifically for thinkers who want to command attention without pretending to be extroverts.
          </p>
        </div>

        {/* 8 Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#FBF6F4] border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-[#1F1E1E] leading-relaxed font-normal italic">
                {item.quote}
              </p>

              <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-neutral-200 border border-neutral-300 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#1F1E1E] leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-[#6B7280] font-mono">
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

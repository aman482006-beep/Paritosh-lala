"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { courseData } from "@/content/paritosh";
import { assetPath } from "@/lib/utils";

export default function SpeechAnxietySplitSection() {
  const { checkoutUrl } = courseData;

  const testimonials = [
    {
      quote: "“Eliminated my speaking anxiety and gave me clear structure for executive meetings.”",
      name: "Rohit Malhotra",
      handle: "@rohitm_design",
      role: "Product Designer",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“A clear roadmap for high-stakes meetings and the confidence to hold any room.”",
      name: "Ananya Deshmukh",
      handle: "@ananya_creates",
      role: "Content Strategist",
      image: assetPath("/images/testimonial-02.webp"),
    },
    {
      quote: "“Vocal pauses rewired how I express thoughts. People actually stop and listen now.”",
      name: "Devendra Patel",
      handle: "@devendra.tech",
      role: "Engineering Manager",
      image: assetPath("/images/testimonial-01.webp"),
    },
    {
      quote: "“I was quiet my whole career until I learned Paritosh’s storytelling spine.”",
      name: "Meera Krishnan",
      handle: "@meera.architects",
      role: "Lead Architect",
      image: assetPath("/images/testimonial-02.webp"),
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F1F1F1] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching Creator College Section 6 */}
        <div className="max-w-[850px] mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1F1E1E] leading-[1.15]">
            “I’ve been quiet for years and feel like my ideas stay locked in my head”
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5D3C23] font-normal leading-relaxed">
            Quiet thinkers can build immense presence with clarity, structure, and intentional speech mechanics.
          </p>
        </div>

        {/* 4 Testimonial Cards on #FBF6F4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#FBF6F4] border border-[#E5E7EB] flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              <p className="text-xs sm:text-sm text-[#1F1E1E] leading-relaxed font-normal italic">
                {item.quote}
              </p>

              <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center gap-3">
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
                  <p className="text-[11px] text-[#6B7280] font-mono">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creator College S6 Bottom Box: "What's inside Introvert To Icon?" */}
        <div className="mt-8 sm:mt-10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0D0906] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-mono tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span>OFFICIAL PROGRAM HIGHLIGHTS</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              What's inside Introvert To Icon?
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Practical speech frameworks, thought formulation drills, and narrative structures refined over a decade of public speaking.
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Eliminate anxious voice tremor with diaphragmatic breathwork</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Build a repeatable storytelling spine so words flow effortlessly</span>
              </div>
            </div>

            <div className="mt-5">
              <Link
                href={checkoutUrl}
                className="w-full sm:w-[240px] h-[50px] inline-flex items-center justify-center rounded-full bg-white hover:bg-neutral-100 text-[#0D0906] text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98] shadow-md"
              >
                GET FULL ACCESS
              </Link>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0 flex justify-center">
            <div className="relative w-40 sm:w-52 aspect-square rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-lg">
              <Image
                src={assetPath("/images/introvert-to-icon-cover.webp")}
                alt="Introvert To Icon Cover"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

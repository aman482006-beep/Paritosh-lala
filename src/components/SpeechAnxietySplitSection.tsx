"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { courseData } from "@/content/paritosh";

export default function SpeechAnxietySplitSection() {
  const { checkoutUrl } = courseData;

  const testimonials = [
    {
      quote: "“I was ready to lock in to eliminate my speaking anxiety, speak up in team meetings, and communicate in a clear, persuasive way.”",
      name: "Rohit Malhotra",
      handle: "@rohitm_design",
      role: "Product Designer · 14.2k followers",
      image: "/images/testimonial-01.webp",
    },
    {
      quote: "“Introvert To Icon changed more than just my speaking skills. Now I have a clear roadmap for meetings, my storytelling, and the confidence to hold any room.”",
      name: "Ananya Deshmukh",
      handle: "@ananya_creates",
      role: "Content Strategist · 28.5k followers",
      image: "/images/testimonial-02.webp",
    },
    {
      quote: "“Practicing structured speech drills and vocal pauses completely rewired how I express thoughts. People actually listen when I speak now.”",
      name: "Devendra Patel",
      handle: "@devendra.tech",
      role: "Engineering Manager · 9.4k followers",
      image: "/images/testimonial-01.webp",
    },
    {
      quote: "“I’ve been quiet my entire career, and I’ve never been able to express complex ideas simply until I learned Paritosh’s storytelling spine.”",
      name: "Meera Krishnan",
      handle: "@meera.architects",
      role: "Lead Architect · 18.1k followers",
      image: "/images/testimonial-02.webp",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F1F1F1] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching Creator College Section 6 */}
        <div className="max-w-[850px] mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.08] uppercase">
            “I’ve been quiet for years and feel like my ideas stay locked in my head”
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5D3C23] font-normal leading-relaxed">
            There is a reason why quiet thinkers can build immense presence without changing who they are. It's all about clarity, structure, and intentional speech mechanics.
          </p>
        </div>

        {/* 4 Testimonial Cards on #FBF6F4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FBF6F4] border border-[#E5E7EB] flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              <p className="text-sm sm:text-base text-[#1F1E1E] leading-relaxed font-normal italic">
                {item.quote}
              </p>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-neutral-200 border border-neutral-300 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1F1E1E] leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#6B7280] font-mono">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creator College S6 Bottom Box: "What's inside Introvert To Icon?" */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0D0906] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span>OFFICIAL PROGRAM HIGHLIGHTS</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
              What's inside Introvert To Icon?
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              You get trained in the exact speech frameworks, thought formulation drills, and narrative structures Paritosh Anand refined over a decade of public speaking and content creation.
            </p>

            <div className="mt-5 space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>You'll finally eliminate anxious voice tremor and master diaphragmatic breathing</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>You will build a repeatable storytelling spine so words come out effortlessly</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href={checkoutUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-[#0D0906] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md active:scale-95"
              >
                <span>GET FULL ACCESS</span>
                <ArrowUpRight className="w-4 h-4 text-[#0D0906]" />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0 flex justify-center">
            <div className="relative w-48 sm:w-60 aspect-square rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-lg">
              <Image
                src="/images/introvert-to-icon-cover.webp"
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

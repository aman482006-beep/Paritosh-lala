"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck, Zap } from "lucide-react";
import { courseData } from "@/content/paritosh";
import { assetPath } from "@/lib/utils";

export default function CourseOfferSection() {
  const { offer, checkoutUrl } = courseData;

  const hasVisiblePricing = Boolean(
    offer.coursePrice || offer.discountPrice || offer.originalPrice
  );

  return (
    <section id="offer" className="py-16 sm:py-24 bg-[#FBF6F4] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Creator College Section 18 */}
        <div className="max-w-[850px] mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1E1E] leading-[1.12]">
            It’s time to focus on YOU and invest in your voice
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5D3C23] font-normal leading-relaxed">
            Introvert To Icon is a complete communication laboratory designed to teach you how to formulate thoughts crisply, speak with gravitas, and express who you truly are.
          </p>
        </div>

        {/* Pure White Container Card matching Creator College Section 18 */}
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Details & Feature Checklist */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold text-gold-700 tracking-widest uppercase block mb-2">
                  OFFICIAL ENROLLMENT · INTROVERT TO ICON
                </span>

                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1F1E1E] tracking-tight">
                  {offer.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#6B7280] font-mono">
                  {offer.courseDuration || "Self-Paced Comprehensive System"} • {offer.accessDuration || "Lifetime Portal Access"}
                </p>

                {/* Features */}
                <div className="mt-6 space-y-3.5">
                  {offer.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1F1E1E] text-white">
                        <Check className="w-2.5 h-2.5 text-gold-400" />
                      </div>
                      <p className="text-xs sm:text-sm text-[#374151] font-medium leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value Stack */}
              <div className="mt-8 pt-5 border-t border-[#E5E7EB]">
                <span className="text-[10px] font-mono font-bold text-[#6B7280] uppercase tracking-widest block mb-2.5">
                  WHAT IS INCLUDED IN YOUR ACCESS:
                </span>
                <div className="space-y-2">
                  {offer.valueStack.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-[#F3F4F6] last:border-0"
                    >
                      <span className="font-semibold text-[#1F1E1E]">
                        {item.title}
                      </span>
                      {item.valueString ? (
                        <span className="font-mono text-[#4B5563]">
                          {item.valueString}
                        </span>
                      ) : (
                        <span className="font-mono text-[10px] text-[#4B5563] bg-[#F3F4F6] px-2 py-0.5 rounded">
                          Included
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Checkout Action Box */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#FBF6F4] border border-[#E5E7EB]">
              <div>
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-6 border border-[#E5E7EB] bg-neutral-900 shadow-sm">
                  <Image
                    src={assetPath("/images/introvert-to-icon-cover.webp")}
                    alt="Introvert To Icon official course cover"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="border-b border-[#E5E7EB] pb-5 mb-5">
                  {hasVisiblePricing ? (
                    <div>
                      {offer.originalPrice && (
                        <span className="text-sm font-mono text-[#9CA3AF] line-through mr-2">
                          {offer.originalPrice}
                        </span>
                      )}
                      <span className="text-3xl font-bold text-[#1F1E1E]">
                        {offer.discountPrice || offer.coursePrice}
                      </span>
                      {offer.paymentPlan && (
                        <p className="text-xs font-mono text-[#6B7280] mt-1">
                          {offer.paymentPlan}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div>
                      <span className="text-[10px] font-mono font-bold text-gold-700 tracking-wider uppercase block">
                        ENROLLMENT PORTAL
                      </span>
                      <p className="text-sm sm:text-base font-bold text-[#1F1E1E] mt-1">
                        Current tuition &amp; cohort seat availability shown at checkout
                      </p>
                    </div>
                  )}
                </div>

                <Link
                  href={checkoutUrl}
                  className="w-full h-[58px] inline-flex items-center justify-center rounded-full bg-[#0D0906] hover:opacity-85 text-white font-semibold text-base tracking-wide transition-all duration-300 active:scale-[0.98] shadow-sm"
                >
                  GET INSTANT ACCESS
                </Link>

                <p className="mt-3 text-center text-xs font-mono text-[#6B7280]">
                  Immediate enrollment via the official learning platform
                </p>

                {/* Creator College Dual Trust Badges */}
                <div className="mt-6 pt-5 border-t border-[#E5E7EB] grid grid-cols-2 gap-3 text-left">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#1F1E1E] leading-tight">
                        100% Safe Purchase
                      </p>
                      <p className="text-[10px] text-[#6B7280] font-mono">
                        SSL encrypted checkout
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-gold-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#1F1E1E] leading-tight">
                        Instant Access
                      </p>
                      <p className="text-[10px] text-[#6B7280] font-mono">
                        Immediate login delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

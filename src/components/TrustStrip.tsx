"use client";

import React from "react";
import { courseData } from "@/content/paritosh";

export default function TrustStrip() {
  const { stats } = courseData;

  return (
    <section className="py-6 sm:py-8 bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-0.5 duration-200"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1F1E1E] leading-none">
                {stat.value}
              </span>
              <div className="mt-3">
                <span className="text-xs sm:text-sm font-bold text-[#1F1E1E] tracking-tight block">
                  {stat.label}
                </span>
                {stat.detail && (
                  <span className="text-[11px] text-[#6B7280] font-normal block mt-0.5">
                    {stat.detail}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

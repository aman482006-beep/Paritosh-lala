"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { courseData } from "@/content/paritosh";

export default function FAQSection() {
  const { faqs } = courseData;
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-1": true,
    "faq-2": true,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F1F1F1] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Creator College Section 19 */}
        <div className="max-w-[850px] mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1E1E] leading-[1.12]">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5D3C23] font-normal leading-relaxed">
            Everything you need to know about Introvert To Icon, the curriculum, the practice drills, and enrollment.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.items.map((faq) => {
            const isOpen = Boolean(openIds[faq.id]);

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className="text-sm sm:text-base md:text-lg font-semibold text-[#1F1E1E] tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6] text-[#1F1E1E] transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#0D0906] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm md:text-base text-[#4B5563] leading-relaxed border-t border-[#F3F4F6] font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { courseData } from "@/content/paritosh";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { checkoutUrl, brand } = courseData;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 380);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-3.5 bg-[#F1F1EF]/95 backdrop-blur-md border-t border-[#E5E7EB] shadow-[0_-4px_16px_rgba(0,0,0,0.03)] animate-slideUp">
      <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs font-semibold tracking-tight text-[#1F1E1E] leading-tight">
            {brand.name}
          </span>
          <span className="text-[10px] font-mono text-[#6B7280]">
            By {brand.instructor}
          </span>
        </div>

        <Link
          href={checkoutUrl}
          className="h-[42px] px-5 inline-flex items-center justify-center rounded-full bg-[#0D0906] hover:opacity-85 text-white text-xs font-semibold tracking-wider transition-all duration-300 active:scale-[0.98] shadow-sm"
        >
          GET ACCESS
        </Link>
      </div>
    </div>
  );
}

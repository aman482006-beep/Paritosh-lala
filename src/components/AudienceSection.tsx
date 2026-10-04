"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function AudienceSection() {
  const notForPoints = [
    "All you want is cheap hacks to fake an aggressive, loud personality.",
    "You expect instant charisma overnight without ever doing a 2-minute practice recording.",
    "You want a passive theoretical lecture rather than a hands-on speech laboratory.",
    "You can't accept objective diagnostic feedback on your vocal pace and posture.",
    "You're not willing to commit 15 minutes a day to calibrate your speaking mechanics.",
  ];

  const forPoints = [
    "You're ready to put in structured practice and learn from battle-tested frameworks.",
    "You want to communicate ideas with composure, authority, and emotional resonance.",
    "You understand that communication is an objective skill that compounds over time.",
    "You're ready to tell compelling stories in meetings, interviews, and presentations.",
    "You want to express your authentic personality without ever shouting or faking extroversion.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FBF6F4] text-[#1F1E1E]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Creator College Section 15 */}
        <div className="max-w-[850px] mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-[-0.035em] text-[#1F1E1E] leading-[1.08] uppercase">
            2026 is the year you finally speak with clarity and confidence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5D3C23] font-normal leading-relaxed">
            We empower quiet thinkers, engineers, creators, and professionals to express their thoughts, tell better stories, and speak with natural gravitas.
          </p>
        </div>

        {/* Dual Cards: This is not for you if... vs This is for you if... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* NOT FOR YOU IF */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-rose-200">
                <span>NOT FOR YOU IF...</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#1F1E1E] tracking-tight mb-6">
                This program is not a fit if:
              </h3>

              <div className="space-y-4">
                {notForPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F3F4F6] text-[11px] font-mono text-[#9CA3AF]">
              Introvert To Icon is a technical training system, not a motivational lecture.
            </div>
          </div>

          {/* FOR YOU IF */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-emerald-200">
                <span>PERFECT FIT IF...</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#1F1E1E] tracking-tight mb-6">
                This program is built for you if:
              </h3>

              <div className="space-y-4">
                {forPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#1F1E1E] leading-relaxed font-medium">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F3F4F6] text-[11px] font-mono text-[#9CA3AF]">
              Core commitment: Willingness to record 2-minute drills on your phone.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

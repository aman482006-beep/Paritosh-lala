"use client";

import React from "react";
import { ArrowRight, Check, Video, VolumeX, Volume2, RefreshCw } from "lucide-react";
import { courseData } from "@/content/paritosh";

const stepIcons: Record<number, React.ReactNode> = {
  1: <Video className="w-4 h-4 text-gold-400" />,
  2: <VolumeX className="w-4 h-4 text-gold-400" />,
  3: <Volume2 className="w-4 h-4 text-gold-400" />,
  4: <RefreshCw className="w-4 h-4 text-gold-400" />,
};

export default function MethodSection() {
  const { method } = courseData;

  return (
    <section id="method" className="py-16 sm:py-24 bg-[#F1F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#121316] text-white p-6 sm:p-10 lg:p-14 border border-neutral-800 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-mono font-medium tracking-widest text-gold-400 uppercase mb-4">
              <span>{method.eyebrow}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-white leading-[1.05]">
              {method.name}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gold-300 font-mono font-medium">
              {method.tagline}
            </p>

            <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl font-normal">
              {method.subheadline}
            </p>
          </div>

          {/* Iteration Flow Bar */}
          <div className="mb-10 sm:mb-12 p-4 sm:p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
            <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-3">
              THE ITERATION CYCLE
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {method.flow.map((item, idx) => (
                <React.Fragment key={item}>
                  <span className="px-3 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-xs font-mono font-bold text-white tracking-wider">
                    {item}
                  </span>
                  {idx < method.flow.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 4 Method Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {method.steps.map((s) => (
              <div
                key={s.step}
                className="p-6 sm:p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800 border border-neutral-700">
                        {stepIcons[s.step]}
                      </div>
                      <span className="text-xs font-mono font-bold text-gold-400 tracking-wider">
                        {s.label}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500">
                      PHASE 0{s.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white tracking-tight">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {s.action}
                  </p>

                  <div className="mt-5 pt-4 border-t border-neutral-800">
                    <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                      WHAT TO AUDIT:
                    </span>
                    <div className="space-y-1.5">
                      {s.diagnosticQuestions.map((q, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-gold-400 mt-0.5 shrink-0" />
                          <span>{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-800/80 text-[11px] font-mono text-gold-400">
                  → {s.keyOutcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

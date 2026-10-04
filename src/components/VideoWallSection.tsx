"use client";

import React from "react";
import VideoEmbed from "./VideoEmbed";

export default function VideoWallSection() {
  const videoStories = [
    {
      title: "“I used to freeze in team meetings, now I speak with total composure”",
      student: "Software Team Lead · @rohit_systems",
      url: "",
    },
    {
      title: "“I eliminated filler words in 2 weeks with the Record & Review lab”",
      student: "MBA Candidate · @ananya_management",
      url: "",
    },
    {
      title: "“I delivered a 20-minute keynote to 200 people without shaking”",
      student: "Design Director · @devendra_design",
      url: "",
    },
    {
      title: "“Clients stopped interrupting me during technical sales presentations”",
      student: "Management Consultant · @meera_consults",
      url: "",
    },
    {
      title: "“I went from awkward dinner silences to telling effortless stories”",
      student: "Creative Producer · @tanvi_creates",
      url: "",
    },
    {
      title: "“I realized I don't have to shout or be an extrovert to command attention”",
      student: "Product Designer · @kunal_ux",
      url: "",
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#44332C] text-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[850px] mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]">
            Hear from past students
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#E1D5CB] font-normal leading-relaxed">
            Watch Paritosh chat with students from previous cohorts as they talk about overcoming speech anxiety, mastering storytelling, and commanding respect.
          </p>
        </div>

        {/* 6 Video Cards Grid matching Creator College Section 17 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {videoStories.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl sm:rounded-3xl bg-[#E1D5CB] p-4 text-[#1F1E1E] flex flex-col justify-between shadow-lg"
            >
              <h3 className="text-sm sm:text-base font-semibold text-[#1F1E1E] tracking-tight leading-snug mb-3">
                {item.title}
              </h3>

              <div className="rounded-xl overflow-hidden bg-neutral-900 border border-black/10">
                <VideoEmbed
                  videoUrl={item.url}
                  title={item.title}
                  aspectRatio="16/9"
                  badgeText="STUDENT INTERVIEW"
                  instructorLabel={item.student}
                  subnote="Video playback slot"
                />
              </div>

              <div className="mt-3 pt-2 text-[11px] font-mono text-[#54482D] font-bold">
                {item.student}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

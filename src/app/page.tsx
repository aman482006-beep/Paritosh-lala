import React from "react";
import CreatorCollegeHero from "@/components/CreatorCollegeHero";
import StatsTickerSection from "@/components/StatsTickerSection";
import StrugglingWithSection from "@/components/StrugglingWithSection";
import CreatorProofCounter from "@/components/CreatorProofCounter";
import SpeechAnxietySplitSection from "@/components/SpeechAnxietySplitSection";
import ProgramOverviewSection from "@/components/ProgramOverviewSection";
import DarkAuthorityBanner from "@/components/DarkAuthorityBanner";
import CurriculumSection from "@/components/CurriculumSection";
import FeaturedCaseStudySection from "@/components/FeaturedCaseStudySection";
import OutcomeWall from "@/components/OutcomeWall";
import AudienceSection from "@/components/AudienceSection";
import VideoWallSection from "@/components/VideoWallSection";
import CourseOfferSection from "@/components/CourseOfferSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F1F1F1]">
      {/* S2: Creator College Hero Stack (Pill, H1, Subtitle, 16:9 Video, Button, Dual #0D0906 Cards) */}
      <CreatorCollegeHero />

      {/* S3: Stats Ticker & Sub-Hero Thesis Statement */}
      <StatsTickerSection />

      {/* S4: Struggle / Pain Points ("We know what you're struggling with...") */}
      <StrugglingWithSection />

      {/* S5: Oversized Metric Proof Counter (250M+ Views, 1.5M+ Community, TEDx) */}
      <CreatorProofCounter />

      {/* S6: Speech Anxiety Testimonial Split + "What's inside" Program Highlight Card */}
      <SpeechAnxietySplitSection />

      {/* S7: Program Overview & Core Enrollment Highlights */}
      <ProgramOverviewSection />

      {/* S8: Authority & High-Stakes Storytelling Dark Banner (#0D0906) */}
      <DarkAuthorityBanner />

      {/* S9: The 10 Core Focus Areas / Curriculum Breakdown */}
      <CurriculumSection />

      {/* S11: Featured Deep-Dive Case Study (Breakthrough Quote + 3 Stat Badges) */}
      <FeaturedCaseStudySection />

      {/* S12: Real Thinkers, Real Transformation Outcome Wall (10 Result Tiles) */}
      <OutcomeWall />

      {/* S15: Audience Expectations (2026 is the year... / Not for you vs For you) */}
      <AudienceSection />

      {/* S17: Dark Video Review Wall ("Hear from past students" on #44332C with #E1D5CB cards) */}
      <VideoWallSection />

      {/* S18: Complete Course Offer Card (Feature checklist, dual safety badges, checkout CTA) */}
      <CourseOfferSection />

      {/* S19: Frequently Asked Questions Accordion */}
      <FAQSection />

      {/* S19.5: Massive Final Editorial Kicker */}
      <FinalCTA />

      {/* S20: Creator College #0D0906 Minimal Footer */}
      <Footer />
    </main>
  );
}

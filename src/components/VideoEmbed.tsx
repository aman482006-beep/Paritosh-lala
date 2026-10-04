"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles } from "lucide-react";
import { extractYouTubeId, cn } from "@/lib/utils";

interface VideoEmbedProps {
  videoUrl?: string | null;
  videoId?: string | null;
  title?: string;
  thumbnail?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
  autoplay?: boolean;
  muted?: boolean;
  badgeText?: string;
  instructorLabel?: string;
  subnote?: string;
  className?: string;
  directEmbed?: boolean;
}

export default function VideoEmbed({
  videoUrl,
  videoId,
  title = "Introvert To Icon — Preview",
  thumbnail,
  aspectRatio = "16/9",
  autoplay = false,
  badgeText = "REPLACE WITH YOUTUBE VIDEO",
  instructorLabel = "Paritosh Anand • Introvert To Icon",
  subnote = "Video preview asset placeholder",
  className,
  directEmbed = false,
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);

  const derivedId = videoId || extractYouTubeId(videoUrl);
  const hasValidVideo = Boolean(derivedId);

  const aspectClass =
    aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : aspectRatio === "1/1"
      ? "aspect-square"
      : "aspect-video";

  if (hasValidVideo && (directEmbed || isPlaying)) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl md:rounded-3xl bg-charcoal-900 border border-charcoal-700/60 shadow-elevated",
          aspectClass,
          className
        )}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${derivedId}?${isPlaying ? "autoplay=1&" : ""}rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => {
        if (hasValidVideo) {
          setIsPlaying(true);
        }
      }}
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl md:rounded-3xl bg-charcoal-900 border border-charcoal-700/60 shadow-elevated transition-all duration-300",
        hasValidVideo ? "cursor-pointer hover:border-gold-500/50" : "cursor-default",
        aspectClass,
        className
      )}
    >
      {/* Background Graphic / Thumbnail */}
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={title}
          fill
          priority={false}
          className="object-cover object-center opacity-70 transition-transform duration-700 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1C23] via-[#101114] to-[#0A0A0C]">
          {/* Subtle noise/grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Warm spotlight glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      )}

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

      {/* Inner subtle frame border */}
      <div className="absolute inset-3 md:inset-4 rounded-xl md:rounded-2xl border border-white/10 pointer-events-none" />

      {/* Center play button / interactive badge */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
        <div className="relative mb-4 flex items-center justify-center">
          <div className="absolute -inset-3 rounded-full bg-gold-500/20 blur-md transition-all duration-300 group-hover:bg-gold-500/40 group-hover:scale-110" />
          <div className="relative flex h-14 w-14 md:h-18 md:w-18 items-center justify-center rounded-full bg-charcoal-850/90 border border-gold-500/50 text-gold-300 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 group-hover:text-gold-200 group-hover:border-gold-400">
            <Play className="h-6 w-6 md:h-7 md:w-7 fill-current ml-0.5" />
          </div>
        </div>

        {/* Badge & Meta */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono tracking-widest text-gold-300 uppercase mb-2 backdrop-blur-sm">
          <Sparkles className="w-3 h-3 text-gold-400" />
          {hasValidVideo ? "CLICK TO PLAY PREVIEW" : badgeText}
        </div>

        <h4 className="text-base md:text-xl font-bold text-white tracking-tight max-w-md line-clamp-2 drop-shadow-sm">
          {title}
        </h4>

        <p className="mt-1 text-xs md:text-sm text-gray-300/80 font-medium">
          {instructorLabel}
        </p>

        {!hasValidVideo && (
          <p className="mt-3 text-[11px] text-gray-400/80 font-mono tracking-wide">
            [ {subnote} ]
          </p>
        )}
      </div>

      {/* Subtle bottom label */}
      <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between text-[11px] text-gray-400 font-mono">
        <span>INTROVERT TO ICON</span>
        <span>16 : 9 4K READY</span>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import { courseData } from "@/content/paritosh";

import BrandLogo from "./BrandLogo";

export default function Footer() {
  const { brand, socials, legalLinks, checkoutUrl } = courseData;

  const exploreLinks = [
    { label: "Why Paritosh", href: "#why-paritosh" },
    { label: "The Problem", href: "#struggling" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "The Method", href: "#method" },
    { label: "FAQ", href: "#faq" },
  ];

  const legalItems = [
    { label: "Privacy Policy", href: legalLinks.privacy },
    { label: "Terms & Conditions", href: legalLinks.terms },
    { label: "Refund Policy", href: legalLinks.refund },
  ];

  return (
    <footer className="bg-[#0D0906] text-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-28 sm:pb-32 xl:pb-16">
        {/* Top: wordmark + two plain link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              href="/"
              aria-label="Introvert To Icon by Paritosh Anand"
              className="inline-flex"
            >
              <BrandLogo variant="dark" size="md" />
            </Link>

            <p className="mt-5 max-w-sm text-sm sm:text-[15px] leading-relaxed text-neutral-400 font-normal">
              {brand.subtagline}
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paritosh Anand on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paritosh Anand on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paritosh Anand on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav className="md:col-span-3" aria-label="Explore">
            <ul className="space-y-5 sm:space-y-6 text-[16px] sm:text-[17px] leading-none text-neutral-200">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav className="sm:text-right md:text-left md:col-span-4" aria-label="Legal">
            <ul className="space-y-5 sm:space-y-6 text-[16px] sm:text-[17px] leading-none text-neutral-200">
              {legalItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-gold-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom: copyright + official portal lockup */}
        <div className="mt-14 sm:mt-20 flex flex-col-reverse sm:flex-row items-start sm:items-end justify-between gap-6">
          <p className="text-xs font-mono text-neutral-500">
            © {new Date().getFullYear()} Paritosh Anand. All rights reserved.
          </p>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-left sm:text-right"
          >
            <span className="block text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-500 group-hover:text-neutral-400 transition-colors">
              Official portal
            </span>
            <span className="mt-1.5 block text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
              learn.paritoshanand.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

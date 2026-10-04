"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Instagram, Youtube, Linkedin } from "lucide-react";
import { courseData } from "@/content/paritosh";

export default function Footer() {
  const { brand, socials, legalLinks, checkoutUrl } = courseData;

  return (
    <footer className="bg-[#0D0906] text-white border-t border-neutral-800 pt-14 sm:pt-16 pb-28 sm:pb-32 xl:pb-16">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-10 sm:pb-14 border-b border-neutral-800">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#0D0906] font-bold text-xs tracking-wider">
                  PA
                </span>
                <span className="text-sm font-black tracking-tight text-white">
                  {brand.name}
                </span>
              </div>

              <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-normal">
                {brand.subtagline}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paritosh Anand on Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors border border-neutral-800"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              <a
                href={socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paritosh Anand on YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors border border-neutral-800"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paritosh Anand on LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors border border-neutral-800"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs font-mono">
            <div>
              <span className="font-bold text-neutral-300 uppercase tracking-widest block mb-3">
                EXPLORE
              </span>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <a href="#why-paritosh" className="hover:text-white transition-colors">
                    Why Paritosh
                  </a>
                </li>
                <li>
                  <a href="#struggling" className="hover:text-white transition-colors">
                    The Problem
                  </a>
                </li>
                <li>
                  <a href="#curriculum" className="hover:text-white transition-colors">
                    Curriculum
                  </a>
                </li>
                <li>
                  <a href="#method" className="hover:text-white transition-colors">
                    The Method
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-bold text-neutral-300 uppercase tracking-widest block mb-3">
                CONNECT
              </span>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                  </a>
                </li>
                <li>
                  <a
                    href={socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>YouTube</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                  </a>
                </li>
                <li>
                  <a
                    href={socials.introvertToIconInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>@introverttoicon</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                  </a>
                </li>
                <li>
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Checkout direct block */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-gold-400 uppercase tracking-widest block mb-1.5">
                OFFICIAL PORTAL
              </span>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4 font-normal">
                Secure checkout and portal access provided at learn.paritoshanand.com.
              </p>
            </div>

            <Link
              href={checkoutUrl}
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-white hover:bg-neutral-100 text-[#0D0906] font-bold text-xs tracking-wider transition-colors shadow-sm"
            >
              <span>GO TO CHECKOUT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0D0906]" />
            </Link>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} Paritosh Anand. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <Link href={legalLinks.privacy} className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href={legalLinks.terms} className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href={legalLinks.refund} className="hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { courseData } from "@/content/paritosh";

import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Why Paritosh", href: "#why-paritosh" },
    { label: "The Problem", href: "#problem" },
    { label: "What You'll Learn", href: "#curriculum" },
    { label: "The Method", href: "#method" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F1F1EF]/90 backdrop-blur-md border-b border-[#E5E7EB] py-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
            : "bg-transparent py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo Component */}
          <Link
            href="/"
            aria-label="Introvert To Icon by Paritosh Anand"
            className="flex items-center gap-2 transition-opacity hover:opacity-85 py-1"
          >
            <BrandLogo variant="light" size="sm" />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium tracking-wide text-[#4B5563] hover:text-[#1F1E1E] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              href={courseData.checkoutUrl}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0D0906] hover:opacity-85 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98]"
            >
              <span>GET ACCESS</span>
            </Link>

            {/* Mobile / Tablet Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="xl:hidden p-2 rounded-lg text-[#1F1E1E] hover:bg-black/5 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile & Tablet Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-[#F1F1EF]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB]">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <BrandLogo variant="light" size="sm" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#1F1E1E] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 my-auto py-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F1E1E] hover:text-[#5D3C23] transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-[#9CA3AF]" />
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#E5E7EB] flex flex-col gap-3">
            <Link
              href={courseData.checkoutUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full h-[60px] rounded-full bg-[#0D0906] hover:opacity-85 text-white font-semibold text-base transition-all duration-300 active:scale-[0.98]"
            >
              <span>GET INSTANT ACCESS</span>
            </Link>
            <p className="text-center text-xs font-mono text-[#6B7280]">
              Official Introvert To Icon checkout portal
            </p>
          </div>
        </div>
      )}
    </>
  );
}

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Introvert To Icon — Paritosh Anand",
  description: "Privacy policy and data handling information for Introvert To Icon.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFA] text-charcoal-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-charcoal-600 hover:text-charcoal-950 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </Link>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-charcoal-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-xs font-mono text-charcoal-500 mb-8">
          Last Updated: March 2026
        </p>

        <div className="space-y-6 text-sm text-charcoal-700 leading-relaxed font-normal">
          <section>
            <h2 className="text-lg font-bold text-charcoal-900 mb-2">
              1. Overview
            </h2>
            <p>
              This Privacy Policy explains how information is collected, used, and protected when you visit this website or enroll in Introvert To Icon by Paritosh Anand. We respect your privacy and are committed to safeguarding any personal information you provide.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal-900 mb-2">
              2. Information Collected
            </h2>
            <p>
              When you interact with the course enrollment checkout hosted at learn.paritoshanand.com, certain details such as your name, email address, and billing information are collected securely by the payment gateway and course hosting platform to create your account and grant access to the video modules.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal-900 mb-2">
              3. Use of Information
            </h2>
            <p>
              Your contact details are used solely to deliver course materials, send important updates regarding your account or course access, and provide customer support. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal-900 mb-2">
              4. Third-Party Services
            </h2>
            <p>
              Payments and portal hosting are processed by certified third-party providers adhering to strict industry data security standards. Please refer to the specific checkout portal terms for detailed processor disclosures.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal-900 mb-2">
              5. Contact
            </h2>
            <p>
              For any questions regarding your data or privacy, please reach out through the official support channels provided at checkout or via Paritosh Anand's official website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

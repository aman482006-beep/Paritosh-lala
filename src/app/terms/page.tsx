import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Introvert To Icon — Paritosh Anand",
  description: "Terms and conditions for Introvert To Icon course enrollment.",
};

export default function TermsPage() {
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
          Terms &amp; Conditions
        </h1>

        <p className="text-xs font-mono text-charcoal-500 mb-8">
          Last Updated: March 2026
        </p>

        <div className="space-y-6 text-sm text-charcoal-700 leading-relaxed font-normal">
          <section>
            <h2 className="text-lg font-bold text-charcoal-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website or enrolling in Introvert To Icon, you agree to comply with and be bound by these Terms and Conditions as well as the terms presented at checkout on learn.paritoshanand.com.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal-900 mb-2">
              2. Intellectual Property
            </h2>
            <p>
              All video lessons, audio training drills, frameworks (including The Record &amp; Review Method), written templates, and downloadable resources are the copyrighted intellectual property of Paritosh Anand. You may not distribute, reproduce, resell, or share your account credentials with any third party.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal-900 mb-2">
              3. Course Access &amp; Delivery
            </h2>
            <p>
              Upon successful payment through the authorized checkout portal, you will receive digital access to the course content for personal educational use. Course access duration is defined by the enrollment tier selected during checkout.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal-900 mb-2">
              4. Disclaimer of Guarantees
            </h2>
            <p>
              Introvert To Icon provides proven communication and storytelling training; however, individual outcomes depend heavily on personal practice, dedication, and background. No specific financial, social, or commercial results are guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal-900 mb-2">
              5. Updates to Terms
            </h2>
            <p>
              These terms may be updated periodically to reflect changes in course structure or platform requirements.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

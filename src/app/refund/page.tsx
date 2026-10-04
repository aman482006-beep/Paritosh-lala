import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { courseData } from "@/content/paritosh";

export const metadata = {
  title: "Refund Policy | Introvert To Icon — Paritosh Anand",
  description: "Official refund policy and enrollment terms for Introvert To Icon.",
};

export default function RefundPage() {
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

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-charcoal-900 mb-6">
          Refund Policy
        </h1>

        <p className="text-xs font-mono text-charcoal-500 mb-8">
          Last Updated: March 2026
        </p>

        <div className="space-y-6 text-sm text-charcoal-700 leading-relaxed font-normal">
          <section>
            <h2 className="text-lg font-bold text-charcoal-900 mb-2">
              1. Official Checkout Terms
            </h2>
            <p>
              Introvert To Icon digital enrollment is processed via the official learning management portal. The exact refund policy, trial window (if applicable), and cancellation conditions are specified on the final checkout order page prior to payment confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal-900 mb-2">
              2. Digital Content Access
            </h2>
            <p>
              Because course enrollments grant immediate access to proprietary curriculum lessons, video exercises, and downloadable frameworks, refund requests are evaluated according to the explicit terms established on the official checkout portal.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal-900 mb-2">
              3. Initiating a Request
            </h2>
            <p>
              If you have any billing questions, encounter duplicate charges, or require assistance with course access, please contact student support using the email address and contact link provided in your enrollment confirmation receipt.
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-[#E5E2D5]">
            <Link
              href={courseData.checkoutUrl}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-charcoal-900 text-white font-bold text-xs tracking-wide shadow-subtle hover:bg-black transition-colors"
            >
              <span>VIEW OFFICIAL CHECKOUT DETAILS</span>
              <ArrowUpRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

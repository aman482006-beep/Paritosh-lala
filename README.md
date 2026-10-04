# Introvert To Icon — Paritosh Anand Course Sales Platform

A production-quality course sales landing page built for **Paritosh Anand** and his flagship communication program **INTROVERT TO ICON**.

Architecturally modeled after the conversion flow, editorial typography, and high-end visual rhythm of **Creator College**, customized specifically for Paritosh Anand's brand, voice, and methodology.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies (already completed)
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (verified)
npm run build

# 4. Start production server
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Central Content Configuration

All marketing copy, pricing, video embeds, syllabus modules, statistics, testimonials, and links live in a single centralized configuration file:

👉 **[`src/content/paritosh.ts`](./src/content/paritosh.ts)**

You can update any of the following without modifying any UI component code:

| Setting | Location in `paritosh.ts` | Notes |
| :--- | :--- | :--- |
| **Checkout URL** | `checkoutUrl` | Pre-configured to official checkout |
| **Hero Headlines** | `hero.titleLines` | 3-line editorial title |
| **Course Video** | `hero.videoUrl` / `hero.videoId` | Insert YouTube URL or leave empty for dark placeholder |
| **Statistics** | `stats` | Follower counts, speaking credentials |
| **Curriculum** | `curriculum.modules` | 10 focus areas with expandable drills |
| **The Method** | `method.steps` | The Record & Review 4-step framework |
| **Masterclass Previews** | `masterclass.videos` | 3 YouTube preview cards |
| **Testimonials** | `testimonials.items` | Scalable student feedback slots |
| **Video Wall** | `testimonials.videos` | Configurable video review slots |
| **Tuition / Pricing** | `offer.coursePrice` | Set to `null` to hide numbers or string like `"₹4,999"` |
| **FAQ** | `faqs.items` | 15 comprehensive questions & answers |
| **Social Links** | `socials` | Instagram, YouTube, LinkedIn handles |

---

## 🎯 Architectural Highlights

- **Next.js 15 (App Router)** + **React 19** + **TypeScript**
- **Tailwind CSS** with editorial typography (warm ivory background `#FBFBFA`, charcoal `#0D0E11`, restrained gold accents `#C69C2B`)
- **Responsive 16:9 Video Embed System**: Supports YouTube privacy-enhanced embeds (`youtube-nocookie.com`) or intentional dark cinematic placeholders when no video is configured.
- **CRO & Conversion Funnel Rhythm**:
  - Sticky blurred header with quick jump navigation & instant checkout CTA
  - High-impact above-the-fold hero with dual CTAs
  - Trust strip with verified metrics
  - Two-column authority section ("Why Paritosh") with expandable founder story
  - Problem section with 6 pain-point cards and mid-funnel CTA block
  - Dramatic Before vs. After transformation grid
  - 6 Skill outcome pillars
  - 10-module curriculum breakdown with expandable drill highlights
  - "The Record & Review Method" signature 4-step diagnostic loop
  - "See Paritosh Teach" 3-part video masterclass section
  - Social proof testimonial grid + student video review wall
  - "This is for you if" vs. "This may not be for you if" expectation setting
  - 6 High-stakes real-world use-case scenarios
  - Emotional founder story timeline
  - Free content proof section
  - Full course offer section with dynamic value stack and conditional pricing
  - Accessible FAQ accordion with 15 questions
  - Giant high-contrast Final CTA
  - Mobile bottom sticky CTA bar
- **SEO & Social Sharing**:
  - Complete OpenGraph and Twitter/X metadata
  - Structured Data (JSON-LD) for `Person` and `Course`
- **Legal Routes**:
  - `/privacy`
  - `/terms`
  - `/refund`

---

## 🖼️ Media & Asset System

Placeholders have been generated at:
- `public/images/paritosh-hero.webp`
- `public/images/paritosh-portrait.webp`
- `public/images/paritosh-speaking.webp`
- `public/images/introvert-to-icon-cover.webp`
- `public/images/testimonial-01.webp`
- `public/images/testimonial-02.webp`

Replace these files directly with official photography whenever available.

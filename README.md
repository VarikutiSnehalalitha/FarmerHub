# किसान सहायक (Kisan Sahayak) — Multilingual Farmer Assistance Platform

> **Empowering Indian Farmers from Sowing to Selling with Multilingual Voice Assistance, AI Diagnostics, Live Mandi Prices, Weather Advisories, and Government Schemes.**

---

## 🌾 Overview

**Kisan Sahayak** is a complete, production-ready agricultural technology platform designed specifically for Indian farmers across rural and semi-urban regions. Built with accessibility at the core, it caters to farmers with varying literacy levels through speech-to-text input, audio text-to-speech feedback, intuitive visual icons, and full support for all **22 languages recognized in the Eighth Schedule of the Constitution of India plus English**.

---

## 🚀 Key Modules & Capabilities

1. **Dashboard (`/`)**:
   - Personalized farmer greeting with current village and landholding.
   - **Weather & Agricultural Spray Advisory**: Instant check on wind speed, rain probability, and whether current weather is safe for foliar spraying.
   - **Quick Action Grid**: Large touch buttons for Crop Doctor, Mandi Prices, Weather, Government Schemes, and direct Kisan Call Centre dialling.
   - **Active Crops Tracker**: Real-time progress bar from Sowing to Harvesting with upcoming scheduled tasks.
   - **Live Mandi Ticker**: Local district APMC rates with modal, min, and max price spreads.

2. **Crop Management & Activity Calendar (`/crops`)**:
   - Manage multiple cultivated crops with sowing date, variety, and acreage.
   - Record field operations: irrigation, weeding, fertilizer, spraying, and harvest.
   - **Comprehensive Agronomy Directory**: In-depth guidance for Cereals, Pulses, Oilseeds, Cash crops, Vegetables, and Spices (suitable soil, seed rates, spacing, 3-stage fertilizer schedules, and harvesting criteria).

3. **Crop Doctor: AI Pest & Disease Diagnosis (`/crop-doctor`)**:
   - Upload leaf/plant photos or capture live camera images.
   - Select affected plant part (leaf, stem, fruit, root, whole plant) and voice/text symptoms.
   - Real-time diagnostic model scoring (e.g. 91% match for Yellow Rust / Leaf Blast).
   - **Integrated Pest Management (IPM First)**: Biological, cultural, and non-chemical practices prioritized.
   - **Verified CIBRC Chemical Schedule**: Active ingredient, dilution rate per acre, PPE precautions, and Pre-Harvest Interval (PHI) waiting periods.
   - Scans history log to track treatment outcomes over time.

4. **Weather, Rain & Farming Advisories (`/weather`)**:
   - Integrated with India Meteorological Department (IMD) agromet bulletins.
   - Practical advisories: Spraying suitability, irrigation postponement alerts, harvesting dry windows.
   - Official IMD weather warnings (thunderstorms, heavy rainfall, heatwave alerts).
   - 7-day agricultural forecast table.

5. **Live Mandi Prices & Net-Return Calculator (`/mandi`)**:
   - Live APMC market price feeds from AGMARKNET and e-NAM.
   - Filter by crop, state, district, and variety.
   - Multi-mandi price spread comparison with travel distance.
   - **Net-Return Profit Calculator**: Enter quantity (quintals), distance, transport rate, loading/unloading fees, and mandi cess to compute exact take-home earnings per market!

6. **Government Schemes & Subsidies (`/schemes`)**:
   - Database of Central and State programmes: PM-KISAN, PMFBY, Kisan Credit Card (KCC), PMKSY Micro-Irrigation, SMAM Farm Machinery, PKVY Organic Farming, and Soil Health Card.
   - **Interactive Eligibility Matcher**: 3 simple questions (land size, irrigation source, equipment need) matches eligible schemes with reasons.
   - Document checklists, application guidelines, direct official portal links, and toll-free helplines.

7. **Ask an Expert & Nearby KVKs (`/expert`)**:
   - Direct one-touch calling to **National Kisan Call Centre (Toll-Free 1800-180-1551)**.
   - Directory of Krishi Vigyan Kendras (KVKs), Agriculture Universities, and Scientists.
   - Consultation request form (select Phone Callback, WhatsApp, or In-person KVK visit).

8. **Daily Updates & Audio Feed (`/updates`)**:
   - Daily stream of verified agricultural announcements, weather warnings, and mandi spikes.
   - **Text-to-Speech Audio Player**: Listen aloud in the farmer's native regional language.

9. **My Farm Ledger & Expense Tracker (`/my-farm`)**:
   - Farm asset ledger: acreage, soil type, and irrigation source.
   - Financial ledger tracking expenses (Seeds, Fertilizer, Pesticides, Machinery, Labor, Transport) vs Harvest sales.
   - Seasonal Profit & Loss calculation.

10. **Profile & Pesticide Safety Database (`/profile`)**:
    - Farmer profile management with local storage and Supabase cloud backup.
    - **CIBRC Pesticide Safety Reference**: Search approved active ingredients, dosage rates, toxicity colors (Green, Blue, Yellow, Red), and pollinator safety guidelines.

---

## 🇮🇳 Multilingual Architecture (22 Indian Languages + English)

Full Unicode support and translations for all 22 official languages in the Eighth Schedule of the Constitution of India:
- **Hindi (हिन्दी)**
- **English**
- **Punjabi (ਪੰਜਾਬੀ)**
- **Bengali (বাংলা)**
- **Marathi (मराठी)**
- **Telugu (తెలుగు)**
- **Tamil (தமிழ்)**
- **Gujarati (ગુજરાતી)**
- **Kannada (ಕನ್ನಡ)**
- **Odia (ଓଡ଼ିଆ)**
- **Malayalam (മലയാളം)**
- **Assamese (অসমীয়া)**
- **Urdu (اردو)** — with Right-to-Left (RTL) support
- **Kashmiri (کٲشُر / कॉशुर)**
- **Nepali (नेपाली)**
- **Sindhi (سنڌي)**
- **Sanskrit (संस्कृतम्)**
- **Konkani (कोंकणी)**
- **Maithili (मैथिली)**
- **Dogri (डोगरी)**
- **Bodo (बड़ो)**
- **Manipuri / Meitei (মৈতৈलोন্)**
- **Santali (ᱥᱟᱱᱛᱟᱲᱤ)**

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ (App Router, TypeScript)
- **Styling**: Tailwind CSS with an agricultural palette (Natural greens, warm cream, earthy brown, and harvest gold)
- **Icons**: Lucide React
- **Speech**: Web Speech API (STT & TTS) with regional language fallbacks
- **Database**: Supabase PostgreSQL with Row Level Security (RLS)
- **Mobile Support**: Progressive Web App (PWA) with responsive mobile-first touch UI

---

## 🗄️ Database & Supabase Setup

### Environment Variables (`.env.local`)
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_APP_ENV=production
NEXT_PUBLIC_DEFAULT_LANGUAGE=hi
NEXT_PUBLIC_ENABLE_VOICE=true
```

### SQL Migrations
Apply the migration script located at `supabase/migrations/20261021_init_kisan_sahayak.sql`:
- Tables created:
  - `farmers`: Farmer profile, land size, soil type, irrigation source
  - `farmer_crops`: Active crop cultivation records and growth stage
  - `farm_activities`: Field operation logs (irrigation, spraying, weeding)
  - `farm_expenses`: Input expense ledger
  - `crop_diagnoses`: Saved disease diagnoses and treatment plans
  - `mandi_prices`: APMC market prices cache
  - `government_schemes`: Welfare schemes and subsidy catalog
- Row Level Security (RLS) policies enabled.

To seed initial schemes and mandi prices, run `supabase/seed.sql`.

---

## 💻 Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📱 Mobile PWA Installation

- **Android (Chrome)**: Tap the browser menu (⋮) -> **Install app** or **Add to Home screen**.
- **iOS (Safari)**: Tap the Share button -> **Add to Home Screen**.

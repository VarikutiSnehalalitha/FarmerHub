-- =========================================================
-- KISAN SAHAYAK (किसान सहायक) — DATABASE SCHEMA
-- Supabase PostgreSQL with Row Level Security (RLS)
-- =========================================================

-- 1. Farmers Profile Table
CREATE TABLE IF NOT EXISTS public.farmers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    phone TEXT,
    language TEXT DEFAULT 'hi',
    state TEXT NOT NULL,
    district TEXT NOT NULL,
    village TEXT,
    farm_size_acres NUMERIC DEFAULT 2.0,
    soil_type TEXT,
    irrigation_type TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Farmer's Cultivated Crops
CREATE TABLE IF NOT EXISTS public.farmer_crops (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    farmer_id UUID REFERENCES public.farmers(id) ON DELETE CASCADE,
    crop_name TEXT NOT NULL,
    variety TEXT,
    sowing_date DATE NOT NULL,
    acreage NUMERIC DEFAULT 1.0,
    current_stage TEXT DEFAULT 'Sowing',
    expected_harvest_date DATE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Field Activities Calendar & Logs
CREATE TABLE IF NOT EXISTS public.farm_activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    crop_id UUID REFERENCES public.farmer_crops(id) ON DELETE CASCADE,
    activity_type TEXT NOT NULL, -- 'sowing', 'irrigation', 'fertilizer', 'pesticide', 'weeding', 'harvesting'
    title TEXT NOT NULL,
    notes TEXT,
    cost NUMERIC DEFAULT 0,
    completed BOOLEAN DEFAULT FALSE,
    activity_date DATE DEFAULT CURRENT_DATE
);

-- 4. Farm Expense & Income Ledger
CREATE TABLE IF NOT EXISTS public.farm_expenses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    farmer_id UUID REFERENCES public.farmers(id) ON DELETE CASCADE,
    category TEXT NOT NULL, -- 'seeds', 'fertilizer', 'pesticides', 'machinery', 'labor', 'irrigation', 'transport'
    amount NUMERIC NOT NULL,
    notes TEXT,
    expense_date DATE DEFAULT CURRENT_DATE
);

-- 5. Crop Doctor AI Diagnoses
CREATE TABLE IF NOT EXISTS public.crop_diagnoses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    farmer_id UUID,
    crop_name TEXT NOT NULL,
    plant_part TEXT NOT NULL,
    symptoms TEXT,
    suspected_cause TEXT NOT NULL,
    confidence_score NUMERIC DEFAULT 85,
    treatment_plan JSONB,
    photo_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Mandi Market Prices (AGMARKNET Cache)
CREATE TABLE IF NOT EXISTS public.mandi_prices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    commodity TEXT NOT NULL,
    variety TEXT,
    state TEXT NOT NULL,
    district TEXT NOT NULL,
    market TEXT NOT NULL,
    min_price NUMERIC NOT NULL,
    modal_price NUMERIC NOT NULL,
    max_price NUMERIC NOT NULL,
    arrivals_tonnes NUMERIC DEFAULT 0,
    record_date DATE DEFAULT CURRENT_DATE
);

-- 7. Government Schemes & Subsidies
CREATE TABLE IF NOT EXISTS public.government_schemes (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    hindi_title TEXT,
    department TEXT,
    category TEXT NOT NULL,
    scope TEXT DEFAULT 'Central',
    financial_benefit TEXT,
    eligibility TEXT[],
    documents TEXT[],
    official_portal_url TEXT,
    helpline TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.farmers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.farmer_crops ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.farm_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.farm_expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.crop_diagnoses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mandi_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.government_schemes ENABLE ROW LEVEL SECURITY;

-- Public read access for market and scheme data
CREATE POLICY "Public read mandi prices" ON public.mandi_prices FOR SELECT USING (true);
CREATE POLICY "Public read government schemes" ON public.government_schemes FOR SELECT USING (true);
CREATE POLICY "Public read diagnoses" ON public.crop_diagnoses FOR SELECT USING (true);
CREATE POLICY "Public insert diagnoses" ON public.crop_diagnoses FOR INSERT WITH CHECK (true);

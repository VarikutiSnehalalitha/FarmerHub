-- =========================================================
-- KISAN SAHAYAK — SEED DATA
-- Central Schemes & Initial APMC Mandi Rates
-- =========================================================

INSERT INTO public.government_schemes (id, title, hindi_title, department, category, scope, financial_benefit, eligibility, documents, official_portal_url, helpline)
VALUES 
('pm-kisan', 'PM-KISAN Samman Nidhi', 'पीएम किसान सम्मान निधि', 'Ministry of Agriculture & Farmers Welfare', 'income_support', 'Central', '₹6,000 per year in 3 equal installments of ₹2,000 directly to bank accounts', ARRAY['All landholding farmer families having cultivable landholding in their names', 'Excludes institutional landholders and high income taxpayers'], ARRAY['Aadhaar Card', 'Land ownership documents (Khasra/Khatauni)', 'Aadhaar-linked Bank Passbook'], 'https://pmkisan.gov.in', '155261 / 011-24300606'),
('pmfby', 'Pradhan Mantri Fasal Bima Yojana (PMFBY)', 'प्रधानमंत्री फसल बीमा योजना', 'Ministry of Agriculture', 'insurance', 'Central', 'Comprehensive crop risk insurance: Only 1.5% premium for Rabi, 2% for Kharif, 5% for commercial crops', ARRAY['All farmers including sharecroppers and tenant farmers growing notified crops in notified areas'], ARRAY['Land Record (RoR/LPC)', 'Sowing Certificate/Patwari Report', 'Bank Account Details'], 'https://pmfby.gov.in', '14447 / 1800-180-1551'),
('kcc', 'Kisan Credit Card (KCC) Scheme', 'किसान क्रेडिट कार्ड योजना', 'NABARD & Dept of Financial Services', 'credit', 'Central', 'Concessional institutional credit up to ₹3 Lakh at effectively 4% interest rate (with 3% prompt repayment incentive)', ARRAY['Small, marginal and tenant farmers, oral lessees, SHGs or Joint Liability Groups'], ARRAY['Land holding records', 'ID & Address proof (Aadhaar/Voter ID)', 'Passport photographs'], 'https://www.myscheme.gov.in/schemes/kcc', '1800-11-22-11'),
('pmksy-drip', 'PMKSY - Per Drop More Crop (Micro Irrigation)', 'प्रधानमंत्री कृषि सिंचाई योजना - प्रति बूंद अधिक फसल', 'Department of Agriculture & Farmers Welfare', 'irrigation', 'Central', 'Up to 55% subsidy for Small & Marginal farmers, 45% for other farmers for Drip & Sprinkler irrigation systems', ARRAY['Farmers possessing cultivable land with an assured water source'], ARRAY['Land revenue records', 'Water source verification', 'Aadhaar and Bank details'], 'https://pmksy.gov.in', '011-23381012'),
('soil-health-card', 'Soil Health Card Scheme', 'मृदा स्वास्थ्य कार्ड योजना', 'Ministry of Agriculture', 'soil_health', 'Central', 'Free periodic soil chemical testing (12 parameters: N, P, K, S, Zn, Fe, Cu, Mn, Bo, pH, EC, OC) & customized fertilizer recommendations', ARRAY['All Indian farmers cultivating agricultural land'], ARRAY['Land Record details (Khasra No.)', 'Aadhaar Card'], 'https://soilhealth.dac.gov.in', '011-24305948')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.mandi_prices (commodity, variety, state, district, market, min_price, modal_price, max_price, arrivals_tonnes, record_date)
VALUES
('Wheat', 'Sharbati / Dara', 'Madhya Pradesh', 'Sehore', 'Sehore Mandi', 2425, 2550, 2710, 480, CURRENT_DATE),
('Wheat', 'PBW-502', 'Punjab', 'Ludhiana', 'Khanna APMC', 2275, 2350, 2420, 950, CURRENT_DATE),
('Paddy (Dhan)', 'Basmati 1121', 'Haryana', 'Karnal', 'Karnal Mandi', 3400, 3650, 3920, 620, CURRENT_DATE),
('Mustard', 'Black Mustard', 'Rajasthan', 'Bharatpur', 'Bharatpur Mandi', 5350, 5600, 5820, 340, CURRENT_DATE),
('Soybean', 'Yellow JS-9560', 'Maharashtra', 'Latur', 'Latur APMC', 4200, 4450, 4680, 510, CURRENT_DATE),
('Cotton', 'Medium Staple', 'Gujarat', 'Rajkot', 'Rajkot Market Yard', 6800, 7150, 7400, 280, CURRENT_DATE),
('Chilli (Mirchi)', 'Teja / Guntur', 'Andhra Pradesh', 'Guntur', 'Guntur Mirchi Yard', 18500, 20200, 22000, 190, CURRENT_DATE),
('Onion', 'Nashik Red', 'Maharashtra', 'Nashik', 'Lasalgaon Mandi', 1450, 1750, 2100, 1150, CURRENT_DATE),
('Potato', 'Jyoti / Pukhraj', 'Uttar Pradesh', 'Agra', 'Agra Mandi', 1200, 1420, 1600, 890, CURRENT_DATE);

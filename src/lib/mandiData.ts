import { MandiRecord } from '@/types';

export const MANDI_SAMPLE_DATA: MandiRecord[] = [
  // --- Andhra Pradesh Mandis ---
  {
    id: 'ap-1',
    commodity: 'Chilli / Mirchi (ఎర్ర మిరపకాయలు)',
    variety: 'Teja / Guntur S10',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    market: 'Guntur Mirchi Yard (Asia Largest)',
    minPrice: 18800,
    modalPrice: 20500,
    maxPrice: 22400,
    arrivalsTonnes: 420,
    date: '2026-10-22',
    distanceKm: 15
  },
  {
    id: 'ap-2',
    commodity: 'Tomato (నాటు & హైబ్రిడ్ టమాటా)',
    variety: 'Hybrid Desi Red',
    state: 'Andhra Pradesh',
    district: 'Chittoor',
    market: 'Madanapalle Tomato Yard (Asia 2nd Largest)',
    minPrice: 1900,
    modalPrice: 2450,
    maxPrice: 2850,
    arrivalsTonnes: 650,
    date: '2026-10-22',
    distanceKm: 25
  },
  {
    id: 'ap-3',
    commodity: 'Paddy / Rice (వరి / బియ్యం)',
    variety: 'BPT-5204 (Sona Masoori / సాంబా మసూరి)',
    state: 'Andhra Pradesh',
    district: 'NTR (Vijayawada)',
    market: 'Vijayawada Market Yard',
    minPrice: 2350,
    modalPrice: 2580,
    maxPrice: 2750,
    arrivalsTonnes: 850,
    date: '2026-10-22',
    distanceKm: 18
  },
  {
    id: 'ap-4',
    commodity: 'Groundnut (వేరుశనగ కాయలు)',
    variety: 'Bold 60-Pod',
    state: 'Andhra Pradesh',
    district: 'Ananthapuramu (Anantapur)',
    market: 'Anantapur APMC',
    minPrice: 5800,
    modalPrice: 6350,
    maxPrice: 6800,
    arrivalsTonnes: 380,
    date: '2026-10-22',
    distanceKm: 22
  },
  {
    id: 'ap-5',
    commodity: 'Bengal Gram / Chana (శనగలు)',
    variety: 'Desi Annigeri-1',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    market: 'Kurnool Market Yard',
    minPrice: 5400,
    modalPrice: 5820,
    maxPrice: 6150,
    arrivalsTonnes: 310,
    date: '2026-10-22',
    distanceKm: 14
  },
  {
    id: 'ap-6',
    commodity: 'Jaggery (స్వచ్ఛమైన బెల్లం)',
    variety: 'Golden Lump V-1',
    state: 'Andhra Pradesh',
    district: 'Anakapalli',
    market: 'Anakapalli Jaggery Market',
    minPrice: 3800,
    modalPrice: 4200,
    maxPrice: 4600,
    arrivalsTonnes: 290,
    date: '2026-10-22',
    distanceKm: 30
  },
  {
    id: 'ap-7',
    commodity: 'Cotton (ప్రత్తి / దూది)',
    variety: 'Medium-Long Staple Bunny',
    state: 'Andhra Pradesh',
    district: 'Palnadu (Narasaraopet)',
    market: 'Narasaraopet Market Yard',
    minPrice: 6900,
    modalPrice: 7250,
    maxPrice: 7550,
    arrivalsTonnes: 340,
    date: '2026-10-22',
    distanceKm: 28
  },

  // --- Telangana Mandis ---
  {
    id: 'ts-1',
    commodity: 'Cotton (ప్రత్తి / దూది)',
    variety: 'Long Staple Shankar-6 (White Gold)',
    state: 'Telangana',
    district: 'Warangal',
    market: 'Enumamula APMC Warangal (Asia 2nd Largest Grain Mkt)',
    minPrice: 7100,
    modalPrice: 7450,
    maxPrice: 7750,
    arrivalsTonnes: 1250,
    date: '2026-10-22',
    distanceKm: 12
  },
  {
    id: 'ts-2',
    commodity: 'Turmeric (పసుపు కొమ్ములు)',
    variety: 'Finger Turmeric (Armoor / Nizamabad Special)',
    state: 'Telangana',
    district: 'Nizamabad',
    market: 'Nizamabad Turmeric Market',
    minPrice: 13200,
    modalPrice: 14600,
    maxPrice: 16200,
    arrivalsTonnes: 580,
    date: '2026-10-22',
    distanceKm: 16
  },
  {
    id: 'ts-3',
    commodity: 'Red Gram / Toor (కందిపప్పు / కందులు)',
    variety: 'Tandur Red Gram (GI Tag తాండూరు కందులు)',
    state: 'Telangana',
    district: 'Vikarabad',
    market: 'Tandur Market Yard',
    minPrice: 8800,
    modalPrice: 9450,
    maxPrice: 10100,
    arrivalsTonnes: 260,
    date: '2026-10-22',
    distanceKm: 35
  },
  {
    id: 'ts-4',
    commodity: 'Chilli (ఎర్ర మిర్చి)',
    variety: 'Fatki / Teja Hot',
    state: 'Telangana',
    district: 'Khammam',
    market: 'Khammam Agricultural Market',
    minPrice: 17900,
    modalPrice: 19800,
    maxPrice: 21600,
    arrivalsTonnes: 390,
    date: '2026-10-22',
    distanceKm: 19
  },
  {
    id: 'ts-5',
    commodity: 'Paddy (వరి ధాన్యం)',
    variety: 'BPT-5204 (Sona Masoori Fine)',
    state: 'Telangana',
    district: 'Suryapet',
    market: 'Suryapet APMC Yard',
    minPrice: 2320,
    modalPrice: 2540,
    maxPrice: 2720,
    arrivalsTonnes: 720,
    date: '2026-10-22',
    distanceKm: 21
  },
  {
    id: 'ts-6',
    commodity: 'Maize (మొక్కజొన్న)',
    variety: 'Yellow Hybrid Feed Quality',
    state: 'Telangana',
    district: 'Karimnagar',
    market: 'Karimnagar Market Yard',
    minPrice: 2150,
    modalPrice: 2340,
    maxPrice: 2480,
    arrivalsTonnes: 480,
    date: '2026-10-22',
    distanceKm: 24
  },
  {
    id: 'ts-7',
    commodity: 'Castor Seed (ఆముదాలు)',
    variety: 'DCH-519 Hybrid',
    state: 'Telangana',
    district: 'Mahabubnagar',
    market: 'Badepally / Mahabubnagar APMC',
    minPrice: 5600,
    modalPrice: 5950,
    maxPrice: 6250,
    arrivalsTonnes: 190,
    date: '2026-10-22',
    distanceKm: 28
  },

  // --- Other Indian States ---
  {
    id: 'm1',
    commodity: 'Wheat (गेहूं)',
    variety: 'Sharbati / Mill Quality',
    state: 'Madhya Pradesh',
    district: 'Sehore',
    market: 'Sehore APMC',
    minPrice: 2420,
    modalPrice: 2580,
    maxPrice: 2750,
    arrivalsTonnes: 540,
    date: '2026-10-22',
    distanceKm: 12
  },
  {
    id: 'm4',
    commodity: 'Paddy (धान / Basmati)',
    variety: 'Basmati 1121 Pusa',
    state: 'Punjab',
    district: 'Ludhiana',
    market: 'Khanna Mandi (Asia Largest)',
    minPrice: 3500,
    modalPrice: 3850,
    maxPrice: 4120,
    arrivalsTonnes: 1450,
    date: '2026-10-22',
    distanceKm: 18
  },
  {
    id: 'm6',
    commodity: 'Mustard (सरसों)',
    variety: 'Black Sarson 42% Oil',
    state: 'Rajasthan',
    district: 'Bharatpur',
    market: 'Bharatpur Mandi Yard',
    minPrice: 5350,
    modalPrice: 5650,
    maxPrice: 5850,
    arrivalsTonnes: 320,
    date: '2026-10-22',
    distanceKm: 22
  },
  {
    id: 'm8',
    commodity: 'Cotton (कपास)',
    variety: 'Medium Staple Shankar-6',
    state: 'Gujarat',
    district: 'Rajkot',
    market: 'Rajkot APMC',
    minPrice: 6900,
    modalPrice: 7250,
    maxPrice: 7520,
    arrivalsTonnes: 450,
    date: '2026-10-22',
    distanceKm: 15
  },
  {
    id: 'm9',
    commodity: 'Soybean (सोयाबीन)',
    variety: 'Yellow JS-9560 Clean',
    state: 'Maharashtra',
    district: 'Latur',
    market: 'Latur APMC Yard',
    minPrice: 4250,
    modalPrice: 4520,
    maxPrice: 4700,
    arrivalsTonnes: 820,
    date: '2026-10-22',
    distanceKm: 25
  },
  {
    id: 'm10',
    commodity: 'Onion (प्याज / ఉల్లిపాయ)',
    variety: 'Garva / Red Onion',
    state: 'Maharashtra',
    district: 'Nashik',
    market: 'Lasalgaon Mandi',
    minPrice: 1500,
    modalPrice: 1850,
    maxPrice: 2250,
    arrivalsTonnes: 1850,
    date: '2026-10-22',
    distanceKm: 14
  }
];

export interface NetReturnCalculationParams {
  quantityQuintals: number;
  modalPricePerQuintal: number;
  distanceKm: number;
  transportRatePerKm: number;
  loadingUnloadingPerQuintal: number;
  mandiCommissionPercent: number;
  otherExpenses: number;
}

export interface NetReturnResult {
  grossRevenue: number;
  totalTransportCost: number;
  totalLoadingCost: number;
  totalCommissionCost: number;
  totalDeductions: number;
  netTakeHomeEarnings: number;
  effectiveRatePerQuintal: number;
}

export function calculateNetMandiReturn(params: NetReturnCalculationParams): NetReturnResult {
  const {
    quantityQuintals,
    modalPricePerQuintal,
    distanceKm,
    transportRatePerKm,
    loadingUnloadingPerQuintal,
    mandiCommissionPercent,
    otherExpenses
  } = params;

  const grossRevenue = quantityQuintals * modalPricePerQuintal;
  const totalTransportCost = distanceKm * transportRatePerKm * 2;
  const totalLoadingCost = quantityQuintals * loadingUnloadingPerQuintal;
  const totalCommissionCost = (grossRevenue * mandiCommissionPercent) / 100;
  const totalDeductions = totalTransportCost + totalLoadingCost + totalCommissionCost + otherExpenses;
  const netTakeHomeEarnings = Math.max(0, grossRevenue - totalDeductions);
  const effectiveRatePerQuintal = quantityQuintals > 0 ? Math.round(netTakeHomeEarnings / quantityQuintals) : 0;

  return {
    grossRevenue,
    totalTransportCost,
    totalLoadingCost,
    totalCommissionCost,
    totalDeductions,
    netTakeHomeEarnings,
    effectiveRatePerQuintal
  };
}

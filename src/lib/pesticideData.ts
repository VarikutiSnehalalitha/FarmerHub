export interface VerifiedPesticide {
  id: string;
  tradeName: string;
  activeIngredient: string;
  registrationNumber: string;
  cibrcApprovedStatus: 'Approved' | 'Restricted' | 'Banned (Warning)';
  category: 'Insecticide' | 'Fungicide' | 'Herbicide' | 'Bio-Pesticide' | 'Bio-Fungicide';
  toxicityClass: 'Red (Extremely Toxic)' | 'Yellow (Highly Toxic)' | 'Blue (Moderately Toxic)' | 'Green (Slightly Toxic)';
  approvedCrops: string[];
  targetPests: string[];
  approvedDosagePerAcre: string;
  recommendedWaterVolume: string;
  preHarvestIntervalDays: number; // PHI
  reEntryIntervalHours: number; // REI
  safetyPrecautions: {
    personalProtectiveEquipment: string[];
    pollinatorSafety: string;
    aquaticSafety: string;
    livestockGrazingRestrictionDays: number;
  };
  ipmAlternative: string;
  officialSource: string;
  verificationDate: string;
}

export const PESTICIDE_SAFETY_DATABASE: VerifiedPesticide[] = [
  {
    id: 'coragen-chlorantraniliprole',
    tradeName: 'Coragen / Cover',
    activeIngredient: 'Chlorantraniliprole 18.5% SC',
    registrationNumber: 'CIR-61,420/2009-Chlorantraniliprole(SC)(299)-24',
    cibrcApprovedStatus: 'Approved',
    category: 'Insecticide',
    toxicityClass: 'Green (Slightly Toxic)',
    approvedCrops: ['Paddy', 'Sugarcane', 'Cotton', 'Tomato', 'Chilli', 'Brinjal', 'Maize'],
    targetPests: ['Stem Borer', 'Leaf Folder', 'Early Shoot Borer', 'American Bollworm', 'Fruit Borer'],
    approvedDosagePerAcre: '60 ml in Paddy / Tomato; 150 ml in Sugarcane',
    recommendedWaterVolume: '150 - 200 Litres of clean water per acre',
    preHarvestIntervalDays: 3, // Very safe low PHI
    reEntryIntervalHours: 12,
    safetyPrecautions: {
      personalProtectiveEquipment: ['Rubber gloves', 'Face mask', 'Long sleeved shirt and trousers', 'Eye protection'],
      pollinatorSafety: 'Low toxicity to adult honeybees once spray has dried; do not spray directly onto actively foraging bees.',
      aquaticSafety: 'Toxic to aquatic organisms; maintain 10-meter untreated buffer from ponds and canals.',
      livestockGrazingRestrictionDays: 7
    },
    ipmAlternative: 'Install pheromone traps @ 5/acre, release Trichogramma egg parasitoids @ 40,000/acre.',
    officialSource: 'Central Insecticides Board & Registration Committee (CIBRC), Govt of India',
    verificationDate: '2025-06-15'
  },
  {
    id: 'propiconazole-tilt',
    tradeName: 'Tilt / Bumper',
    activeIngredient: 'Propiconazole 25% EC',
    registrationNumber: 'CIR-25,114/97-Propiconazole(EC)(167)-41',
    cibrcApprovedStatus: 'Approved',
    category: 'Fungicide',
    toxicityClass: 'Yellow (Highly Toxic)',
    approvedCrops: ['Wheat', 'Paddy', 'Groundnut', 'Tea', 'Soybean'],
    targetPests: ['Yellow Rust', 'Brown Rust', 'Sheath Blight', 'Karnal Bunt', 'Tikka Disease'],
    approvedDosagePerAcre: '200 ml per acre',
    recommendedWaterVolume: '200 Litres of clean water per acre',
    preHarvestIntervalDays: 30, // 30 days before harvest
    reEntryIntervalHours: 24,
    safetyPrecautions: {
      personalProtectiveEquipment: ['Chemical-resistant gloves', 'N95 respirator mask', 'Goggles', 'Rubber boots'],
      pollinatorSafety: 'Do not spray when honeybees are foraging on flowering weeds.',
      aquaticSafety: 'High aquatic toxicity. Never wash spray equipment or empty drums in village ponds, wells, or irrigation channels.',
      livestockGrazingRestrictionDays: 21
    },
    ipmAlternative: 'Crop rotation with non-host legume crops, use certified rust-resistant seed varieties, avoid excess urea.',
    officialSource: 'CIBRC Gazette / ICAR Directorate of Wheat Research',
    verificationDate: '2025-08-10'
  },
  {
    id: 'tricyclazole-beam',
    tradeName: 'Beam / Baan',
    activeIngredient: 'Tricyclazole 75% WP',
    registrationNumber: 'CIR-31,890/2000-Tricyclazole(WP)(198)-12',
    cibrcApprovedStatus: 'Approved',
    category: 'Fungicide',
    toxicityClass: 'Blue (Moderately Toxic)',
    approvedCrops: ['Paddy (Rice)'],
    targetPests: ['Leaf Blast', 'Neck Blast', 'Node Blast'],
    approvedDosagePerAcre: '120 - 160 grams per acre',
    recommendedWaterVolume: '200 Litres of water per acre',
    preHarvestIntervalDays: 30, // Strictly observed for Basmati export compliance
    reEntryIntervalHours: 24,
    safetyPrecautions: {
      personalProtectiveEquipment: ['Gloves', 'Cotton dust mask', 'Protective clothing'],
      pollinatorSafety: 'Low risk to pollinators when applied as directed.',
      aquaticSafety: 'Do not drain treated paddy water into natural streams for at least 7 days after application.',
      livestockGrazingRestrictionDays: 14
    },
    ipmAlternative: 'Seed treatment with Pseudomonas fluorescens @ 10 g/kg seed; balanced NPK nutrition.',
    officialSource: 'CIBRC / Basmati Export Development Foundation (BEDF)',
    verificationDate: '2025-07-20'
  },
  {
    id: 'thiamethoxam-actara',
    tradeName: 'Actara / Areva',
    activeIngredient: 'Thiamethoxam 25% WG',
    registrationNumber: 'CIR-38,629/2002-Thiamethoxam(WG)(224)-11',
    cibrcApprovedStatus: 'Approved',
    category: 'Insecticide',
    toxicityClass: 'Blue (Moderately Toxic)',
    approvedCrops: ['Paddy', 'Cotton', 'Wheat', 'Mustard', 'Tomato', 'Okra', 'Mango'],
    targetPests: ['Stem Borer', 'Aphids', 'Jassids', 'Whitefly', 'Thrips', 'Hoppers'],
    approvedDosagePerAcre: '40 - 50 grams per acre (Foliar) or 80 g for soil drenching',
    recommendedWaterVolume: '150 - 200 Litres of water per acre',
    preHarvestIntervalDays: 14,
    reEntryIntervalHours: 24,
    safetyPrecautions: {
      personalProtectiveEquipment: ['Nitrile gloves', 'Chemical goggles', 'Mask'],
      pollinatorSafety: '⚠️ HIGHLY HAZARDOUS TO HONEY BEES AND POLLINATORS. DO NOT SPRAY ON CROPS IN ACTIVE BLOOM.',
      aquaticSafety: 'Moderately toxic to aquatic invertebrates.',
      livestockGrazingRestrictionDays: 14
    },
    ipmAlternative: 'Yellow sticky traps (8/acre), 5% Neem Seed Kernel Extract (NSKE) spray at early pest appearance.',
    officialSource: 'CIBRC Registered Insecticides Schedule',
    verificationDate: '2025-05-18'
  },
  {
    id: 'trichoderma-viride-bio',
    tradeName: 'Sanjeevani / Bio-Derma',
    activeIngredient: 'Trichoderma viride 1% WP (Bio-control agent)',
    registrationNumber: 'CIR-Bio-0482/2007',
    cibrcApprovedStatus: 'Approved',
    category: 'Bio-Fungicide',
    toxicityClass: 'Green (Slightly Toxic)',
    approvedCrops: ['All Crops (Cereals, Pulses, Oilseeds, Vegetables, Fruits)'],
    targetPests: ['Root Rot', 'Collar Rot', 'Damping Off', 'Fusarium Wilt', 'Rhizoctonia'],
    approvedDosagePerAcre: 'Seed Treatment: 5-10 g/kg seed. Soil Application: 1-2 kg mixed with 100 kg FYM/vermicompost per acre.',
    recommendedWaterVolume: 'N/A (Seed/Soil mix) or 200 L for root drenching',
    preHarvestIntervalDays: 0, // Zero PHI - 100% Organic Safe
    reEntryIntervalHours: 0,
    safetyPrecautions: {
      personalProtectiveEquipment: ['Standard farm dust mask to avoid inhalation of biological spores.'],
      pollinatorSafety: '100% Safe for honeybees, earthworms, and pollinators.',
      aquaticSafety: 'Non-toxic to fish and aquatic fauna.',
      livestockGrazingRestrictionDays: 0
    },
    ipmAlternative: 'Primary organic biological control agent recommended by National Centre for Organic and Natural Farming.',
    officialSource: 'National Centre for Organic and Natural Farming (NCONF) & CIBRC',
    verificationDate: '2025-09-01'
  }
];

export const searchPesticides = (query: string, crop?: string) => {
  const q = query.toLowerCase();
  return PESTICIDE_SAFETY_DATABASE.filter((item) => {
    const matchesQuery =
      item.tradeName.toLowerCase().includes(q) ||
      item.activeIngredient.toLowerCase().includes(q) ||
      item.targetPests.some((p) => p.toLowerCase().includes(q));
    const matchesCrop = crop ? item.approvedCrops.some((c) => c.toLowerCase().includes(crop.toLowerCase())) : true;
    return matchesQuery && matchesCrop;
  });
};

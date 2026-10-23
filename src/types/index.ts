export type LanguageCode =
  | 'hi' // Hindi
  | 'en' // English
  | 'pa' // Punjabi
  | 'bn' // Bengali
  | 'mr' // Marathi
  | 'te' // Telugu
  | 'ta' // Tamil
  | 'gu' // Gujarati
  | 'kn' // Kannada
  | 'or' // Odia
  | 'ml' // Malayalam
  | 'as' // Assamese
  | 'ur' // Urdu
  | 'ks' // Kashmiri
  | 'ne' // Nepali
  | 'sd' // Sindhi
  | 'sa' // Sanskrit
  | 'kok' // Konkani
  | 'mai' // Maithili
  | 'doi' // Dogri
  | 'brx' // Bodo
  | 'mni' // Manipuri
  | 'sat'; // Santali

export interface LanguageInfo {
  code: LanguageCode;
  name: string; // Native name
  englishName: string;
  script: string;
  isRtl?: boolean;
  speechCode?: string; // BCP-47 speech recognition code
}

export interface FarmerProfile {
  id: string;
  name: string;
  phone?: string;
  language: LanguageCode;
  state: string;
  district: string;
  village?: string;
  farmSizeAcres: number;
  soilType?: string;
  irrigationType?: 'canal' | 'borewell' | 'drip' | 'sprinkler' | 'rainfed' | 'other';
  sownCrops: EnrolledCrop[];
}

export interface EnrolledCrop {
  id: string;
  cropId: string;
  cropName: string;
  variety?: string;
  sowingDate: string; // ISO date
  acreage: number;
  currentStage: string;
  expectedHarvestDate: string;
  activities: FarmActivity[];
  expenses: FarmExpense[];
}

export interface FarmActivity {
  id: string;
  date: string;
  type: 'sowing' | 'irrigation' | 'fertilizer' | 'pesticide' | 'weeding' | 'harvesting' | 'soil_test' | 'other';
  title: string;
  notes?: string;
  cost?: number;
  completed: boolean;
}

export interface FarmExpense {
  id: string;
  date: string;
  category: 'seeds' | 'fertilizer' | 'pesticides' | 'machinery' | 'labor' | 'irrigation' | 'transport' | 'other';
  amount: number;
  notes?: string;
}

export interface CropGuide {
  id: string;
  name: string;
  hindiName: string;
  scientificName: string;
  category: 'cereals' | 'pulses' | 'oilseeds' | 'cash_crops' | 'vegetables' | 'fruits' | 'spices';
  season: 'Kharif' | 'Rabi' | 'Zaid' | 'Whole Year';
  durationDays: number;
  imageUrl: string;
  suitableSoil: string;
  suitableClimate: string;
  sowingMonths: string[];
  seedRatePerAcre: string;
  spacing: string;
  irrigationGuidance: string;
  fertilizerSchedule: {
    basal: string;
    vegetative: string;
    flowering: string;
  };
  growthStages: {
    stage: string;
    daysRange: string;
    keyTasks: string;
  }[];
  commonPestsAndDiseases: {
    name: string;
    symptoms: string;
    ipmControl: string;
    verifiedChemical: string;
  }[];
  harvestingGuidance: string;
  yieldPerAcre: string;
}

export interface PestDiagnosis {
  id: string;
  timestamp: string;
  cropName: string;
  plantPart: 'leaf' | 'stem' | 'fruit' | 'root' | 'whole_plant';
  symptoms: string;
  imageUrl?: string;
  suspectedCause: string;
  scientificName?: string;
  confidenceScore: number;
  diagnosisType: 'pest' | 'fungal' | 'bacterial' | 'viral' | 'nutrient_deficiency' | 'environmental';
  visualComparisonSigns: string[];
  ipmNonChemicalControl: string[];
  verifiedChemicalTreatments: {
    chemicalName: string;
    dosagePerAcre: string;
    waterVolume: string;
    safetyIntervalDays: number;
    toxicityLevel: 'green' | 'blue' | 'yellow' | 'red';
  }[];
  expertReviewRecommended: boolean;
}

export interface MandiRecord {
  id: string;
  commodity: string;
  variety: string;
  state: string;
  district: string;
  market: string;
  minPrice: number; // ₹ per quintal
  modalPrice: number;
  maxPrice: number;
  arrivalsTonnes: number;
  date: string;
  distanceKm?: number;
}

export interface GovernmentScheme {
  id: string;
  title: string;
  hindiTitle: string;
  teluguTitle?: string;
  state?: string;
  department: string;
  category: 'income_support' | 'insurance' | 'credit' | 'irrigation' | 'machinery' | 'organic' | 'soil_health';
  scope: 'Central' | 'State-Specific';
  targetBeneficiaries: string;
  financialBenefit: string;
  eligibilityCriteria: string[];
  requiredDocuments: string[];
  applicationProcess: string;
  officialPortalUrl: string;
  helpline: string;
  lastUpdated: string;
}

export interface ExpertContact {
  id: string;
  name: string;
  designation: string;
  institution: string; // e.g. KVK, ICAR, State Dept
  specialty: string;
  state: string;
  district: string;
  phone: string;
  availableDays: string;
  languages: string[];
}

export interface WeatherData {
  city: string;
  state: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  conditionIcon: string;
  humidity: number;
  windSpeedKmH: number;
  rainProbabilityPercent: number;
  uvIndex: number;
  lastUpdated: string;
  officialSource: string;
  activeAlert?: {
    severity: 'warning' | 'alert' | 'advisory';
    title: string;
    description: string;
  };
  agriculturalAdvisories: {
    spraying: {
      isSuitable: boolean;
      advisory: string;
    };
    irrigation: {
      needed: boolean;
      advisory: string;
    };
    harvesting: {
      status: 'favorable' | 'caution' | 'delay';
      advisory: string;
    };
  };
  forecast: {
    day: string;
    date: string;
    tempMin: number;
    tempMax: number;
    condition: string;
    rainProbability: number;
  }[];
}

export interface DailyAdvisory {
  id: string;
  date: string;
  category: 'weather_alert' | 'pest_warning' | 'mandi_spike' | 'scheme_update' | 'crop_tip';
  title: string;
  summary: string;
  audioText?: string;
  state?: string;
  source: string;
}

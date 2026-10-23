'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { FarmerProfile, EnrolledCrop, FarmActivity, FarmExpense, PestDiagnosis } from '@/types';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

interface FarmerContextType {
  profile: FarmerProfile;
  crops: EnrolledCrop[];
  diagnoses: PestDiagnosis[];
  savedSchemeIds: string[];
  currentLocation: { state: string; district: string; displayString: string };
  setLocation: (state: string, district: string) => void;
  updateProfile: (updated: Partial<FarmerProfile>) => void;
  addCrop: (crop: Omit<EnrolledCrop, 'id' | 'activities' | 'expenses'>) => void;
  deleteCrop: (cropId: string) => void;
  logActivity: (cropId: string, activity: Omit<FarmActivity, 'id'>) => void;
  addExpense: (cropId: string, expense: Omit<FarmExpense, 'id'>) => void;
  saveDiagnosis: (diagnosis: PestDiagnosis) => void;
  toggleSavedScheme: (schemeId: string) => void;
}

const DEFAULT_PROFILE: FarmerProfile = {
  id: 'farmer-local-01',
  name: 'రామారావు పటేల్ (K. Rama Rao)',
  phone: '9876543210',
  language: 'te',
  state: 'Andhra Pradesh',
  district: 'Guntur',
  village: 'తెనాలి / Amaravati',
  farmSizeAcres: 4.5,
  soilType: 'నల్ల రేగడి నేల (Black Cotton Soil)',
  irrigationType: 'borewell',
  sownCrops: []
};

const DEFAULT_CROPS: EnrolledCrop[] = [
  {
    id: 'crop-1',
    cropId: 'chilli',
    cropName: 'Chilli / మిర్చి (Mirchi)',
    variety: 'Teja Guntur Special',
    sowingDate: '2026-10-10',
    acreage: 2.5,
    currentStage: 'Flowering & Fruiting (పూత & కాత దశ)',
    expectedHarvestDate: '2027-02-28',
    activities: [
      { id: 'act-1', date: '2026-10-10', type: 'sowing', title: 'నారు నాటడం & బిందు సేద్యం ఏర్పాటు', cost: 3500, completed: true },
      { id: 'act-2', date: '2026-10-18', type: 'fertilizer', title: 'మొదటి విడత ఎరువులు (DAP + Potash)', cost: 2800, completed: true },
      { id: 'act-3', date: '2026-10-25', type: 'irrigation', title: 'డ్రిప్ ద్వారా నీటి తడి మరియు సూక్ష్మ పోషకాలు', cost: 950, completed: false }
    ],
    expenses: [
      { id: 'exp-1', date: '2026-10-09', category: 'seeds', amount: 3500, notes: 'తేజ మిర్చి విత్తనాలు' },
      { id: 'exp-2', date: '2026-10-18', category: 'fertilizer', amount: 2800, notes: 'రసాయన ఎరువులు' }
    ]
  },
  {
    id: 'crop-2',
    cropId: 'cotton',
    cropName: 'Cotton / ప్రత్తి (Kapas)',
    variety: 'Shankar-6 Long Staple',
    sowingDate: '2026-09-20',
    acreage: 2.0,
    currentStage: 'Boll Development (కాయల పెరుగుదల దశ)',
    expectedHarvestDate: '2027-01-15',
    activities: [
      { id: 'act-m1', date: '2026-09-20', type: 'sowing', title: 'విత్తనాలు విత్తడం', cost: 2400, completed: true },
      { id: 'act-m2', date: '2026-10-24', type: 'weeding', title: 'కలుపు తీత మరియు గులాబీ రంగు పురుగు నివారణ', cost: 1800, completed: false }
    ],
    expenses: [
      { id: 'exp-m1', date: '2026-09-19', category: 'seeds', amount: 2400, notes: 'బిటి పత్తి విత్తనాలు' },
      { id: 'exp-m2', date: '2026-10-05', category: 'fertilizer', amount: 1900, notes: 'యూరియా & కాంప్లెక్స్ ఎరువులు' }
    ]
  }
];

const DEFAULT_DIAGNOSES: PestDiagnosis[] = [
  {
    id: 'diag-001',
    timestamp: '2026-10-20T10:30:00Z',
    cropName: 'Chilli (మిర్చి)',
    plantPart: 'leaf',
    symptoms: 'ఆకులు పైకి దోనెలా ముడుచుకుపోవడం (నల్ల తామర పురుగు / Black Thrips)',
    suspectedCause: 'నల్ల తామర పురుగులు (Black Thrips / Thrips parvispinus)',
    scientificName: 'Thrips parvispinus',
    confidenceScore: 94,
    diagnosisType: 'pest',
    visualComparisonSigns: [
      'ఆకులు పైకి ముడుచుకుని పెళుసుగా మారడం',
      'పూత రాలిపోవడం మరియు కాత నిలవకపోవడం',
      'ఆకుల అడుగు భాగంలో చిన్న నల్లటి పురుగులు కనిపించడం'
    ],
    ipmNonChemicalControl: [
      'ఎకరాకు 20-25 నీలి రంగు మరియు పసుపు రంగు జిగురు పూసిన అట్టలను (Sticky Traps) అమర్చండి.',
      'వేప నూనె (Neem Oil 10,000 ppm) 3 మి.లీ లీటరు నీటికి కలిపి పిచికారీ చేయండి.',
      'నత్రజని ఎరువులను అధికంగా వాడవద్దు.'
    ],
    verifiedChemicalTreatments: [
      {
        chemicalName: 'Spinetoram 11.7% SC (డెలిగేట్ / Delegate)',
        dosagePerAcre: '180 మి.లీ 200 లీటర్ల నీటిలో',
        waterVolume: '200 Litres',
        safetyIntervalDays: 7,
        toxicityLevel: 'blue'
      }
    ],
    expertReviewRecommended: false
  }
];

const FarmerContext = createContext<FarmerContextType | undefined>(undefined);

export function FarmerProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<FarmerProfile>(DEFAULT_PROFILE);
  const [crops, setCrops] = useState<EnrolledCrop[]>(DEFAULT_CROPS);
  const [diagnoses, setDiagnoses] = useState<PestDiagnosis[]>(DEFAULT_DIAGNOSES);
  const [savedSchemeIds, setSavedSchemeIds] = useState<string[]>(['pm-kisan', 'pmfby', 'ysr-rythu-bharosa']);
  const [currentLocation, setCurrentLocation] = useState({
    state: 'Andhra Pradesh',
    district: 'Guntur',
    displayString: 'Guntur, Andhra Pradesh'
  });

  // Load from local storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedProfile = localStorage.getItem('kisan_farmer_profile');
      if (savedProfile) {
        try {
          setProfile(JSON.parse(savedProfile));
        } catch (e) {}
      }
      const savedCrops = localStorage.getItem('kisan_farmer_crops');
      if (savedCrops) {
        try {
          setCrops(JSON.parse(savedCrops));
        } catch (e) {}
      }
      const savedDiags = localStorage.getItem('kisan_farmer_diagnoses');
      if (savedDiags) {
        try {
          setDiagnoses(JSON.parse(savedDiags));
        } catch (e) {}
      }
      const savedSchemes = localStorage.getItem('kisan_saved_schemes');
      if (savedSchemes) {
        try {
          setSavedSchemeIds(JSON.parse(savedSchemes));
        } catch (e) {}
      }
      const savedLoc = localStorage.getItem('kisan_location');
      if (savedLoc) {
        try {
          setCurrentLocation(JSON.parse(savedLoc));
        } catch (e) {}
      }
    }
  }, []);

  const setLocation = (state: string, district: string) => {
    const loc = { state, district, displayString: `${district}, ${state}` };
    setCurrentLocation(loc);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kisan_location', JSON.stringify(loc));
    }
  };

  const updateProfile = (updated: Partial<FarmerProfile>) => {
    const newProfile = { ...profile, ...updated };
    setProfile(newProfile);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kisan_farmer_profile', JSON.stringify(newProfile));
    }
  };

  const addCrop = (cropData: Omit<EnrolledCrop, 'id' | 'activities' | 'expenses'>) => {
    const newCrop: EnrolledCrop = {
      ...cropData,
      id: `crop-${Date.now()}`,
      activities: [
        {
          id: `act-${Date.now()}`,
          date: cropData.sowingDate,
          type: 'sowing',
          title: `Sowing of ${cropData.cropName}`,
          completed: true
        }
      ],
      expenses: []
    };
    const updated = [newCrop, ...crops];
    setCrops(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kisan_farmer_crops', JSON.stringify(updated));
    }
  };

  const deleteCrop = (cropId: string) => {
    const updated = crops.filter((c) => c.id !== cropId);
    setCrops(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kisan_farmer_crops', JSON.stringify(updated));
    }
  };

  const logActivity = (cropId: string, activity: Omit<FarmActivity, 'id'>) => {
    const newAct: FarmActivity = { ...activity, id: `act-${Date.now()}` };
    const updated = crops.map((c) => {
      if (c.id === cropId) {
        return { ...c, activities: [newAct, ...c.activities] };
      }
      return c;
    });
    setCrops(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kisan_farmer_crops', JSON.stringify(updated));
    }
  };

  const addExpense = (cropId: string, expense: Omit<FarmExpense, 'id'>) => {
    const newExp: FarmExpense = { ...expense, id: `exp-${Date.now()}` };
    const updated = crops.map((c) => {
      if (c.id === cropId) {
        return { ...c, expenses: [newExp, ...c.expenses] };
      }
      return c;
    });
    setCrops(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kisan_farmer_crops', JSON.stringify(updated));
    }
  };

  const saveDiagnosis = (diagnosis: PestDiagnosis) => {
    const updated = [diagnosis, ...diagnoses];
    setDiagnoses(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kisan_farmer_diagnoses', JSON.stringify(updated));
    }

    // Try saving to Supabase if available
    if (isSupabaseConfigured) {
      supabase
        .from('crop_diagnoses')
        .insert({
          crop_name: diagnosis.cropName,
          plant_part: diagnosis.plantPart,
          symptoms: diagnosis.symptoms,
          suspected_cause: diagnosis.suspectedCause,
          confidence_score: diagnosis.confidenceScore,
          treatment_plan: diagnosis
        })
        .then(
          () => {},
          () => {}
        );
    }
  };

  const toggleSavedScheme = (schemeId: string) => {
    const updated = savedSchemeIds.includes(schemeId)
      ? savedSchemeIds.filter((id) => id !== schemeId)
      : [...savedSchemeIds, schemeId];
    setSavedSchemeIds(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kisan_saved_schemes', JSON.stringify(updated));
    }
  };

  return (
    <FarmerContext.Provider
      value={{
        profile,
        crops,
        diagnoses,
        savedSchemeIds,
        currentLocation,
        setLocation,
        updateProfile,
        addCrop,
        deleteCrop,
        logActivity,
        addExpense,
        saveDiagnosis,
        toggleSavedScheme
      }}
    >
      {children}
    </FarmerContext.Provider>
  );
}

export function useFarmer() {
  const context = useContext(FarmerContext);
  if (!context) {
    throw new Error('useFarmer must be used within a FarmerProvider');
  }
  return context;
}

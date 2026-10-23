import { NextResponse } from 'next/server';
import { PestDiagnosis } from '@/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { cropName, plantPart, symptoms } = body;

    const s = (symptoms || '').toLowerCase();
    const c = (cropName || '').toLowerCase();

    let diagnosis: PestDiagnosis;

    if (c.includes('wheat') || s.includes('rust') || s.includes('पीला') || s.includes('powder')) {
      diagnosis = {
        id: `diag-${Date.now()}`,
        timestamp: new Date().toISOString(),
        cropName: cropName || 'Wheat',
        plantPart: plantPart || 'leaf',
        symptoms: symptoms || 'Yellow linear powdery streaks on leaves',
        suspectedCause: 'पीला रतुआ (Yellow Rust / Stripe Rust)',
        scientificName: 'Puccinia striiformis',
        confidenceScore: 92,
        diagnosisType: 'fungal',
        visualComparisonSigns: [
          'Bright yellow pustules arranged in parallel stripes on upper leaf surface',
          'Yellow powder rubbing off easily on fingertips',
          'Premature drying of flags leaves'
        ],
        ipmNonChemicalControl: [
          'Immediately stop excess urea application',
          'Destroy alternative weed hosts on bunds',
          'Rotate with non-host legume crops next season'
        ],
        verifiedChemicalTreatments: [
          {
            chemicalName: 'Propiconazole 25% EC (Tilt / Bumper)',
            dosagePerAcre: '200 ml in 200 L water',
            waterVolume: '200 Litres',
            safetyIntervalDays: 30,
            toxicityLevel: 'yellow'
          }
        ],
        expertReviewRecommended: false
      };
    } else {
      diagnosis = {
        id: `diag-${Date.now()}`,
        timestamp: new Date().toISOString(),
        cropName: cropName || 'General Crop',
        plantPart: plantPart || 'leaf',
        symptoms: symptoms || 'Foliar curling and stunting',
        suspectedCause: 'रसचूषक कीट / थ्रिप्स प्रकोप (Sucking Pests / Thrips Infestation)',
        confidenceScore: 85,
        diagnosisType: 'pest',
        visualComparisonSigns: [
          'Upward boat-shaped curling of leaves',
          'Silvery patches under leaves',
          'Stunted terminal shoot growth'
        ],
        ipmNonChemicalControl: [
          'Install blue and yellow sticky traps (6-8/acre)',
          'Foliar spray of 5% Neem Seed Kernel Extract (NSKE)'
        ],
        verifiedChemicalTreatments: [
          {
            chemicalName: 'Thiamethoxam 25% WG',
            dosagePerAcre: '40 - 50 g in 150-200 L water',
            waterVolume: '150 - 200 Litres',
            safetyIntervalDays: 14,
            toxicityLevel: 'blue'
          }
        ],
        expertReviewRecommended: true
      };
    }

    return NextResponse.json({ success: true, diagnosis });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}

import { GovernmentScheme } from '@/types';

export const GOVERNMENT_SCHEMES: GovernmentScheme[] = [
  // Andhra Pradesh State Schemes
  {
    id: 'ap-rythu-bharosa',
    title: 'YSR Rythu Bharosa - PM KISAN / Annadata Sukhibhava',
    hindiTitle: 'वाईएसआर रायथु भरोसा (आंध्र प्रदेश)',
    teluguTitle: 'వైఎస్సార్ రైతు భరోసా / అన్నదాత సుఖీభవ (ఆంధ్రప్రదేశ్)',
    department: 'Department of Agriculture, Government of Andhra Pradesh',
    category: 'income_support',
    scope: 'State-Specific',
    state: 'Andhra Pradesh',
    targetBeneficiaries: 'Landholder and recognized Tenant Farmer (ROFR / CCRC) families in Andhra Pradesh',
    financialBenefit: 'Financial assistance of ₹13,500 to ₹20,000 per year per farmer family provided directly into bank accounts before Kharif, Rabi sowing and Sankranti festival.',
    eligibilityCriteria: [
      'Cultivators owning agricultural land in Andhra Pradesh registered on Webland portal.',
      'Recognized tenant farmers belonging to SC, ST, BC, and Minority categories with CCRC cards.',
      'Institutional landholders and government pensioners above prescribed threshold excluded.'
    ],
    requiredDocuments: [
      'Aadhaar Card of farmer and spouse',
      'Pattadar Passbook / 1B Namuna / Webland Record',
      'Bank Account Passbook seeded with NPCI',
      'Crop Cultivator Rights Card (CCRC) for tenant farmers'
    ],
    applicationProcess: 'Verification completed transparently through Village Secretariats (Grama Sachivalayam) and Rythu Bharosa Kendras (RBKs) across all 26 districts of Andhra Pradesh.',
    officialPortalUrl: 'https://ysrrythubharosa.ap.gov.in',
    helpline: '1902 (AP Spandana) / 155251',
    lastUpdated: '2026-10-01'
  },
  {
    id: 'ap-free-crop-insurance',
    title: 'Dr. YSR Free Crop Insurance Scheme',
    hindiTitle: 'डॉ. वाईएसआर मुफ्त फसल बीमा योजना (आंध्र प्रदेश)',
    teluguTitle: 'డా. వైఎస్సార్ ఉచిత పంటల బీమా పథకం (ఆంధ్రప్రదేశ్)',
    department: 'Agriculture and Cooperation Dept, Govt of Andhra Pradesh',
    category: 'insurance',
    scope: 'State-Specific',
    state: 'Andhra Pradesh',
    targetBeneficiaries: 'All farmers in AP cultivating notified crops enrolled on e-Panta crop booking system',
    financialBenefit: '100% free crop insurance coverage without any farmer premium contribution. The entire farmer premium share is paid directly by the Andhra Pradesh state government.',
    eligibilityCriteria: [
      'Must complete mandatory digital crop booking in e-Panta (e-Crop) through Village Agriculture Assistant (VAA).',
      'Applicable to both tenant and landholding farmers for notified crops (Paddy, Chilli, Cotton, Groundnut, Pulses).',
      'Automatic compensation directly transferred to Aadhaar linked accounts upon CCE crop yield loss.'
    ],
    requiredDocuments: [
      'e-Panta acknowledgment receipt / VAA certification',
      'Aadhaar Card',
      'Bank passbook linked to NPCI mapper'
    ],
    applicationProcess: 'Automatic enrollment when VAA conducts physical field verification and e-Panta digital crop booking in the village RBK.',
    officialPortalUrl: 'https://karshak.ap.gov.in',
    helpline: '155251 (RBK Toll-Free Helpline)',
    lastUpdated: '2026-09-20'
  },

  // Telangana State Schemes
  {
    id: 'ts-rythu-bharosa',
    title: 'Telangana Rythu Bharosa / Rythu Bandhu Investment Support',
    hindiTitle: 'तेलंगाना रायथु भरोसा (निवेश सहायता योजना)',
    teluguTitle: 'తెలంగాణ రైతు భరోసా / రైతు బంధు (వ్యవసాయ పెట్టుబడి సాయం)',
    department: 'Department of Agriculture, Government of Telangana',
    category: 'income_support',
    scope: 'State-Specific',
    state: 'Telangana',
    targetBeneficiaries: 'All agricultural pattadar farmers and tenant cultivators across Telangana',
    financialBenefit: '₹15,000 per acre per year (₹7,500 per acre per crop season for Kharif and Rabi) paid directly into the farmer bank account before each crop cycle for seeds and fertilizers.',
    eligibilityCriteria: [
      'Farmer holding valid Pattadar Passbook recorded on Dharani integrated land portal.',
      'Real cultivable agricultural land registered in any of the 33 districts of Telangana.',
      'Tenant cultivators with verification through local agriculture extension officers (AEO).'
    ],
    requiredDocuments: [
      'Dharani Pattadar Passbook / Khata Number',
      'Aadhaar Card',
      'Nationalized Bank Account Passbook with IFSC'
    ],
    applicationProcess: 'Submit passbook details and bank account to local Agricultural Extension Officer (AEO) or Rythu Vedika in your cluster.',
    officialPortalUrl: 'https://rythubandhu.telangana.gov.in',
    helpline: '1800-425-4033 / 040-23383520',
    lastUpdated: '2026-10-05'
  },
  {
    id: 'ts-rythu-bima',
    title: 'Telangana Rythu Bima (Farmers Group Life Insurance Scheme)',
    hindiTitle: 'तेलंगाना रायथు बीमा (किसान समूह जीवन बीमा)',
    teluguTitle: 'రైతు బీమా - రైతుల సమగ్ర గ్రూప్ జీవిత బీమా పథకం',
    department: 'Agriculture Department & LIC of India, Government of Telangana',
    category: 'insurance',
    scope: 'State-Specific',
    state: 'Telangana',
    targetBeneficiaries: 'Pattadar farmers aged 18 to 59 years in Telangana',
    financialBenefit: '₹5,00,000 (Rupees Five Lakhs) financial insurance benefit deposited into designated nominee bank account within 10 days in the unfortunate event of the farmer death (natural or accidental). 100% premium paid by TS Govt.',
    eligibilityCriteria: [
      'Pattadar farmer owning title land recorded on Dharani portal.',
      'Age between 18 and 59 years at enrollment cut-off date.',
      'Nominee must be family member with valid Aadhaar and bank details.'
    ],
    requiredDocuments: [
      'Pattadar Passbook',
      'Farmer Aadhaar and Date of Birth proof',
      'Nominee Aadhaar and Bank Passbook'
    ],
    applicationProcess: 'Nomination form collected by cluster Agriculture Extension Officer (AEO) and uploaded to LIC portal.',
    officialPortalUrl: 'https://rythubima.telangana.gov.in',
    helpline: '040-23383520 / 1800-599-4455',
    lastUpdated: '2026-09-10'
  },

  // Central Schemes
  {
    id: 'pm-kisan',
    title: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
    hindiTitle: 'पीएम किसान सम्मान निधि योजना',
    teluguTitle: 'పీఎం కిసాన్ సమ్మాన్ నిధి యోజన',
    department: 'Department of Agriculture & Farmers Welfare, Ministry of Agriculture',
    category: 'income_support',
    scope: 'Central',
    targetBeneficiaries: 'Small and marginal landholding farmer families across India',
    financialBenefit: '₹6,000 per year transferred in 3 equal installments of ₹2,000 every 4 months directly via DBT to Aadhaar-seeded bank accounts.',
    eligibilityCriteria: [
      'All landholding farmer families who have cultivable land holding in their names.',
      'Must have valid Aadhaar card linked with active bank account and NPCI mapped.',
      'Institutional landholders, constitutional post holders, and income-tax payers in the last assessment year are excluded.'
    ],
    requiredDocuments: [
      'Aadhaar Card (Mandatory)',
      'Land Ownership Record (Khatauni / Jamabandi / RoR showing farmer name)',
      'Aadhaar-seeded Bank Account Passbook with IFSC code',
      'Active mobile number linked to Aadhaar for OTP verification'
    ],
    applicationProcess: 'Farmers can register online at the official PM-KISAN portal via "New Farmer Registration" or visit their nearest Common Service Centre (CSC) or local Patwari/Lekhpal office.',
    officialPortalUrl: 'https://pmkisan.gov.in',
    helpline: '155261 / 1800-11-5526 (Toll-Free) or 011-24300606',
    lastUpdated: '2026-09-01'
  },
  {
    id: 'pmfby',
    title: 'PMFBY (Pradhan Mantri Fasal Bima Yojana)',
    hindiTitle: 'प्रधानमंत्री फसल बीमा योजना',
    teluguTitle: 'ప్రధాన మంత్రి ఫసల్ బీమా యోజన (పంటల బీమా)',
    department: 'Ministry of Agriculture & Farmers Welfare',
    category: 'insurance',
    scope: 'Central',
    targetBeneficiaries: 'All farmers cultivating notified crops in notified insurance areas',
    financialBenefit: 'Comprehensive insurance cover against non-preventable natural risks (drought, flood, unseasonal rain, hailstorm, pest attack). Maximum farmer premium is capped at only 1.5% for Rabi, 2% for Kharif, and 5% for Annual Commercial/Horticulture crops.',
    eligibilityCriteria: [
      'Both loanee farmers (via KCC) and non-loanee farmers are eligible.',
      'Sharecroppers and tenant farmers with tenancy agreement or village head endorsement.',
      'Must intimate localized damage (hailstorm, inundation, post-harvest cyclone) within 72 hours via the Crop Insurance App or helpline.'
    ],
    requiredDocuments: [
      'Land Record (RoR / Khasra Number)',
      'Sowing Certificate / Declaration issued by village Sarpanch or Patwari',
      'Bank Passbook copy',
      'Aadhaar Card'
    ],
    applicationProcess: 'Apply online through National Crop Insurance Portal (ncip.gov.in), through lending banks when taking crop loans, or via CSC centres before the cut-off date (usually July 31 for Kharif, Dec 31 for Rabi).',
    officialPortalUrl: 'https://pmfby.gov.in',
    helpline: '14447 (National Farmer Insurance Helpline) / 1800-180-1551',
    lastUpdated: '2026-09-15'
  },
  {
    id: 'kcc',
    title: 'Kisan Credit Card (KCC) & Interest Subvention',
    hindiTitle: 'किसान क्रेडिट कार्ड (केसीसी) योजना',
    teluguTitle: 'కిసాన్ క్రెడిట్ కార్డు (కేసీసీ) పథకం',
    department: 'Department of Agriculture & Reserve Bank of India (RBI / NABARD)',
    category: 'credit',
    scope: 'Central',
    targetBeneficiaries: 'Individual farmers, joint borrowers, tenant farmers, SHGs, and allied sector (Dairy & Fisheries) farmers',
    financialBenefit: 'Short-term credit up to ₹3,00,000 at a subsidized interest rate of only 7%. With Prompt Repayment Incentive (3%), the effective interest rate is just 4% per annum. Collateral-free credit limit up to ₹1.60 Lakh.',
    eligibilityCriteria: [
      'Owner cultivators or tenant farmers engaged in crop cultivation or animal husbandry/fisheries.',
      'Age between 18 and 75 years.',
      'Clean credit history with no default in institutional loans.'
    ],
    requiredDocuments: [
      'Duly filled KCC Application Form',
      'Identity Proof (Aadhaar / Voter ID / PAN Card)',
      'Land Records certified by revenue authorities showing cropping pattern',
      '2 Passport size photographs'
    ],
    applicationProcess: 'Apply at any commercial bank, Regional Rural Bank (RRB), or Cooperative bank branch, or online via the unified JanSamarth portal (jansamarth.in).',
    officialPortalUrl: 'https://www.myscheme.gov.in/schemes/kcc',
    helpline: '1800-11-22-11 / 1800-425-3800',
    lastUpdated: '2026-08-20'
  },
  {
    id: 'pmksy-drip',
    title: 'PMKSY - Per Drop More Crop (Micro-Irrigation Subsidy)',
    hindiTitle: 'प्रधानमंत्री कृषि सिंचाई योजना - ड्रिप व स्प्रिंकलर सब्सिडी',
    teluguTitle: 'ప్రధాన మంత్రి కృషి సించాయి యోజన - బిందు & తుంపర సేద్యం',
    department: 'Department of Agriculture & Farmers Welfare',
    category: 'irrigation',
    scope: 'Central',
    targetBeneficiaries: 'Farmers investing in water-saving Drip and Sprinkler irrigation technology',
    financialBenefit: 'Up to 55% financial assistance for Small & Marginal farmers (up to 5 acres / 2 hectares), and 45% subsidy for other farmers for installing Drip / Micro-Sprinkler systems (up to 90% in AP Micro Irrigation Project APMIP).',
    eligibilityCriteria: [
      'Farmer must own agricultural land with an assured perennial irrigation water source (well, borewell, farm pond, canal).',
      'Only one micro-irrigation system subsidized per survey number for a minimum 7-year life period.'
    ],
    requiredDocuments: [
      'Land 7/12 & 8A / Jamabandi / 1B records',
      'Electricity bill of tubewell / proof of water source',
      'Field soil and water test report',
      'Aadhaar card and cancelled bank cheque'
    ],
    applicationProcess: 'Apply through the State Horticulture / Agriculture portal (e.g. APMIP in AP, TSHorticulture in Telangana) or nearest District Horticulture Officer (DHO).',
    officialPortalUrl: 'https://pmksy.gov.in',
    helpline: '011-23381012 / Respective State Horticulture Dept',
    lastUpdated: '2026-07-10'
  },
  {
    id: 'smam-machinery',
    title: 'SMAM (Sub-Mission on Agricultural Mechanization)',
    hindiTitle: 'कृषि यंत्रीकरण उप-मिशन (ट्रैक्टर व कृषि उपकरण सब्सिडी)',
    teluguTitle: 'వ్యవసాయ యాంత్రీకరణ సబ్-మిషన్ (ట్రాక్టర్ & వ్యవసాయ పరికరాల రాయితీ)',
    department: 'Mechanization & Technology Division, Ministry of Agriculture',
    category: 'machinery',
    scope: 'Central',
    targetBeneficiaries: 'Individual farmers, custom hiring centres (CHCs), and Farmer Producer Organizations (FPOs)',
    financialBenefit: '40% to 50% subsidy on purchase of agricultural machinery (Tractors, Power Tillers, Rotavators, Combine Harvesters, Laser Land Levellers, Straw Reapers). Up to 80% subsidy for setting up Custom Hiring Centres by FPOs.',
    eligibilityCriteria: [
      'Small and marginal farmers, SC/ST, and women farmers are given priority and higher subsidy slabs.',
      'Must not have received subsidy for the same equipment category in the preceding 5 years.'
    ],
    requiredDocuments: [
      'Land revenue certificate (Khasra/Khatauni/1B)',
      'Valid Aadhaar Card',
      'Bank Account Passbook with IFSC',
      'Quotation from authorized implement dealer'
    ],
    applicationProcess: 'Register on the Central Agricultural Mechanization Portal (agrimachinery.nic.in) or respective State DBT portal with dealer quotation.',
    officialPortalUrl: 'https://agrimachinery.nic.in',
    helpline: '1800-180-1551 / State Mechanization Cell',
    lastUpdated: '2026-09-05'
  },
  {
    id: 'pkvy-organic',
    title: 'PKVY (Paramparagat Krishi Vikas Yojana - Organic Farming)',
    hindiTitle: 'परम्परागत कृषि विकास योजना (जैविक खेती)',
    teluguTitle: 'సంప్రదాయ కృషి వికాస్ యోజన (సేంద్రీయ & ప్రకృతి వ్యవసాయం)',
    department: 'National Centre for Organic and Natural Farming, MoA&FW',
    category: 'organic',
    scope: 'Central',
    targetBeneficiaries: 'Farmer groups / clusters adopting chemical-free organic and natural farming',
    financialBenefit: 'Financial assistance of ₹50,000 per hectare over 3 years, of which ₹31,000 is given directly to farmers via DBT for organic inputs (seeds, bio-fertilizers, vermicompost, botanical extracts, packaging and certification).',
    eligibilityCriteria: [
      'Farmers forming a cluster of at least 20-50 hectares in contiguous agricultural fields.',
      'Willingness to transition from synthetic chemicals to Participatory Guarantee System (PGS-India) certified organic farming.'
    ],
    requiredDocuments: [
      'Cluster farmer list and group agreement',
      'Aadhaar card and individual bank accounts',
      'Soil test benchmark report'
    ],
    applicationProcess: 'Apply through District Agriculture Officer (DAO) or regional organic lead agency under Jaivik Kheti portal (jaivikkheti.in).',
    officialPortalUrl: 'https://pgsindia-ncof.gov.in',
    helpline: '0120-2764906 / 1800-180-1551',
    lastUpdated: '2026-08-15'
  }
];

export interface EligibilityInput {
  landSizeAcres: number;
  hasKcc: boolean;
  irrigationSource: 'borewell' | 'canal' | 'rainfed' | 'none';
  interests: ('subsidy' | 'insurance' | 'organic' | 'machinery' | 'credit')[];
  state?: string;
}

export function checkSchemeEligibility(input: EligibilityInput): { scheme: GovernmentScheme; matchReason: string; confidence: 'High' | 'Medium' }[] {
  const matches: { scheme: GovernmentScheme; matchReason: string; confidence: 'High' | 'Medium' }[] = [];

  // Filter schemes
  GOVERNMENT_SCHEMES.forEach((scheme) => {
    if (scheme.id === 'ap-rythu-bharosa' && input.landSizeAcres > 0) {
      matches.push({
        scheme,
        matchReason: `ఆంధ్రప్రదేశ్ రైతులకు అర్హత: మీకు ${input.landSizeAcres} ఎకరాల సాగుభూమి ఉన్నందున వార్షిక ఆర్థిక సాయానికి అర్హులు.`,
        confidence: 'High'
      });
    } else if (scheme.id === 'ts-rythu-bharosa' && input.landSizeAcres > 0) {
      matches.push({
        scheme,
        matchReason: `తెలంగాణ రైతులకు అర్హత: ఎకరాకు ₹15,000 చొప్పున ${input.landSizeAcres} ఎకరాలకు నేరుగా పెట్టుబడి సాయం లభిస్తుంది.`,
        confidence: 'High'
      });
    } else if (scheme.id === 'ap-free-crop-insurance') {
      matches.push({
        scheme,
        matchReason: 'ఆంధ్రప్రదేశ్ లో ఇ-పంట ద్వారా 100% ఉచిత పంటల బీమా రక్షణ రైతు ప్రీమియం లేకుండా లభిస్తుంది.',
        confidence: 'High'
      });
    } else if (scheme.id === 'ts-rythu-bima') {
      matches.push({
        scheme,
        matchReason: 'తెలంగాణ పట్టాదారు రైతులకు ₹5,00,000 ఉచిత సమగ్ర రైతు బీమా పథకం వర్తిస్తుంది.',
        confidence: 'High'
      });
    } else if (scheme.id === 'pm-kisan' && input.landSizeAcres > 0) {
      matches.push({
        scheme,
        matchReason: `సాగుభూమి ఉన్నందున సంవత్సరానికి ₹6,000 పీఎం-కిసాన్ నిధికి అర్హులు.`,
        confidence: 'High'
      });
    } else if (scheme.id === 'kcc' && !input.hasKcc) {
      matches.push({
        scheme,
        matchReason: 'కేసీసీ ద్వారా ₹3 లక్షల వరకు కేవలం 4% రాయితీ వడ్డీకే పంట రుణం పొందవచ్చు.',
        confidence: 'High'
      });
    } else if (scheme.id === 'pmksy-drip' && (input.irrigationSource === 'borewell' || input.irrigationSource === 'canal')) {
      matches.push({
        scheme,
        matchReason: `మీకున్న బోరుబావి/కాలువ నీటి ఆధారంగా 55% నుండి 90% వరకు డ్రిప్ & స్ప్రింక్లర్ సబ్సిడీ లభిస్తుంది.`,
        confidence: 'High'
      });
    } else if (scheme.id === 'smam-machinery' && (input.interests.includes('machinery') || input.landSizeAcres >= 2)) {
      matches.push({
        scheme,
        matchReason: 'ట్రాక్టర్లు మరియు వ్యవసాయ యంత్రాలపై 40-50% సబ్సిడీ లభిస్తుంది.',
        confidence: 'Medium'
      });
    } else if (scheme.id === 'pkvy-organic' && (input.interests.includes('organic') || input.irrigationSource === 'rainfed')) {
      matches.push({
        scheme,
        matchReason: 'సేంద్రీయ/ప్రకృతి సాగుకు హెక్టారుకు ₹31,000 నగదు బదిలీ ప్రోత్సాహకం లభిస్తుంది.',
        confidence: 'Medium'
      });
    }
  });

  return matches;
}

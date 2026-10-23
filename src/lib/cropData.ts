import { CropGuide } from '@/types';

export const CROP_DIRECTORY: CropGuide[] = [
  {
    id: 'wheat',
    name: 'Wheat',
    hindiName: 'गेहूं (Kanak / Gehun)',
    scientificName: 'Triticum aestivum',
    category: 'cereals',
    season: 'Rabi',
    durationDays: 130,
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
    suitableSoil: 'Well-drained fertile loamy or clay loam soil (pH 6.0 to 7.5)',
    suitableClimate: 'Cool winter growing season (10°C to 15°C) and warm dry ripening weather (21°C to 26°C)',
    sowingMonths: ['October', 'November'],
    seedRatePerAcre: '40 - 45 kg/acre (Broadcasting) or 35 - 40 kg/acre (Seed drill)',
    spacing: '20 - 22.5 cm between rows, 5 cm between plants',
    irrigationGuidance: '5-6 critical irrigations: Crown Root Initiation (20-25 days after sowing - most crucial), Tillering (40-45 DAS), Jointing (60-65 DAS), Flowering (80-85 DAS), Milking (100-105 DAS), Dough stage (115-120 DAS).',
    fertilizerSchedule: {
      basal: 'Apply 50 kg DAP + 25 kg MOP + 10 kg Zinc Sulphate at final land preparation.',
      vegetative: 'Top dress 25 kg Urea at 1st irrigation (CRI stage) and 25 kg Urea at 2nd irrigation.',
      flowering: 'Foliar spray of 19:19:19 NPK (1 kg/100L water) or 0:52:34 prior to earhead emergence.'
    },
    growthStages: [
      { stage: 'Germination & Crown Root Initiation', daysRange: '0 - 25 days', keyTasks: 'Pre-sowing irrigation, seed treatment with Trichoderma, 1st irrigation at 21 days.' },
      { stage: 'Tillering & Vegetative', daysRange: '25 - 55 days', keyTasks: 'First weeding/herbicide spray, first Urea top dressing.' },
      { stage: 'Stem Elongation & Jointing', daysRange: '55 - 75 days', keyTasks: 'Second irrigation, monitor for yellow rust in North-Western plains.' },
      { stage: 'Heading & Flowering', daysRange: '75 - 95 days', keyTasks: 'Critical flowering irrigation. Avoid spraying during peak pollination hours.' },
      { stage: 'Grain Filling (Milking & Dough)', daysRange: '95 - 120 days', keyTasks: 'Protection against terminal heat stress; light irrigation on calm non-windy days.' },
      { stage: 'Maturity & Harvesting', daysRange: '120 - 135 days', keyTasks: 'Stop irrigation when grains turn golden; harvest when grain moisture is 12-14%.' }
    ],
    commonPestsAndDiseases: [
      {
        name: 'Yellow Rust (Stripe Rust)',
        symptoms: 'Yellow pustules arranged in linear stripes on upper leaf surface, yellow powder on touch.',
        ipmControl: 'Plant resistant cultivars (HD-2967, PBW-550, WH-1105). Avoid excessive nitrogen fertilizer.',
        verifiedChemical: 'Propiconazole 25% EC @ 200 ml in 200 L water per acre at initial symptom onset.'
      },
      {
        name: 'Aphids (Mahun)',
        symptoms: 'Clusters of small green/black insects sucking sap from tender earheads, honeydew excretion causing sooty mold.',
        ipmControl: 'Conserve natural ladybird beetles; install yellow sticky traps (6/acre).',
        verifiedChemical: 'Thiamethoxam 25% WG @ 50 g in 150-200 L water per acre.'
      },
      {
        name: 'Termites',
        symptoms: 'Wilting and drying of plants in patches, eaten root system.',
        ipmControl: 'Ensure well-decomposed FYM; avoid unrotted cow dung in fields.',
        verifiedChemical: 'Seed treatment with Chlorpyrifos 20% EC @ 4 ml/kg seed.'
      }
    ],
    harvestingGuidance: 'Harvest when stalks turn yellow-golden and grain snaps cleanly between teeth. Use combine harvester with straw reaper.',
    yieldPerAcre: '18 - 24 Quintals per acre'
  },
  {
    id: 'paddy',
    name: 'Paddy / Rice',
    hindiName: 'धान (Dhan / Chawal)',
    scientificName: 'Oryza sativa',
    category: 'cereals',
    season: 'Kharif',
    durationDays: 140,
    imageUrl: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80',
    suitableSoil: 'Heavy clay or clayey loam with good water retention capacity (pH 5.5 to 7.0)',
    suitableClimate: 'Hot and humid climate (22°C to 35°C), requires abundant rainfall or assured irrigation',
    sowingMonths: ['June', 'July'],
    seedRatePerAcre: '6 - 8 kg/acre (Transplanting), 20 - 25 kg/acre (DSR Direct Seeded)',
    spacing: '20 cm x 15 cm (2-3 seedlings per hill)',
    irrigationGuidance: 'Maintain 2-5 cm standing water during initial tillering and panicle initiation. Adopt Alternate Wetting and Drying (AWD) to conserve 30% water.',
    fertilizerSchedule: {
      basal: '50 kg DAP + 35 kg MOP + 10 kg Zinc Sulphate (21%) at final puddling.',
      vegetative: 'First top dressing: 30 kg Neem coated Urea at 20-25 days after transplanting.',
      flowering: 'Second top dressing: 25 kg Urea at panicle initiation stage (45-50 DAT).'
    },
    growthStages: [
      { stage: 'Nursery & Seedling', daysRange: '0 - 25 days', keyTasks: 'Raised nursery bed, seed treatment with Carbendazim, 20-25 day old seedlings for transplanting.' },
      { stage: 'Transplanting & Tillering', daysRange: '25 - 60 days', keyTasks: 'Transplant 2-3 seedlings/hill; apply pre-emergence herbicide like Pretilachlor within 3 days.' },
      { stage: 'Panicle Initiation & Booting', daysRange: '60 - 85 days', keyTasks: 'Keep 3-5 cm standing water; apply second dose of Urea; monitor for stem borer.' },
      { stage: 'Flowering & Grain Filling', daysRange: '85 - 115 days', keyTasks: 'Monitor for brown planthopper (BPH) at plant base and false smut on panicles.' },
      { stage: 'Ripening & Harvesting', daysRange: '115 - 140 days', keyTasks: 'Drain field water 10-12 days before harvest; harvest when 80-85% grains turn straw-colored.' }
    ],
    commonPestsAndDiseases: [
      {
        name: 'Stem Borer (Tana Chhedak)',
        symptoms: 'Dead heart in vegetative stage (central shoot dries); white earheads (chaffy grains) at reproductive stage.',
        ipmControl: 'Release Trichogramma japonicum egg parasitoids @ 40,000/acre; set up light traps.',
        verifiedChemical: 'Cartap Hydrochloride 4G @ 7-10 kg/acre or Chlorantraniliprole 18.5% SC @ 60 ml/acre.'
      },
      {
        name: 'Blast Disease (Jhoolsa Rog)',
        symptoms: 'Spindle-shaped spots on leaves with ash-grey centers and brown margins; neck rot causing panicle collapse.',
        ipmControl: 'Avoid excessive nitrogen; destroy crop residues; balance with potash.',
        verifiedChemical: 'Tricyclazole 75% WP @ 120 g in 200 L water per acre.'
      },
      {
        name: 'Brown Plant Hopper (BPH)',
        symptoms: 'Circular patches of drying plants appearing as hopper burn; small brown insects clustered at the waterline base.',
        ipmControl: 'Form alleyways (30 cm gap every 2-3 meters); alternate wetting and drying instead of continuous stagnation.',
        verifiedChemical: 'Pymetrozine 50% WDG @ 120 g/acre or Triflumezopyrim 10% SC @ 94 ml/acre.'
      }
    ],
    harvestingGuidance: 'Harvest when 85% grains turn golden-yellow and moisture content is 20-22%. Dry grain to 14% moisture before storage.',
    yieldPerAcre: '22 - 30 Quintals per acre'
  },
  {
    id: 'mustard',
    name: 'Mustard / Rapeseed',
    hindiName: 'सरसों (Sarson / Rai)',
    scientificName: 'Brassica juncea',
    category: 'oilseeds',
    season: 'Rabi',
    durationDays: 125,
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    suitableSoil: 'Sandy loam to clay loam with good drainage (pH 6.5 - 7.5)',
    suitableClimate: 'Subtropical cool dry climate with bright sunshine (15°C - 25°C)',
    sowingMonths: ['September', 'October'],
    seedRatePerAcre: '1.5 - 2.0 kg/acre',
    spacing: '30 - 45 cm between rows, 10 - 15 cm between plants',
    irrigationGuidance: '2-3 light irrigations: First at pre-flowering (30-35 DAS), second at pod filling stage (60-65 DAS). Avoid water stagnation.',
    fertilizerSchedule: {
      basal: 'Apply 35 kg DAP + 15 kg MOP + 15 kg Elemental Sulphur (vital for oil content) at sowing.',
      vegetative: 'Top dress 20-25 kg Urea after first irrigation.',
      flowering: 'Foliar spray of 0.5% Borax at flowering to improve pod filling and seed count.'
    },
    growthStages: [
      { stage: 'Sowing & Emergence', daysRange: '0 - 15 days', keyTasks: 'Seed treatment with Apron 35 SD @ 6 g/kg seed to prevent white rust.' },
      { stage: 'Vegetative & Thinning', daysRange: '15 - 35 days', keyTasks: 'Thin plants to maintain 10-15 cm spacing. First weeding and first irrigation.' },
      { stage: 'Flowering & Branching', daysRange: '35 - 70 days', keyTasks: 'Monitor for mustard aphid invasion. Avoid spraying during morning bee activity.' },
      { stage: 'Pod Formation (Siliqua)', daysRange: '70 - 105 days', keyTasks: 'Second irrigation at siliqua development. Prevent frost damage by smoke/light irrigation.' },
      { stage: 'Ripening', daysRange: '105 - 125 days', keyTasks: 'Harvest when 75% pods turn brownish-yellow in early morning to prevent pod shattering.' }
    ],
    commonPestsAndDiseases: [
      {
        name: 'Mustard Aphid (Chetpa / Mahu)',
        symptoms: 'Massive colonies of greenish aphids sucking sap from inflorescence, flower buds and young pods.',
        ipmControl: 'Early sowing before October 15 escapes peak aphid infestation. Set yellow sticky traps.',
        verifiedChemical: 'Dimethoate 30% EC @ 250 ml in 200 L water or Thiamethoxam 25% WG @ 40 g/acre.'
      },
      {
        name: 'White Rust (Safed Roli)',
        symptoms: 'Chalky white blisters/pustules on underside of leaves; staghead hypertrophy deformity in flowers.',
        ipmControl: 'Crop rotation; clean field sanitation; use resistant varieties like RH-749 or Pusa Bold.',
        verifiedChemical: 'Mancozeb 75% WP @ 600 g or Metalaxyl 8% + Mancozeb 64% WP @ 400 g/acre.'
      }
    ],
    harvestingGuidance: 'Harvest in early morning when dew is on plants to prevent pod shattering. Thresh after sun-drying for 4-5 days.',
    yieldPerAcre: '8 - 12 Quintals per acre'
  },
  {
    id: 'cotton',
    name: 'Cotton (Kapas)',
    hindiName: 'कपास (Narma / Kapas)',
    scientificName: 'Gossypium hirsutum',
    category: 'cash_crops',
    season: 'Kharif',
    durationDays: 160,
    imageUrl: 'https://images.unsplash.com/photo-1594488554271-923f9821867e?auto=format&fit=crop&w=800&q=80',
    suitableSoil: 'Deep black cotton soils (regur) or fertile alluvial loam with good moisture retention (pH 6.5 - 8.0)',
    suitableClimate: 'Warm sunny weather (21°C to 35°C) with at least 180-200 frost-free days',
    sowingMonths: ['April', 'May', 'June'],
    seedRatePerAcre: '1.5 - 2.0 kg/acre (Bt Cotton hybrids)',
    spacing: '90 cm x 60 cm or 120 cm x 45 cm for high density planting',
    irrigationGuidance: 'Critical stages: Square formation, flowering, and boll development. Drip irrigation saves 45% water.',
    fertilizerSchedule: {
      basal: 'Apply 40 kg DAP + 25 kg MOP + 10 kg Zinc Sulphate.',
      vegetative: 'Split Urea: 30 kg at square initiation (40-45 DAS).',
      flowering: 'Foliar spray of 2% DAP or Potassium Nitrate (13:0:45) at peak flowering.'
    },
    growthStages: [
      { stage: 'Emergence & Seedling', daysRange: '0 - 25 days', keyTasks: 'Pre-sowing irrigation, gap filling within 10 days.' },
      { stage: 'Square Formation', daysRange: '25 - 60 days', keyTasks: 'Monitor for sucking pests (thrips, jassids, whitefly); install pheromone traps.' },
      { stage: 'Flowering & Boll Development', daysRange: '60 - 110 days', keyTasks: 'Monitor for pink bollworm; foliar nutrition spray.' },
      { stage: 'Boll Opening & Picking', daysRange: '110 - 160 days', keyTasks: 'Pick dry, clean, fully opened bolls in afternoon after morning dew evaporates.' }
    ],
    commonPestsAndDiseases: [
      {
        name: 'Pink Bollworm (Gulabi Sundi)',
        symptoms: 'Rosetted flowers that fail to open; internal lint staining and premature boll rot.',
        ipmControl: 'Install Gossyplure pheromone traps @ 5/acre for monitoring; shred leftover cotton stalks.',
        verifiedChemical: 'Profenofos 50% EC @ 400 ml/acre or Emamectin Benzoate 5% SG @ 88 g/acre.'
      },
      {
        name: 'Whitefly (Safed Makhi)',
        symptoms: 'Yellowing and curling of leaves; sooty mold excretion; vector for Cotton Leaf Curl Virus (CLCuV).',
        ipmControl: 'Install yellow sticky traps (10/acre); avoid pyrethroid overdose which flares whiteflies.',
        verifiedChemical: 'Diafenthiuron 50% WP @ 240 g/acre or Pyriproxyfen 10% EC @ 400 ml/acre.'
      }
    ],
    harvestingGuidance: 'Perform 3-4 clean pickings as bolls burst. Keep free of trash, dry leaves and moisture for high mandi price.',
    yieldPerAcre: '10 - 16 Quintals per acre'
  },
  {
    id: 'chilli',
    name: 'Chilli / Hot Pepper',
    hindiName: 'मिर्च (Mirchi)',
    scientificName: 'Capsicum annuum',
    category: 'spices',
    season: 'Whole Year',
    durationDays: 150,
    imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80',
    suitableSoil: 'Well-drained sandy loam or clay loam rich in organic matter (pH 6.5 - 7.5)',
    suitableClimate: 'Warm humid climate (20°C - 30°C); sensitive to heavy frost and water stagnation',
    sowingMonths: ['June', 'July', 'October', 'November'],
    seedRatePerAcre: '200 - 250 g/acre (Nursery transplanting)',
    spacing: '60 cm x 45 cm or 75 cm x 45 cm on raised beds with silver-black mulch',
    irrigationGuidance: 'Frequent light irrigations through drip; avoid flood irrigation which causes damping-off.',
    fertilizerSchedule: {
      basal: 'Apply 50 kg DAP + 30 kg MOP + 10 tonnes Farmyard Manure (FYM).',
      vegetative: 'Fertigate 19:19:19 @ 3 kg/acre weekly through drip.',
      flowering: 'Foliar spray of Planofix (NAA) @ 4 ml/15 L water to prevent flower and fruit drop.'
    },
    growthStages: [
      { stage: 'Nursery Raising', daysRange: '0 - 35 days', keyTasks: 'Shade net nursery in pro-trays with coco peat; drench with Trichoderma.' },
      { stage: 'Transplanting & Vegetative', daysRange: '35 - 70 days', keyTasks: 'Transplant healthy 35-day seedlings in evening; install blue sticky traps for thrips.' },
      { stage: 'Flowering & Fruiting', daysRange: '70 - 120 days', keyTasks: 'Spray micronutrient mixture; pick green chillies every 8-10 days.' },
      { stage: 'Red Ripe Harvest', daysRange: '120 - 160 days', keyTasks: 'Allow fruits to turn deep red on plant for dry chilli market; dry on clean poly sheets.' }
    ],
    commonPestsAndDiseases: [
      {
        name: 'Chilli Thrips & Mites (Murda Rog / Leaf Curl)',
        symptoms: 'Upward leaf curling (thrips) or downward inverted boat curling (yellow mites); brittle stunted foliage.',
        ipmControl: 'Install blue sticky traps for thrips; spray neem oil 10,000 ppm @ 3 ml/L.',
        verifiedChemical: 'Fipronil 5% SC @ 300 ml/acre or Spiromesifen 22.9% SC @ 200 ml/acre for mites.'
      },
      {
        name: 'Anthracnose & Fruit Rot (Phal Sadand)',
        symptoms: 'Circular sunken black lesions with concentric rings on ripe chillies; fruit drying and dropping.',
        ipmControl: 'Collect and burn infected fruits; use clean disease-free certified hybrid seeds.',
        verifiedChemical: 'Azoxystrobin 23% SC @ 200 ml or Difenoconazole 25% EC @ 150 ml/acre.'
      }
    ],
    harvestingGuidance: 'Green chillies: Harvest when firm and pungent. Red chillies: Harvest when uniformly deep red; sun-dry to 10% moisture.',
    yieldPerAcre: '60 - 80 Quintals (Fresh Green) or 15 - 20 Quintals (Dry Red)'
  },
  {
    id: 'tomato',
    name: 'Tomato',
    hindiName: 'टमाटर (Tamatar)',
    scientificName: 'Solanum lycopersicum',
    category: 'vegetables',
    season: 'Whole Year',
    durationDays: 120,
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
    suitableSoil: 'Deep, well-drained sandy loam soil rich in humus (pH 6.0 - 7.0)',
    suitableClimate: 'Moderate warm climate (21°C - 27°C); fruit setting fails above 38°C or below 10°C',
    sowingMonths: ['June', 'August', 'November', 'January'],
    seedRatePerAcre: '60 - 80 g/acre (Hybrid nursery)',
    spacing: '90 cm x 45 cm or 120 cm x 60 cm with staking/trellising',
    irrigationGuidance: 'Regular uniform drip irrigation; moisture fluctuations cause blossom end rot and fruit cracking.',
    fertilizerSchedule: {
      basal: 'Apply 50 kg DAP + 35 kg MOP + 15 kg Calcium Nitrate.',
      vegetative: 'Fertigate 19:19:19 weekly @ 3 kg/acre.',
      flowering: 'Foliar spray of Boron (20%) @ 1 g/L and Calcium Nitrate @ 3 g/L to avoid blossom end rot.'
    },
    growthStages: [
      { stage: 'Nursery', daysRange: '0 - 25 days', keyTasks: 'Raise seedlings in 98-well protrays under 50% shade net.' },
      { stage: 'Transplanting & Staking', daysRange: '25 - 55 days', keyTasks: 'Stake plants with bamboo sticks or wire trellising to prevent soil contact.' },
      { stage: 'Flowering & Fruit Set', daysRange: '55 - 85 days', keyTasks: 'Apply calcium and boron; monitor for fruit borer (Helicoverpa).' },
      { stage: 'Harvesting', daysRange: '85 - 125 days', keyTasks: 'Harvest at breaker stage for distant transport or pink/red ripe stage for local market.' }
    ],
    commonPestsAndDiseases: [
      {
        name: 'Tomato Fruit Borer (Helicoverpa)',
        symptoms: 'Circular holes bored into green and ripe fruits, contaminated with caterpillar frass.',
        ipmControl: 'Plant African marigold as trap crop (1 row every 16 rows of tomato); install Helicoverpa pheromone traps @ 5/acre.',
        verifiedChemical: 'Chlorantraniliprole 18.5% SC @ 60 ml/acre or Flubendiamide 39.35% SC @ 48 ml/acre.'
      },
      {
        name: 'Early & Late Blight (Jhoolsa)',
        symptoms: 'Early blight: Target-board concentric rings on leaves. Late blight: Water-soaked dark rotting patches on leaves and fruits with white fungal mold in wet weather.',
        ipmControl: 'Avoid overhead sprinkler irrigation; stake plants for good air circulation.',
        verifiedChemical: 'Metalaxyl 8% + Mancozeb 64% WP @ 400 g in 200 L water per acre.'
      }
    ],
    harvestingGuidance: 'Pick fruits in clean plastic crates in morning hours. Grade by size and color.',
    yieldPerAcre: '150 - 250 Quintals per acre'
  }
];

export const getCropById = (id: string): CropGuide | undefined => {
  return CROP_DIRECTORY.find((c) => c.id === id);
};

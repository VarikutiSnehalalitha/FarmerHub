import { ExpertContact } from '@/types';

export const EXPERT_CONTACTS: ExpertContact[] = [
  {
    id: 'kcc-national',
    name: 'National Kisan Call Centre (జాతీయ కిసాన్ కాల్ సెంటర్)',
    designation: 'Toll-Free Agricultural Support 24x7',
    institution: 'Ministry of Agriculture & Farmers Welfare, Govt of India',
    specialty: 'Agronomy, Plant Protection, Weather Advisories, Scheme Queries in Telugu and 21 other languages',
    state: 'All India',
    district: 'National',
    phone: '18001801551',
    availableDays: 'All 7 Days (6:00 AM to 10:00 PM)',
    languages: ['Telugu', 'Hindi', 'English', 'Tamil', 'Kannada', 'Malayalam', 'Marathi', 'Gujarati', 'Punjabi', 'Bengali', 'Odia', 'Urdu']
  },
  {
    id: 'kvk-guntur',
    name: 'Dr. V. Chandrasekhar (డా. చంద్రశేఖర్ - సీనియర్ శాస్త్రవేత్త)',
    designation: 'Principal Scientist (Agronomy & Crop Protection)',
    institution: 'Regional Agricultural Research Station & KVK (ANGRAU), Lam, Guntur',
    specialty: 'మిరపలో నల్ల తామర పురుగు (Black Thrips), పత్తిలో గులాబీ రంగు పురుగు, ఎరువుల యాజమాన్యం',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    phone: '08632524017',
    availableDays: 'Monday - Saturday (9:30 AM - 5:00 PM)',
    languages: ['Telugu', 'English', 'Hindi']
  },
  {
    id: 'kvk-warangal',
    name: 'Dr. K. Srinivas (డా. కె. శ్రీనివాస్ - కేవీకే సమన్వయకర్త)',
    designation: 'Programme Coordinator & Scientist',
    institution: 'Krishi Vigyan Kendra (PJTSAU), Malyal, Warangal / Mahabubabad',
    specialty: 'పత్తి, మొక్కజొన్న, వరి సాగు సలహాలు, సమీకృత సస్యరక్షణ (IPM), భూసార పరీక్షలు',
    state: 'Telangana',
    district: 'Warangal',
    phone: '08719240244',
    availableDays: 'Monday - Friday (10:00 AM - 5:00 PM)',
    languages: ['Telugu', 'English']
  },
  {
    id: 'kvk-nizamabad',
    name: 'Dr. B. Venkanna (డా. వెంకన్న - ఉద్యాన శాస్త్రవేత్త)',
    designation: 'Senior Scientist (Horticulture)',
    institution: 'Krishi Vigyan Kendra (PJTSAU), Rudrur, Nizamabad',
    specialty: 'పసుపు సాగు మెళకువలు, దుంప కుళ్ళు నివారణ, సోయాబీన్ మరియు వరి యాజమాన్యం',
    state: 'Telangana',
    district: 'Nizamabad',
    phone: '08467284242',
    availableDays: 'Monday - Saturday (9:00 AM - 5:00 PM)',
    languages: ['Telugu', 'Hindi', 'English']
  },
  {
    id: 'kvk-kurnool',
    name: 'Dr. T. Sudhakar (డా. టి. సుధాకర్ - వ్యవసాయ విస్తరణ నిపుణులు)',
    designation: 'Head & Senior Scientist',
    institution: 'KVK (ICAR - ANGRAU), Banavasi / Yagantipalle, Kurnool',
    specialty: 'వేరుశనగ, శనగ పంటల తెగుళ్లు, వర్షాధార వ్యవసాయం, బిందు సేద్యం (Drip Fertigation)',
    state: 'Andhra Pradesh',
    district: 'Kurnool',
    phone: '08518285220',
    availableDays: 'Monday - Friday (9:30 AM - 5:00 PM)',
    languages: ['Telugu', 'English', 'Kannada']
  },
  {
    id: 'kvk-anantapur',
    name: 'Dr. P. Mallikarjuna (డా. మల్లికార్జున - నేల మరియు నీటి నిపుణులు)',
    designation: 'Senior Scientist (Dryland Agriculture)',
    institution: 'Agricultural Research Station & KVK (ANGRAU), Rekulakunta, Ananthapuramu',
    specialty: 'అనంతపురం కరవు నేలలు, వేరుశనగ విత్తన శుద్ధి, చిరుధాన్యాల (Millets) సాగు పద్ధతులు',
    state: 'Andhra Pradesh',
    district: 'Ananthapuramu (Anantapur)',
    phone: '08554200424',
    availableDays: 'Monday - Saturday (9:00 AM - 4:30 PM)',
    languages: ['Telugu', 'Kannada', 'English']
  },
  {
    id: 'kvk-ludhiana',
    name: 'Dr. Gurpreet Singh (Senior Agronomist)',
    designation: 'Programme Coordinator',
    institution: 'Krishi Vigyan Kendra (ICAR - PAU), Ludhiana',
    specialty: 'Cereal crops, Wheat & Basmati paddy management, Crop residue management',
    state: 'Punjab',
    district: 'Ludhiana',
    phone: '01612401960',
    availableDays: 'Monday - Friday (9:00 AM - 5:00 PM)',
    languages: ['Punjabi', 'Hindi', 'English']
  },
  {
    id: 'kvk-sehore',
    name: 'Dr. J. K. Sharma (Plant Protection Specialist)',
    designation: 'Head & Senior Scientist',
    institution: 'Krishi Vigyan Kendra (RVSKVV), Sehore',
    specialty: 'Soybean & Gram pest management, Integrated Pest Management (IPM), Soil testing',
    state: 'Madhya Pradesh',
    district: 'Sehore',
    phone: '07562224128',
    availableDays: 'Monday - Saturday (10:00 AM - 4:00 PM)',
    languages: ['Hindi', 'English']
  },
  {
    id: 'kvk-nashik',
    name: 'Dr. Ravindra Patil (Horticulture Scientist)',
    designation: 'Subject Matter Specialist (Horticulture)',
    institution: 'Krishi Vigyan Kendra, Yashwantrao Chavan Open University, Nashik',
    specialty: 'Onion storage, Grapes and Pomegranate diseases, Micro-irrigation fertigation',
    state: 'Maharashtra',
    district: 'Nashik',
    phone: '02532231473',
    availableDays: 'Tuesday - Saturday (9:30 AM - 5:30 PM)',
    languages: ['Marathi', 'Hindi', 'English']
  }
];

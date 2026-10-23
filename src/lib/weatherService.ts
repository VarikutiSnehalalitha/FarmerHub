import { WeatherData } from '@/types';

export const LOCATION_WEATHER_CACHE: Record<string, WeatherData> = {
  'Guntur, Andhra Pradesh': {
    city: 'Guntur',
    state: 'Andhra Pradesh',
    temperature: 32,
    feelsLike: 36,
    condition: 'Bright Sunshine with Light Breeze (ఎండ & స్వల్ప గాలి)',
    conditionIcon: 'sun',
    humidity: 62,
    windSpeedKmH: 10,
    rainProbabilityPercent: 10,
    uvIndex: 8,
    lastUpdated: 'Just now (ఇప్పుడే అప్‌డేట్ అయింది)',
    officialSource: 'IMD Amaravati Agromet Bulletin & ANGRAU Lam Centre',
    agriculturalAdvisories: {
      spraying: {
        isSuitable: true,
        advisory: 'గాలి వేగం 10 km/h (ప్రశాంతం), వర్ష సూచన లేదు (10%). మిర్చి మరియు పత్తి పంటలలో మందులు, టానిక్ పిచికారీకి అనుకూలమైన సమయం (Favorable for spraying).'
      },
      irrigation: {
        needed: true,
        advisory: 'నేలలో తేమ తక్కువగా ఉన్నందున మిర్చి మరియు పత్తి పైర్లకు డ్రిప్ లేదా తేలికపాటి తడి ఇవ్వండి.'
      },
      harvesting: {
        status: 'favorable',
        advisory: 'ఎండ కాస్తున్నందున మిరపకాయలు ఆరబెట్టడానికి (Chilli drying) మరియు పత్తి తీయడానికి అత్యంత అనుకూలం.'
      }
    },
    forecast: [
      { day: 'Today', date: '22 Oct', tempMin: 23, tempMax: 33, condition: 'Sunny / ఎండ', rainProbability: 10 },
      { day: 'Friday', date: '23 Oct', tempMin: 23, tempMax: 33, condition: 'Clear Sky', rainProbability: 10 },
      { day: 'Saturday', date: '24 Oct', tempMin: 22, tempMax: 32, condition: 'Partly Cloudy', rainProbability: 15 },
      { day: 'Sunday', date: '25 Oct', tempMin: 22, tempMax: 32, condition: 'Sunny', rainProbability: 10 },
      { day: 'Monday', date: '26 Oct', tempMin: 21, tempMax: 31, condition: 'Clear Sky', rainProbability: 5 },
      { day: 'Tuesday', date: '27 Oct', tempMin: 21, tempMax: 31, condition: 'Clear Sky', rainProbability: 5 },
      { day: 'Wednesday', date: '28 Oct', tempMin: 20, tempMax: 31, condition: 'Clear Sky', rainProbability: 5 }
    ]
  },

  'Warangal, Telangana': {
    city: 'Warangal',
    state: 'Telangana',
    temperature: 31,
    feelsLike: 34,
    condition: 'Partly Cloudy (తేలికపాటి మేఘాలు)',
    conditionIcon: 'sun-cloud',
    humidity: 65,
    windSpeedKmH: 12,
    rainProbabilityPercent: 20,
    uvIndex: 7,
    lastUpdated: '10 mins ago',
    officialSource: 'IMD Hyderabad Agromet & PJTSAU Regional Research Station',
    agriculturalAdvisories: {
      spraying: {
        isSuitable: true,
        advisory: 'పత్తిలో గులాబీ రంగు పురుగు (Pink Bollworm) నివారణకు మరియు వరిలో అగ్గి తెగులు నివారణకు పిచికారీ చేయడానికి వాతావరణం అనుకూలంగా ఉంది.'
      },
      irrigation: {
        needed: false,
        advisory: 'వరి పొలాల్లో నీటి మట్టాన్ని 2-3 సెం.మీ మేర ఉంచండి. అవసరానికి మించి నీరు నిల్వ ఉంచవద్దు.'
      },
      harvesting: {
        status: 'favorable',
        advisory: 'మొక్కజొన్న కంకులు కోయడానికి మరియు ఎండబెట్టడానికి వాతావరణం సహకరిస్తుంది.'
      }
    },
    forecast: [
      { day: 'Today', date: '22 Oct', tempMin: 21, tempMax: 32, condition: 'Partly Cloudy', rainProbability: 20 },
      { day: 'Friday', date: '23 Oct', tempMin: 21, tempMax: 31, condition: 'Scattered Clouds', rainProbability: 25 },
      { day: 'Saturday', date: '24 Oct', tempMin: 20, tempMax: 31, condition: 'Clear Sky', rainProbability: 10 },
      { day: 'Sunday', date: '25 Oct', tempMin: 20, tempMax: 30, condition: 'Sunny', rainProbability: 10 },
      { day: 'Monday', date: '26 Oct', tempMin: 19, tempMax: 30, condition: 'Clear Sky', rainProbability: 5 },
      { day: 'Tuesday', date: '27 Oct', tempMin: 19, tempMax: 30, condition: 'Clear Sky', rainProbability: 5 },
      { day: 'Wednesday', date: '28 Oct', tempMin: 18, tempMax: 29, condition: 'Sunny', rainProbability: 0 }
    ]
  },

  'Nizamabad, Telangana': {
    city: 'Nizamabad',
    state: 'Telangana',
    temperature: 30,
    feelsLike: 33,
    condition: 'Clear Sky (నిర్మలమైన ఆకాశం)',
    conditionIcon: 'sun',
    humidity: 58,
    windSpeedKmH: 9,
    rainProbabilityPercent: 10,
    uvIndex: 7,
    lastUpdated: '15 mins ago',
    officialSource: 'IMD Hyderabad Agromet Bulletin',
    agriculturalAdvisories: {
      spraying: {
        isSuitable: true,
        advisory: 'పసుపు పంటలో దుంప కుళ్లు మరియు ఆకుమచ్చ తెగులు నివారణకు స్ప్రే చేయడానికి ఉత్తమ సమయం.'
      },
      irrigation: {
        needed: true,
        advisory: 'పసుపు మరియు సోయాబీన్ పంటలకు క్రమం తప్పకుండా తేలికపాటి నీటి తడులు అందించండి.'
      },
      harvesting: {
        status: 'favorable',
        advisory: 'సోయాబీన్ కోత పనులకు వాతావరణం అత్యంత అనుకూలం.'
      }
    },
    forecast: [
      { day: 'Today', date: '22 Oct', tempMin: 20, tempMax: 31, condition: 'Clear', rainProbability: 10 },
      { day: 'Friday', date: '23 Oct', tempMin: 20, tempMax: 31, condition: 'Sunny', rainProbability: 10 },
      { day: 'Saturday', date: '24 Oct', tempMin: 19, tempMax: 30, condition: 'Clear', rainProbability: 5 },
      { day: 'Sunday', date: '25 Oct', tempMin: 19, tempMax: 30, condition: 'Sunny', rainProbability: 5 },
      { day: 'Monday', date: '26 Oct', tempMin: 18, tempMax: 29, condition: 'Clear', rainProbability: 0 },
      { day: 'Tuesday', date: '27 Oct', tempMin: 18, tempMax: 29, condition: 'Clear', rainProbability: 0 },
      { day: 'Wednesday', date: '28 Oct', tempMin: 17, tempMax: 28, condition: 'Sunny', rainProbability: 0 }
    ]
  },

  'Kurnool, Andhra Pradesh': {
    city: 'Kurnool',
    state: 'Andhra Pradesh',
    temperature: 33,
    feelsLike: 36,
    condition: 'Dry & Sunny (పొడి వాతావరణం)',
    conditionIcon: 'sun',
    humidity: 50,
    windSpeedKmH: 11,
    rainProbabilityPercent: 5,
    uvIndex: 8,
    lastUpdated: '12 mins ago',
    officialSource: 'IMD Amaravati & RARS Nandyal',
    agriculturalAdvisories: {
      spraying: {
        isSuitable: true,
        advisory: 'శనగ విత్తే ముందు విత్తన శుద్ధి (Trichoderma) మరియు కలుపు మందుల పిచికారీకి అనుకూలం.'
      },
      irrigation: {
        needed: true,
        advisory: 'రబీ పంటల విత్తనానికి పదును సరిపోకపోతే రౌని (తడి) ఇవ్వండి.'
      },
      harvesting: {
        status: 'favorable',
        advisory: 'వేరుశనగ మరియు పొద్దుతిరుగుడు కోతకు అనుకూలమైన వాతావరణం.'
      }
    },
    forecast: [
      { day: 'Today', date: '22 Oct', tempMin: 22, tempMax: 34, condition: 'Sunny', rainProbability: 5 },
      { day: 'Friday', date: '23 Oct', tempMin: 22, tempMax: 34, condition: 'Sunny', rainProbability: 5 },
      { day: 'Saturday', date: '24 Oct', tempMin: 21, tempMax: 33, condition: 'Clear', rainProbability: 5 },
      { day: 'Sunday', date: '25 Oct', tempMin: 21, tempMax: 33, condition: 'Clear', rainProbability: 0 },
      { day: 'Monday', date: '26 Oct', tempMin: 20, tempMax: 32, condition: 'Sunny', rainProbability: 0 },
      { day: 'Tuesday', date: '27 Oct', tempMin: 20, tempMax: 32, condition: 'Clear', rainProbability: 0 },
      { day: 'Wednesday', date: '28 Oct', tempMin: 19, tempMax: 31, condition: 'Sunny', rainProbability: 0 }
    ]
  },

  'Sehore, Madhya Pradesh': {
    city: 'Sehore',
    state: 'Madhya Pradesh',
    temperature: 29,
    feelsLike: 31,
    condition: 'Partly Cloudy with Sunshine',
    conditionIcon: 'sun-cloud',
    humidity: 58,
    windSpeedKmH: 11,
    rainProbabilityPercent: 15,
    uvIndex: 7,
    lastUpdated: '10 mins ago',
    officialSource: 'India Meteorological Department (IMD Bhopal Agromet Bulletin)',
    agriculturalAdvisories: {
      spraying: {
        isSuitable: true,
        advisory: 'Wind speed is calm (11 km/h) and rain probability is low (15%). Highly suitable for pesticide and foliar nutrition spraying.'
      },
      irrigation: {
        needed: false,
        advisory: 'Soil retains adequate moisture from last week. No immediate irrigation needed for Rabi land preparation.'
      },
      harvesting: {
        status: 'favorable',
        advisory: 'Dry conditions will persist for next 72 hours. Excellent window for soybean harvesting and drying.'
      }
    },
    forecast: [
      { day: 'Today', date: '22 Oct', tempMin: 18, tempMax: 31, condition: 'Clear Sky', rainProbability: 10 },
      { day: 'Friday', date: '23 Oct', tempMin: 18, tempMax: 30, condition: 'Partly Cloudy', rainProbability: 25 },
      { day: 'Saturday', date: '24 Oct', tempMin: 17, tempMax: 29, condition: 'Scattered Clouds', rainProbability: 30 },
      { day: 'Sunday', date: '25 Oct', tempMin: 17, tempMax: 30, condition: 'Sunny', rainProbability: 15 },
      { day: 'Monday', date: '26 Oct', tempMin: 16, tempMax: 29, condition: 'Clear Sky', rainProbability: 5 },
      { day: 'Tuesday', date: '27 Oct', tempMin: 16, tempMax: 29, condition: 'Clear Sky', rainProbability: 5 },
      { day: 'Wednesday', date: '28 Oct', tempMin: 16, tempMax: 29, condition: 'Clear Sky', rainProbability: 5 }
    ]
  },

  'Ludhiana, Punjab': {
    city: 'Ludhiana',
    state: 'Punjab',
    temperature: 27,
    feelsLike: 28,
    condition: 'Clear Autumn Sky',
    conditionIcon: 'sun',
    humidity: 52,
    windSpeedKmH: 9,
    rainProbabilityPercent: 5,
    uvIndex: 6,
    lastUpdated: 'Just now',
    officialSource: 'IMD Chandigarh Agromet Advisory Service (PAU Ludhiana)',
    agriculturalAdvisories: {
      spraying: {
        isSuitable: true,
        advisory: 'Optimal weather for weedicide application prior to wheat sowing.'
      },
      irrigation: {
        needed: true,
        advisory: 'Provide pre-sowing irrigation (Rauni) for timely wheat sowing.'
      },
      harvesting: {
        status: 'favorable',
        advisory: 'Favorable sunny days for non-stop combine harvesting of remaining paddy crops.'
      }
    },
    forecast: [
      { day: 'Today', date: '22 Oct', tempMin: 16, tempMax: 28, condition: 'Clear', rainProbability: 0 },
      { day: 'Friday', date: '23 Oct', tempMin: 15, tempMax: 27, condition: 'Clear', rainProbability: 5 },
      { day: 'Saturday', date: '24 Oct', tempMin: 14, tempMax: 26, condition: 'Sunny', rainProbability: 0 },
      { day: 'Sunday', date: '25 Oct', tempMin: 14, tempMax: 27, condition: 'Clear', rainProbability: 0 },
      { day: 'Monday', date: '26 Oct', tempMin: 13, tempMax: 26, condition: 'Clear', rainProbability: 0 },
      { day: 'Tuesday', date: '27 Oct', tempMin: 13, tempMax: 25, condition: 'Sunny', rainProbability: 0 },
      { day: 'Wednesday', date: '28 Oct', tempMin: 13, tempMax: 25, condition: 'Sunny', rainProbability: 0 }
    ]
  },

  'Nashik, Maharashtra': {
    city: 'Nashik',
    state: 'Maharashtra',
    temperature: 28,
    feelsLike: 30,
    condition: 'Passing Clouds',
    conditionIcon: 'sun-cloud',
    humidity: 68,
    windSpeedKmH: 14,
    rainProbabilityPercent: 25,
    uvIndex: 6,
    lastUpdated: '15 mins ago',
    officialSource: 'IMD Pune Regional Agromet Advisory Center',
    agriculturalAdvisories: {
      spraying: {
        isSuitable: true,
        advisory: 'Wind speed is normal (14 km/h). Suitable for onion thrips and grape downy mildew preventive spray.'
      },
      irrigation: {
        needed: false,
        advisory: 'Maintain balanced moisture in grape vineyards and onion nursery.'
      },
      harvesting: {
        status: 'favorable',
        advisory: 'Continue early kharif onion harvesting.'
      }
    },
    forecast: [
      { day: 'Today', date: '22 Oct', tempMin: 20, tempMax: 29, condition: 'Partly Cloudy', rainProbability: 25 },
      { day: 'Friday', date: '23 Oct', tempMin: 19, tempMax: 29, condition: 'Partly Cloudy', rainProbability: 30 },
      { day: 'Saturday', date: '24 Oct', tempMin: 18, tempMax: 30, condition: 'Sunny', rainProbability: 15 },
      { day: 'Sunday', date: '25 Oct', tempMin: 18, tempMax: 31, condition: 'Clear', rainProbability: 10 },
      { day: 'Monday', date: '26 Oct', tempMin: 17, tempMax: 30, condition: 'Clear', rainProbability: 10 },
      { day: 'Tuesday', date: '27 Oct', tempMin: 17, tempMax: 30, condition: 'Clear', rainProbability: 5 },
      { day: 'Wednesday', date: '28 Oct', tempMin: 17, tempMax: 30, condition: 'Clear', rainProbability: 5 }
    ]
  }
};

export function getWeatherForLocation(locationKey: string): WeatherData {
  if (LOCATION_WEATHER_CACHE[locationKey]) {
    return LOCATION_WEATHER_CACHE[locationKey];
  }
  // If location has Andhra Pradesh or Telangana, match default AP/TS weather
  if (locationKey.includes('Andhra Pradesh')) {
    const matched = Object.keys(LOCATION_WEATHER_CACHE).find((k) => k.includes('Andhra Pradesh'));
    if (matched) {
      const base = LOCATION_WEATHER_CACHE[matched];
      const cityName = locationKey.split(',')[0].trim();
      return { ...base, city: cityName };
    }
  }
  if (locationKey.includes('Telangana')) {
    const matched = Object.keys(LOCATION_WEATHER_CACHE).find((k) => k.includes('Telangana'));
    if (matched) {
      const base = LOCATION_WEATHER_CACHE[matched];
      const cityName = locationKey.split(',')[0].trim();
      return { ...base, city: cityName };
    }
  }
  return LOCATION_WEATHER_CACHE['Guntur, Andhra Pradesh'] || LOCATION_WEATHER_CACHE['Sehore, Madhya Pradesh'];
}
